import { BigNumber, utils } from "ethers";
import { DomNode, el, msg } from "skydapp-browser";
import { Debouncer, SkyUtil, View, ViewParams } from "skydapp-common";
import GenesisNftItem from "../../component/GenesisNftItem";
import GaiaGenesisUSDCDistributorContract from "../../contracts/GaiaGenesisUSDCDistributorContract";
import GaiaNFTContract from "../../contracts/GaiaNFTContract";
import NFTAirdropContract from "../../contracts/NFTAirdropContract";
import Wallet from "../../klaytn/Wallet";
import Layout from "../Layout";
import ViewUtil from "../ViewUtil";

export default class Genesis implements View {

    private container: DomNode;
    private totalKlayDisplay: DomNode;
    private nftList: DomNode;
    private interval: any;

    private tokenIds: number[] = [];
    private usdcs: BigNumber[] = [];
    private usdcTokenIds: number[] = [];

    constructor() {
        Layout.current.title = "Genesis";
        Layout.current.content.append(this.container = el(".genesis-view",
            el("header",
                el(".title-container",
                    el("h2", msg("GAIA_GENESIS_TITLE")),
                    el("p", msg("GAIA_GENESIS_DESC")),
                ),
                el(".tool-container",
                    el(".title-container",
                        el("h3", "My NFT"),
                        this.totalKlayDisplay = el("p", ""),
                    ),
                    el(".button-container",
                        el("a", "모든 수익 받기", {
                            click: async () => {
                                await GaiaGenesisUSDCDistributorContract.claim(this.usdcTokenIds);
                                ViewUtil.waitTransactionAndRefresh();
                            },
                        }),
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
                    if (tokenId === 0) {
                        item.delete();
                    } else {
                        const usdc = await GaiaGenesisUSDCDistributorContract.rewardPerId(tokenId);
                        const usdcCollected = await GaiaGenesisUSDCDistributorContract.isRewardCollected(tokenId);
                        const collected = await NFTAirdropContract.airdropCollected(0, tokenId);

                        item.init(tokenId, usdc, usdcCollected, reward, collected);
                        this.tokenIds.push(tokenId);
                        if (usdcCollected !== true) {
                            this.usdcs.push(usdc);
                            this.usdcTokenIds.push(tokenId);
                        }
                        totalEmergency = totalEmergency.add(reward.sub(collected));
                    }
                };
                promises.push(promise(i));
            });
            await Promise.all(promises);

            let totalUSDC = BigNumber.from(0);
            for (const usdc of this.usdcs) {
                totalUSDC = totalUSDC.add(usdc);
            }
            this.totalKlayDisplay.empty().appendText(`${"총 미수령 수익 {amount} USDC".replace(/{amount}/, String(utils.formatUnits(totalUSDC, 6)))}`);
        }
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        clearInterval(this.interval);
        this.container.delete();
    }
}
