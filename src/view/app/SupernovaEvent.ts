import { DomNode, el, msg } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import AOS from "aos";
import superagent from "superagent";
import SupernovaEventItem from "../../component/SupernovaEventItem";
import Layout from "../Layout";

export default class SupernovaEvent implements View {

    private container: DomNode;
    private eventList: DomNode;

    constructor() {
        Layout.current.title = msg("GAIA_SUPERNOVA_TITLE");
        Layout.current.content.append(this.container = el(".supernova-event-view",
            el("header",
                el(".title-container",
                    el("h2", "GAIA SUPERNOVA EVENT", { "data-aos": "zoom-in" }),
                    el("p", "A new explosive gift event", { "data-aos": "zoom-in" }),
                ),
            ),
            this.eventList = el(".event-list"),
        ));
        this.init();
    }

    private init(): void {
        AOS.init();
        this.loadEvent();
    }

    private async loadEvent(): Promise<void> {
        const res = await superagent.get("https://api.gaiaprotocol.com/supernova/events");
        res.body.data.map((data: any) => {
            this.eventList.append(
                new SupernovaEventItem(data.imgUrl, data.name, data.rewardTime),
            );
        })
    }

    public changeParams(params: ViewParams, uri: string): void {
    }

    public close(): void {
        this.container.delete();
    }
}
