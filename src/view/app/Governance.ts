import { DomNode, el, msg } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import superagent from "superagent";
import GovernancesItem from "../../component/GovernanceItem";
import Layout from "../Layout";

export default class Governance implements View {

    private container: DomNode;
    private governanceList: DomNode;

    constructor() {
        Layout.current.title = msg("GOVERNANCE_TITLE");
        let select: DomNode<HTMLSelectElement>
        Layout.current.content.append(this.container = el(".governance-view",
            el("header",
                el(".title-container",
                    el("h2", "GAIA GOVERNANCE"),
                    el("p", "Changing with your choice"),
                ),
            ),
            el(".governance-table",
                el(".governance-header",
                    el("h3", "View governance list"),
                    select = el("select",
                        el("option", "all"),
                        el("option", "progress"),
                        el("option", "cancel"),
                        el("option", "done"),
                        {
                            change: () => {
                                this.loadGovernance(select.domElement.value);
                            }
                        }
                    ),
                ),
                el("hr"),
                this.governanceList = el(".governance-list"),
            ),
        ));
        this.init(select.domElement.value);
    }

    private init(status: string): void {
        this.loadGovernance(status);
    }

    private async loadGovernance(status: string): Promise<void> {
        this.governanceList.empty();
        if (status === "all") {
            const res = await superagent.get(`https://api.gaiaprotocol.com/votes`);
            res.body.data.map((data: any) => {
                this.governanceList.append(
                    new GovernancesItem(data.id, data.title, data.status, data.nfts, data.endTime),
                );
            });
        } else if (status === "progress") {
            const res = await superagent.get(`https://api.gaiaprotocol.com/votes?status=todo`);
            res.body.data.map((data: any) => {
                this.governanceList.append(
                    new GovernancesItem(data.id, data.title, data.status, data.nfts, data.endTime),
                );
            });
        } else {
            const res = await superagent.get(`https://api.gaiaprotocol.com/votes?status=${status}`);
            res.body.data.map((data: any) => {
                this.governanceList.append(
                    new GovernancesItem(data.id, data.title, data.status, data.nfts, data.endTime),
                );
            });
        }
    }

    public changeParams(params: ViewParams, uri: string): void {
    }

    public close(): void {
        this.container.delete();
    }
}
