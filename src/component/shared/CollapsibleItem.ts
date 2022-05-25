import { DomNode, el } from "skydapp-browser";

export default class CollapsibleItem extends DomNode {
    private title: DomNode;
    private content: DomNode;
    constructor(title: string, desc: string) {
        super(".collapsible-item");
        this.append(
            el("section", { "data-aos": "fade-up" },
                this.title = el("button.collapsible", title,
                    {
                        click: () => {
                            if (this.content.domElement.style.display === "block") {
                                this.content.style({
                                    display: "none",
                                });
                                this.title.style({
                                    backgroundColor: "none",
                                });
                            } else {
                                this.content.style({
                                    display: "block",
                                });
                                this.title.style({
                                    backgroundColor: "#00445A",
                                });
                            }
                        }
                    }),
                this.content = el(".content",
                    el("p", desc),
                ),
            ),
        );
    }
}
