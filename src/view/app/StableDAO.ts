import { utils } from "ethers";
import { DomNode, el, msg } from "skydapp-browser";
import { Debouncer, View, ViewParams } from "skydapp-common";
import EthStableNftItem from "../../component/EthStableNftItem";
import PolygonStableNftItem from "../../component/PolygonStableNftItem";
import PortfolioItem from "../../component/PortfolioItem";
import StableNftItem from "../../component/StableNftItem";
import Config from "../../Config";
import GaiaStableDAOContract from "../../contracts/GaiaStableDAOContract";
import MaticContract from "../../contracts/MaticContract";
import MeshContract from "../../contracts/MeshContract";
import MeshswapUSDCPairLPContract from "../../contracts/MeshswapUSDCPairLPContract";
import EthereumWallet from "../../ethereum/EthereumWallet";
import KlaytnWallet from "../../klaytn/KlaytnWallet";
import PolygonWallet from "../../polygon/PolygonWallet";
import Layout from "../Layout";
import ViewUtil from "../ViewUtil";

export default class StableDAO implements View {

    private container: DomNode;
    private interval: any;

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
                        ),
                    ),
                ),
                el(".portfolio-container",
                    new PortfolioItem(1, "stepn", "gmt", 3403, 2.67, 1938.279905549, "₩6,593,031.06 (1,938.279905549 GMT)", "2022.05.08 ~ 2022.08.08", "1,897.62 USDC (1,997.63405178 GMT)", "-73.57% (₩ -4,852,367.45 / $ -3,914.19)"),
                    new PortfolioItem(2, "bitcoin", "btc", 38277205, 2.67, 0.104883, "₩4,044,116.736 (0.104883 BTC)", "2022.06.08 ~ 2022.09.08", "1,931.411 USDC (0.104883 BTC)", "-30.31% (₩ -1,216,970.45 / $ 2,023.74)"),
                    new PortfolioItem(3, "ethereum", "eth", 1963000, 2.67, 1.558394, "₩3,058,943 (1.558394 ETH)", "2022.07.21 ~ 2022.10.21"),
                ),
            ),
            el(".warning-container",
                el("a", "구매하기 >", { click: () => { ViewUtil.go("/stabledao/buy") } }),
            ),
            el("section",
                el("header",
                    el(".tool-container",
                        el(".title-container",
                            el("h3", "My NFT"),
                        ),
                        el(".button-container",
                            // el("a", msg("EARNING_BUTTON")),
                        ),
                    ),
                ),
                this.nftList = el(".nft-container"),
            ),
        ));

        this.loadInterest();
        this.loadKlaytnNFTsDebouncer.run();
        KlaytnWallet.on("connect", () => this.loadKlaytnNFTsDebouncer.run());

        this.loadPolygonNFTsDebouncer.run();
        PolygonWallet.on("connect", () => this.loadPolygonNFTsDebouncer.run());

        this.loadEthNFTsDebouncer.run();
        EthereumWallet.on("connect", () => this.loadEthNFTsDebouncer.run());
    }

    private loadEthNFTsDebouncer: Debouncer = new Debouncer(200, () => this.loadEthNFTs());
    private loadPolygonNFTsDebouncer: Debouncer = new Debouncer(200, () => this.loadPolygonNFTs());
    private loadKlaytnNFTsDebouncer: Debouncer = new Debouncer(200, () => this.loadKlaytnNFTs());

    private async loadEthNFTs() {
        const address = await EthereumWallet.loadAddress();
        if (address !== undefined) {
            const result = await fetch(`https://api.gaiaprotocol.com/gaia-protocol-pfp/ethereum/stable-dao/${address}`);
            const data = await result.json();
            for (const asset of data.assets) {
                const item = new EthStableNftItem().appendTo(this.nftList);
                item.init(asset.token_id);
            }
        }
    }

    private async loadPolygonNFTs() {
        const address = await PolygonWallet.loadAddress();
        if (address !== undefined) {
            const result = await fetch(`https://api.gaiaprotocol.com/gaia-protocol-pfp/polygon/0xa5f5b6C05a6d48a56E95E4Ce15078008a18BC79B/${address}`);
            const data = await result.json();
            for (const nft of data.nfts) {
                const item = new PolygonStableNftItem().appendTo(this.nftList);
                item.init(nft.token_id);
            }
        }
    }

    private async loadKlaytnNFTs() {
        this.nftList.empty();
        const address = await KlaytnWallet.loadAddress();
        if (address !== undefined) {
            const balance = (await GaiaStableDAOContract.balanceOf(address)).toNumber();
            if (balance === 0) {
                this.nftList.append(el("p.empty", msg("STABLEDAO_NO_NFT_DESC")));
            }

            const promises: Promise<void>[] = [];

            this.tokenIds = [];
            const result = await fetch(`https://nft-holder-collector.webplusone.com/nfts/klaytn/${Config.contracts.GaiaStableDAO}/${address}`);
            const dataSet = await result.json();
            for (const data of dataSet) {
                const promise = async () => {
                    const item = new StableNftItem().appendTo(this.nftList);
                    const tokenId = data.tokenId;
                    if (tokenId === 0) {
                        item.delete();
                    } else {
                        item.init(tokenId);
                        this.tokenIds.push(tokenId);
                    }
                };
                promises.push(promise());
            }
            await Promise.all(promises);
        }
        const promises: Promise<void>[] = [];
        await Promise.all(promises);
    }

    private async loadInterest() {
        const balance = await MeshswapUSDCPairLPContract.balanceOf("0x8033cEB86c71EbBF575fF7015FcB8F1689d90aC1");
        const miningIndex = await MeshswapUSDCPairLPContract.miningIndex();
        const userLastIndex = await MeshswapUSDCPairLPContract.userLastIndex("0x8033cEB86c71EbBF575fF7015FcB8F1689d90aC1");
        const mesh = utils.parseEther("7203.620950");//utils.parseEther("0").add(balance.mul(miningIndex.sub(userLastIndex)).div(utils.parseEther("1")));
        const totalMatic = await MaticContract.balanceOf("0x07a7ab21b582058b71d2aee1b1719926e3451adf");
        const totalMesh = await MeshContract.balanceOf("0x07a7ab21b582058b71d2aee1b1719926e3451adf");
        const result = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=matic-network");
        const data = await result.json();
        const price = data[0].current_price * parseFloat(utils.formatEther(totalMatic.mul(utils.parseEther("1")).div(totalMesh)));
        const interest = price * parseFloat(utils.formatEther(mesh));
        const result2 = await fetch("https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD");
        const data2 = await result2.json();
        const krw = interest * data2[0].basePrice;
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        clearInterval(this.interval);
        this.container.delete();
    }
}
