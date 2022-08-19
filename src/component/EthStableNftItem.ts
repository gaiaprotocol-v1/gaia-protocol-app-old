import { DomNode, el } from "skydapp-browser";
import EthStableDAO from "../contracts/pfp/EthStableDAO";
import EthereumWallet from "../ethereum/EthereumWallet";
import ViewUtil from "../view/ViewUtil";
import TransferPopup from "./TransferPopup";

export default class EthStableNftItem extends DomNode {

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
                        const from = await EthereumWallet.loadAddress();
                        if (from !== undefined) {
                            await EthStableDAO.transferFrom(from, to, this.id);
                            ViewUtil.waitTransactionAndRefresh();
                        }
                    }),
                }
            ),
            /*el("button", msg("BUYBACK_BUTTON"), {
                click: () => new Confirm(msg("BUYBACK_CONFIRM_TITLE"), msg("BUYBACK_CONFIRM_DESC"), msg("BUYBACK_CONFIRM_BUTTON"), async () => {
                    await GaiaStableDAOOperatorV2Contract.buyBack([this.id]);
                    ViewUtil.waitTransactionAndRefresh();
                }),
            }),*/
            /*el("button", "Burn", {
                click: async () => {
                    await GaiaStableDAOContract.burn(this.id);
                    ViewUtil.waitTransactionAndRefresh();
                },
            }),*/
        );
    }

    public init(id: number) {
        this.id = id;
        this.imageDisplay.domElement.src = `https://storage.googleapis.com/gaia-protocol/stabledao/${id}.png`;
        this.imageDisplay.domElement.alt = `SDAO ${id}`;
        this.nameDisplay.appendText(`Ethereum #${this.id}`);
    }

    public delete() {
        super.delete();
    }
}
