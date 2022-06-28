
import { BigNumber, utils } from "ethers";
import { DomNode, el, msg } from "skydapp-browser";
import CommonUtil from "../CommonUtil";
import GaiaSupernovaContract from "../contracts/GaiaSupernovaContract";
import ViewUtil from "../view/ViewUtil";
import TransferPopup from "./TransferPopup";

export default class SupernovaNftItem extends DomNode {

    private imageDisplay: DomNode<HTMLImageElement>;
    private nameDisplay: DomNode;
    private profitDisplay: DomNode;
    private claimButton: DomNode;

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
                        await GaiaSupernovaContract.transfer(to, this.id);
                        ViewUtil.waitTransactionAndRefresh();
                    }),
                }
            ),
            el(".content-wrap",
                el("section",
                    el("header",
                        el("p", msg("UNCOLLECTED_INTEREST_DESC")),
                        el("img", { src: "/images/icn/help.svg", alt: "help" }),
                        el(".tooltip", "Gaia Dividend"),
                    ),
                    el(".amount-wrap",
                        this.profitDisplay = el(".klay", "... USDC"),
                    ),
                ),
                el(".button-wrap",
                    this.claimButton = el("a.klay-button", "미수령 이자 받기", {
                        click: async () => {
                            ViewUtil.waitTransactionAndRefresh();
                        }
                    }),
                ),
            ),
        );
    }

    public init(id: number, usdc: BigNumber, usdcCollected: boolean) {
        this.id = id;
        this.imageDisplay.domElement.src = `https://storage.googleapis.com/gaia-protocol/supernova/png/${id}.png`;
        this.imageDisplay.domElement.alt = `supernova ${id}`;
        this.nameDisplay.appendText(`#${this.id}`);
        this.profitDisplay.empty().appendText(`${CommonUtil.numberWithCommas(usdcCollected === true ? "0" : utils.formatUnits(usdc, 6))} USDC`);
    }

    public delete() {
        super.delete();
    }
}
