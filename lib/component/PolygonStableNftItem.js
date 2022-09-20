"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const PolygonGaiaStableDAOContract_1 = __importDefault(require("../contracts/PolygonGaiaStableDAOContract"));
const StableDAOMinterContract_1 = __importDefault(require("../contracts/StableDAOMinterContract"));
const PolygonWallet_1 = __importDefault(require("../polygon/PolygonWallet"));
const ViewUtil_1 = __importDefault(require("../view/ViewUtil"));
const Confirm_1 = __importDefault(require("./shared/dialogue/Confirm"));
const TransferPopup_1 = __importDefault(require("./TransferPopup"));
class PolygonStableNftItem extends skydapp_browser_1.DomNode {
    constructor() {
        super(".stable-nft-item");
        this.id = -1;
        this.append(this.imageDisplay = (0, skydapp_browser_1.el)("img"), this.nameDisplay = (0, skydapp_browser_1.el)("h3"), (0, skydapp_browser_1.el)("a", (0, skydapp_browser_1.el)("img.send", { src: "/images/icn/send.svg", alt: "send icon" }), {
            click: () => new TransferPopup_1.default(async (to) => {
                const from = await PolygonWallet_1.default.loadAddress();
                if (from !== undefined) {
                    await PolygonGaiaStableDAOContract_1.default.transferFrom(from, to, this.id);
                    ViewUtil_1.default.waitTransactionAndRefresh();
                }
            }),
        }), (0, skydapp_browser_1.el)("button", (0, skydapp_browser_1.msg)("BUYBACK_BUTTON"), {
            click: () => new Confirm_1.default((0, skydapp_browser_1.msg)("BUYBACK_CONFIRM_TITLE"), (0, skydapp_browser_1.msg)("BUYBACK_CONFIRM_DESC"), (0, skydapp_browser_1.msg)("BUYBACK_CONFIRM_BUTTON"), async () => {
                await StableDAOMinterContract_1.default.buyBack([this.id]);
                ViewUtil_1.default.waitTransactionAndRefresh();
            }),
        }));
    }
    init(id) {
        this.id = id;
        this.imageDisplay.domElement.src = `https://storage.googleapis.com/gaia-protocol/stabledao/${id}.png`;
        this.imageDisplay.domElement.alt = `SDAO ${id}`;
        this.nameDisplay.appendText(`Polygon #${this.id}`);
    }
    delete() {
        super.delete();
    }
}
exports.default = PolygonStableNftItem;
//# sourceMappingURL=PolygonStableNftItem.js.map