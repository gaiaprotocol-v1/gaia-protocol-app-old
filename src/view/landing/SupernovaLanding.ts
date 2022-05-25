import { DomNode, el, msg } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import Layout from "../Layout";
import AOS from "aos";

export default class SupernovaLanding implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "Supernova";
        Layout.current.content.append(
            this.container = el(".landing-supernova-view",
                el(".init-container", { id: "init" },
                    el("img", { src: "/images/logo/gaia-supernova-text.png", alt: "gaia supernova logo", "data-aos": "zoom-in", }),
                    el("p", { "data-aos": "zoom-in" }, msg("SUPERNOVA_INIT_DESC")),
                    el("img.flow-map", { src: "/images/flow-map.png", alt: "flow map", "data-aos": "zoom-in" }),
                ),
                el(".video-container",
                    el("h2", { "data-aos": "zoom-in" }, msg("SUPERNOVA_VIDEO_TITLE")),
                    el(".video", { "data-aos": "zoom-in" },
                        el("iframe", { width: "100%", height: "315px", src: "https://www.youtube.com/embed/Oqespb0LLjo", title: "gaia supernova introduction video" })
                    ),
                ),
                el(".why-container", { id: "fund" },
                    el("h2", { "data-aos": "zoom-in" }, msg("SUPERNOVA_WHY_TITLE")),
                    el("p", { "data-aos": "zoom-in" }, msg("SUPERNOVA_WHY_DESC"))
                ),
                el(".fund-container",
                    el("h2", { "data-aos": "zoom-in" }, msg("SUPERNOVA_FUND_TITLE")),
                    el("p", { "data-aos": "zoom-in" }, msg("SUPERNOVA_FUND_DESC"))
                ),
                el(".mint-container", { id: "mint" },
                    el("h2", { "data-aos": "zoom-in" }, msg("SUPERNOVA_MINT_TITLE")),
                    el("h3", { "data-aos": "zoom-in" }, msg("SUPERNOVA_MINT_VIP_TITLE")),
                    el("p", { "data-aos": "zoom-in" }, msg("SUPERNOVA_MINT_VIP_DESC")),
                    el("a", { "data-aos": "zoom-in", href: "https://mint.gaiasupernova.com/", target: "_blank" }, "Go to Opensea"),
                ),
                el(".nft-container", { id: "nft" },
                    el("h2", { "data-aos": "zoom-in" }, msg("SUPERNOVA_SNEAKPEEK_TITLE")),
                    el("section",
                        el("img", { "data-aos": "zoom-in", src: "/images/nft/nft1.png" }),
                        el("img", { "data-aos": "zoom-in", src: "/images/nft/nft2.png" }),
                        el("img", { "data-aos": "zoom-in", src: "/images/nft/nft3.png" }),
                        el("img", { "data-aos": "zoom-in", src: "/images/nft/nft4.png" }),
                        el("img", { "data-aos": "zoom-in", src: "/images/nft/nft5.gif" }),
                        el("img", { "data-aos": "zoom-in", src: "/images/nft/nft6.gif" }),
                    ),
                ),
                el(".team-container", { id: "team" },
                    el("h2", { "data-aos": "zoom-in" }, msg("SUPERNOVA_TEAM_TITLE")),
                    el("section",
                        el(".team", { "data-aos": "zoom-in" },
                            el("h3", msg("SUPERNOVA_TEAM_TITLE1")),
                            el("p", msg("SUPERNOVA_TEAM_DESC1"))
                        ),
                        el(".team", { "data-aos": "zoom-in" },
                            el("h3", msg("SUPERNOVA_TEAM_TITLE2")),
                            el("p", msg("SUPERNOVA_TEAM_DESC2"))
                        ),
                        el(".team", { "data-aos": "zoom-in" },
                            el("h3", msg("SUPERNOVA_TEAM_TITLE3")),
                            el("p", msg("SUPERNOVA_TEAM_DESC3"))
                        ),
                        el(".team", { "data-aos": "zoom-in" },
                            el("h3", msg("TEAM_TITLE4")),
                            el("p", msg("TEAM_DESC4"))
                        ),
                        el(".team", { "data-aos": "zoom-in" },
                            el("h3", msg("TEAM_TITLE5")),
                            el("p", msg("TEAM_DESC5"))
                        ),
                        el(".team", { "data-aos": "zoom-in" },
                            el("h3", msg("TEAM_TITLE6")),
                            el("p", msg("TEAM_DESC6"))
                        ),
                        el(".team", { "data-aos": "zoom-in" },
                            el("h3", msg("TEAM_TITLE7")),
                            el("p", msg("TEAM_DESC7"))
                        ),
                        el(".team", { "data-aos": "zoom-in" },
                            el("h3", msg("TEAM_TITLE8")),
                            el("p", msg("TEAM_DESC8"))
                        ),
                        el(".team", { "data-aos": "zoom-in" },
                            el("h3", msg("TEAM_TITLE9")),
                            el("p", msg("TEAM_DESC9"))
                        ),
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
