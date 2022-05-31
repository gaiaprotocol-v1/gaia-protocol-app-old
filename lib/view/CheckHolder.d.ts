import DiscordUserInfo from "../type/DiscordUserInfo";
import { View, ViewParams } from "skydapp-common";
export default class CheckHolder implements View {
    private container;
    discordUser: DiscordUserInfo | undefined;
    constructor();
    private checkDiscordLogin;
    private checkWalletConnected;
    changeParams(params: ViewParams, uri: string): void;
    close(): void;
}
//# sourceMappingURL=CheckHolder.d.ts.map