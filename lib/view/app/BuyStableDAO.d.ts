import { View, ViewParams } from "skydapp-common";
export default class BuyStableDAO implements View {
    private container;
    private notice;
    private price;
    private count;
    private totalDisplay;
    private priceDisplay;
    private salesDisplay;
    private approveButton;
    private buyButton;
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