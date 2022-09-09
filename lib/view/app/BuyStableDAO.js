"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const skydapp_browser_1 = require("skydapp-browser");
const skydapp_common_1 = require("skydapp-common");
const CommonUtil_1 = __importDefault(require("../../CommonUtil"));
const PolygonStableNftItem_1 = __importDefault(require("../../component/PolygonStableNftItem"));
const Alert_1 = __importDefault(require("../../component/shared/dialogue/Alert"));
const Confirm_1 = __importDefault(require("../../component/shared/dialogue/Confirm"));
const PolygonUSDCContract_1 = __importDefault(require("../../contracts/PolygonUSDCContract"));
const StableDAOMinterContract_1 = __importDefault(require("../../contracts/StableDAOMinterContract"));
const PolygonWallet_1 = __importDefault(require("../../polygon/PolygonWallet"));
const Layout_1 = __importDefault(require("../Layout"));
const ViewUtil_1 = __importDefault(require("../ViewUtil"));
class BuyStableDAO {
    constructor() {
        this.price = ethers_1.utils.parseUnits("1300", 6);
        this.count = ethers_1.BigNumber.from(0);
        this.tokenIds = [];
        this.loadNFTsDebouncer = new skydapp_common_1.Debouncer(200, () => this.loadNFTs());
        Layout_1.default.current.title = (0, skydapp_browser_1.msg)("BUY_TITLE");
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".buy-stable-dao-view", (0, skydapp_browser_1.el)("h1", "BUY"), (0, skydapp_browser_1.el)("img", { src: "/images/logo/gaia-stable-dao.png", alt: "logo" }), (0, skydapp_browser_1.el)(".selector-container", this.salesDisplay = (0, skydapp_browser_1.el)("p", "SALES: ... EA"), this.priceDisplay = (0, skydapp_browser_1.el)("p", "PRICE: ... USDC"), this.totalDisplay = (0, skydapp_browser_1.el)("p", "TOTAL: ... USDC")), (0, skydapp_browser_1.el)(".input-container", this.notice = (0, skydapp_browser_1.el)("p"), (0, skydapp_browser_1.el)("input", {
            placeholder: (0, skydapp_browser_1.msg)("BUY_INPUT"),
            change: (event, input) => {
                this.count = ethers_1.BigNumber.from(input.domElement.value);
                this.loadTotal();
            },
        }), (0, skydapp_browser_1.el)(".button-container", this.approveButton = (0, skydapp_browser_1.el)("a.disabled", (0, skydapp_browser_1.msg)("BUY_APPROVE_BUTTON"), {
            click: async () => {
                const address = await PolygonWallet_1.default.loadAddress();
                if (address !== undefined) {
                    if ((await PolygonUSDCContract_1.default.allowance(address, StableDAOMinterContract_1.default.address)).eq(0)) {
                        await PolygonUSDCContract_1.default.approve(StableDAOMinterContract_1.default.address, ethers_1.constants.MaxUint256);
                    }
                    else {
                        new Alert_1.default("오류", "이미 사용 승인 하셨습니다.");
                    }
                }
            },
        }), this.buyButton = (0, skydapp_browser_1.el)("a.disabled", (0, skydapp_browser_1.msg)("BUY_NFT_BUTTON"), {
            click: async () => {
                const address = await PolygonWallet_1.default.loadAddress();
                if (address !== undefined) {
                    if ((await PolygonUSDCContract_1.default.allowance(address, StableDAOMinterContract_1.default.address)).eq(0)) {
                        new Alert_1.default("오류", "USDC 사용 승인이 필요합니다.");
                    }
                    else if ((await PolygonUSDCContract_1.default.balanceOf(address)).lt(this.price.mul(this.count))) {
                        new Confirm_1.default("오류", "USDC 개수가 부족합니다. 구매하시겠습니까?", "USDC 구매하기", () => {
                            open("https://meshswap.fi/exchange/swap?output=0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174");
                        });
                    }
                    else {
                        if (this.count.toNumber() > 10) {
                            new Alert_1.default("오류", "한 번에 최대 10개까지 구매가 가능합니다.");
                        }
                        else {
                            await StableDAOMinterContract_1.default.mintStableDAO(this.count);
                            new Alert_1.default("구매 성공!", "Gaia Stable DAO 구매에 성공했습니다. 환영합니다!");
                            ViewUtil_1.default.waitTransactionAndRefresh();
                        }
                    }
                }
            },
        })), (0, skydapp_browser_1.el)("a.usdc", (0, skydapp_browser_1.msg)("BUY_USDC_BUTTON"), { href: "https://meshswap.fi/exchange/swap?output=0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", target: "_blank" })), (0, skydapp_browser_1.el)(".nft-container", (0, skydapp_browser_1.el)("h2", (0, skydapp_browser_1.msg)("MY_NFT_TITLE")), this.nftList = (0, skydapp_browser_1.el)("section"))));
        this.interval = setInterval(() => this.loadSales(), 1000);
        this.priceDisplay.empty().appendText(`PRICE: ${CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatUnits(this.price, 6))} USDC`);
        this.loadTotal();
        this.loadNFTsDebouncer.run();
        PolygonWallet_1.default.on("connect", () => this.loadNFTsDebouncer.run());
    }
    async loadSales() {
        this.notice.empty().appendText("현재 폴리곤 체인에서 판매중입니다.\n\n바이백 가격은 1,200 USDC 입니다.");
        const sales = await StableDAOMinterContract_1.default.totalSupply();
        this.salesDisplay.empty().appendText(`SALES: ${sales} EA`);
        const address = await PolygonWallet_1.default.loadAddress();
        if (address !== undefined) {
            if ((await PolygonUSDCContract_1.default.allowance(address, StableDAOMinterContract_1.default.address)).eq(0)) {
                this.approveButton.deleteClass("disabled");
                this.buyButton.addClass("disabled");
            }
            else {
                this.approveButton.addClass("disabled");
                this.buyButton.deleteClass("disabled");
            }
        }
    }
    async loadTotal() {
        this.totalDisplay.empty().appendText(`TOTAL: ${CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatUnits(this.count.mul(this.price), 6))} USDC`);
    }
    async loadNFTs() {
        this.nftList.empty();
        const address = await PolygonWallet_1.default.loadAddress();
        if (address !== undefined) {
            const result = await fetch(`https://api.gaiaprotocol.com/gaia-protocol-pfp/polygon/0xa5f5b6C05a6d48a56E95E4Ce15078008a18BC79B/${address}`);
            const data = await result.json();
            if (data.nfts.length === 0) {
                this.nftList.append((0, skydapp_browser_1.el)("p.empty", "폴리곤 체인에 Stable DAO가 없습니다."));
            }
            for (const nft of data.nfts) {
                const item = new PolygonStableNftItem_1.default().appendTo(this.nftList);
                const tokenId = parseInt(nft.token_id, 10);
                item.init(tokenId);
                this.tokenIds.push(tokenId);
            }
        }
    }
    changeParams(params, uri) { }
    close() {
        clearInterval(this.interval);
        this.container.delete();
    }
}
exports.default = BuyStableDAO;
//# sourceMappingURL=BuyStableDAO.js.map