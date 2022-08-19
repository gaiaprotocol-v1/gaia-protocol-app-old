"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const Layout_1 = __importDefault(require("../Layout"));
class GaiaDividend {
    constructor() {
        Layout_1.default.current.title = "Gaia Dividend";
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".gaia-dividend-view", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)(".title-container", (0, skydapp_browser_1.el)("h2", "GAIA Dividend"), (0, skydapp_browser_1.el)("p", "Total Distribution of revenue from Gaia Protocol"), (0, skydapp_browser_1.el)("p.total", "0 USDC"))), (0, skydapp_browser_1.el)(".revenue-container", (0, skydapp_browser_1.el)("table", (0, skydapp_browser_1.el)("thead", (0, skydapp_browser_1.el)("tr", (0, skydapp_browser_1.el)("th", "차수"), (0, skydapp_browser_1.el)("th", "제네시스 미수령 이자"), (0, skydapp_browser_1.el)("th", "슈퍼노바 미수령 이자"), (0, skydapp_browser_1.el)("th", "스테이블 다오 수익금"), (0, skydapp_browser_1.el)("th", "총액"))), (0, skydapp_browser_1.el)("tbody")))));
        this.load();
    }
    async load() {
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = GaiaDividend;
//# sourceMappingURL=GaiaDividend.js.map