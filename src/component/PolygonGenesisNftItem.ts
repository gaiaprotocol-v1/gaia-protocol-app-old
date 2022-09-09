import { BigNumber } from "ethers";
import { DomNode, el } from "skydapp-browser";
import PolyGenesis from "../contracts/pfp/PolyGenesis";
import PolygonWallet from "../polygon/PolygonWallet";
import ViewUtil from "../view/ViewUtil";
import TransferPopup from "./TransferPopup";

export default class PolygonGenesisNftItem extends DomNode {

    private imageDisplay: DomNode<HTMLImageElement>;
    private nameDisplay: DomNode;
    //private klayDisplay: DomNode;
    //private claimButton: DomNode;
    //private emergencyDisplay: DomNode;

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
                        const from = await PolygonWallet.loadAddress();
                        if (from !== undefined) {
                            await PolyGenesis.transferFrom(from, to, this.id);
                            ViewUtil.waitTransactionAndRefresh();
                        }
                    }),
                }
            ),
            el(".content-wrap",
                el("section",
                    //el("header", msg("UNCOLLECTED_INTEREST_DESC")),
                    el(".amount-wrap",
                        //this.klayDisplay = el(".klay", "... KLAY"),
                    ),
                ),
                /*el(".button-wrap",
                    this.claimButton = el("a.klay-button", "미수령 이자 받기", {
                        click: async () => {
                            await GaiaGenesisUSDCDistributorContract.claim([this.id]);
                            ViewUtil.waitTransactionAndRefresh();
                        }
                    }),
                ),*/
            ),
            el(".content-wrap",
                el("section",
                    //el("header", msg("EMERGENCY_DESC")),
                    el(".amount-wrap",
                        //this.emergencyDisplay = el(".klay", "... KLAY"),
                    ),
                ),
                // el(".button-wrap",
                //     el("a.klay-button", msg("CLAIM_REWARDS_BUTTON"), {
                //         click: async () => {
                //             await NFTAirdropContract.collectAirdropReward(0, [this.id]);
                //             ViewUtil.waitTransactionAndRefresh();
                //         }
                //     }),
                // ),
            ),
        );
    }

    public init(id: number, usdc: BigNumber, usdcCollected: boolean, reward: BigNumber, collected: BigNumber) {
        this.id = id;
        this.imageDisplay.domElement.src = `https://storage.googleapis.com/gaia-protocol/kronos/${id}.png`;
        this.nameDisplay.appendText(`Polygon #${this.id}`);
        if (usdcCollected === true) {
            //this.claimButton.delete();
        }
        //this.klayDisplay.empty().appendText(`${CommonUtil.numberWithCommas(usdcCollected === true ? "0" : utils.formatUnits(usdc, 6))} USDC`);
        //this.emergencyDisplay.empty().appendText(`${CommonUtil.numberWithCommas(utils.formatPolygoner(reward.sub(collected)), 5)} KLAY`);
    }

    public delete() {
        super.delete();
    }
}
