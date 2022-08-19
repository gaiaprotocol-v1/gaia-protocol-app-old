"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const CommonUtil_1 = __importDefault(require("../../../CommonUtil"));
const EthereumWallet_1 = __importDefault(require("../../../ethereum/EthereumWallet"));
const KlaytnWallet_1 = __importDefault(require("../../../klaytn/KlaytnWallet"));
const Klip_1 = __importDefault(require("../../../klaytn/Klip"));
const ConnectWalletPopup_1 = __importDefault(require("../ConnectWalletPopup"));
class UserInfo extends skydapp_browser_1.DomNode {
    constructor(mobile) {
        super(".user-menu");
        this.mobile = mobile;
        this.connectKlaytnHandler = () => {
            this.loadKlaytnAddress();
        };
        this.connectEthereumHandler = () => {
            this.loadEthereumAddress();
        };
        this.append(this.connectWalletButton = (0, skydapp_browser_1.el)("a.connect-wallet", (0, skydapp_browser_1.msg)("CONNECT_WALLET_BUTTON"), {
            click: () => {
                return new Promise((resolve) => new ConnectWalletPopup_1.default(resolve));
            }
        }), this.addressDisplay = (0, skydapp_browser_1.el)(".wallet-address", {
            click: () => {
                return new Promise((resolve) => new ConnectWalletPopup_1.default(resolve));
            }
        }));
        this.addressDisplay.style({ display: "none" });
        KlaytnWallet_1.default.on("connect", this.connectKlaytnHandler);
        EthereumWallet_1.default.on("connect", this.connectEthereumHandler);
        this.loadKlaytnAddress();
        this.loadEthereumAddress();
    }
    async loadKlaytnAddress() {
        const address = await KlaytnWallet_1.default.loadAddress();
        if (address !== undefined) {
            if (this.connectWalletButton.deleted !== true) {
                this.connectWalletButton.delete();
            }
            this.addressDisplay.style({ display: "block" });
            this.addressDisplay.empty().appendText(CommonUtil_1.default.shortenAddress(address));
            (this.mobile === true ? this : this.addressDisplay).append((0, skydapp_browser_1.el)("ul", Klip_1.default.connected !== true ? undefined : (0, skydapp_browser_1.el)("li", (0, skydapp_browser_1.el)("a", (0, skydapp_browser_1.msg)("LOGOUT_BUTTON"), {
                click: () => Klip_1.default.disconnect(),
            }))));
        }
    }
    async loadEthereumAddress() {
        const address = await EthereumWallet_1.default.loadAddress();
        if (address !== undefined) {
            if (this.connectWalletButton.deleted !== true) {
                this.connectWalletButton.delete();
            }
            this.addressDisplay.style({ display: "block" });
            this.addressDisplay.empty().appendText(CommonUtil_1.default.shortenAddress(address));
        }
    }
    delete() {
        KlaytnWallet_1.default.off("connect", this.connectKlaytnHandler);
        EthereumWallet_1.default.off("connect", this.connectEthereumHandler);
        super.delete();
    }
}
exports.default = UserInfo;
//# sourceMappingURL=UserInfo.js.map