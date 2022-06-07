import { DomNode, el, msg } from "skydapp-browser";
import dayjs from "dayjs";
import ViewUtil from "../view/ViewUtil";

export default class GovernancesItem extends DomNode {
    private statusDisplay: DomNode;
    private nftDisplay: DomNode;

    constructor(id: string, name: string, status: string, nfts: Array<string>, endTime: number) {

        super(".governance-item");
        this.append(
            el("a", {
                click: () => {
                    ViewUtil.go(`/governance/${id}`);
                }
            },
                el("h6", name),
                this.statusDisplay = el(".status", status),
                this.nftDisplay = el(".nfts"),
                el(".endTime", `${dayjs(endTime).format("YY. MM. DD")}`),
            ),
            el("hr"),
        );

        this.init(nfts, status);
    }

    public init(nfts: Array<string>, status: string): void {
        this.loadNfts(nfts);
        this.loadStatus(status);
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
                this.statusDisplay.style({
                    color: "#999",
                    "border-color": "#999"
                })
                break;
            case "done":
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

    public delete() {
        super.delete();
    }
}
