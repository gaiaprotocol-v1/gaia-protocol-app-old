import { DomNode, el, msg } from "skydapp-browser";
import CommonUtil from "../../../CommonUtil";
import Klip from "../../../klaytn/Klip";
import Wallet from "../../../klaytn/Wallet";
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
        Wallet.on("connect", this.connectHandler);
        this.loadAddress();
    }

    private connectHandler = () => {
        this.loadAddress();
    };

    private async loadAddress() {
        const address = await Wallet.loadAddress();
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

    public delete() {
        Wallet.off("connect", this.connectHandler);
        super.delete();
    }
}
