import { View, ViewParams } from "skydapp-common";
export default class BuyStableDAO implements View {
    private container;
    private notice;
    private tabType;
    private ticket;
    private price;
    private count;
    private kronosTab;
    private supernovaTab;
    private publicTab;
    private totalDisplay;
    private ticketDisplay;
    private priceDisplay;
    private salesDisplay;
    private approveButton;
    private buyButton;
    private nftList;
    private tokenIds;
    private tabStore;
    private interval;
    constructor();
    private loadNFTsDebouncer;
    private loadSales;
    private loadTab;
    private loadTotal;
    private loadNFTs;
    changeParams(params: ViewParams, uri: string): void;
    close(): void;
}
//# sourceMappingURL=BuyStableDAO.d.ts.map