import { EventContainer } from "skydapp-common";
declare class KlaytnWallet extends EventContainer {
    constructor();
    private checkConnected;
    loadAddress(): Promise<string | undefined>;
    connected(): Promise<boolean>;
    connect(): Promise<void>;
    signMessage(message: string): Promise<{
        signedMessage?: string;
        klipAddress?: string;
    }>;
}
declare const _default: KlaytnWallet;
export default _default;
//# sourceMappingURL=KlaytnWallet.d.ts.map