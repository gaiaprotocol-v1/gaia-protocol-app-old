"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const skydapp_browser_1 = require("skydapp-browser");
const skydapp_common_1 = require("skydapp-common");
const PortfolioItem_1 = __importDefault(require("../../component/PortfolioItem"));
const StableNftItem_1 = __importDefault(require("../../component/StableNftItem"));
const Config_1 = __importDefault(require("../../Config"));
const GaiaStableDAOContract_1 = __importDefault(require("../../contracts/GaiaStableDAOContract"));
const MaticContract_1 = __importDefault(require("../../contracts/MaticContract"));
const MeshContract_1 = __importDefault(require("../../contracts/MeshContract"));
const MeshswapUSDCPairLPContract_1 = __importDefault(require("../../contracts/MeshswapUSDCPairLPContract"));
const Wallet_1 = __importDefault(require("../../klaytn/Wallet"));
const Layout_1 = __importDefault(require("../Layout"));
const ViewUtil_1 = __importDefault(require("../ViewUtil"));
class StableDAO {
    constructor() {
        this.tokenIds = [];
        this.loadNFTsDebouncer = new skydapp_common_1.Debouncer(200, () => this.loadNFTs());
        Layout_1.default.current.title = (0, skydapp_browser_1.msg)("GAIA_STABLE_DAO_TITLE");
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".stable-dao-view", (0, skydapp_browser_1.el)("section", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)(".title-container", (0, skydapp_browser_1.el)("h2", (0, skydapp_browser_1.msg)("GAIA_STABLE_DAO_TITLE")), (0, skydapp_browser_1.el)("p", (0, skydapp_browser_1.msg)("GAIA_STABLE_DAO_DESC"))), (0, skydapp_browser_1.el)(".tool-container", (0, skydapp_browser_1.el)(".title-container", (0, skydapp_browser_1.el)("h3", "Portfolio")))), (0, skydapp_browser_1.el)(".portfolio-container", new PortfolioItem_1.default(1, "stepn", "gmt", 3403, 2.67, 1938.279905549, "₩6,593,031.06 (1938.279905549 GMT)", "2022.05.08 ~ 2022.08.08", "1897.62 USDC (1,997.63405178 GMT)"), new PortfolioItem_1.default(2, "bitcoin", "btc", 38277205, 2.67, 0.104883, "₩4,044,116.736 (0.104883 BTC)", "2022.06.08 ~ 2022.09.08"), new PortfolioItem_1.default(3, "ethereum", "eth", 1963000, 2.67, 1.558394, "₩3,058,943 (1.558394 ETH)", "2022.07.21 ~ 2022.10.21"))), (0, skydapp_browser_1.el)(".warning-container", (0, skydapp_browser_1.el)("a", "구매하기 >", { click: () => { ViewUtil_1.default.go("/stabledao/buy"); } })), (0, skydapp_browser_1.el)("section", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)(".tool-container", (0, skydapp_browser_1.el)(".title-container", (0, skydapp_browser_1.el)("h3", "My NFT")), (0, skydapp_browser_1.el)(".button-container"))), this.nftList = (0, skydapp_browser_1.el)(".nft-container"))));
        this.loadInterest();
        this.loadNFTsDebouncer.run();
        Wallet_1.default.on("connect", () => this.loadNFTsDebouncer.run());
    }
    async loadNFTs() {
        this.nftList.empty();
        const address = await Wallet_1.default.loadAddress();
        if (address !== undefined) {
            const balance = (await GaiaStableDAOContract_1.default.balanceOf(address)).toNumber();
            if (balance === 0) {
                this.nftList.append((0, skydapp_browser_1.el)("p.empty", (0, skydapp_browser_1.msg)("STABLEDAO_NO_NFT_DESC")));
            }
            const promises = [];
            this.tokenIds = [];
            const result = await fetch(`https://nft-holder-collector.webplusone.com/nfts/klaytn/${Config_1.default.contracts.GaiaStableDAO}/${address}`);
            const dataSet = await result.json();
            for (const data of dataSet) {
                const promise = async () => {
                    const item = new StableNftItem_1.default().appendTo(this.nftList);
                    const tokenId = data.tokenId;
                    if (tokenId === 0) {
                        item.delete();
                    }
                    else {
                        item.init(tokenId);
                        this.tokenIds.push(tokenId);
                    }
                };
                promises.push(promise());
            }
            await Promise.all(promises);
        }
        const promises = [];
        await Promise.all(promises);
    }
    async loadInterest() {
        const balance = await MeshswapUSDCPairLPContract_1.default.balanceOf("0x8033cEB86c71EbBF575fF7015FcB8F1689d90aC1");
        const miningIndex = await MeshswapUSDCPairLPContract_1.default.miningIndex();
        const userLastIndex = await MeshswapUSDCPairLPContract_1.default.userLastIndex("0x8033cEB86c71EbBF575fF7015FcB8F1689d90aC1");
        const mesh = ethers_1.utils.parseEther("7203.620950");
        const totalMatic = await MaticContract_1.default.balanceOf("0x07a7ab21b582058b71d2aee1b1719926e3451adf");
        const totalMesh = await MeshContract_1.default.balanceOf("0x07a7ab21b582058b71d2aee1b1719926e3451adf");
        const result = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=matic-network");
        const data = await result.json();
        const price = data[0].current_price * parseFloat(ethers_1.utils.formatEther(totalMatic.mul(ethers_1.utils.parseEther("1")).div(totalMesh)));
        const interest = price * parseFloat(ethers_1.utils.formatEther(mesh));
        const result2 = await fetch("https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD");
        const data2 = await result2.json();
        const krw = interest * data2[0].basePrice;
    }
    changeParams(params, uri) { }
    close() {
        clearInterval(this.interval);
        this.container.delete();
    }
}
exports.default = StableDAO;
//# sourceMappingURL=StableDAO.js.map