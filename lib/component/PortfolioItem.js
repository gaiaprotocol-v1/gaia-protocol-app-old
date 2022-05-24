"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const CommonUtil_1 = __importDefault(require("../CommonUtil"));
class PortfolioItem extends skydapp_browser_1.DomNode {
    constructor(id, symbol, name, startPrice, startPriceUSD, desc2, desc3, desc4, desc5) {
        super(".portfolio-item");
        this.append((0, skydapp_browser_1.el)(".title", this.titleDisplay = (0, skydapp_browser_1.el)("h2", `${id}${(0, skydapp_browser_1.msg)("PORTFOLIO_ITEM_TITLE")}`), this.imageDisplay = (0, skydapp_browser_1.el)("img", { src: `/images/logo/${name}.png`, alt: "logo" })), (0, skydapp_browser_1.el)(".content", this.desc1Display = (0, skydapp_browser_1.el)("p", `${(0, skydapp_browser_1.msg)("PORTFOLIO_ITEM_DESC1")} ${symbol.toUpperCase()} (${name.toUpperCase()})`), this.desc2Display = (0, skydapp_browser_1.el)("p", `${(0, skydapp_browser_1.msg)("PORTFOLIO_ITEM_DESC2")} ${desc2}`), (0, skydapp_browser_1.el)("p", `${(0, skydapp_browser_1.msg)("START_PRICE_TITLE")} ₩${CommonUtil_1.default.numberWithCommas(startPrice.toString())}`), this.priceDisplay = (0, skydapp_browser_1.el)("p", (0, skydapp_browser_1.msg)("PRESENT_PRICE_TITLE")), (0, skydapp_browser_1.el)(".price-container", (0, skydapp_browser_1.el)("p", (0, skydapp_browser_1.msg)("RATE_OF_RETURN_TITLE")), this.rateDisplay = (0, skydapp_browser_1.el)("p.rate", "")), this.desc3Display = (0, skydapp_browser_1.el)("p", `${(0, skydapp_browser_1.msg)("PORTFOLIO_ITEM_DESC3")} ${desc3}`)));
        this.getPrice(symbol, startPrice, startPriceUSD);
    }
    async getPrice(symbol, price, priceUSD) {
        const krw = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=krw&ids=${symbol}`);
        const usd = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${symbol}`);
        const dataKRW = await krw.json();
        const dataUSD = await usd.json();
        const rate = (dataKRW[0].current_price / price) * 100 - 100;
        this.priceDisplay.empty();
        this.priceDisplay.appendText(`${(0, skydapp_browser_1.msg)("PRESENT_PRICE_TITLE")} ₩${CommonUtil_1.default.numberWithCommas(dataKRW[0].current_price)}`);
        const rateKRW = (dataKRW[0].current_price - price) * 1938.279905549;
        const rateUSD = (dataUSD[0].current_price - priceUSD) * 1938.279905549;
        this.rateDisplay.appendText(`${rate.toFixed(2)}% (₩ ${CommonUtil_1.default.numberWithCommas(rateKRW.toFixed(2))} / $ ${CommonUtil_1.default.numberWithCommas(rateUSD.toFixed(2))})`);
        if (rate > 0) {
            this.rateDisplay.style({
                color: "#D9000F"
            });
        }
        else {
            this.rateDisplay.style({
                color: "#1738C1"
            });
        }
    }
    delete() {
        super.delete();
    }
}
exports.default = PortfolioItem;
//# sourceMappingURL=PortfolioItem.js.map