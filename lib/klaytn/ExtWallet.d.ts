import { EventContainer } from "skydapp-common";
declare class ExtWallet extends EventContainer {
    private klaytn;
    caver: any | undefined;
    constructor();
    get installed(): boolean;
    private checkConnected;
    loadAddress(): Promise<string | undefined>;
    loadChainId(): Promise<any>;
    connected(): Promise<boolean>;
    connect(): Promise<void>;
    createContract(address: string, abi: any): any;
    addToken(address: string, symbol: string, decimals: number, image?: string): void;
    signMessage(message: string): Promise<any>;
}
declare const _default: ExtWallet;
export default _default;
//# sourceMappingURL=ExtWallet.d.ts.map