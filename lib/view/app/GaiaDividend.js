"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const CommonUtil_1 = __importDefault(require("../../CommonUtil"));
const Alert_1 = __importDefault(require("../../component/shared/dialogue/Alert"));
const EthereumWallet_1 = __importDefault(require("../../ethereum/EthereumWallet"));
const KlaytnWallet_1 = __importDefault(require("../../klaytn/KlaytnWallet"));
const Layout_1 = __importDefault(require("../Layout"));
const rewards_klaytn_json_1 = __importDefault(require("./rewards-klaytn.json"));
const rewards_polygon_json_1 = __importDefault(require("./rewards-polygon.json"));
class GaiaDividend {
    constructor() {
        Layout_1.default.current.title = "Gaia Dividend";
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".gaia-dividend-view", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)(".title-container", (0, skydapp_browser_1.el)("h2", "GAIA Dividend"), (0, skydapp_browser_1.el)("p", "Total Distribution of revenue from Gaia Protocol"), (0, skydapp_browser_1.el)("p.total", "21,273.343 USDC"))), (0, skydapp_browser_1.el)(".revenue-container", (0, skydapp_browser_1.el)("table", (0, skydapp_browser_1.el)("thead", (0, skydapp_browser_1.el)("tr", (0, skydapp_browser_1.el)("th", "차수"), (0, skydapp_browser_1.el)("th", "체인"), (0, skydapp_browser_1.el)("th", "스냅샷 당시 NFT 개수"), (0, skydapp_browser_1.el)("th", "받을 액수"), (0, skydapp_browser_1.el)("th", "받기"))), this.list = (0, skydapp_browser_1.el)("tbody"))), (0, skydapp_browser_1.el)("footer", (0, skydapp_browser_1.el)("p", "항목별 세부내역은 디스코드 내 공지사항을 참조해주시기 바랍니다."))));
        this.load();
        KlaytnWallet_1.default.on("connect", () => this.load());
        EthereumWallet_1.default.on("connect", () => this.load());
    }
    async load() {
        const klaytnAddress = await KlaytnWallet_1.default.loadAddress();
        const ethAddress = await EthereumWallet_1.default.loadAddress();
        this.list.empty();
        if (klaytnAddress !== undefined && rewards_klaytn_json_1.default[klaytnAddress] !== undefined) {
            const data = rewards_klaytn_json_1.default[klaytnAddress];
            this.list.append((0, skydapp_browser_1.el)("tr", (0, skydapp_browser_1.el)("td", "1차"), (0, skydapp_browser_1.el)("td", "클레이튼"), (0, skydapp_browser_1.el)("td", String(data.genesisCount + data.supernovaCount + data.stableDAOCount)), (0, skydapp_browser_1.el)("td", `${CommonUtil_1.default.numberWithCommas(data.total, 3)} USDC`), (0, skydapp_browser_1.el)("td", (0, skydapp_browser_1.el)("a", "받기", {
                click: () => {
                    new Alert_1.default("알림", "디비덴드 수령 기능을 작성중입니다.");
                },
            }))));
        }
        if (ethAddress !== undefined && rewards_polygon_json_1.default[ethAddress] !== undefined) {
            const data = rewards_polygon_json_1.default[ethAddress];
            this.list.append((0, skydapp_browser_1.el)("tr", (0, skydapp_browser_1.el)("td", "1차"), (0, skydapp_browser_1.el)("td", "이더리움"), (0, skydapp_browser_1.el)("td", String(data.genesisCount + data.supernovaCount + data.stableDAOCount)), (0, skydapp_browser_1.el)("td", `${CommonUtil_1.default.numberWithCommas(data.total, 3)} USDC`), (0, skydapp_browser_1.el)("td", (0, skydapp_browser_1.el)("a", "받기", {
                click: () => {
                    new Alert_1.default("알림", "디비덴드 수령 기능을 작성중입니다.");
                },
            }))));
        }
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = GaiaDividend;
//# sourceMappingURL=GaiaDividend.js.map