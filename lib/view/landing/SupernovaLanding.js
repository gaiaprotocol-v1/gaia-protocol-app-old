"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const Layout_1 = __importDefault(require("../Layout"));
const aos_1 = __importDefault(require("aos"));
class SupernovaLanding {
    constructor() {
        Layout_1.default.current.title = "Supernova";
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".landing-supernova-view", (0, skydapp_browser_1.el)(".init-container", { id: "init" }, (0, skydapp_browser_1.el)("img", { src: "/images/logo/gaia-supernova-text.png", alt: "gaia supernova logo", "data-aos": "zoom-in", }), (0, skydapp_browser_1.el)("p", { "data-aos": "zoom-in" }, (0, skydapp_browser_1.msg)("SUPERNOVA_INIT_DESC")), (0, skydapp_browser_1.el)("img.flow-map", { src: "/images/view/supernova-landing/flow-map.png", alt: "flow map", "data-aos": "zoom-in" })), (0, skydapp_browser_1.el)(".video-container", (0, skydapp_browser_1.el)("h2", { "data-aos": "zoom-in" }, (0, skydapp_browser_1.msg)("SUPERNOVA_VIDEO_TITLE")), (0, skydapp_browser_1.el)(".video", { "data-aos": "zoom-in" }, (0, skydapp_browser_1.el)("iframe", { width: "100%", height: "315px", src: "https://www.youtube.com/embed/Oqespb0LLjo", title: "gaia supernova introduction video" }))), (0, skydapp_browser_1.el)(".why-container", { id: "fund" }, (0, skydapp_browser_1.el)("h2", { "data-aos": "zoom-in" }, (0, skydapp_browser_1.msg)("SUPERNOVA_WHY_TITLE")), (0, skydapp_browser_1.el)("p", { "data-aos": "zoom-in" }, (0, skydapp_browser_1.msg)("SUPERNOVA_WHY_DESC"))), (0, skydapp_browser_1.el)(".fund-container", (0, skydapp_browser_1.el)("h2", { "data-aos": "zoom-in" }, (0, skydapp_browser_1.msg)("SUPERNOVA_FUND_TITLE")), (0, skydapp_browser_1.el)("p", { "data-aos": "zoom-in" }, (0, skydapp_browser_1.msg)("SUPERNOVA_FUND_DESC"))), (0, skydapp_browser_1.el)(".mint-container", { id: "mint" }, (0, skydapp_browser_1.el)("h2", { "data-aos": "zoom-in" }, (0, skydapp_browser_1.msg)("SUPERNOVA_MINT_TITLE")), (0, skydapp_browser_1.el)("h3", { "data-aos": "zoom-in" }, (0, skydapp_browser_1.msg)("SUPERNOVA_MINT_VIP_TITLE")), (0, skydapp_browser_1.el)("p", { "data-aos": "zoom-in" }, (0, skydapp_browser_1.msg)("SUPERNOVA_MINT_VIP_DESC")), (0, skydapp_browser_1.el)("a", { "data-aos": "zoom-in", href: "https://mint.gaiasupernova.com/", target: "_blank" }, "Go to Opensea")), (0, skydapp_browser_1.el)(".nft-container", { id: "nft" }, (0, skydapp_browser_1.el)("h2", { "data-aos": "zoom-in" }, (0, skydapp_browser_1.msg)("SUPERNOVA_SNEAKPEEK_TITLE")), (0, skydapp_browser_1.el)("section", (0, skydapp_browser_1.el)("img", { "data-aos": "zoom-in", src: "/images/view/supernova-landing/nft1.png" }), (0, skydapp_browser_1.el)("img", { "data-aos": "zoom-in", src: "/images/view/supernova-landing/nft2.png" }), (0, skydapp_browser_1.el)("img", { "data-aos": "zoom-in", src: "/images/view/supernova-landing/nft3.png" }), (0, skydapp_browser_1.el)("img", { "data-aos": "zoom-in", src: "/images/view/supernova-landing/nft4.png" }), (0, skydapp_browser_1.el)("img", { "data-aos": "zoom-in", src: "/images/view/supernova-landing/nft5.gif" }), (0, skydapp_browser_1.el)("img", { "data-aos": "zoom-in", src: "/images/view/supernova-landing/nft6.gif" })))));
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
exports.default = SupernovaLanding;
//# sourceMappingURL=SupernovaLanding.js.map