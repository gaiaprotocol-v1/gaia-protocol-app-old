
import { DomNode, el } from "skydapp-browser";
import PolySupernova from "../contracts/pfp/PolySupernova";
import PolygonWallet from "../polygon/PolygonWallet";
import ViewUtil from "../view/ViewUtil";
import TransferPopup from "./TransferPopup";

export default class PolygonSupernovaNftItem extends DomNode {

    private imageDisplay: DomNode<HTMLImageElement>;
    private nameDisplay: DomNode;

    private id = 0;

    constructor() {
        super(".supernova-nft-item");
        this.append(
            this.imageDisplay = el("img"),
            this.nameDisplay = el("h3"),
            el("a",
                el("img.send", { src: "/images/icn/send.svg", alt: "send icon" }),
                {
                    click: () => new TransferPopup(async (to) => {
                        const from = await PolygonWallet.loadAddress();
                        if (from !== undefined) {
                            await PolySupernova.transferFrom(from, to, this.id);
                            ViewUtil.waitTransactionAndRefresh();
                        }
                    }),
                }
            ),
        );
    }

    public init(id: number) {
        this.id = id;
        this.imageDisplay.domElement.src = `https://storage.googleapis.com/gaia-protocol/supernova/png/${id}.png`;
        this.imageDisplay.domElement.alt = `supernova ${id}`;
        this.nameDisplay.appendText(`Polygon #${this.id}`);
    }

    public delete() {
        super.delete();
    }
}