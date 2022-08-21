import { utils } from "ethers";
import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import CommonUtil from "../../CommonUtil";
import KlaytnDividendDistributor from "../../contracts/KlaytnDividendDistributor";
import PolygonDividendDistributor from "../../contracts/PolygonDividendDistributor";
import EthereumWallet from "../../ethereum/EthereumWallet";
import KlaytnWallet from "../../klaytn/KlaytnWallet";
import Layout from "../Layout";
import ViewUtil from "../ViewUtil";
import { getMerkleProof } from "./merkle-tree";
import rewardsKlaytn from "./rewards-klaytn.json";
import rewardsPolygon from "./rewards-polygon.json";

export default class GaiaDividend implements View {

    private container: DomNode;
    private list: DomNode;

    constructor() {
        Layout.current.title = "Gaia Dividend";
        Layout.current.content.append(this.container = el(".gaia-dividend-view",
            el("header",
                el(".title-container",
                    el("h2", "GAIA Dividend"),
                    el("p", "Total Distribution of revenue from Gaia Protocol"),
                    el("p.total", "21,273.343 USDC"),
                ),
            ),
            el(".revenue-container",
                el("table",
                    el("thead",
                        el("tr",
                            el("th", "차수"),
                            el("th", "체인"),
                            el("th", "스냅샷 당시 NFT 개수"),
                            el("th", "VVIP"),
                            el("th", "받을 액수"),
                            el("th", "받기"),
                        ),
                    ),
                    this.list = el("tbody"),
                )
            ),
            el("footer",
                el("p", "항목별 세부내역은 디스코드 내 공지사항을 참조해주시기 바랍니다."),
            ),
        ));
        this.load();
        KlaytnWallet.on("connect", () => this.load());
        EthereumWallet.on("connect", () => this.load());
    }

    private async load() {

        const klaytnAddress = await KlaytnWallet.loadAddress();
        const ethAddress = await EthereumWallet.loadAddress();

        const klaytnCollected = klaytnAddress === undefined ? false : await KlaytnDividendDistributor.isRewardCollected(klaytnAddress, 0);
        const ethCollected = ethAddress === undefined ? false : await PolygonDividendDistributor.isRewardCollected(ethAddress, 0);

        this.list.empty();

        if (klaytnAddress !== undefined && (rewardsKlaytn as any)[klaytnAddress] !== undefined) {
            const data = (rewardsKlaytn as any)[klaytnAddress];
            this.list.append(el("tr",
                el("td", "1차"),
                el("td", "클레이튼"),
                el("td", String(data.genesisCount + data.supernovaCount + data.stableDAOCount)),
                el("td", data.vvip === true ? "O" : "X"),
                el("td", `${CommonUtil.numberWithCommas(data.total, 3)} USDC`),
                el("td", klaytnCollected === true ? el("a.done", "완료") : el("a", "받기", {
                    click: async () => {
                        const list: any = Object.entries(rewardsKlaytn).map(data => {
                            return [data[0], utils.parseUnits(data[1].total.toFixed(6), 6).toString()];
                        });
                        const proof = getMerkleProof(list, [klaytnAddress, utils.parseUnits(data.total.toFixed(6), 6).toString()]);
                        await KlaytnDividendDistributor.claimRewards([0], [utils.parseUnits(data.total.toFixed(6), 6)], [proof]);
                        ViewUtil.waitTransactionAndRefresh();
                    },
                })),
            ));
        }

        if (ethAddress !== undefined && (rewardsPolygon as any)[ethAddress] !== undefined) {
            const data = (rewardsPolygon as any)[ethAddress];
            this.list.append(el("tr",
                el("td", "1차"),
                el("td", "이더리움"),
                el("td", String(data.genesisCount + data.supernovaCount + data.stableDAOCount)),
                el("td", data.vvip === true ? "O" : "X"),
                el("td", `${CommonUtil.numberWithCommas(data.total, 3)} USDC`),
                el("td", ethCollected === true ? el("a.done", "완료") : el("a", "받기", {
                    click: async () => {
                        const list: any = Object.entries(rewardsPolygon).map(data => {
                            return [data[0], utils.parseUnits(data[1].total.toFixed(6), 6).toString()];
                        });
                        const proof = getMerkleProof(list, [ethAddress, utils.parseUnits(data.total.toFixed(6), 6).toString()]);
                        await PolygonDividendDistributor.claimRewards([0], [utils.parseUnits(data.total.toFixed(6), 6)], [proof]);
                        ViewUtil.waitTransactionAndRefresh(15000);
                    },
                })),
            ));
        }
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
