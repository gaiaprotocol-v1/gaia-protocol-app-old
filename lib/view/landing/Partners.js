"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const Layout_1 = __importDefault(require("../Layout"));
class Partners {
    constructor() {
        Layout_1.default.current.title = "Partners";
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".partners-view", (0, skydapp_browser_1.el)("h2", (0, skydapp_browser_1.msg)("PARTNERSHIP_TITLE")), (0, skydapp_browser_1.el)("section", (0, skydapp_browser_1.el)("a", { href: "https://dexata.kr", target: "_blank" }, (0, skydapp_browser_1.el)("img", { src: "/images/view/partners/dexata.svg" })), (0, skydapp_browser_1.el)("a", { href: "https://klayswap.com/", target: "_blank" }, (0, skydapp_browser_1.el)("img", { src: "/images/view/partners/klayswap.svg" })), (0, skydapp_browser_1.el)("a", { href: "https://electrik.finance/", target: "_blank" }, (0, skydapp_browser_1.el)("img.electrikFinance", { src: "/images/view/partners/electrik-finance.png" })), (0, skydapp_browser_1.el)("a", { href: "https://swapscanner.io", target: "_blank" }, (0, skydapp_browser_1.el)("img", { src: "/images/view/partners/swapscanner.svg" })), (0, skydapp_browser_1.el)("a", { href: "https://hypesalt.com/", target: "_blank" }, (0, skydapp_browser_1.el)("img", { src: "/images/view/partners/hypesalt.svg" })), (0, skydapp_browser_1.el)("a", { href: "https://www.projectspoon.net/", target: "_blank" }, (0, skydapp_browser_1.el)("img.spoon", { src: "/images/view/partners/spoon.png" })), (0, skydapp_browser_1.el)("a", { href: "http://www.townverse.info/", target: "_blank" }, (0, skydapp_browser_1.el)("img", { src: "/images/view/partners/townverse.svg" })), (0, skydapp_browser_1.el)("a", { href: "http://layerlab.io/", target: "_blank" }, (0, skydapp_browser_1.el)("img.layerlab", { src: "/images/view/partners/layerlab.png" })), (0, skydapp_browser_1.el)("a", { href: "http://www.dncmedia.co.kr/", target: "_blank" }, (0, skydapp_browser_1.el)("img.dncMedia", { src: "/images/view/partners/dncMedia.png" })))));
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Partners;
//# sourceMappingURL=Partners.js.map