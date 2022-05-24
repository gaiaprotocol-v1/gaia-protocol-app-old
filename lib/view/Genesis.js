"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const skydapp_browser_1 = require("skydapp-browser");
const skydapp_common_1 = require("skydapp-common");
const GenesisNftItem_1 = __importDefault(require("../component/GenesisNftItem"));
const GaiaNFTContract_1 = __importDefault(require("../contracts/GaiaNFTContract"));
const GaiaOperationContract_1 = __importDefault(require("../contracts/GaiaOperationContract"));
const NFTAirdropContract_1 = __importDefault(require("../contracts/NFTAirdropContract"));
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
const Layout_1 = __importDefault(require("./Layout"));
class Genesis {
    constructor() {
        this.tokenIds = [];
        this.krnos = [];
        this.totalKlay = ethers_1.BigNumber.from(0);
        this.loadNFTsDebouncer = new skydapp_common_1.Debouncer(200, () => this.loadNFTs());
        Layout_1.default.current.title = "Genesis";
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".home-view", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)(".title-container", (0, skydapp_browser_1.el)("h2", (0, skydapp_browser_1.msg)("GAIA_GENESIS_TITLE")), (0, skydapp_browser_1.el)("p", (0, skydapp_browser_1.msg)("GAIA_GENESIS_DESC"))), (0, skydapp_browser_1.el)(".tool-container", (0, skydapp_browser_1.el)(".title-container", (0, skydapp_browser_1.el)("h3", "My NFT"), this.totalKlayDisplay = (0, skydapp_browser_1.el)("p", ""), this.totalEmergencyDisplay = (0, skydapp_browser_1.el)("p", "")), (0, skydapp_browser_1.el)(".button-container", (0, skydapp_browser_1.el)("a", (0, skydapp_browser_1.msg)("ALL_EMERGENCY_BUTTON"))))), this.nftList = (0, skydapp_browser_1.el)(".nft-container")));
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
            skydapp_common_1.SkyUtil.repeat(balance, (i) => {
                const promise = async (index) => {
                    const item = new GenesisNftItem_1.default().appendTo(this.nftList);
                    const tokenId = (await GaiaNFTContract_1.default.tokenOfOwnerByIndex(address, index)).toNumber();
                    const collected = await NFTAirdropContract_1.default.airdropCollected(0, tokenId);
                    if (tokenId === 0) {
                        item.delete();
                    }
                    else {
                        item.init(tokenId, reward, collected);
                        const krno = await GaiaOperationContract_1.default.claimableKRNO([tokenId]);
                        this.tokenIds.push(tokenId);
                        this.krnos.push(krno);
                        totalEmergency = totalEmergency.add(reward.sub(collected));
                    }
                };
                promises.push(promise(i));
            });
            await Promise.all(promises);
            this.totalKlay = await GaiaOperationContract_1.default.claimableKlay(this.tokenIds);
            this.totalKlayDisplay.empty().appendText(`${(0, skydapp_browser_1.msg)("MY_INTEREST_KLAY_DESC").replace(/{amount}/, String(ethers_1.utils.formatEther(this.totalKlay)))}`);
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