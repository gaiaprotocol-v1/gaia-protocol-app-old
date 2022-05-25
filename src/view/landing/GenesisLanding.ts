import { DomNode, el, msg } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import Layout from "../Layout";
import AOS from "aos";

export default class GenesisLanding implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "Genesis";
        Layout.current.content.append(
            this.container = el(".landing-genesis-view",
                el(".init-container", { id: "init" },
                    el("img", { src: "/images/logo/gaia-genesis-text.png", alt: "gaia genesis logo", "data-aos": "fade-up", }),
                    el("p", { "data-aos": "fade-up" }, msg("GENESIS_INIT_DESC")),
                ),
                el(".gaia-container", { id: "WHY" },
                    el("h2", msg("GENESIS_WHY_TITLE"), { "data-aos": "fade-up" },),
                    el("p", { "data-aos": "fade-up" }, msg("GENESIS_WHY_DESC")),
                ),
                el(".buyback-container", { id: "FUND" },
                    el("h2", msg("GENESIS_BUYBACK_FUND_TITLE"), { "data-aos": "fade-up", }),
                    el("p", { "data-aos": "fade-up", }, msg("GENESIS_BUYBACK_FUND_DESC"))
                ),
                el(".nft-container", { id: "NFT" },
                    el("h2", msg("GENESIS_SNEAK_PEEK_TITLE"), { "data-aos": "fade-up" }),
                    el(".swiper-slide",
                        el("img", { src: "/images/view/genesis-landing/sneakpeek1.jpeg", "data-aos": "fade-up" }),
                        el("img", { src: "/images/view/genesis-landing/sneakpeek2.jpeg", "data-aos": "fade-up" }),
                        el("img", { src: "/images/view/genesis-landing/sneakpeek3.jpeg", "data-aos": "fade-up" }),
                        el("img", { src: "/images/view/genesis-landing/sneakpeek4.jpeg", "data-aos": "fade-up" }),
                        el("img", { src: "/images/view/genesis-landing/sneakpeek5.jpeg", "data-aos": "fade-up" }),
                        el("img", { src: "/images/view/genesis-landing/sneakpeek6.jpeg", "data-aos": "fade-up" }),
                        el("img", { src: "/images/view/genesis-landing/sneakpeek7.jpeg", "data-aos": "fade-up" }),
                        el("img", { src: "/images/view/genesis-landing/sneakpeek8.jpeg", "data-aos": "fade-up" }),
                        el("img", { src: "/images/view/genesis-landing/sneakpeek9.jpeg", "data-aos": "fade-up" }),
                    ),
                ),
                el(".mint-container", { id: "MINT" },
                    el("h2", msg("GENESIS_MINT_TITLE"), { "data-aos": "fade-up" },),
                    el("p", msg("GENESIS_MINT_DESC"), { "data-aos": "fade-up" },),
                    el("a", msg("GENESIS_MINT_BUTTON"),)
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
