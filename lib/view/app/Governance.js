"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const superagent_1 = __importDefault(require("superagent"));
const GovernanceItem_1 = __importDefault(require("../../component/GovernanceItem"));
const Layout_1 = __importDefault(require("../Layout"));
class Governance {
    constructor() {
        Layout_1.default.current.title = (0, skydapp_browser_1.msg)("GOVERNANCE_TITLE");
        let select;
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".governance-view", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)(".title-container", (0, skydapp_browser_1.el)("h2", "GAIA GOVERNANCE"), (0, skydapp_browser_1.el)("p", "Changing with your choice"))), (0, skydapp_browser_1.el)(".governance-table", (0, skydapp_browser_1.el)(".governance-header", (0, skydapp_browser_1.el)("h3", "View governance list"), select = (0, skydapp_browser_1.el)("select", (0, skydapp_browser_1.el)("option", "all"), (0, skydapp_browser_1.el)("option", "progress"), (0, skydapp_browser_1.el)("option", "cancel"), (0, skydapp_browser_1.el)("option", "done"), {
            change: () => {
                this.loadGovernance(select.domElement.value);
            }
        })), (0, skydapp_browser_1.el)("hr"), this.governanceList = (0, skydapp_browser_1.el)(".governance-list"))));
        this.init(select.domElement.value);
    }
    init(status) {
        this.loadGovernance(status);
    }
    async loadGovernance(status) {
        this.governanceList.empty();
        if (status === "all") {
            const res = await superagent_1.default.get(`https://api.gaiaprotocol.com/votes`);
            res.body.data.map((data) => {
                this.governanceList.append(new GovernanceItem_1.default(data.id, data.title, data.status, data.nfts, data.endTime));
            });
        }
        else if (status === "progress") {
            const res = await superagent_1.default.get(`https://api.gaiaprotocol.com/votes?status=todo`);
            res.body.data.map((data) => {
                this.governanceList.append(new GovernanceItem_1.default(data.id, data.title, data.status, data.nfts, data.endTime));
            });
        }
        else {
            const res = await superagent_1.default.get(`https://api.gaiaprotocol.com/votes?status=${status}`);
            res.body.data.map((data) => {
                this.governanceList.append(new GovernanceItem_1.default(data.id, data.title, data.status, data.nfts, data.endTime));
            });
        }
    }
    changeParams(params, uri) {
    }
    close() {
        this.container.delete();
    }
}
exports.default = Governance;
//# sourceMappingURL=Governance.js.map