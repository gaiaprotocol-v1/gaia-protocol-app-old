import { View, ViewParams } from "skydapp-common";
export default class StableDAO implements View {
    private container;
    private interval;
    private tokenIds;
    private nftList;
    constructor();
    private loadEthNFTsDebouncer;
    private loadPolygonNFTsDebouncer;
    private loadKlaytnNFTsDebouncer;
    private loadEthNFTs;
    private loadPolygonNFTs;
    private loadKlaytnNFTs;
    private loadInterest;
    changeParams(params: ViewParams, uri: string): void;
    close(): void;
}
//# sourceMappingURL=StableDAO.d.ts.map