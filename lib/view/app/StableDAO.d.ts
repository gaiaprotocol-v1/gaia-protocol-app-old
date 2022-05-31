import { View, ViewParams } from "skydapp-common";
export default class StableDAO implements View {
    private container;
    private interval;
    private interestMeshDisplay;
    private interestKrwDisplay;
    private tokenIds;
    private nftList;
    constructor();
    private loadNFTsDebouncer;
    private loadNFTs;
    private loadInterest;
    changeParams(params: ViewParams, uri: string): void;
    close(): void;
}
//# sourceMappingURL=StableDAO.d.ts.map