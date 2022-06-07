import dayjs from "dayjs";
import { DomNode, el, msg } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import superagent from "superagent";
import GovernancesItem from "../../component/GovernanceItem";
import Layout from "../Layout";

export default class Governance implements View {

    private container: DomNode;

    private title: DomNode;
    private createTime: DomNode;
    private endTime: DomNode;
    private nftDisplay: DomNode;
    private statusDisplay: DomNode;
    private candidateDisplay: DomNode;
    private creatorDisplay: DomNode;
    private content: DomNode;

    constructor(params: ViewParams) {
        const id = params.id;

        Layout.current.title = msg("GOVERNANCE_TITLE");
        Layout.current.content.append(this.container = el(".governance-detail-view",
            el("header",
                this.title = el("h2"),
                el(".subtitle",
                    this.createTime = el("p"),
                    this.endTime = el("p"),
                    this.nftDisplay = el("p"),
                    this.statusDisplay = el("p.status"),
                ),
            ),
            el("hr"),
            this.content = el(".content"),
            el("hr"),
            el("h6", "후보"),
            this.candidateDisplay = el(".candidate"),
            el("h6", "제안자"),
            this.creatorDisplay = el(".creator"),
        ),
        );
        this.init(id!);
    }

    private init(id: string): void {
        this.loadGovernance(id);
    }

    private async loadGovernance(id: string): Promise<void> {
        const res = await superagent.get(`https://api.gaiaprotocol.com/vote/${id}`);
        const data = res.body.data;
        this.title.empty().appendText(data.title);
        this.createTime.empty().appendText(`생성일 | ${dayjs(data.createTime).format("YYYY. MM. DD")}`);
        this.endTime.empty().appendText(`종료일 | ${dayjs(data.createTime).format("YYYY. MM. DD")}`);
        this.content.empty().appendText(data.content);
        this.creatorDisplay.empty().appendText(`@${data.creator}`);
        this.loadNfts(data.nfts);
        this.loadStatus(data.status);
        this.loadCandidate(data.candidate);
    }

    public loadCandidate(candidate: Array<{ name: string, users: Array<string> }>): void {
        candidate.map(data => {
            this.candidateDisplay.append(
                el(".candidate-container",
                    el("p", data.name),
                    el("p.vote", `${data.users.length.toLocaleString("ko-KR")}표 받음`),
                ),
            );
        })
    }

    public loadStatus(status: string): void {
        switch (status) {
            case "todo":
                this.statusDisplay.empty().appendText("Progress");
                this.statusDisplay.style({
                    color: "#27a102",
                    "border-color": "#27a102"
                })
                break;
            case "cancel":
                this.statusDisplay.empty().appendText("Cancel");
                this.statusDisplay.style({
                    color: "#999",
                    "border-color": "#999"
                })
                break;
            case "done":
                this.statusDisplay.empty().appendText("Done");
                this.statusDisplay.style({
                    color: "#999",
                    "border-color": "#999"
                })
                break;
        }
    }

    public loadNfts(nfts: Array<string>): void {
        nfts.map((data: string) => {
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

    public changeParams(params: ViewParams, uri: string): void {
    }

    public close(): void {
        this.container.delete();
    }
}
