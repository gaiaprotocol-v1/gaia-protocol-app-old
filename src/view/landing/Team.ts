import { DomNode, el, msg } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import Layout from "../Layout";

export default class Team implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "Team";
        Layout.current.content.append(
            this.container = el(".team-view",
                el("header",
                    el("h2", msg("TEAM_TITLE"))
                ),
                el("article",
                    el(".team-container",
                        el("h3", msg("TEAM_TITLE1")),
                        el("p", msg("TEAM_DESC1")),
                    ),
                    el(".team-container",
                        el("h3", msg("TEAM_TITLE2")),
                        el("p", msg("TEAM_DESC2")),
                    ),
                    el(".team-container",
                        el("h3", msg("TEAM_TITLE3")),
                        el("p", msg("TEAM_DESC3")),
                    ),
                    el(".team-container",
                        el("h3", msg("TEAM_TITLE4")),
                        el("p", msg("TEAM_DESC4")),
                    ),
                    el(".team-container",
                        el("h3", msg("TEAM_TITLE5")),
                        el("p", msg("TEAM_DESC5")),
                    ),
                    el(".team-container",
                        el("h3", msg("TEAM_TITLE6")),
                        el("p", msg("TEAM_DESC6")),
                    ),
                    el(".team-container",
                        el("h3", msg("TEAM_TITLE7")),
                        el("p", msg("TEAM_DESC7")),
                    ),
                    el(".team-container",
                        el("h3", msg("TEAM_TITLE8")),
                        el("p", msg("TEAM_DESC8")),
                    ),
                    el(".team-container",
                        el("h3", msg("TEAM_TITLE9")),
                        el("p", msg("TEAM_DESC9")),
                    ),
                    el(".team-container",
                        el("h3", msg("TEAM_TITLE10")),
                        el("p", msg("TEAM_DESC10")),
                    ),
                ),
            ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
