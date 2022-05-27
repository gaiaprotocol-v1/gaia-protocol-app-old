import { DomNode, el } from "skydapp-browser";
import AOS from "aos";

export default class SupernovaEventItem extends DomNode {

    constructor(image: string, name: string, date: string) {
        super(".supernova-event-item");
        this.append(
            el("section", { "data-aos": "flip-left" },
                el("img", { src: image }),
                el(".content",
                    el("h6", name),
                    el(".date", date)
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
