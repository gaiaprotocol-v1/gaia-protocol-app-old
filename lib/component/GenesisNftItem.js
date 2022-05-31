"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const skydapp_browser_1 = require("skydapp-browser");
const CommonUtil_1 = __importDefault(require("../CommonUtil"));
const GaiaGenesisUSDCDistributorContract_1 = __importDefault(require("../contracts/GaiaGenesisUSDCDistributorContract"));
const GaiaNFTContract_1 = __importDefault(require("../contracts/GaiaNFTContract"));
const ViewUtil_1 = __importDefault(require("../view/ViewUtil"));
const TransferPopup_1 = __importDefault(require("./TransferPopup"));
class GenesisNftItem extends skydapp_browser_1.DomNode {
    constructor() {
        super(".genesis-nft-item");
        this.id = -1;
        this.append(this.imageDisplay = (0, skydapp_browser_1.el)("img"), this.nameDisplay = (0, skydapp_browser_1.el)("h3"), (0, skydapp_browser_1.el)("a", (0, skydapp_browser_1.el)("img.send", { src: "/images/icn/send.svg", alt: "send icon" }), {
            click: () => new TransferPopup_1.default(async (to) => {
                await GaiaNFTContract_1.default.transfer(to, this.id);
                ViewUtil_1.default.waitTransactionAndRefresh();
            }),
        }), (0, skydapp_browser_1.el)(".content-wrap", (0, skydapp_browser_1.el)("section", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.msg)("UNCOLLECTED_INTEREST_DESC")), (0, skydapp_browser_1.el)(".amount-wrap", this.klayDisplay = (0, skydapp_browser_1.el)(".klay", "... KLAY"))), (0, skydapp_browser_1.el)(".button-wrap", this.claimButton = (0, skydapp_browser_1.el)("a.klay-button", "미수령 이자 받기", {
            click: async () => {
                await GaiaGenesisUSDCDistributorContract_1.default.claim([this.id]);
                ViewUtil_1.default.waitTransactionAndRefresh();
            }
        }))), (0, skydapp_browser_1.el)(".content-wrap", (0, skydapp_browser_1.el)("section", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.msg)("EMERGENCY_DESC")), (0, skydapp_browser_1.el)(".amount-wrap", this.emergencyDisplay = (0, skydapp_browser_1.el)(".klay", "... KLAY")))));
    }
    init(id, usdc, usdcCollected, reward, collected) {
        this.id = id;
        this.imageDisplay.domElement.src = `https://storage.googleapis.com/gaia-protocol/kronos/${id}.png`;
        this.nameDisplay.appendText(`#${this.id}`);
        if (usdcCollected === true) {
            this.claimButton.delete();
        }
        this.klayDisplay.empty().appendText(`${CommonUtil_1.default.numberWithCommas(usdcCollected === true ? "0" : ethers_1.utils.formatUnits(usdc, 6))} USDC`);
        this.emergencyDisplay.empty().appendText(`${CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatEther(reward.sub(collected)), 5)} KLAY`);
    }
    delete() {
        super.delete();
    }
}
exports.default = GenesisNftItem;
//# sourceMappingURL=GenesisNftItem.js.map