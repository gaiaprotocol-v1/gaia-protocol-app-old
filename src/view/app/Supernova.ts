import { BigNumber, utils } from "ethers";
import { DomNode, el, msg } from "skydapp-browser";
import { Debouncer, SkyUtil, View, ViewParams } from "skydapp-common";
import CommonUtil from "../../CommonUtil";
import Alert from "../../component/shared/dialogue/Alert";
import SupernovaNftItem from "../../component/SupernovaNftItem";
import GaiaSupernovaContract from "../../contracts/GaiaSupernovaContract";
import SupernovaRewardDistributor from "../../contracts/SupernovaRewardDistributor";
import Wallet from "../../klaytn/Wallet";
import ViewUtil from "../ViewUtil";
import Layout from "./../Layout";

export default class Supernova implements View {

    private container: DomNode;
    private interval: any;

    private tokenIds: number[] = [];
    private nftList: DomNode;

    private allRoyaltyDisplay: DomNode;
    private nftRoyaltyDisplay: DomNode;
    private allNftDisplay: DomNode;
    private blockDisplay: DomNode;
    private receivedDisplay: DomNode;
    private totalInterestDisplay: DomNode;

    constructor() {
        Layout.current.title = msg("GAIA_SUPERNOVA_TITLE");
        Layout.current.content.append(this.container = el(".supernova-view",
            el("header",
                el(".title-container",
                    el("h2", msg("GAIA_SUPERNOVA_TITLE")),
                    el("p", msg("GAIA_SUPERNOVA_DESC")),
                ),
                el(".dashboard-container",
                    el(".content",
                        el("h3", msg("DASHBOARD_TITLE1")),
                        this.allRoyaltyDisplay = el("p", "... KLAY"),
                    ),
                    el(".content",
                        el("h3", msg("DASHBOARD_TITLE2")),
                        this.nftRoyaltyDisplay = el("p", "... KLAY"),
                    ),
                    el(".content",
                        el("h3", msg("INFO_TITLE1")),
                        this.allNftDisplay = el("p", "... EA"),
                    ),
                    el(".content",
                        el("h3", msg("INFO_TITLE2")),
                        this.blockDisplay = el("p", "..."),
                    ),
                    el(".content",
                        el("h3", msg("INFO_TITLE3")),
                        this.receivedDisplay = el("p", "... KLAY"),
                    ),
                    el(".content",
                        el("h3", msg("INFO_TITLE4")),
                        this.totalInterestDisplay = el("p", "... KLAY"),
                    ),
                ),
                el(".warning-wrap",
                    el(".warning-container",
                        el("img", { src: "/images/icn/error-red.svg", alt: "warning" }),
                        el("p", msg("WARNING_DESC")),
                    ),
                ),
                el(".tool-container",
                    el(".title-container",
                        el("h3", "My NFT"),
                    ),
                    el(".button-container",
                        el("a", msg("REWARD_BUTTON"), {
                            click: async () => {
                                const address = await Wallet.loadAddress();
                                if (address !== undefined) {
                                    const remainingTimeToClaim = await SupernovaRewardDistributor.remainingTimeToClaim(address);
                                    if (remainingTimeToClaim.eq(0)) {
                                        await SupernovaRewardDistributor.claim(address);
                                    } else {
                                        new Alert(msg("ALERT_UNABLE_RECEIVE_TITLE"), msg("ALERT_UNABLE_RECEIVE_DESC"));
                                    }
                                }
                            },
                        }),
                    ),
                ),
            ),
            el(".warning-container",
                el("p", "GAIA SUPERNOVA는 경품 이벤트를 진행하고 있으며 디스코드에서 확인 가능합니다."),
                el("a", "역대 상품 보기 >", { click: () => { ViewUtil.go("/supernova/event") } }),
            ),
            this.nftList = el(".nft-container"),
        ));

        this.interval = setInterval(() => this.load(), 1000);
        this.resizeDebouncer.run();
        Wallet.on("connect", () => this.resizeDebouncer.run());
    }

    private resizeDebouncer: Debouncer = new Debouncer(200, () => this.loadNFTs());

    private async load() {

        const totalDistribution = (await SupernovaRewardDistributor.totalDistribution()).add("14450505446857445842091");
        this.allRoyaltyDisplay.empty().appendText(`${CommonUtil.numberWithCommas(utils.formatEther(totalDistribution))} KLAY`);
        this.nftRoyaltyDisplay.empty().appendText(`${CommonUtil.numberWithCommas(utils.formatEther(totalDistribution.div(1000)))} KLAY`);

        const address = await Wallet.loadAddress();
        if (address !== undefined) {

            const balance = await GaiaSupernovaContract.balanceOf(address);
            this.allNftDisplay.empty().appendText(`${String(balance.toNumber())} EA`);

            const remainingTimeToClaim = balance.eq(0) ? BigNumber.from(0) : await SupernovaRewardDistributor.remainingTimeToClaim(address);
            this.blockDisplay.empty().appendText(CommonUtil.displayBlockDuration(remainingTimeToClaim.toNumber()));

            const claimed = await SupernovaRewardDistributor.claimed(address);
            this.receivedDisplay.empty().appendText(`${CommonUtil.numberWithCommas(utils.formatEther(claimed))} KLAY`);

            const claimableReward = await SupernovaRewardDistributor.claimableReward(address);
            this.totalInterestDisplay.empty().appendText(`${CommonUtil.numberWithCommas(utils.formatEther(claimableReward))} KLAY`);
        }
    }

    private async loadNFTs() {
        const address = await Wallet.loadAddress();
        if (address !== undefined) {
            const balance = (await GaiaSupernovaContract.balanceOf(address)).toNumber();
            const promises: Promise<void>[] = [];

            this.tokenIds = [];
            SkyUtil.repeat(balance, (i: number) => {
                const promise = async (index: number) => {
                    const item = new SupernovaNftItem().appendTo(this.nftList);
                    const tokenId = (await GaiaSupernovaContract.tokenOfOwnerByIndex(address, index)).toNumber();
                    if (tokenId === 0) {
                        item.delete();
                    } else {
                        item.init(tokenId);
                        this.tokenIds.push(tokenId);
                    }
                };
                promises.push(promise(i));
            });
            await Promise.all(promises);
        }
        const promises: Promise<void>[] = [];
        await Promise.all(promises);
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        clearInterval(this.interval);
        this.container.delete();
    }
}
