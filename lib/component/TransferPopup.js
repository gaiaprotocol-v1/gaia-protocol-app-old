"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
class TransferPopup extends skydapp_browser_1.Popup {
    constructor(confirm) {
        super(".popup-background");
        this.append(this.content = (0, skydapp_browser_1.el)(".dialogue.transfer-popup", (0, skydapp_browser_1.el)("h2", (0, skydapp_browser_1.msg)("SEND_PROMPT_TITLE")), (0, skydapp_browser_1.el)("p", (0, skydapp_browser_1.msg)("SEND_PROMPT_DESC")), (0, skydapp_browser_1.el)(".warning-container", (0, skydapp_browser_1.el)("img", { src: "/images/icn/warning.svg", alt: "warning" }), (0, skydapp_browser_1.el)("p.warning", (0, skydapp_browser_1.msg)("SEND_PROMPT_WARNING_DESC"))), (0, skydapp_browser_1.el)(".input-container", this.input = (0, skydapp_browser_1.el)("input", { placeholder: (0, skydapp_browser_1.msg)("SEND_PROMPT_INPUT"), min: "40" })), (0, skydapp_browser_1.el)(".button-container", (0, skydapp_browser_1.el)("button", (0, skydapp_browser_1.msg)("CANCEL_BUTTON"), {
            click: () => this.delete(),
        }), (0, skydapp_browser_1.el)("button", (0, skydapp_browser_1.msg)("SEND_PROMPT_BUTTON"), {
            click: () => {
                confirm(this.input.domElement.value);
                this.delete();
            },
        }))));
    }
}
exports.default = TransferPopup;
//# sourceMappingURL=TransferPopup.js.map