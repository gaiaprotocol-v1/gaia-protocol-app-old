import { View, ViewParams } from "skydapp-common";
export default class BuyStableDAO implements View {
    private container;
    private price;
    private count;
    private nftList;
    private tokenIds;
    private interval;
    constructor();
    private loadNFTsDebouncer;
    private loadSales;
    private loadTotal;
    private loadNFTs;
    changeParams(params: ViewParams, uri: string): void;
    close(): void;
}
//# sourceMappingURL=BuyStableDAO.d.ts.map