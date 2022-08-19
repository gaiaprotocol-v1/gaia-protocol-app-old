"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chart_js_1 = require("chart.js");
const dayjs_1 = __importDefault(require("dayjs"));
const skydapp_browser_1 = require("skydapp-browser");
const superagent_1 = __importDefault(require("superagent"));
const CommonUtil_1 = __importDefault(require("../../CommonUtil"));
const Layout_1 = __importDefault(require("../Layout"));
class Governance {
    constructor(params) {
        const id = params.id;
        Layout_1.default.current.title = (0, skydapp_browser_1.msg)("GOVERNANCE_TITLE");
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".governance-detail-view", (0, skydapp_browser_1.el)("header", this.title = (0, skydapp_browser_1.el)("h2"), (0, skydapp_browser_1.el)(".subtitle", this.createTime = (0, skydapp_browser_1.el)("p"), this.endTime = (0, skydapp_browser_1.el)("p"), this.nftDisplay = (0, skydapp_browser_1.el)("p"), this.statusDisplay = (0, skydapp_browser_1.el)("p.status"))), (0, skydapp_browser_1.el)("hr"), this.content = (0, skydapp_browser_1.el)(".content"), (0, skydapp_browser_1.el)("hr"), (0, skydapp_browser_1.el)("h6", "후보"), this.candidateDisplay = (0, skydapp_browser_1.el)(".candidate"), this.candidateChartDisplay = (0, skydapp_browser_1.el)("canvas"), (0, skydapp_browser_1.el)("h6", "제안자"), this.creatorDisplay = (0, skydapp_browser_1.el)(".creator")));
        this.init(id);
    }
    init(id) {
        this.loadGovernance(id);
    }
    async loadGovernance(id) {
        const res = await superagent_1.default.get(`https://api.gaiaprotocol.com/vote/${id}`);
        const data = res.body.data;
        this.title.empty().appendText(data.title);
        this.createTime.empty().appendText(`생성일 | ${(0, dayjs_1.default)(data.createTime).format("YYYY. MM. DD")}`);
        this.endTime.empty().appendText(`종료일 | ${(0, dayjs_1.default)(data.createTime).format("YYYY. MM. DD")}`);
        this.content.appendText(data.content);
        this.creatorDisplay.empty().appendText(`@${data.creator}`);
        this.loadNfts(data.nfts);
        this.loadStatus(data.status);
        this.loadCandidate(data.candidate);
        this.loadChart(data.candidate);
    }
    loadCandidate(candidate) {
        candidate.map(data => {
            this.candidateDisplay.append((0, skydapp_browser_1.el)(".candidate-container", (0, skydapp_browser_1.el)("p", data.name), (0, skydapp_browser_1.el)("p.vote", `${data.users.length.toLocaleString("ko-KR")}표 받음`)));
        });
    }
    loadChart(candidate) {
        const chartData = {
            labels: [],
            datasets: [{
                    data: [],
                    backgroundColor: [],
                }],
        };
        candidate.map(data => {
            chartData.labels.push(data.name);
            chartData.datasets[0].data.push(data.users.length);
            chartData.datasets[0].backgroundColor.push(CommonUtil_1.default.randColorHex());
        });
        chart_js_1.Chart.register(...chart_js_1.registerables);
        new chart_js_1.Chart(this.candidateChartDisplay.domElement.getContext("2d"), {
            type: "pie",
            data: chartData,
            option: {
                responsive: true,
                color: "#ffffff",
                plugins: {
                    legend: {
                        position: "bottom",
                    },
                },
            },
        });
    }
    loadStatus(status) {
        switch (status) {
            case "todo":
                this.statusDisplay.empty().appendText("Progress");
                this.statusDisplay.style({
                    color: "#27a102",
                    "border-color": "#27a102"
                });
                break;
            case "cancel":
                this.statusDisplay.empty().appendText("Cancel");
                this.statusDisplay.style({
                    color: "#999",
                    "border-color": "#999"
                });
                break;
            case "done":
                this.statusDisplay.empty().appendText("Done");
                this.statusDisplay.style({
                    color: "#999",
                    "border-color": "#999"
                });
                break;
        }
    }
    loadNfts(nfts) {
        nfts.map((data) => {
            switch (data) {
                case "genesisCount":
                    this.nftDisplay.appendText("Genesis, ");
                    break;
                case "supernovaCount":
                    this.nftDisplay.appendText("Super nova, ");
                    break;
                case "stabledaoCount":
                    this.nftDisplay.appendText("Stable DAO ");
                    break;
                default:
                    this.nftDisplay.appendText(data);
                    break;
            }
        });
    }
    changeParams(params, uri) {
    }
    close() {
        this.container.delete();
    }
}
exports.default = Governance;
//# sourceMappingURL=GovernanceDetail.js.map