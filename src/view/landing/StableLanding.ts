import AOS from "aos";
import { DomNode, el, msg } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import CollapsibleItem from "../../component/shared/CollapsibleItem";
import Layout from "../Layout";
import ViewUtil from "../ViewUtil";

export default class StableDaoLanding implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "StableDAO";
        Layout.current.content.append(
            this.container = el(".landing-stable-dao-view",
                el(".init-container", { id: "init" },
                    el("img", { "data-aos": "fade-up" }, { src: "/images/logo/gaia-stabledao-text.png", alt: "gaia stable dao logo" }),
                    el("a", { click: () => { ViewUtil.go("/stabledao/buy") }, "data-aos": "fade-up" }, msg("STABLE_DAO_MINT_BUY_BUTTON")),
                    el("p", { "data-aos": "fade-up" }, msg("STABLE_DAO_INIT_DESC")),
                    el("img.flow-map", { src: "/images/view/stabledao-landing/flow-map.png", alt: "flow map", "data-aos": "fade-up" }),
                ),
                el(".video-container",
                    el("h2", { "data-aos": "fade-up" }, msg("STABLE_DAO_VIDEO_TITLE")),
                    el(".video", { "data-aos": "fade-up" },
                        el("iframe", { width: "100%", height: "315px", src: "https://www.youtube.com/embed//tWDvU_XiS-c", title: "gaia stable dao introduction video" })
                    ),
                ),
                el(".project-container", { id: "project" },
                    el("h2", { "data-aos": "fade-up" }, msg("STABLE_DAO_PROJECT_TITLE")),
                    el("img", { src: "/images/view/stabledao-landing/ama.png", alt: "ama", "data-aos": "fade-up" }),
                    el("a", {
                        href: "/Gaia_Protocol_4th_AMA_Final.pdf",
                        download: ""
                    }, msg("PROJECT_DOC_LINK")),
                    el("h3", { "data-aos": "fade-up" }, msg("STABLE_DAO_PROJECT_TITLE1")),
                    el("p", { "data-aos": "fade-up" }, msg("STABLE_DAO_PROJECT_DESC1")),
                    el("h3", { "data-aos": "fade-up" }, msg("STABLE_DAO_PROJECT_TITLE2")),
                    el("p", { "data-aos": "fade-up" }, msg("STABLE_DAO_PROJECT_DESC2")),
                    el("h3", { "data-aos": "fade-up" }, msg("STABLE_DAO_PROJECT_TITLE3")),
                    el("p", { "data-aos": "fade-up" }, msg("STABLE_DAO_PROJECT_DESC3")),
                    el("h3", { "data-aos": "fade-up" }, msg("STABLE_DAO_PROJECT_TITLE4")),
                    el("img", { src: "/images/view/stabledao-landing/profit-structure.png", alt: "profit-structure.png", "data-aos": "fade-up" }),
                    el("p", { "data-aos": "fade-up" }, msg("STABLE_DAO_PROJECT_DESC4")),
                ),
                el(".buy-container", { id: "buy" },
                    el("h2", { "data-aos": "fade-up" }, msg("STABLE_DAO_MINT_BUY_TITLE")),
                    el("a", { href: "/buy", "data-aos": "fade-up" }, msg("STABLE_DAO_MINT_BUY_BUTTON")),
                    el("h3", { "data-aos": "fade-up" }, msg("STABLE_DAO_MINT_BUY_TITLE1")),
                    el("p", { "data-aos": "fade-up" }, msg("STABLE_DAO_MINT_BUY_DESC1")),
                    el("p", { "data-aos": "fade-up" }, msg("STABLE_DAO_MINT_BUY_DESC2")),
                    el("h3", { "data-aos": "fade-up" }, msg("STABLE_DAO_MINT_BUYBACK_TITLE")),
                    el("p", { "data-aos": "fade-up" }, msg("STABLE_DAO_MINT_BUYBACK_DESC1")),
                    el("p", { "data-aos": "fade-up" }, msg("STABLE_DAO_MINT_BUYBACK_DESC2")),
                ),
                el(".nft-container", { id: "nft" },
                    el("h2", { "data-aos": "fade-up" }, msg("STABLE_DAO_SNEAKPEEK_TITLE")),
                    el("section",
                        el("img", { "data-aos": "fade-up", src: "/images/view/stabledao-landing/nft1.png" }),
                        el("img", { "data-aos": "fade-up", src: "/images/view/stabledao-landing/nft2.png" }),
                        el("img", { "data-aos": "fade-up", src: "/images/view/stabledao-landing/nft3.png" }),
                        el("img", { "data-aos": "fade-up", src: "/images/view/stabledao-landing/nft4.png" }),
                        el("img", { "data-aos": "fade-up", src: "/images/view/stabledao-landing/nft5.png" }),
                        el("img", { "data-aos": "fade-up", src: "/images/view/stabledao-landing/nft6.png" }),
                        el("img", { "data-aos": "fade-up", src: "/images/view/stabledao-landing/nft7.png" }),
                        el("img", { "data-aos": "fade-up", src: "/images/view/stabledao-landing/nft8.png" }),
                    ),
                ),
                el(".faq-container", { id: "faq" },
                    el("h2", { "data-aos": "fade-up" }, msg("STABLE_DAO_FAQ_TITLE")),
                    el("section",
                        new CollapsibleItem(msg("STABLE_DAO_FAQ_TITLE1"), msg("STABLE_DAO_FAQ_DESC1")),
                        new CollapsibleItem(msg("STABLE_DAO_FAQ_TITLE2"), msg("STABLE_DAO_FAQ_DESC2")),
                        new CollapsibleItem(msg("STABLE_DAO_FAQ_TITLE3"), msg("STABLE_DAO_FAQ_DESC3")),
                        new CollapsibleItem(msg("STABLE_DAO_FAQ_TITLE4"), msg("STABLE_DAO_FAQ_DESC4")),
                        new CollapsibleItem(msg("STABLE_DAO_FAQ_TITLE5"), msg("STABLE_DAO_FAQ_DESC5")),
                        new CollapsibleItem(msg("STABLE_DAO_FAQ_TITLE6"), msg("STABLE_DAO_FAQ_DESC6")),
                        new CollapsibleItem(msg("STABLE_DAO_FAQ_TITLE7"), msg("STABLE_DAO_FAQ_DESC7")),
                    ),
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
