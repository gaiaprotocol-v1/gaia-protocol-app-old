"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const GaiaSupernovaContract_1 = __importDefault(require("../contracts/GaiaSupernovaContract"));
const ViewUtil_1 = __importDefault(require("../view/ViewUtil"));
const TransferPopup_1 = __importDefault(require("./TransferPopup"));
class SupernovaNftItem extends skydapp_browser_1.DomNode {
    constructor() {
        super(".supernova-nft-item");
        this.id = 0;
        this.append(this.imageDisplay = (0, skydapp_browser_1.el)("img"), this.nameDisplay = (0, skydapp_browser_1.el)("h3"), (0, skydapp_browser_1.el)("a", (0, skydapp_browser_1.el)("img.send", { src: "/images/icn/send.svg", alt: "send icon" }), {
            click: () => new TransferPopup_1.default(async (to) => {
                await GaiaSupernovaContract_1.default.transfer(to, this.id);
                ViewUtil_1.default.waitTransactionAndRefresh();
            }),
        }));
    }
    init(id) {
        this.id = id;
        this.imageDisplay.domElement.src = `https://storage.googleapis.com/gaia-protocol/supernova/png/${id}.png`;
        this.imageDisplay.domElement.alt = `supernova ${id}`;
        this.nameDisplay.appendText(`#${this.id}`);
    }
    delete() {
        super.delete();
    }
}
exports.default = SupernovaNftItem;
//# sourceMappingURL=SupernovaNftItem.js.map