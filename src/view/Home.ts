import { DomNode, el, msg } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import Prompt from "../component/shared/dialogue/Prompt";
import Layout from "./Layout";
import ViewUtil from "./ViewUtil";

export default class Home implements View {

    private container: DomNode;
    private interval: any;


    constructor() {
        Layout.current.title = "Home";
        Layout.current.content.append(this.container = el(".home-view",
            el("header",
                el("img", { src: "/images/logo/gaia-protocol-text.png", alt: "Gaia Protocol Logo" }),
            ),
            el("section",
                el("a.card", { click: () => { ViewUtil.go("genesis") } },
                    el("img", { src: "/images/logo/gaia-genesis.png", alt: "gaia genesis logo" }),
                    el(".content",
                        el("h2", msg("GAIA_GENESIS_TITLE")),
                        el("p", msg("GAIA_GENESIS_DESC")),
                    ),
                ),
                el("a.card", { href: "https://twitter.com/gaiabridge", target: "_blank" },
                    el("img", { src: "/images/logo/gaia-bridge.png", alt: "gaia bridge" }),
                    el(".content",
                        el("h2.bridge", msg("GAIA_BRIDGE_TITLE")),
                        el("p", msg("GAIA_BRIDGE_DESC")),
                    ),
                ),
                el("a.card", { click: () => { ViewUtil.go("supernova") } },
                    el("img", { src: "/images/logo/gaia-supernova.png", alt: "gaia supernova" }),
                    el(".content",
                        el("h2.supernova", msg("GAIA_SUPERNOVA_TITLE")),
                        el("p", msg("GAIA_SUPERNOVA_DESC")),
                    ),
                ),
                el("a.card", { click: () => { ViewUtil.go("stabledao") } },
                    el("img", { src: "/images/logo/gaia-stable-dao.png", alt: "gaia stable dao" }),
                    el(".content",
                        el("h2.stabledao", msg("GAIA_STABLE_DAO_TITLE")),
                        el("p", msg("GAIA_STABLE_DAO_DESC")),
                    ),
                ),
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        clearInterval(this.interval);
        this.container.delete();
    }
}
