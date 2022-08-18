import { DomNode, el, msg } from "skydapp-browser";
import { Debouncer, SkyUtil, View, ViewParams } from "skydapp-common";
import Layout from "../Layout";

export default class GaiaDividend implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "Gaia Dividend";
        Layout.current.content.append(this.container = el(".gaia-dividend-view",

        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
