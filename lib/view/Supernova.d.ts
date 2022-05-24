import { View, ViewParams } from "skydapp-common";
export default class Supernova implements View {
    private container;
    private interval;
    private tokenIds;
    private nftList;
    private allRoyaltyDisplay;
    private nftRoyaltyDisplay;
    private allNftDisplay;
    private blockDisplay;
    private receivedDisplay;
    private totalInterestDisplay;
    constructor();
    private resizeDebouncer;
    private load;
    private loadNFTs;
    changeParams(params: ViewParams, uri: string): void;
    close(): void;
}
//# sourceMappingURL=Supernova.d.ts.map