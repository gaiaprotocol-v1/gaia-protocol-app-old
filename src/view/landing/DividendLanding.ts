import { DomNode, el, msg } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import Layout from "../Layout";
import AOS from "aos";

export default class DividendLanding implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "Dividend";
        Layout.current.content.append(
            this.container = el(".landing-dividend-view",
                el(".init-container",
                    el("img", { "data-aos": "fade-right", src: "/images/logo/gaia-dividend.png", alt: "gaia dividend logo" }),
                    el("p", { "data-aos": "fade-left", }, msg("DIVIDEND_INIT_DESC")),
                ),
                el(".strategy-container",
                    el("h2", { "data-aos": "fade-right" }, msg("DIVIDEND_STRATEGY_TITLE")),
                    el("img", { src: "/images/view/dividend-landing/flow-map.png", alt: "flow map", "data-aos": "fade-right" }),
                    el("p", { "data-aos": "fade-left", }, msg("DIVIDEND_STRATEGY_DESC")),
                ),
                el(".app-container",
                    el("p", { "data-aos": "fade-left", }, msg("DIVIDEND_APP_DESC")),
                ),
            ));
        this.init();
    }

    private init(): void {
        AOS.init();
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
