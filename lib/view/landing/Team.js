"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const Layout_1 = __importDefault(require("../Layout"));
class Team {
    constructor() {
        Layout_1.default.current.title = "Team";
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".team-view", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)("h2", (0, skydapp_browser_1.msg)("TEAM_TITLE"))), (0, skydapp_browser_1.el)("article", (0, skydapp_browser_1.el)(".team-container", (0, skydapp_browser_1.el)("h3", (0, skydapp_browser_1.msg)("TEAM_TITLE1")), (0, skydapp_browser_1.el)("p", (0, skydapp_browser_1.msg)("TEAM_DESC1"))), (0, skydapp_browser_1.el)(".team-container", (0, skydapp_browser_1.el)("h3", (0, skydapp_browser_1.msg)("TEAM_TITLE2")), (0, skydapp_browser_1.el)("p", (0, skydapp_browser_1.msg)("TEAM_DESC2"))), (0, skydapp_browser_1.el)(".team-container", (0, skydapp_browser_1.el)("h3", (0, skydapp_browser_1.msg)("TEAM_TITLE3")), (0, skydapp_browser_1.el)("p", (0, skydapp_browser_1.msg)("TEAM_DESC3"))), (0, skydapp_browser_1.el)(".team-container", (0, skydapp_browser_1.el)("h3", (0, skydapp_browser_1.msg)("TEAM_TITLE4")), (0, skydapp_browser_1.el)("p", (0, skydapp_browser_1.msg)("TEAM_DESC4"))), (0, skydapp_browser_1.el)(".team-container", (0, skydapp_browser_1.el)("h3", (0, skydapp_browser_1.msg)("TEAM_TITLE5")), (0, skydapp_browser_1.el)("p", (0, skydapp_browser_1.msg)("TEAM_DESC5"))), (0, skydapp_browser_1.el)(".team-container", (0, skydapp_browser_1.el)("h3", (0, skydapp_browser_1.msg)("TEAM_TITLE6")), (0, skydapp_browser_1.el)("p", (0, skydapp_browser_1.msg)("TEAM_DESC6"))), (0, skydapp_browser_1.el)(".team-container", (0, skydapp_browser_1.el)("h3", (0, skydapp_browser_1.msg)("TEAM_TITLE7")), (0, skydapp_browser_1.el)("p", (0, skydapp_browser_1.msg)("TEAM_DESC7"))), (0, skydapp_browser_1.el)(".team-container", (0, skydapp_browser_1.el)("h3", (0, skydapp_browser_1.msg)("TEAM_TITLE8")), (0, skydapp_browser_1.el)("p", (0, skydapp_browser_1.msg)("TEAM_DESC8"))), (0, skydapp_browser_1.el)(".team-container", (0, skydapp_browser_1.el)("h3", (0, skydapp_browser_1.msg)("TEAM_TITLE9")), (0, skydapp_browser_1.el)("p", (0, skydapp_browser_1.msg)("TEAM_DESC9"))), (0, skydapp_browser_1.el)(".team-container", (0, skydapp_browser_1.el)("h3", (0, skydapp_browser_1.msg)("TEAM_TITLE10")), (0, skydapp_browser_1.el)("p", (0, skydapp_browser_1.msg)("TEAM_DESC10"))))));
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Team;
//# sourceMappingURL=Team.js.map