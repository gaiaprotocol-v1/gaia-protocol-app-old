import { View, ViewParams } from "skydapp-common";
export default class Genesis implements View {
    private container;
    private totalKlayDisplay;
    private totalEmergencyDisplay;
    private nftList;
    private interval;
    private tokenIds;
    private usdcs;
    private usdcTokenIds;
    constructor();
    private loadNFTsDebouncer;
    private loadNFTs;
    changeParams(params: ViewParams, uri: string): void;
    close(): void;
}
//# sourceMappingURL=Genesis.d.ts.map