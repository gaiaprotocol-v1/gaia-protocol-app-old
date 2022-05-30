import { DomNode, el } from "skydapp-browser";
import AOS from "aos";
import dayjs from "dayjs";

export default class SupernovaEventItem extends DomNode {

    constructor(image: string, name: string, date: number) {
        super(".supernova-event-item");
        this.append(
            el("section", { "data-aos": "flip-left" },
                el("img", { src: image }),
                el(".content",
                    el("h6", name),
                    el(".date", `${dayjs.unix(date).format("YYYY-MM-DD")}`)
                ),
            ),
        );
        this.init();
    }

    private init(): void {
        AOS.init();
    }

    public delete() {
        super.delete();
    }
}
