"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const skydapp_browser_1 = require("skydapp-browser");
const skydapp_common_1 = require("skydapp-common");
const GenesisNftItem_1 = __importDefault(require("../../component/GenesisNftItem"));
const GaiaNFTContract_1 = __importDefault(require("../../contracts/GaiaNFTContract"));
const NFTAirdropContract_1 = __importDefault(require("../../contracts/NFTAirdropContract"));
const Wallet_1 = __importDefault(require("../../klaytn/Wallet"));
const Layout_1 = __importDefault(require("../Layout"));
class Genesis {
    constructor() {
        this.tokenIds = [];
        this.usdcs = [];
        this.usdcTokenIds = [];
        this.loadNFTsDebouncer = new skydapp_common_1.Debouncer(200, () => this.loadNFTs());
        Layout_1.default.current.title = "Genesis";
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".genesis-view", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)(".title-container", (0, skydapp_browser_1.el)("h2", (0, skydapp_browser_1.msg)("GAIA_GENESIS_TITLE")), (0, skydapp_browser_1.el)("p", (0, skydapp_browser_1.msg)("GAIA_GENESIS_DESC"))), (0, skydapp_browser_1.el)(".tool-container", (0, skydapp_browser_1.el)(".title-container", (0, skydapp_browser_1.el)("h3", "My NFT"), this.totalKlayDisplay = (0, skydapp_browser_1.el)("p", ""), this.totalEmergencyDisplay = (0, skydapp_browser_1.el)("p", "")), (0, skydapp_browser_1.el)(".button-container"))), this.nftList = (0, skydapp_browser_1.el)(".nft-container")));
        this.loadNFTsDebouncer.run();
        Wallet_1.default.on("connect", () => this.loadNFTsDebouncer.run());
    }
    async loadNFTs() {
        const address = await Wallet_1.default.loadAddress();
        if (address !== undefined) {
            const reward = await NFTAirdropContract_1.default.airdropReward(0);
            const balance = (await GaiaNFTContract_1.default.balanceOf(address)).toNumber();
            const promises = [];
            this.tokenIds = [];
            let totalEmergency = ethers_1.BigNumber.from(0);
            const result = await fetch(`https://nft-holder-collector.webplusone.com/nfts/klaytn/0xe9A10bB97DDb4bCD7677393405B4b769273CeF3c/${address}`);
            const dataSet = await result.json();
            for (const data of dataSet) {
                const promise = async () => {
                    const item = new GenesisNftItem_1.default().appendTo(this.nftList);
                    const tokenId = data.tokenId;
                    if (tokenId === 0) {
                        item.delete();
                    }
                    else {
                        item.init(tokenId, ethers_1.BigNumber.from(0), false, reward, ethers_1.BigNumber.from(0));
                        this.tokenIds.push(tokenId);
                    }
                };
                promises.push(promise());
            }
            await Promise.all(promises);
            let totalUSDC = ethers_1.BigNumber.from(0);
            for (const usdc of this.usdcs) {
                totalUSDC = totalUSDC.add(usdc);
            }
            this.totalKlayDisplay.empty().appendText(`${"총 미수령 이자 {amount} USDC".replace(/{amount}/, String(ethers_1.utils.formatUnits(totalUSDC, 6)))}`);
            this.totalEmergencyDisplay.empty().appendText(`${(0, skydapp_browser_1.msg)("ALL_EMERGENCY_DESC")} ${String(ethers_1.utils.formatEther(totalEmergency))} KLAY`);
        }
    }
    changeParams(params, uri) { }
    close() {
        clearInterval(this.interval);
        this.container.delete();
    }
}
exports.default = Genesis;
//# sourceMappingURL=Genesis.js.map