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
                el(".team-container", { id: "TEAM" },
                    el("h2", msg("GENESIS_TEAM_TITLE"), { "data-aos": "fade-up" },),
                    el(".swiper-slide",
                        el(".team", { "data-aos": "fade-up" },
                            el(".content",
                                el(".front",
                                    el("img", { src: "/images/view/genesis-landing/sim-young-jae.png" })
                                ),
                                el(".back",
                                    el("a", msg("GENESIS_TEAM_NAME_TITLE1"), { href: "https://twitter.com/gaia_yj", target: "_blank" }),
                                    el("h4", msg("GENESIS_TEAM_ROLE_DESC1")),
                                    el("p",
                                        msg("TEAM_NAME_DESC1"),
                                    ),
                                ),
                            ),
                        ),
                        el(".team", { "data-aos": "fade-up" },
                            el(".content",
                                el(".front",
                                    el("img", { src: "/images/view/genesis-landing/cho-sun-woo.png" })
                                ),
                                el(".back",
                                    el("a", msg("GENESIS_TEAM_NAME_TITLE2"), { href: "https://twitter.com/Chowbie_", target: "_blank" },),
                                    el("h4", msg("GENESIS_TEAM_ROLE_DESC2")),
                                    el("p",
                                        msg("TEAM_NAME_DESC2"),
                                    ),
                                ),
                            ),
                        ),
                        el(".team", { "data-aos": "fade-up" },
                            el(".content",
                                el(".front",
                                    el("img", { src: "/images/view/genesis-landing/TheGreatHB.png" })
                                ),
                                el(".back",
                                    el("a", msg("GENESIS_TEAM_NAME_TITLE3"), { href: "https://twitter.com/TheGreatHB_", target: "_blank" },),
                                    el("h4", msg("GENESIS_TEAM_ROLE_DESC3")),
                                    el("p",
                                        msg("GENESIS_TEAM_NAME_DESC3"),
                                    ),
                                ),
                            ),
                        ),
                        el(".team", { "data-aos": "fade-up" },
                            el(".content",
                                el(".front",
                                    el("img", { src: "/images/view/genesis-landing/lee-hak-seong.png" })
                                ),
                                el(".back",
                                    el("a", msg("GENESIS_TEAM_NAME_TITLE4"), { href: "https://twitter.com/dilrong_", target: "_blank" },),
                                    el("h4", msg("GENESIS_TEAM_ROLE_DESC4")),
                                    el("p",
                                        msg("TEAM_NAME_DESC4"),
                                    ),
                                ),
                            ),
                        ),
                        el(".team", { "data-aos": "fade-up" },
                            el(".content",
                                el(".front",
                                    el("img", { src: "/images/view/genesis-landing/park-min.png" })
                                ),
                                el(".back",
                                    el("a", msg("GENESIS_TEAM_NAME_TITLE5"), { href: "https://twitter.com/Medo_DSC", target: "_blank" }),
                                    el("h4", msg("GENESIS_TEAM_ROLE_DESC5")),
                                    el("p",
                                        msg("GENESIS_TEAM_NAME_DESC5"),
                                    ),
                                ),
                            ),
                        ),
                        el(".team", { "data-aos": "fade-up" },
                            el(".content",
                                el(".front",
                                    el("img", { src: "/images/view/genesis-landing/kang-hee-min.png" })
                                ),
                                el(".back",
                                    el("a", msg("GENESIS_TEAM_NAME_TITLE6"), { href: "https://twitter.com/Docent_Mgr", target: "_blank" },),
                                    el("h4", msg("GENESIS_TEAM_ROLE_DESC6")),
                                    el("p",
                                        msg("GENESIS_TEAM_NAME_DESC6"),
                                    ),
                                ),
                            ),
                        ),
                    )
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
