"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const Layout_1 = __importDefault(require("./Layout"));
const ViewUtil_1 = __importDefault(require("./ViewUtil"));
class Home {
    constructor() {
        Layout_1.default.current.title = "Home";
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".home-view", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)("img", { src: "/images/logo/gaia-protocol-text.png", alt: "Gaia Protocol Logo" })), (0, skydapp_browser_1.el)("section", (0, skydapp_browser_1.el)("a.card", { click: () => { ViewUtil_1.default.go("genesis"); } }, (0, skydapp_browser_1.el)("img", { src: "/images/logo/gaia-genesis.png", alt: "gaia genesis logo" }), (0, skydapp_browser_1.el)(".content", (0, skydapp_browser_1.el)("h2", (0, skydapp_browser_1.msg)("GAIA_GENESIS_TITLE")), (0, skydapp_browser_1.el)("p", (0, skydapp_browser_1.msg)("GAIA_GENESIS_DESC")))), (0, skydapp_browser_1.el)("a.card", { href: "https://twitter.com/gaiabridge", target: "_blank" }, (0, skydapp_browser_1.el)("img", { src: "/images/logo/gaia-bridge.png", alt: "gaia bridge" }), (0, skydapp_browser_1.el)(".content", (0, skydapp_browser_1.el)("h2.bridge", (0, skydapp_browser_1.msg)("GAIA_BRIDGE_TITLE")), (0, skydapp_browser_1.el)("p", (0, skydapp_browser_1.msg)("GAIA_BRIDGE_DESC")))), (0, skydapp_browser_1.el)("a.card", { click: () => { ViewUtil_1.default.go("supernova"); } }, (0, skydapp_browser_1.el)("img", { src: "/images/logo/gaia-supernova.png", alt: "gaia supernova" }), (0, skydapp_browser_1.el)(".content", (0, skydapp_browser_1.el)("h2.supernova", (0, skydapp_browser_1.msg)("GAIA_SUPERNOVA_TITLE")), (0, skydapp_browser_1.el)("p", (0, skydapp_browser_1.msg)("GAIA_SUPERNOVA_DESC")))), (0, skydapp_browser_1.el)("a.card", { click: () => { ViewUtil_1.default.go("stabledao"); } }, (0, skydapp_browser_1.el)("img", { src: "/images/logo/gaia-stable-dao.png", alt: "gaia stable dao" }), (0, skydapp_browser_1.el)(".content", (0, skydapp_browser_1.el)("h2.stabledao", (0, skydapp_browser_1.msg)("GAIA_STABLE_DAO_TITLE")), (0, skydapp_browser_1.el)("p", (0, skydapp_browser_1.msg)("GAIA_STABLE_DAO_DESC")))))));
    }
    changeParams(params, uri) { }
    close() {
        clearInterval(this.interval);
        this.container.delete();
    }
}
exports.default = Home;
//# sourceMappingURL=Home.js.map