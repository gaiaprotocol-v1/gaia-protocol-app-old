"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const skydapp_browser_1 = require("skydapp-browser");
const CommonUtil_1 = __importDefault(require("../../CommonUtil"));
const KlaytnDividendDistributor_1 = __importDefault(require("../../contracts/KlaytnDividendDistributor"));
const PolygonDividendDistributor_1 = __importDefault(require("../../contracts/PolygonDividendDistributor"));
const EthereumWallet_1 = __importDefault(require("../../ethereum/EthereumWallet"));
const ExtWallet_1 = __importDefault(require("../../klaytn/ExtWallet"));
const KlaytnWallet_1 = __importDefault(require("../../klaytn/KlaytnWallet"));
const PolygonWallet_1 = __importDefault(require("../../polygon/PolygonWallet"));
const Layout_1 = __importDefault(require("../Layout"));
const ViewUtil_1 = __importDefault(require("../ViewUtil"));
const merkle_tree_1 = require("./merkle-tree");
const rewards_klaytn_json_1 = __importDefault(require("./rewards-klaytn.json"));
const rewards_polygon_json_1 = __importDefault(require("./rewards-polygon.json"));
class GaiaDividend {
    constructor() {
        Layout_1.default.current.title = "Gaia Dividend";
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".gaia-dividend-view", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)(".title-container", (0, skydapp_browser_1.el)("h2", "GAIA Dividend"), (0, skydapp_browser_1.el)("p", "Total Distribution of revenue from Gaia Protocol"), (0, skydapp_browser_1.el)("p.total", "21,273.343 USDC")), (0, skydapp_browser_1.el)(".buttons", (0, skydapp_browser_1.el)("a", "폴리곤 USDC 지갑에 추가", {
            click: () => {
                PolygonWallet_1.default.addToken("0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", "USDC", 6);
            },
        }), (0, skydapp_browser_1.el)("a", "클레이튼 oUSDC 지갑에 추가", {
            click: () => {
                ExtWallet_1.default.addToken("0x754288077d0ff82af7a5317c7cb8c444d421d103", "oUSDC", 6);
            },
        }))), (0, skydapp_browser_1.el)(".revenue-container", (0, skydapp_browser_1.el)("table", (0, skydapp_browser_1.el)("thead", (0, skydapp_browser_1.el)("tr", (0, skydapp_browser_1.el)("th", "차수"), (0, skydapp_browser_1.el)("th", "체인"), (0, skydapp_browser_1.el)("th", "스냅샷 당시 NFT 개수"), (0, skydapp_browser_1.el)("th", "VVIP"), (0, skydapp_browser_1.el)("th", "받을 액수"), (0, skydapp_browser_1.el)("th", "받기"))), this.list = (0, skydapp_browser_1.el)("tbody"))), (0, skydapp_browser_1.el)("footer", (0, skydapp_browser_1.el)("p", "항목별 세부내역은 디스코드 내 공지사항을 참조해주시기 바랍니다."))));
        this.load();
        KlaytnWallet_1.default.on("connect", () => this.load());
        EthereumWallet_1.default.on("connect", () => this.load());
    }
    async load() {
        const klaytnAddress = await KlaytnWallet_1.default.loadAddress();
        const ethAddress = await EthereumWallet_1.default.loadAddress();
        const klaytnCollected = klaytnAddress === undefined ? false : await KlaytnDividendDistributor_1.default.isRewardCollected(klaytnAddress, 0);
        const ethCollected = ethAddress === undefined ? false : await PolygonDividendDistributor_1.default.isRewardCollected(ethAddress, 0);
        this.list.empty();
        if (klaytnAddress !== undefined && rewards_klaytn_json_1.default[klaytnAddress] !== undefined) {
            const data = rewards_klaytn_json_1.default[klaytnAddress];
            this.list.append((0, skydapp_browser_1.el)("tr", (0, skydapp_browser_1.el)("td", { "data-column": "차수" }, "1차"), (0, skydapp_browser_1.el)("td", { "data-column": "체인" }, "클레이튼"), (0, skydapp_browser_1.el)("td", { "data-column": "스냅샷 당시 NFT 개수" }, String(data.genesisCount + data.supernovaCount + data.stableDAOCount)), (0, skydapp_browser_1.el)("td", { "data-column": "VVIP" }, data.vvip === true ? "해당" : "해당없음"), (0, skydapp_browser_1.el)("td", { "data-column": "받을 액수" }, `${CommonUtil_1.default.numberWithCommas(data.total, 3)} USDC`), (0, skydapp_browser_1.el)("td", { "data-column": "받기" }, klaytnCollected === true ? (0, skydapp_browser_1.el)("a.done", "완료") : (0, skydapp_browser_1.el)("a", "받기", {
                click: async () => {
                    const list = Object.entries(rewards_klaytn_json_1.default).map(data => {
                        return [data[0], ethers_1.utils.parseUnits(data[1].total.toFixed(6), 6).toString()];
                    });
                    const proof = (0, merkle_tree_1.getMerkleProof)(list, [klaytnAddress, ethers_1.utils.parseUnits(data.total.toFixed(6), 6).toString()]);
                    await KlaytnDividendDistributor_1.default.claimRewards([0], [ethers_1.utils.parseUnits(data.total.toFixed(6), 6)], [proof]);
                    ViewUtil_1.default.waitTransactionAndRefresh();
                },
            }))));
        }
        if (ethAddress !== undefined && rewards_polygon_json_1.default[ethAddress] !== undefined) {
            const data = rewards_polygon_json_1.default[ethAddress];
            this.list.append((0, skydapp_browser_1.el)("tr", (0, skydapp_browser_1.el)("td", { "data-column": "차수" }, "1차"), (0, skydapp_browser_1.el)("td", { "data-column": "체인" }, "이더리움"), (0, skydapp_browser_1.el)("td", { "data-column": "스냅샷 당시 NFT 개수" }, String(data.genesisCount + data.supernovaCount + data.stableDAOCount)), (0, skydapp_browser_1.el)("td", { "data-column": "VVIP" }, data.vvip === true ? "해당" : "해당없음"), (0, skydapp_browser_1.el)("td", { "data-column": "받을 액수" }, `${CommonUtil_1.default.numberWithCommas(data.total, 3)} USDC`), (0, skydapp_browser_1.el)("td", { "data-column": "받기" }, ethCollected === true ? (0, skydapp_browser_1.el)("a.done", "완료") : (0, skydapp_browser_1.el)("a", "받기", {
                click: async () => {
                    const list = Object.entries(rewards_polygon_json_1.default).map(data => {
                        return [data[0], ethers_1.utils.parseUnits(data[1].total.toFixed(6), 6).toString()];
                    });
                    const proof = (0, merkle_tree_1.getMerkleProof)(list, [ethAddress, ethers_1.utils.parseUnits(data.total.toFixed(6), 6).toString()]);
                    await PolygonDividendDistributor_1.default.claimRewards([0], [ethers_1.utils.parseUnits(data.total.toFixed(6), 6)], [proof]);
                    ViewUtil_1.default.waitTransactionAndRefresh(15000);
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