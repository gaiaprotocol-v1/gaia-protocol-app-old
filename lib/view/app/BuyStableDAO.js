"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const skydapp_browser_1 = require("skydapp-browser");
const skydapp_common_1 = require("skydapp-common");
const PolygonStableNftItem_1 = __importDefault(require("../../component/PolygonStableNftItem"));
const PolygonWallet_1 = __importDefault(require("../../polygon/PolygonWallet"));
const Layout_1 = __importDefault(require("../Layout"));
class BuyStableDAO {
    constructor() {
        this.price = ethers_1.utils.parseUnits("1300", 6);
        this.count = ethers_1.BigNumber.from(0);
        this.tokenIds = [];
        this.loadNFTsDebouncer = new skydapp_common_1.Debouncer(200, () => this.loadNFTs());
        Layout_1.default.current.title = (0, skydapp_browser_1.msg)("BUY_TITLE");
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".buy-stable-dao-view", (0, skydapp_browser_1.el)("h1", "BUY"), (0, skydapp_browser_1.el)("img", { src: "/images/logo/gaia-stable-dao.png", alt: "logo" }), (0, skydapp_browser_1.el)(".selector-container"), (0, skydapp_browser_1.el)("p", "Gaia Protocol 2.0을 위해 구매 & 바이백 정책이 변경중입니다."), (0, skydapp_browser_1.el)("a", "Gaia Protocol 2.0 제안 보기", { href: "https://medium.com/gaiaprotocol/gaia-protocol-2-0-%EC%A0%9C%EC%95%88-98e40c0d7663", target: "_blank" }), (0, skydapp_browser_1.el)(".nft-container", (0, skydapp_browser_1.el)("h2", (0, skydapp_browser_1.msg)("MY_NFT_TITLE")), this.nftList = (0, skydapp_browser_1.el)("section"))));
        this.interval = setInterval(() => this.loadSales(), 1000);
        this.loadTotal();
        this.loadNFTsDebouncer.run();
        PolygonWallet_1.default.on("connect", () => this.loadNFTsDebouncer.run());
    }
    async loadSales() {
    }
    async loadTotal() {
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