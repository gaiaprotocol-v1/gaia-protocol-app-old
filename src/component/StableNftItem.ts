import { DomNode, el, msg } from "skydapp-browser";
import GaiaStableDAOContract from "../contracts/GaiaStableDAOContract";
import GaiaStableDAOOperatorV2Contract from "../contracts/GaiaStableDAOOperatorV2Contract";
import ViewUtil from "../view/ViewUtil";
import Confirm from "./shared/dialogue/Confirm";
import Prompt from "./shared/dialogue/Prompt";
import TransferPopup from "./TransferPopup";

export default class StableNftItem extends DomNode {

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
                        await GaiaStableDAOContract.transfer(to, this.id);
                        ViewUtil.waitTransactionAndRefresh();
                    }),
                }
            ),
        );
    }

    public init(id: number) {
        this.id = id;
        this.imageDisplay.domElement.src = `https://storage.googleapis.com/gaia-protocol/stabledao/${id}.png`;
        this.imageDisplay.domElement.alt = `SDAO ${id}`;
        this.nameDisplay.appendText(`#${this.id}`);
    }

    public delete() {
        super.delete();
    }
}
