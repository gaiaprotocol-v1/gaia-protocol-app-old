"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const skydapp_browser_1 = require("skydapp-browser");
const skydapp_common_1 = require("skydapp-common");
const CommonUtil_1 = __importDefault(require("../../CommonUtil"));
const Alert_1 = __importDefault(require("../../component/shared/dialogue/Alert"));
const SupernovaNftItem_1 = __importDefault(require("../../component/SupernovaNftItem"));
const GaiaSupernovaContract_1 = __importDefault(require("../../contracts/GaiaSupernovaContract"));
const SupernovaRewardDistributor_1 = __importDefault(require("../../contracts/SupernovaRewardDistributor"));
const Wallet_1 = __importDefault(require("../../klaytn/Wallet"));
const ViewUtil_1 = __importDefault(require("../ViewUtil"));
const Layout_1 = __importDefault(require("./../Layout"));
class Supernova {
    constructor() {
        this.tokenIds = [];
        this.resizeDebouncer = new skydapp_common_1.Debouncer(200, () => this.loadNFTs());
        Layout_1.default.current.title = (0, skydapp_browser_1.msg)("GAIA_SUPERNOVA_TITLE");
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".supernova-view", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)(".title-container", (0, skydapp_browser_1.el)("h2", (0, skydapp_browser_1.msg)("GAIA_SUPERNOVA_TITLE")), (0, skydapp_browser_1.el)("p", (0, skydapp_browser_1.msg)("GAIA_SUPERNOVA_DESC"))), (0, skydapp_browser_1.el)(".dashboard-container", (0, skydapp_browser_1.el)(".content", (0, skydapp_browser_1.el)("h3", (0, skydapp_browser_1.msg)("DASHBOARD_TITLE1")), this.allRoyaltyDisplay = (0, skydapp_browser_1.el)("p", "... KLAY")), (0, skydapp_browser_1.el)(".content", (0, skydapp_browser_1.el)("h3", (0, skydapp_browser_1.msg)("DASHBOARD_TITLE2")), this.nftRoyaltyDisplay = (0, skydapp_browser_1.el)("p", "... KLAY")), (0, skydapp_browser_1.el)(".content", (0, skydapp_browser_1.el)("h3", (0, skydapp_browser_1.msg)("INFO_TITLE1")), this.allNftDisplay = (0, skydapp_browser_1.el)("p", "... EA")), (0, skydapp_browser_1.el)(".content", (0, skydapp_browser_1.el)("h3", (0, skydapp_browser_1.msg)("INFO_TITLE2")), this.blockDisplay = (0, skydapp_browser_1.el)("p", "...")), (0, skydapp_browser_1.el)(".content", (0, skydapp_browser_1.el)("h3", (0, skydapp_browser_1.msg)("INFO_TITLE3")), this.receivedDisplay = (0, skydapp_browser_1.el)("p", "... KLAY")), (0, skydapp_browser_1.el)(".content", (0, skydapp_browser_1.el)("h3", (0, skydapp_browser_1.msg)("INFO_TITLE4")), this.totalInterestDisplay = (0, skydapp_browser_1.el)("p", "... KLAY"))), (0, skydapp_browser_1.el)(".warning-wrap", (0, skydapp_browser_1.el)(".warning-container", (0, skydapp_browser_1.el)("img", { src: "/images/icn/error-red.svg", alt: "warning" }), (0, skydapp_browser_1.el)("p", (0, skydapp_browser_1.msg)("WARNING_DESC")))), (0, skydapp_browser_1.el)(".tool-container", (0, skydapp_browser_1.el)(".title-container", (0, skydapp_browser_1.el)("h3", "My NFT")), (0, skydapp_browser_1.el)(".button-container", (0, skydapp_browser_1.el)("a", (0, skydapp_browser_1.msg)("REWARD_BUTTON"), {
            click: async () => {
                const address = await Wallet_1.default.loadAddress();
                if (address !== undefined) {
                    const remainingTimeToClaim = await SupernovaRewardDistributor_1.default.remainingTimeToClaim(address);
                    if (remainingTimeToClaim.eq(0)) {
                        await SupernovaRewardDistributor_1.default.claim(address);
                    }
                    else {
                        new Alert_1.default((0, skydapp_browser_1.msg)("ALERT_UNABLE_RECEIVE_TITLE"), (0, skydapp_browser_1.msg)("ALERT_UNABLE_RECEIVE_DESC"));
                    }
                }
            },
        })))), (0, skydapp_browser_1.el)(".warning-container", (0, skydapp_browser_1.el)("p", "GAIA SUPERNOVA는 경품 이벤트를 진행하고 있으며 디스코드에서 확인 가능합니다."), (0, skydapp_browser_1.el)("a", "역대 상품 보기 >", { click: () => { ViewUtil_1.default.go("/supernova/event"); } })), this.nftList = (0, skydapp_browser_1.el)(".nft-container")));
        this.interval = setInterval(() => this.load(), 1000);
        this.resizeDebouncer.run();
        Wallet_1.default.on("connect", () => this.resizeDebouncer.run());
    }
    async load() {
        const totalDistribution = (await SupernovaRewardDistributor_1.default.totalDistribution()).add("14450505446857445842091");
        this.allRoyaltyDisplay.empty().appendText(`${CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatEther(totalDistribution))} KLAY`);
        this.nftRoyaltyDisplay.empty().appendText(`${CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatEther(totalDistribution.div(1000)))} KLAY`);
        const address = await Wallet_1.default.loadAddress();
        if (address !== undefined) {
            const balance = await GaiaSupernovaContract_1.default.balanceOf(address);
            this.allNftDisplay.empty().appendText(`${String(balance.toNumber())} EA`);
            const remainingTimeToClaim = balance.eq(0) ? ethers_1.BigNumber.from(0) : await SupernovaRewardDistributor_1.default.remainingTimeToClaim(address);
            this.blockDisplay.empty().appendText(CommonUtil_1.default.displayBlockDuration(remainingTimeToClaim.toNumber()));
            const claimed = await SupernovaRewardDistributor_1.default.claimed(address);
            this.receivedDisplay.empty().appendText(`${CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatEther(claimed))} KLAY`);
            const claimableReward = await SupernovaRewardDistributor_1.default.claimableReward(address);
            this.totalInterestDisplay.empty().appendText(`${CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatEther(claimableReward))} KLAY`);
        }
    }
    async loadNFTs() {
        const address = await Wallet_1.default.loadAddress();
        if (address !== undefined) {
            const balance = (await GaiaSupernovaContract_1.default.balanceOf(address)).toNumber();
            const promises = [];
            this.tokenIds = [];
            const result = await fetch(`https://nft-holder-collector.webplusone.com/nfts/klaytn/0x20a33C651373cde978daE404760e853fAE877588/${address}`);
            const dataSet = await result.json();
            for (const data of dataSet) {
                const promise = async () => {
                    const item = new SupernovaNftItem_1.default().appendTo(this.nftList);
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
    changeParams(params, uri) { }
    close() {
        clearInterval(this.interval);
        this.container.delete();
    }
}
exports.default = Supernova;
//# sourceMappingURL=Supernova.js.map