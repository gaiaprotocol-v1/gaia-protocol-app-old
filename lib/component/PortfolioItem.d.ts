import { DomNode } from "skydapp-browser";
export default class PortfolioItem extends DomNode {
    private titleDisplay;
    private imageDisplay;
    private desc1Display;
    private desc2Display;
    private desc3Display;
    private priceDisplay;
    private rateDisplay;
    constructor(id: number, symbol: string, name: string, startPrice: number, startPriceUSD: number, desc2: string, desc3: string, desc4?: string, desc5?: string);
    getPrice(symbol: string, price: number, priceUSD: number): Promise<void>;
    delete(): void;
}
//# sourceMappingURL=PortfolioItem.d.ts.map