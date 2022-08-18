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
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".gaia-dividend-view"));
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = GaiaDividend;
//# sourceMappingURL=GaiaDividend.js.map