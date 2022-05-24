"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const GaiaStableDAOContract_1 = __importDefault(require("../contracts/GaiaStableDAOContract"));
const ViewUtil_1 = __importDefault(require("../view/ViewUtil"));
const TransferPopup_1 = __importDefault(require("./TransferPopup"));
class StableNftItem extends skydapp_browser_1.DomNode {
    constructor() {
        super(".stable-nft-item");
        this.id = -1;
        this.append(this.imageDisplay = (0, skydapp_browser_1.el)("img"), this.nameDisplay = (0, skydapp_browser_1.el)("h3"), (0, skydapp_browser_1.el)("a", (0, skydapp_browser_1.el)("img.send", { src: "/images/icn/send.svg", alt: "send icon" }), {
            click: () => new TransferPopup_1.default(async (to) => {
                await GaiaStableDAOContract_1.default.transfer(to, this.id);
                ViewUtil_1.default.waitTransactionAndRefresh();
            }),
        }));
    }
    init(id) {
        this.id = id;
        this.imageDisplay.domElement.src = `https://storage.googleapis.com/gaia-protocol/stabledao/${id}.png`;
        this.imageDisplay.domElement.alt = `SDAO ${id}`;
        this.nameDisplay.appendText(`#${this.id}`);
    }
    delete() {
        super.delete();
    }
}
exports.default = StableNftItem;
//# sourceMappingURL=StableNftItem.js.map