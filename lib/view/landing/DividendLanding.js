"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const Layout_1 = __importDefault(require("../Layout"));
const aos_1 = __importDefault(require("aos"));
class DividendLanding {
    constructor() {
        Layout_1.default.current.title = "Dividend";
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".landing-dividend-view", (0, skydapp_browser_1.el)(".init-container", (0, skydapp_browser_1.el)("img", { "data-aos": "fade-right", src: "/images/logo/gaia-dividend.png", alt: "gaia dividend logo" }), (0, skydapp_browser_1.el)("p", { "data-aos": "fade-left", }, (0, skydapp_browser_1.msg)("DIVIDEND_INIT_DESC"))), (0, skydapp_browser_1.el)(".strategy-container", (0, skydapp_browser_1.el)("h2", { "data-aos": "fade-right" }, (0, skydapp_browser_1.msg)("DIVIDEND_STRATEGY_TITLE")), (0, skydapp_browser_1.el)("img", { src: "/images/view/dividend-landing/flow-map.png", alt: "flow map", "data-aos": "fade-right" }), (0, skydapp_browser_1.el)("p", { "data-aos": "fade-left", }, (0, skydapp_browser_1.msg)("DIVIDEND_STRATEGY_DESC"))), (0, skydapp_browser_1.el)(".app-container", (0, skydapp_browser_1.el)("p", { "data-aos": "fade-left", }, (0, skydapp_browser_1.msg)("DIVIDEND_APP_DESC")))));
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
exports.default = DividendLanding;
//# sourceMappingURL=DividendLanding.js.map