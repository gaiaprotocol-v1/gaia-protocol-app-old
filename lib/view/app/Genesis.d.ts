import { View, ViewParams } from "skydapp-common";
export default class Genesis implements View {
    private container;
    private nftList;
    private interval;
    private tokenIds;
    private usdcs;
    private usdcTokenIds;
    constructor();
    private loadEthNFTsDebouncer;
    private loadPolygonNFTsDebouncer;
    private loadKlaytnNFTsDebouncer;
    private loadEthNFTs;
    private loadPolygonNFTs;
    private loadKlaytnNFTs;
    changeParams(params: ViewParams, uri: string): void;
    close(): void;
}
//# sourceMappingURL=Genesis.d.ts.map