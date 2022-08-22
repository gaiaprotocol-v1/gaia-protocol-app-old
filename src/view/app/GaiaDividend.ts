import { utils } from "ethers";
import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import CommonUtil from "../../CommonUtil";
import KlaytnDividendDistributor from "../../contracts/KlaytnDividendDistributor";
import PolygonDividendDistributor from "../../contracts/PolygonDividendDistributor";
import EthereumWallet from "../../ethereum/EthereumWallet";
import ExtWallet from "../../klaytn/ExtWallet";
import KlaytnWallet from "../../klaytn/KlaytnWallet";
import PolygonWallet from "../../polygon/PolygonWallet";
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
                el(".tool-box",
                    el(".add-token-container",
                        el("a", "폴리곤 USDC 지갑에 추가", {
                            click: () => {
                                PolygonWallet.addToken(
                                    "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
                                    "USDC",
                                    6,
                                );
                            },
                        }),
                        el("a", "클레이튼 oUSDC 지갑에 추가", {
                            click: () => {
                                ExtWallet.addToken(
                                    "0x754288077d0ff82af7a5317c7cb8c444d421d103",
                                    "oUSDC",
                                    6,
                                );
                            },
                        }),
                    ),
                ),
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
                el("td", { "data-column": "차수" }, "1차"),
                el("td", { "data-column": "체인" }, "클레이튼"),
                el("td", { "data-column": "스냅샷 당시 NFT 개수" }, String(data.genesisCount + data.supernovaCount + data.stableDAOCount)),
                el("td", { "data-column": "VVIP" }, data.vvip === true ? "해당" : "해당없음"),
                el("td", { "data-column": "받을 액수" }, `${CommonUtil.numberWithCommas(data.total, 3)} USDC`),
                el("td", { "data-column": "받기" }, klaytnCollected === true ? el("a.done", "완료") : el("a", "받기", {
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
                el("td", { "data-column": "차수" }, "1차"),
                el("td", { "data-column": "체인" }, "이더리움"),
                el("td", { "data-column": "스냅샷 당시 NFT 개수" }, String(data.genesisCount + data.supernovaCount + data.stableDAOCount)),
                el("td", { "data-column": "VVIP" }, data.vvip === true ? "해당" : "해당없음"),
                el("td", { "data-column": "받을 액수" }, `${CommonUtil.numberWithCommas(data.total, 3)} USDC`),
                el("td", { "data-column": "받기" }, ethCollected === true ? el("a.done", "완료") : el("a", "받기", {
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
