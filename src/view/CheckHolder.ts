import { BodyNode, DomNode, el, msg } from "skydapp-browser";
import superagent from "superagent";
import DiscordUserInfo from "../type/DiscordUserInfo";
import Wallet from "../klaytn/Wallet";
import { View, ViewParams } from "skydapp-common";
import Layout from "./Layout";

export default class CheckHolder implements View {

    private container: DomNode;

    public discordUser: DiscordUserInfo | undefined;

    constructor() {
        Layout.current.title = msg("GAIA_SUPERNOVA_TITLE");
        Layout.current.content.append(
            this.container = el(".check-holder-view",
                el("header",
                    el("img", { src: "/images/logo/gaia-protocol.png", alt: "Gaia Protocol Logo" }),
                    el("h1", msg("HOLDER_CHECK_TITLE")),
                    el("h2", msg("HOLDER_CHECK_DESC")),
                ),
                el("article",
                    el("a.discord-login-button", msg("HOLDER_CHECK_BUTTON"), {
                        href: "https://discord.com/api/oauth2/authorize?client_id=939800869740871693&redirect_uri=https%3A%2F%2Fgaiaprotocol.com%2Fcheckholder&response_type=code&scope=identify",
                    }),
                ),
            ));
        this.checkDiscordLogin();
    }

    private async checkDiscordLogin() {

        let code: string | undefined = new URLSearchParams(window.location.search).get("code")!;
        if (code !== null) {
            try {
                await superagent.get("https://api.gaiaprotocol.com/discord/token").query({
                    code,
                    redirect_uri: `${window.location.protocol}//${window.location.host}/checkholder`,
                });
            } catch (error) {
                console.error(error);
                code = undefined;
            }
        } else {
            code = undefined;
        }

        if (code !== undefined) {
            try {
                const result = await superagent.get("https://api.gaiaprotocol.com/discord/me").query({ code });
                this.discordUser = result.body;
                this.checkWalletConnected(code);
            } catch (error) {
                console.error(error);
            }
        }
    }

    private async checkWalletConnected(code: string) {
        if (await Wallet.connected() !== true) {
            await Wallet.connect();
        }
        const address = await Wallet.loadAddress();
        if (address !== undefined) {

            const message = "Check Holder";
            const signResult = await Wallet.signMessage(message);

            try {
                const result = await fetch("https://api.gaiaprotocol.com/checkholder", {
                    method: "POST",
                    body: JSON.stringify({
                        code,
                        signedMessage: signResult.signedMessage,
                        klipAddress: signResult.klipAddress,
                        address,
                    }),
                });
                const d = await result.json();
                if (d.genesis === true || d.supernova === true || d.stabledao === true) {
                    alert(msg("HOLDER_CHECK_SUCCESS_DESC"));
                } else {
                    alert(msg("HOLDER_CHECK_FAIL_DESC"));
                }
            } catch (error) {
                console.error(error);
            }
        }
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
