import { BigNumber, utils } from "ethers";
import { DomNode, el, msg } from "skydapp-browser";
import CommonUtil from "../CommonUtil";
import GaiaNFTContract from "../contracts/GaiaNFTContract";
import GaiaOperationContract from "../contracts/GaiaOperationContract";
import NFTAirdropContract from "../contracts/NFTAirdropContract";
import ViewUtil from "../view/ViewUtil";
import Alert from "./shared/dialogue/Alert";
import Prompt from "./shared/dialogue/Prompt";
import TransferPopup from "./TransferPopup";
import KrnosJson from "./krnos.json";

export default class GenesisNftItem extends DomNode {

    private imageDisplay: DomNode<HTMLImageElement>;
    private nameDisplay: DomNode;
    private klayDisplay: DomNode;
    private emergencyDisplay: DomNode;

    private id = -1;
    private klay = BigNumber.from(0);

    constructor() {
        super(".genesis-nft-item");
        this.append(
            this.imageDisplay = el("img"),
            this.nameDisplay = el("h3"),
            el("a",
                el("img.send", { src: "/images/icn/send.svg", alt: "send icon" }),
                {
                    click: () => new TransferPopup(async (to) => {
                        await GaiaNFTContract.transfer(to, this.id);
                        ViewUtil.waitTransactionAndRefresh();
                    }),
                }
            ),
            el(".content-wrap",
                el("section",
                    el("header", msg("UNCOLLECTED_INTEREST_DESC")),
                    el(".amount-wrap",
                        this.klayDisplay = el(".klay", "... KLAY"),
                    ),
                ),
                // el(".button-wrap",
                //     el("button.klay-button", msg("CLAIM_KLAY_BUTTON"), {
                //         click: () => {
                //             new Prompt(msg("CLAIM_KLAY_ALERT_TITLE"), msg("CLAIM_KLAY_ALERT_DESC"), msg("CLAIM_ALERT_BUTTON"), async (amount) => {
                //                 const klay = utils.parseEther(amount);
                //                 if (klay > this.klay) {
                //                     new Alert(msg("CLAIM_ERROR_ALERT_TITLE"), msg("CLAIM_ERROR_ALERT_DESC"))
                //                 } else {
                //                     await GaiaOperationContract.claimKlayViaZap([this.id], [this.krno.mul(klay).div(this.klay)], klay, []);
                //                     ViewUtil.waitTransactionAndRefresh();
                //                 }
                //             }, msg("CLAIM_PLACEHOLDER_INPUT"));
                //         },
                //     }),
                // ),
            ),
            el(".content-wrap",
                el("section",
                    el("header", msg("EMERGENCY_DESC")),
                    el(".amount-wrap",
                        this.emergencyDisplay = el(".klay", "... KLAY"),
                    ),
                ),
                el(".button-wrap",
                    el("button.klay-button", msg("CLAIM_REWARDS_BUTTON"), {
                        click: async () => {
                            await NFTAirdropContract.collectAirdropReward(0, [this.id]);
                            ViewUtil.waitTransactionAndRefresh();
                        }
                    }),
                ),
            ),
        );
    }

    public init(id: number, reward: BigNumber, collected: BigNumber) {
        this.id = id;
        this.imageDisplay.domElement.src = `https://storage.googleapis.com/gaia-protocol/kronos/${id}.png`;
        this.nameDisplay.appendText(`#${this.id}`);
        this.loadKlay();
        this.emergencyDisplay.empty().appendText(`${CommonUtil.numberWithCommas(utils.formatEther(reward.sub(collected)), 5)} KLAY`);
    }

    private async loadKlay() {
        this.klay = utils.parseUnits(KrnosJson[this.id], 9);
        this.klayDisplay.empty().appendText(`${CommonUtil.numberWithCommas(String(parseFloat(utils.formatEther(this.klay)) * 2.4))} USDC`);
    }

    public delete() {
        super.delete();
    }
}
