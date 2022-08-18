import { DomNode, el, msg } from "skydapp-browser";
import { Debouncer, SkyUtil, View, ViewParams } from "skydapp-common";
import Layout from "../Layout";

export default class GaiaDividend implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "Gaia Dividend";
        Layout.current.content.append(this.container = el(".gaia-dividend-view",
            el("header",
                el(".title-container",
                    el("h2", "GAIA Dividend"),
                    el("p", "Total Distribution of revenue from Gaia Protocol"),
                    el("p.total", "9,999,999 USDC"),
                ),
            ),
            el(".revenue-container",
                el("table",
                    el("thead",
                        el("tr",
                            el("th", "차수"),
                            el("th", "제네시스 미수령 이자"),
                            el("th", "슈퍼노바 미수령 이자"),
                            el("th", "스테이블 다오 수익금"),
                            el("th", "총액"),
                        ),
                    ),
                    el("tbody",
                        el("tr",
                            el("th",
                                el("a.done", "수령 완료"),
                            ),
                            el("td", "100USDC"),
                            el("td", "200USDC"),
                            el("td", "300USDC"),
                            el("td", "600USDC"),
                        ),
                        el("tr",
                            el("th",
                                el("a", "2차 받기"),
                            ),
                            el("td", "100USDC"),
                            el("td", "200USDC"),
                            el("td", "300USDC"),
                            el("td", "600USDC"),
                        ),
                    ),
                )
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
