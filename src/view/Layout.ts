import { BodyNode, BrowserInfo, DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import MobileMenu from "../component/shared/menu/MobileMenu";
import PCMenu from "../component/shared/menu/PCMenu";
import UserInfo from "../component/shared/menu/UserInfo";
import ViewUtil from "./ViewUtil";

export default class Layout implements View {

    public static current: Layout;
    private container: DomNode;
    public content: DomNode;

    constructor() {
        Layout.current = this;
        let select: DomNode<HTMLSelectElement>;

        BodyNode.append(
            (this.container = el(".layout",
                el("header",
                    el(".nav",
                        el(".logo",
                            el("a", { click: () => { ViewUtil.go("/") } },
                                el("img", { src: "/images/img/gaia-protocol-logo.png", alt: "gaia protocol logo" }),
                                el("h1", "Gaia Protocol"),
                            ),
                        ),
                        new PCMenu(),
                        el(".right",
                            select = el("select.language-select",
                                el("option", "한국어 🇰🇷 ", { value: "ko" }),
                                el("option", "English 🇺🇸 ", { value: "en" }),
                                {
                                    change: () => {
                                        BrowserInfo.changeLanguage(select.domElement.value);
                                    },
                                },
                            ),
                            new UserInfo(),
                            el("a.menu-button", el("img", { src: "/images/icn/menu.svg", alt: "menu" }), {
                                click: (event, button) => {
                                    const rect = button.rect;
                                    new MobileMenu({ left: rect.right - 170, top: rect.bottom }).appendTo(BodyNode);
                                },
                            }),
                        ),
                    ),
                ),
                el("main", (this.content = el(".content"))),
                el("footer",
                    el(".footer-container",
                        el(".sns",
                            el("a.discord", { href: "https://discord.com/invite/SjM4meh3hd", target: "_blank" },
                                el("img", { src: "/images/icn/discord.svg" }),
                            ),
                            el("a.twitter", { href: "https://twitter.com/gaia_protocol", target: "_blank" },
                                el("img", { src: "/images/icn/twitter.svg" }),
                            ),
                        ),
                        el(".copyright", "COPYRIGHT ⓒ Gaia Protocol. ALL RIGHTS RESERVED"),
                    ),
                ),
            )
            ),
        );
        select.domElement.value = BrowserInfo.language;
    }

    public set title(title: string) {
        document.title = `${title} | Gaia Protocol`;
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
