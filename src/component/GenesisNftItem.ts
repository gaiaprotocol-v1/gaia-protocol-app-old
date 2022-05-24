import { BigNumber, utils } from "ethers";
import { DomNode, el, msg } from "skydapp-browser";
import CommonUtil from "../CommonUtil";
import GaiaGenesisUSDCDistributorContract from "../contracts/GaiaGenesisUSDCDistributorContract";
import GaiaNFTContract from "../contracts/GaiaNFTContract";
import NFTAirdropContract from "../contracts/NFTAirdropContract";
import ViewUtil from "../view/ViewUtil";
import TransferPopup from "./TransferPopup";

export default class GenesisNftItem extends DomNode {

    private imageDisplay: DomNode<HTMLImageElement>;
    private nameDisplay: DomNode;
    private klayDisplay: DomNode;
    //private claimButton: DomNode;
    private emergencyDisplay: DomNode;

    private id = -1;

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
                    /*this.claimButton = el("button.klay-button", "미수령 이자 받기", {
                        click: async () => {
                            await GaiaGenesisUSDCDistributorContract.claim([this.id]);
                            ViewUtil.waitTransactionAndRefresh();
                        }
                    }),*/
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

    public init(id: number, usdc: BigNumber, usdcCollected: boolean, reward: BigNumber, collected: BigNumber) {
        this.id = id;
        this.imageDisplay.domElement.src = `https://storage.googleapis.com/gaia-protocol/kronos/${id}.png`;
        this.nameDisplay.appendText(`#${this.id}`);
        if (usdcCollected === true) {
            //this.claimButton.delete();
        }
        this.klayDisplay.empty().appendText(`${CommonUtil.numberWithCommas(usdcCollected === true ? "0" : utils.formatUnits(usdc, 6))} USDC`);
        this.emergencyDisplay.empty().appendText(`${CommonUtil.numberWithCommas(utils.formatEther(reward.sub(collected)), 5)} KLAY`);
    }

    public delete() {
        super.delete();
    }
}
