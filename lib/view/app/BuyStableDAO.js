"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const skydapp_browser_1 = require("skydapp-browser");
const skydapp_common_1 = require("skydapp-common");
const CommonUtil_1 = __importDefault(require("../../CommonUtil"));
const StableNftItem_1 = __importDefault(require("../../component/StableNftItem"));
const Alert_1 = __importDefault(require("../../component/shared/dialogue/Alert"));
const GaiaGenesisContract_1 = __importDefault(require("../../contracts/GaiaGenesisContract"));
const GaiaStableDAOContract_1 = __importDefault(require("../../contracts/GaiaStableDAOContract"));
const GaiaStableDAOOperatorV2Contract_1 = __importDefault(require("../../contracts/GaiaStableDAOOperatorV2Contract"));
const GaiaSupernovaContract_1 = __importDefault(require("../../contracts/GaiaSupernovaContract"));
const oUSDCContract_1 = __importDefault(require("../../contracts/oUSDCContract"));
const Wallet_1 = __importDefault(require("../../klaytn/Wallet"));
const Layout_1 = __importDefault(require("../Layout"));
const ViewUtil_1 = __importDefault(require("../ViewUtil"));
const Confirm_1 = __importDefault(require("../../component/shared/dialogue/Confirm"));
class BuyStableDAO {
    constructor() {
        this.tabType = "public";
        this.price = ethers_1.BigNumber.from(0);
        this.count = ethers_1.BigNumber.from(1);
        this.tokenIds = [];
        this.tabStore = new skydapp_browser_1.Store("tab-store");
        this.loadNFTsDebouncer = new skydapp_common_1.Debouncer(200, () => this.loadNFTs());
        Layout_1.default.current.title = (0, skydapp_browser_1.msg)("BUY_TITLE");
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".buy-stable-dao-view", (0, skydapp_browser_1.el)("h1", "BUY"), (0, skydapp_browser_1.el)("img", { src: "/images/logo/gaia-stable-dao.png", alt: "logo" }), (0, skydapp_browser_1.el)(".selector-container", this.salesDisplay = (0, skydapp_browser_1.el)("p", "SALES: ... EA"), this.priceDisplay = (0, skydapp_browser_1.el)("p", "PRICE: ... oUSDC"), this.totalDisplay = (0, skydapp_browser_1.el)("p", "TOTAL: ... oUSDC"), (0, skydapp_browser_1.el)(".select", this.genesisTab = (0, skydapp_browser_1.el)("a.disable", "Genesis", { click: () => this.loadTab("genesis") }), (0, skydapp_browser_1.el)("hr"), this.supernovaTab = (0, skydapp_browser_1.el)("a.disable", "Supernova", { click: () => this.loadTab("supernova") }), (0, skydapp_browser_1.el)("hr"), this.publicTab = (0, skydapp_browser_1.el)("a.disabled", "Public", { click: () => this.loadTab("public") }))), (0, skydapp_browser_1.el)(".input-container", this.notice = (0, skydapp_browser_1.el)("p"), (0, skydapp_browser_1.el)("input", {
            placeholder: (0, skydapp_browser_1.msg)("BUY_INPUT"),
            change: (event, input) => {
                this.count = ethers_1.BigNumber.from(input.domElement.value);
                this.loadTotal();
            },
        }), (0, skydapp_browser_1.el)(".button-container", this.approveButton = (0, skydapp_browser_1.el)("a.disabled", (0, skydapp_browser_1.msg)("BUY_APPROVE_BUTTON"), {
            click: async () => {
                const address = await Wallet_1.default.loadAddress();
                if (address !== undefined) {
                    if ((await oUSDCContract_1.default.allowance(address, GaiaStableDAOOperatorV2Contract_1.default.address)).eq(0)) {
                        await oUSDCContract_1.default.approve(GaiaStableDAOOperatorV2Contract_1.default.address, ethers_1.constants.MaxUint256);
                    }
                    else {
                        new Alert_1.default("오류", "이미 사용 승인 하셨습니다.");
                    }
                }
            },
        }), this.buyButton = (0, skydapp_browser_1.el)("a.disabled", (0, skydapp_browser_1.msg)("BUY_NFT_BUTTON"), {
            click: async () => {
                const address = await Wallet_1.default.loadAddress();
                if (address !== undefined) {
                    if ((await oUSDCContract_1.default.allowance(address, GaiaStableDAOOperatorV2Contract_1.default.address)).eq(0)) {
                        new Alert_1.default("오류", "oUSDC 사용 승인이 필요합니다.");
                    }
                    else if ((await oUSDCContract_1.default.balanceOf(address)).lt(this.price.mul(this.count))) {
                        new Confirm_1.default("오류", "oUSDC 개수가 부족합니다. 구매하시겠습니까?", "oUSDC 구매하기", () => {
                            open("https://swapscanner.io/ko/swap?from=0x0000000000000000000000000000000000000000&to=0x754288077d0ff82af7a5317c7cb8c444d421d103");
                        });
                    }
                    else if (await GaiaStableDAOContract_1.default.isMinter(GaiaStableDAOOperatorV2Contract_1.default.address) !== true) {
                        new Alert_1.default("오류", "아직 판매중이 아닙니다.");
                    }
                    else {
                        let nft = ethers_1.constants.AddressZero;
                        if (this.tabType === "genesis") {
                            nft = GaiaGenesisContract_1.default.address;
                        }
                        if (this.tabType === "supernova") {
                            nft = GaiaSupernovaContract_1.default.address;
                        }
                        if (this.count.toNumber() > 10) {
                            new Alert_1.default("오류", "한 번에 최대 10개까지 구매가 가능합니다.");
                        }
                        else {
                            await GaiaStableDAOOperatorV2Contract_1.default.mintStableDAO(this.count, nft);
                            new Alert_1.default("구매 성공!", "Gaia Stable DAO 구매에 성공했습니다. 환영합니다!");
                            ViewUtil_1.default.waitTransactionAndRefresh();
                        }
                    }
                }
            },
        })), (0, skydapp_browser_1.el)("a.usdc", (0, skydapp_browser_1.msg)("BUY_USDC_BUTTON"), { href: "https://swapscanner.io/ko/swap?from=0x0000000000000000000000000000000000000000&to=0x754288077d0ff82af7a5317c7cb8c444d421d103", target: "_blank" })), (0, skydapp_browser_1.el)(".warning-container", (0, skydapp_browser_1.el)("p", "예치금을 Mesh Swap으로 이전하는 거버넌스가 통과됨에 따라서 바이백 시스템 가동이 불가능합니다.")), (0, skydapp_browser_1.el)(".nft-container", (0, skydapp_browser_1.el)("h2", (0, skydapp_browser_1.msg)("MY_NFT_TITLE")), this.nftList = (0, skydapp_browser_1.el)("section"))));
        this.interval = setInterval(() => this.loadSales(), 1000);
        if (this.tabStore.get("type") === undefined) {
            this.loadTab("public");
        }
        else {
            this.loadTab(this.tabStore.get("type"));
        }
        this.loadNFTsDebouncer.run();
        Wallet_1.default.on("connect", () => this.loadNFTsDebouncer.run());
    }
    async loadSales() {
        if (await GaiaStableDAOContract_1.default.isMinter(GaiaStableDAOOperatorV2Contract_1.default.address) !== true) {
            this.notice.empty().appendText("아직 판매중이 아닙니다.");
        }
        else {
            this.notice.empty().appendText("현재 판매중입니다.");
        }
        const sales = await GaiaStableDAOContract_1.default.totalSupply();
        this.salesDisplay.empty().appendText(`SALES: ${sales} EA`);
        const address = await Wallet_1.default.loadAddress();
        if (address !== undefined) {
            if ((await oUSDCContract_1.default.allowance(address, GaiaStableDAOOperatorV2Contract_1.default.address)).eq(0)) {
                this.approveButton.deleteClass("disabled");
                this.buyButton.addClass("disabled");
            }
            else {
                this.approveButton.addClass("disabled");
                this.buyButton.deleteClass("disabled");
            }
        }
    }
    async loadTab(type) {
        this.tabStore.set("type", this.tabType = type);
        this.genesisTab.addClass("disable");
        this.supernovaTab.addClass("disable");
        this.publicTab.addClass("disable");
        if (type === "genesis") {
            this.genesisTab.deleteClass("disable");
            this.price = ethers_1.utils.parseUnits("1200", 6);
        }
        if (type === "supernova") {
            this.supernovaTab.deleteClass("disable");
            this.price = ethers_1.utils.parseUnits("1250", 6);
        }
        if (type === "public") {
            this.publicTab.deleteClass("disable");
            this.price = ethers_1.utils.parseUnits("1300", 6);
        }
        this.priceDisplay.empty().appendText(`PRICE: ${CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatUnits(this.price, 6))} oUSDC`);
        this.loadTotal();
    }
    async loadTotal() {
        this.totalDisplay.empty().appendText(`TOTAL: ${CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatUnits(this.count.mul(this.price), 6))} oUSDC`);
    }
    async loadNFTs() {
        this.nftList.empty();
        const address = await Wallet_1.default.loadAddress();
        if (address !== undefined) {
            const balance = (await GaiaStableDAOContract_1.default.balanceOf(address)).toNumber();
            if (balance === 0) {
                this.nftList.append((0, skydapp_browser_1.el)("p.empty", "아직 구매하신 Stable DAO가 없습니다."));
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
    changeParams(params, uri) { }
    close() {
        clearInterval(this.interval);
        this.container.delete();
    }
}
exports.default = BuyStableDAO;
//# sourceMappingURL=BuyStableDAO.js.map