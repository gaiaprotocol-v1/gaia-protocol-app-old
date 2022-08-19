import { DomNode, el, msg } from "skydapp-browser";
import CommonUtil from "../../../CommonUtil";
import EthereumWallet from "../../../ethereum/EthereumWallet";
import KlaytnWallet from "../../../klaytn/KlaytnWallet";
import Klip from "../../../klaytn/Klip";
import ConnectWalletPopup from "../ConnectWalletPopup";

export default class UserInfo extends DomNode {

    private connectWalletButton: DomNode;
    private addressDisplay: DomNode;

    constructor(private mobile?: boolean) {
        super(".user-menu");
        this.append(
            this.connectWalletButton = el("a.connect-wallet", msg("CONNECT_WALLET_BUTTON"), {
                click: () => {
                    return new Promise<void>((resolve) => new ConnectWalletPopup(resolve));
                }
            }),
            this.addressDisplay = el(".wallet-address", {
                click: () => {
                    return new Promise<void>((resolve) => new ConnectWalletPopup(resolve));
                }
            }),
        );
        this.addressDisplay.style({ display: "none" });
        KlaytnWallet.on("connect", this.connectKlaytnHandler);
        EthereumWallet.on("connect", this.connectEthereumHandler);
        this.loadKlaytnAddress();
        this.loadEthereumAddress();
    }

    private connectKlaytnHandler = () => {
        this.loadKlaytnAddress();
    };

    private async loadKlaytnAddress() {
        const address = await KlaytnWallet.loadAddress();
        if (address !== undefined) {
            if (this.connectWalletButton.deleted !== true) {
                this.connectWalletButton.delete();
            }
            this.addressDisplay.style({ display: "block" });
            this.addressDisplay.empty().appendText(CommonUtil.shortenAddress(address));
            (this.mobile === true ? this : this.addressDisplay).append(el("ul",
                Klip.connected !== true ? undefined : el("li", el("a", msg("LOGOUT_BUTTON"), {
                    click: () => Klip.disconnect(),
                })),
            ));
        }
    }

    private connectEthereumHandler = () => {
        this.loadEthereumAddress();
    };

    private async loadEthereumAddress() {
        const address = await EthereumWallet.loadAddress();
        if (address !== undefined) {
            if (this.connectWalletButton.deleted !== true) {
                this.connectWalletButton.delete();
            }
            this.addressDisplay.style({ display: "block" });
            this.addressDisplay.empty().appendText(CommonUtil.shortenAddress(address));
        }
    }

    public delete() {
        KlaytnWallet.off("connect", this.connectKlaytnHandler);
        EthereumWallet.off("connect", this.connectEthereumHandler);
        super.delete();
    }
}
