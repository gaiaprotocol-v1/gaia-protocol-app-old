import { DomNode, el, msg } from "skydapp-browser";
import PolygonGaiaStableDAOContract from "../contracts/PolygonGaiaStableDAOContract";
import StableDAOMinterContract from "../contracts/StableDAOMinterContract";
import PolygonWallet from "../polygon/PolygonWallet";
import ViewUtil from "../view/ViewUtil";
import Confirm from "./shared/dialogue/Confirm";
import TransferPopup from "./TransferPopup";

export default class PolygonStableNftItem extends DomNode {

    private imageDisplay: DomNode<HTMLImageElement>;
    private nameDisplay: DomNode;

    private id = -1;

    constructor() {
        super(".stable-nft-item");
        this.append(
            this.imageDisplay = el("img"),
            this.nameDisplay = el("h3"),
            el("a",
                el("img.send", { src: "/images/icn/send.svg", alt: "send icon" }),
                {
                    click: () => new TransferPopup(async (to) => {
                        const from = await PolygonWallet.loadAddress();
                        if (from !== undefined) {
                            await PolygonGaiaStableDAOContract.transferFrom(from, to, this.id);
                            ViewUtil.waitTransactionAndRefresh();
                        }
                    }),
                }
            ),
            el("button", msg("BUYBACK_BUTTON"), {
                click: () => new Confirm(msg("BUYBACK_CONFIRM_TITLE"), msg("BUYBACK_CONFIRM_DESC"), msg("BUYBACK_CONFIRM_BUTTON"), async () => {
                    await StableDAOMinterContract.buyBack([this.id]);
                    ViewUtil.waitTransactionAndRefresh();
                }),
            }),
        );
    }

    public init(id: number) {
        this.id = id;
        this.imageDisplay.domElement.src = `https://storage.googleapis.com/gaia-protocol/stabledao/${id}.png`;
        this.imageDisplay.domElement.alt = `SDAO ${id}`;
        this.nameDisplay.appendText(`Polygon #${this.id}`);
    }

    public delete() {
        super.delete();
    }
}
