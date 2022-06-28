import { BigNumber, utils } from "ethers";
import { DomNode, el, msg } from "skydapp-browser";
import { Debouncer, SkyUtil, View, ViewParams } from "skydapp-common";
import CommonUtil from "../../CommonUtil";
import PortfolioItem from "../../component/PortfolioItem";
import StableNftItem from "../../component/StableNftItem";
import GaiaStableDAOContract from "../../contracts/GaiaStableDAOContract";
import MaticContract from "../../contracts/MaticContract";
import MeshContract from "../../contracts/MeshContract";
import MeshswapUSDCPairLPContract from "../../contracts/MeshswapUSDCPairLPContract";
import Wallet from "../../klaytn/Wallet";
import Layout from "../Layout";
import ViewUtil from "../ViewUtil";

export default class StableDAO implements View {

    private container: DomNode;
    private interval: any;

    private interestMeshDisplay: DomNode;
    private interestKrwDisplay: DomNode;

    private tokenIds: number[] = [];
    private nftList: DomNode;

    constructor() {
        Layout.current.title = msg("GAIA_STABLE_DAO_TITLE");
        Layout.current.content.append(this.container = el(".stable-dao-view",
            el("section",
                el("header",
                    el(".title-container",
                        el("h2", msg("GAIA_STABLE_DAO_TITLE")),
                        el("p", msg("GAIA_STABLE_DAO_DESC")),
                    ),
                    el(".tool-container",
                        el(".title-container",
                            el("h3", "Portfolio"),
                            this.interestMeshDisplay = el("p", msg("STABLEDAO_INTEREST_ACCRUED_DESC")),
                            this.interestKrwDisplay = el("p", msg("TOTAL_KRW_DESC")),
                        ),
                    ),
                ),
                el(".portfolio-container",
                    new PortfolioItem(1, "stepn", "gmt", 3403, 2.67, 1938.279905549, "₩6,593,031.06 (1938.279905549 GMT)", "2022.05.08 ~ 2022.08.08"),
                    new PortfolioItem(2, "bitcoin", "btc", 38277205, 2.67, 0.104883, "₩4,044,116.736 (0.104883 BTC)", "2022.06.08 ~ 2022.09.08"),
                ),
            ),
            el(".warning-container",
                el("p", "GAIA STABLE DAO는 6월 30일까지 구매가능합니다."),
                el("a", "구매하기 >", { click: () => { ViewUtil.go("/stabledao/buy") } }),
            ),
            el("section",
                el("header",
                    el(".tool-container",
                        el(".title-container",
                            el("h3", "My NFT"),
                        ),
                        el(".button-container",
                            el("a", "모든 수익 받기"),
                        ),
                    ),
                ),
                this.nftList = el(".nft-container"),
            ),
        ));

        this.loadInterest();
        this.loadNFTsDebouncer.run();
        Wallet.on("connect", () => this.loadNFTsDebouncer.run());
    }

    private loadNFTsDebouncer: Debouncer = new Debouncer(200, () => this.loadNFTs());

    private async loadNFTs() {
        this.nftList.empty();
        const address = await Wallet.loadAddress();
        if (address !== undefined) {
            const balance = (await GaiaStableDAOContract.balanceOf(address)).toNumber();
            if (balance === 0) {
                this.nftList.append(el("p.empty", msg("STABLEDAO_NO_NFT_DESC")));
            }

            const promises: Promise<void>[] = [];

            this.tokenIds = [];
            SkyUtil.repeat(balance, (i: number) => {
                const promise = async (index: number) => {
                    const item = new StableNftItem().appendTo(this.nftList);
                    const tokenId = (await GaiaStableDAOContract.tokenOfOwnerByIndex(address, index)).toNumber();
                    if (tokenId === 0) {
                        item.delete();
                    } else {
                        item.init(tokenId);
                        this.tokenIds.push(tokenId);
                    }
                };
                promises.push(promise(i));
            });
            await Promise.all(promises);
        }
        const promises: Promise<void>[] = [];
        await Promise.all(promises);
    }

    private async loadInterest() {
        const balance = await MeshswapUSDCPairLPContract.balanceOf("0x8033cEB86c71EbBF575fF7015FcB8F1689d90aC1");
        const miningIndex = await MeshswapUSDCPairLPContract.miningIndex();
        const userLastIndex = await MeshswapUSDCPairLPContract.userLastIndex("0x8033cEB86c71EbBF575fF7015FcB8F1689d90aC1");
        const mesh = utils.parseEther("0").add(balance.mul(miningIndex.sub(userLastIndex)).div(utils.parseEther("1")));
        const totalMatic = await MaticContract.balanceOf("0x07a7ab21b582058b71d2aee1b1719926e3451adf");
        const totalMesh = await MeshContract.balanceOf("0x07a7ab21b582058b71d2aee1b1719926e3451adf");
        const result = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=matic-network");
        const data = await result.json();
        const price = data[0].current_price * parseFloat(utils.formatEther(totalMatic.mul(utils.parseEther("1")).div(totalMesh)));
        const interest = price * parseFloat(utils.formatEther(mesh));
        const result2 = await fetch("https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD");
        const data2 = await result2.json();
        const krw = interest * data2[0].basePrice;
        this.interestMeshDisplay.empty().appendText(`${msg("STABLEDAO_INTEREST_ACCRUED_DESC")} ${CommonUtil.numberWithCommas(utils.formatEther(mesh))} MESH`);
        this.interestKrwDisplay.empty().appendText(`${msg("TOTAL_KRW_DESC")} ${CommonUtil.numberWithCommas(String(krw))} 원`);
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        clearInterval(this.interval);
        this.container.delete();
    }
}
