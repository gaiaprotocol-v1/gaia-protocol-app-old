"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const skydapp_browser_1 = require("skydapp-browser");
const skydapp_common_1 = require("skydapp-common");
const CommonUtil_1 = __importDefault(require("../CommonUtil"));
const PortfolioItem_1 = __importDefault(require("../component/PortfolioItem"));
const StableNftItem_1 = __importDefault(require("../component/StableNftItem"));
const GaiaStableDAOContract_1 = __importDefault(require("../contracts/GaiaStableDAOContract"));
const MaticContract_1 = __importDefault(require("../contracts/MaticContract"));
const MeshContract_1 = __importDefault(require("../contracts/MeshContract"));
const MeshswapUSDCPairLPContract_1 = __importDefault(require("../contracts/MeshswapUSDCPairLPContract"));
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
const Layout_1 = __importDefault(require("./Layout"));
class StableDAO {
    constructor() {
        this.tokenIds = [];
        this.loadNFTsDebouncer = new skydapp_common_1.Debouncer(200, () => this.loadNFTs());
        Layout_1.default.current.title = (0, skydapp_browser_1.msg)("GAIA_STABLE_DAO_TITLE");
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".stable-dao-view", (0, skydapp_browser_1.el)("section", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)(".title-container", (0, skydapp_browser_1.el)("h2", (0, skydapp_browser_1.msg)("GAIA_STABLE_DAO_TITLE")), (0, skydapp_browser_1.el)("p", (0, skydapp_browser_1.msg)("GAIA_STABLE_DAO_DESC"))), (0, skydapp_browser_1.el)(".tool-container", (0, skydapp_browser_1.el)(".title-container", (0, skydapp_browser_1.el)("h3", "Portfolio"), this.interestKusdtDisplay = (0, skydapp_browser_1.el)("p", (0, skydapp_browser_1.msg)("STABLEDAO_INTEREST_ACCRUED_DESC")), this.interestKrwDisplay = (0, skydapp_browser_1.el)("p", (0, skydapp_browser_1.msg)("TOTAL_KRW_DESC"))))), (0, skydapp_browser_1.el)(".portfolio-container", new PortfolioItem_1.default(1, "stepn", "gmt", 3403, 2.67, "₩6,593,031.06 (1938.279905549 GMT)", "2022.05.08 ~ 2022.08.08"))), (0, skydapp_browser_1.el)("section", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)(".tool-container", (0, skydapp_browser_1.el)(".title-container", (0, skydapp_browser_1.el)("h3", "My NFT")), (0, skydapp_browser_1.el)(".button-container"))), this.nftList = (0, skydapp_browser_1.el)(".nft-container"))));
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
            skydapp_common_1.SkyUtil.repeat(balance, (i) => {
                const promise = async (index) => {
                    const item = new StableNftItem_1.default().appendTo(this.nftList);
                    const tokenId = (await GaiaStableDAOContract_1.default.tokenOfOwnerByIndex(address, index)).toNumber();
                    if (tokenId === 0) {
                        item.delete();
                    }
                    else {
                        item.init(tokenId);
                        this.tokenIds.push(tokenId);
                    }
                };
                promises.push(promise(i));
            });
            await Promise.all(promises);
        }
        const promises = [];
        await Promise.all(promises);
    }
    async loadInterest() {
        const balance = await MeshswapUSDCPairLPContract_1.default.balanceOf("0x8033cEB86c71EbBF575fF7015FcB8F1689d90aC1");
        const miningIndex = await MeshswapUSDCPairLPContract_1.default.miningIndex();
        const userLastIndex = await MeshswapUSDCPairLPContract_1.default.userLastIndex("0x8033cEB86c71EbBF575fF7015FcB8F1689d90aC1");
        const mesh = balance.mul(miningIndex.sub(userLastIndex)).div(ethers_1.utils.parseEther("1"));
        const totalMatic = await MaticContract_1.default.balanceOf("0x07a7ab21b582058b71d2aee1b1719926e3451adf");
        const totalMesh = await MeshContract_1.default.balanceOf("0x07a7ab21b582058b71d2aee1b1719926e3451adf");
        const result = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=matic-network");
        const data = await result.json();
        const price = data[0].current_price * parseFloat(ethers_1.utils.formatEther(totalMatic.mul(ethers_1.utils.parseEther("1")).div(totalMesh)));
        const interest = price * parseFloat(ethers_1.utils.formatEther(mesh));
        const result2 = await fetch("https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD");
        const data2 = await result2.json();
        const krw = interest * data2[0].basePrice;
        this.interestKusdtDisplay.empty().appendText(`${(0, skydapp_browser_1.msg)("STABLEDAO_INTEREST_ACCRUED_DESC")} ${CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatEther(mesh))} MESH`);
        this.interestKrwDisplay.empty().appendText(`${(0, skydapp_browser_1.msg)("TOTAL_KRW_DESC")} ${CommonUtil_1.default.numberWithCommas(String(krw))} 원`);
    }
    changeParams(params, uri) { }
    close() {
        clearInterval(this.interval);
        this.container.delete();
    }
}
exports.default = StableDAO;
//# sourceMappingURL=StableDAO.js.map