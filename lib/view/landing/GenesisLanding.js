"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const Layout_1 = __importDefault(require("../Layout"));
const aos_1 = __importDefault(require("aos"));
class GenesisLanding {
    constructor() {
        Layout_1.default.current.title = "Genesis";
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".landing-genesis-view", (0, skydapp_browser_1.el)(".init-container", { id: "init" }, (0, skydapp_browser_1.el)("img", { src: "/images/logo/gaia-genesis-text.png", alt: "gaia genesis logo", "data-aos": "fade-up", }), (0, skydapp_browser_1.el)("p", { "data-aos": "fade-up" }, (0, skydapp_browser_1.msg)("GENESIS_INIT_DESC"))), (0, skydapp_browser_1.el)(".gaia-container", { id: "WHY" }, (0, skydapp_browser_1.el)("h2", (0, skydapp_browser_1.msg)("GENESIS_WHY_TITLE"), { "data-aos": "fade-up" }), (0, skydapp_browser_1.el)("p", { "data-aos": "fade-up" }, (0, skydapp_browser_1.msg)("GENESIS_WHY_DESC"))), (0, skydapp_browser_1.el)(".buyback-container", { id: "FUND" }, (0, skydapp_browser_1.el)("h2", (0, skydapp_browser_1.msg)("GENESIS_BUYBACK_FUND_TITLE"), { "data-aos": "fade-up", }), (0, skydapp_browser_1.el)("p", { "data-aos": "fade-up", }, (0, skydapp_browser_1.msg)("GENESIS_BUYBACK_FUND_DESC"))), (0, skydapp_browser_1.el)(".nft-container", { id: "NFT" }, (0, skydapp_browser_1.el)("h2", (0, skydapp_browser_1.msg)("GENESIS_SNEAK_PEEK_TITLE"), { "data-aos": "fade-up" }), (0, skydapp_browser_1.el)(".swiper-slide", (0, skydapp_browser_1.el)("img", { src: "/images/view/genesis-landing/sneakpeek1.jpeg", "data-aos": "fade-up" }), (0, skydapp_browser_1.el)("img", { src: "/images/view/genesis-landing/sneakpeek2.jpeg", "data-aos": "fade-up" }), (0, skydapp_browser_1.el)("img", { src: "/images/view/genesis-landing/sneakpeek3.jpeg", "data-aos": "fade-up" }), (0, skydapp_browser_1.el)("img", { src: "/images/view/genesis-landing/sneakpeek4.jpeg", "data-aos": "fade-up" }), (0, skydapp_browser_1.el)("img", { src: "/images/view/genesis-landing/sneakpeek5.jpeg", "data-aos": "fade-up" }), (0, skydapp_browser_1.el)("img", { src: "/images/view/genesis-landing/sneakpeek6.jpeg", "data-aos": "fade-up" }), (0, skydapp_browser_1.el)("img", { src: "/images/view/genesis-landing/sneakpeek7.jpeg", "data-aos": "fade-up" }), (0, skydapp_browser_1.el)("img", { src: "/images/view/genesis-landing/sneakpeek8.jpeg", "data-aos": "fade-up" }), (0, skydapp_browser_1.el)("img", { src: "/images/view/genesis-landing/sneakpeek9.jpeg", "data-aos": "fade-up" }))), (0, skydapp_browser_1.el)(".mint-container", { id: "MINT" }, (0, skydapp_browser_1.el)("h2", (0, skydapp_browser_1.msg)("GENESIS_MINT_TITLE"), { "data-aos": "fade-up" }), (0, skydapp_browser_1.el)("p", (0, skydapp_browser_1.msg)("GENESIS_MINT_DESC"), { "data-aos": "fade-up" }), (0, skydapp_browser_1.el)("a", (0, skydapp_browser_1.msg)("GENESIS_MINT_BUTTON")))));
        this.init();
    }
    init() {
        aos_1.default.init();
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = GenesisLanding;
//# sourceMappingURL=GenesisLanding.js.map