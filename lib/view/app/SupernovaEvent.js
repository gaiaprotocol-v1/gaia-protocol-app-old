"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const aos_1 = __importDefault(require("aos"));
const superagent_1 = __importDefault(require("superagent"));
const SupernovaEventItem_1 = __importDefault(require("../../component/SupernovaEventItem"));
const Layout_1 = __importDefault(require("../Layout"));
class SupernovaEvent {
    constructor() {
        Layout_1.default.current.title = (0, skydapp_browser_1.msg)("GAIA_SUPERNOVA_TITLE");
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".supernova-event-view", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)(".title-container", (0, skydapp_browser_1.el)("h2", "GAIA SUPERNOVA EVENT", { "data-aos": "zoom-in" }), (0, skydapp_browser_1.el)("p", "A new explosive gift event", { "data-aos": "zoom-in" }))), this.eventList = (0, skydapp_browser_1.el)(".event-list")));
        this.init();
    }
    init() {
        aos_1.default.init();
        this.loadEvent();
    }
    async loadEvent() {
        const res = await superagent_1.default.get("https://api.gaiaprotocol.com/supernova/events");
        res.body.data.map((data) => {
            this.eventList.append(new SupernovaEventItem_1.default(data.imgUrl, data.name, data.rewardTime));
        });
    }
    changeParams(params, uri) {
    }
    close() {
        this.container.delete();
    }
}
exports.default = SupernovaEvent;
//# sourceMappingURL=SupernovaEvent.js.map