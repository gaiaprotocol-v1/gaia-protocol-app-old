import { DomNode, el, msg } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import Layout from "../Layout";

export default class Partners implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "Partners";
        Layout.current.content.append(
            this.container = el(".partners-view",
                el("h2", msg("PARTNERSHIP_TITLE")),
                el("section",
                    el("a", { href: "https://dexata.kr", target: "_blank" },
                        el("img", { src: "/images/view/partners/dexata.svg", "data-aos": "fade-up" }),
                    ),
                    el("a", { href: "https://klayswap.com/", target: "_blank" },
                        el("img", { src: "/images/view/partners/klayswap.svg", "data-aos": "fade-up" }),
                    ),
                    el("a", { href: "https://electrik.finance/", target: "_blank" },
                        el("img.electrikFinance", { src: "/images/view/partners/electrik-finance.png", "data-aos": "fade-up" }),
                    ),
                    el("a", { href: "https://swapscanner.io", target: "_blank" },
                        el("img", { src: "/images/view/partners/swapscanner.svg", "data-aos": "fade-up" }),
                    ),
                    el("a", { href: "http://www.townverse.info/", target: "_blank" },
                        el("img", { src: "/images/view/partners/townverse.svg", "data-aos": "fade-up" }),
                    ),
                ),
            ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
