import { DomNode, el, msg } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import SupernovaEventItem from "../../component/SupernovaEventItem";
import supernovaEvent from "./supernovaEvent.json";
import Layout from "../Layout";
import AOS from "aos";

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

    private loadEvent(): void {
        supernovaEvent.map((data) => {
            this.eventList.append(
                new SupernovaEventItem(data.image, data.name, data.date),
            );
        })
    }

    public changeParams(params: ViewParams, uri: string): void {
    }

    public close(): void {
        this.container.delete();
    }
}
