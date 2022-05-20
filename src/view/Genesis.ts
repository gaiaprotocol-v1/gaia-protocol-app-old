import { BigNumber, utils } from "ethers";
import { DomNode, el, msg } from "skydapp-browser";
import { Debouncer, SkyUtil, View, ViewParams } from "skydapp-common";
import GenesisNftItem from "../component/GenesisNftItem";
import GaiaNFTContract from "../contracts/GaiaNFTContract";
import GaiaOperationContract from "../contracts/GaiaOperationContract";
import NFTAirdropContract from "../contracts/NFTAirdropContract";
import Wallet from "../klaytn/Wallet";
import Layout from "./Layout";

export default class Genesis implements View {

    private container: DomNode;
    private totalKlayDisplay: DomNode;
    private totalEmergencyDisplay: DomNode;
    private nftList: DomNode;
    private interval: any;

    private tokenIds: number[] = [];
    private krnos: BigNumber[] = [];
    private totalKlay = BigNumber.from(0);

    constructor() {
        Layout.current.title = "Genesis";
        Layout.current.content.append(this.container = el(".home-view",
            el("header",
                el(".title-container",
                    el("h2", msg("GAIA_GENESIS_TITLE")),
                    el("p", msg("GAIA_GENESIS_DESC")),
                ),
                el(".tool-container",
                    el(".title-container",
                        el("h3", "My NFT"),
                        this.totalKlayDisplay = el("p", ""),
                        this.totalEmergencyDisplay = el("p", ""),
                    ),
                    el(".button-container",
                        el("a", msg("ALL_EMERGENCY_BUTTON")),
                    ),
                ),
            ),
            this.nftList = el(".nft-container"),
        ));

        this.loadNFTsDebouncer.run();
        Wallet.on("connect", () => this.loadNFTsDebouncer.run());
    }

    private loadNFTsDebouncer: Debouncer = new Debouncer(200, () => this.loadNFTs());

    private async loadNFTs() {

        const address = await Wallet.loadAddress();
        if (address !== undefined) {
            const reward = await NFTAirdropContract.airdropReward(0);

            const balance = (await GaiaNFTContract.balanceOf(address)).toNumber();
            const promises: Promise<void>[] = [];

            this.tokenIds = [];

            let totalEmergency = BigNumber.from(0);
            SkyUtil.repeat(balance, (i: number) => {
                const promise = async (index: number) => {
                    const item = new GenesisNftItem().appendTo(this.nftList);
                    const tokenId = (await GaiaNFTContract.tokenOfOwnerByIndex(address, index)).toNumber();
                    const collected = await NFTAirdropContract.airdropCollected(0, tokenId);
                    if (tokenId === 0) {
                        item.delete();
                    } else {
                        item.init(tokenId, reward, collected);
                        const krno = await GaiaOperationContract.claimableKRNO([tokenId]);
                        this.tokenIds.push(tokenId);
                        this.krnos.push(krno);
                        totalEmergency = totalEmergency.add(reward.sub(collected));
                    }
                };
                promises.push(promise(i));
            });
            await Promise.all(promises);

            this.totalKlay = await GaiaOperationContract.claimableKlay(this.tokenIds);
            this.totalKlayDisplay.empty().appendText(`${msg("MY_INTEREST_KLAY_DESC").replace(/{amount}/, String(utils.formatEther(this.totalKlay)))}`);
            this.totalEmergencyDisplay.empty().appendText(`${msg("ALL_EMERGENCY_DESC")} ${String(utils.formatEther(totalEmergency))} KLAY`);
        }
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        clearInterval(this.interval);
        this.container.delete();
    }
}
