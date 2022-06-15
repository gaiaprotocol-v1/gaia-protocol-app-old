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
                        el("img", { src: "/images/view/partners/dexata.svg" }),
                    ),
                    el("a", { href: "https://klayswap.com/", target: "_blank" },
                        el("img", { src: "/images/view/partners/klayswap.svg" }),
                    ),
                    el("a", { href: "https://electrik.finance/", target: "_blank" },
                        el("img.electrikFinance", { src: "/images/view/partners/electrik-finance.png" }),
                    ),
                    el("a", { href: "https://swapscanner.io", target: "_blank" },
                        el("img", { src: "/images/view/partners/swapscanner.svg" }),
                    ),
                    el("a", { href: "https://hypesalt.com/", target: "_blank" },
                        el("img", { src: "/images/view/partners/hypesalt.svg" }),
                    ),
                    el("a", { href: "https://www.projectspoon.net/", target: "_blank" },
                        el("img.spoon", { src: "/images/view/partners/spoon.png" }),
                    ),
                    el("a", { href: "http://www.townverse.info/", target: "_blank" },
                        el("img", { src: "/images/view/partners/townverse.svg" }),
                    ),
                    el("a", { href: "http://layerlab.io/", target: "_blank" },
                        el("img.layerlab", { src: "/images/view/partners/layerlab.png" }),
                    ),
                    el("a", { href: "http://www.dncmedia.co.kr/", target: "_blank" },
                        el("img.dncMedia", { src: "/images/view/partners/dncMedia.png" }),
                    ),
                    el("a", { href: "https://lazygourmet.club/", target: "_blank" },
                        el("img.lazygourmet", { src: "/images/view/partners/lazyGourmetClub.png" }),
                    ),
                ),
            ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
