import { View, ViewParams } from "skydapp-common";
export default class Supernova implements View {
    private container;
    private interval;
    private tokenIds;
    private nftList;
    constructor();
    private loadEthNFTsDebouncer;
    private loadPolygonNFTsDebouncer;
    private loadKlaytnNFTsDebouncer;
    private load;
    private loadEthNFTs;
    private loadPolygonNFTs;
    private loadKlaytnNFTs;
    changeParams(params: ViewParams, uri: string): void;
    close(): void;
}
//# sourceMappingURL=Supernova.d.ts.map