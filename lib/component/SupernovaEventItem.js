"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const aos_1 = __importDefault(require("aos"));
const dayjs_1 = __importDefault(require("dayjs"));
class SupernovaEventItem extends skydapp_browser_1.DomNode {
    constructor(image, name, date) {
        super(".supernova-event-item");
        this.append((0, skydapp_browser_1.el)("section", { "data-aos": "flip-left" }, (0, skydapp_browser_1.el)("img", { src: image }), (0, skydapp_browser_1.el)(".content", (0, skydapp_browser_1.el)("h6", name), (0, skydapp_browser_1.el)(".date", `${dayjs_1.default.unix(date).format("YYYY-MM-DD")}`))));
        this.init();
    }
    init() {
        aos_1.default.init();
    }
    delete() {
        super.delete();
    }
}
exports.default = SupernovaEventItem;
//# sourceMappingURL=SupernovaEventItem.js.map