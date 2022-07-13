"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const dayjs_1 = __importDefault(require("dayjs"));
const ViewUtil_1 = __importDefault(require("../view/ViewUtil"));
class GovernancesItem extends skydapp_browser_1.DomNode {
    constructor(id, name, status, nfts, endTime) {
        super(".governance-item");
        this.append((0, skydapp_browser_1.el)("a", {
            click: () => {
                ViewUtil_1.default.go(`/governance/${id}`);
            }
        }, (0, skydapp_browser_1.el)("h6", name), this.statusDisplay = (0, skydapp_browser_1.el)(".status", status), this.nftDisplay = (0, skydapp_browser_1.el)(".nfts"), (0, skydapp_browser_1.el)(".endTime", `${(0, dayjs_1.default)(endTime).format("YY. MM. DD")}`)), (0, skydapp_browser_1.el)("hr"));
        this.init(nfts, status);
    }
    init(nfts, status) {
        this.loadNfts(nfts);
        this.loadStatus(status);
    }
    loadStatus(status) {
        switch (status) {
            case "todo":
                this.statusDisplay.empty().appendText("Progress");
                this.statusDisplay.style({
                    color: "#27a102",
                    "border-color": "#27a102"
                });
                break;
            case "cancel":
                this.statusDisplay.style({
                    color: "#999",
                    "border-color": "#999"
                });
                break;
            case "done":
                this.statusDisplay.style({
                    color: "#999",
                    "border-color": "#999"
                });
                break;
        }
    }
    loadNfts(nfts) {
        nfts.map((data) => {
            switch (data) {
                case "genesisCount":
                    this.nftDisplay.appendText("Genesis, ");
                    break;
                case "supernovaCount":
                    this.nftDisplay.appendText("Super nova, ");
                    break;
                case "stabledaoCount":
                    this.nftDisplay.appendText("Stable DAO ");
                    break;
                default:
                    this.nftDisplay.appendText(data);
                    break;
            }
        });
    }
    delete() {
        super.delete();
    }
}
exports.default = GovernancesItem;
//# sourceMappingURL=GovernanceItem.js.map