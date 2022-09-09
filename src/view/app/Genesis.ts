import { BigNumber } from "ethers";
import { DomNode, el, msg } from "skydapp-browser";
import { Debouncer, View, ViewParams } from "skydapp-common";
import EthGenesisNftItem from "../../component/EthGenesisNftItem";
import GenesisNftItem from "../../component/GenesisNftItem";
import PolygonGenesisNftItem from "../../component/PolygonGenesisNftItem";
import Config from "../../Config";
import GaiaNFTContract from "../../contracts/GaiaNFTContract";
import NFTAirdropContract from "../../contracts/NFTAirdropContract";
import EthereumWallet from "../../ethereum/EthereumWallet";
import KlaytnWallet from "../../klaytn/KlaytnWallet";
import PolygonWallet from "../../polygon/PolygonWallet";
import Layout from "../Layout";

export default class Genesis implements View {

    private container: DomNode;
    //private totalKlayDisplay: DomNode;
    //private totalEmergencyDisplay: DomNode;
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
                        //this.totalKlayDisplay = el("p", ""),
                        //this.totalEmergencyDisplay = el("p", ""),
                    ),
                    el(".button-container",
                        /*el("a", "모든 미수령 이자 받기", {
                            click: async () => {
                                await GaiaGenesisUSDCDistributorContract.claim(this.usdcTokenIds);
                                ViewUtil.waitTransactionAndRefresh();
                            },
                        }),
                        el("a", msg("ALL_EMERGENCY_BUTTON"), {
                            click: async () => {
                                await NFTAirdropContract.collectAirdropReward(0, this.tokenIds);
                                ViewUtil.waitTransactionAndRefresh();
                            },
                        }),*/
                    ),
                ),
            ),
            this.nftList = el(".nft-container"),
        ));

        this.loadKlaytnNFTsDebouncer.run();
        KlaytnWallet.on("connect", () => this.loadKlaytnNFTsDebouncer.run());

        this.loadPolygonNFTsDebouncer.run();
        PolygonWallet.on("connect", () => this.loadPolygonNFTsDebouncer.run());

        this.loadEthNFTsDebouncer.run();
        EthereumWallet.on("connect", () => this.loadEthNFTsDebouncer.run());
    }

    private loadEthNFTsDebouncer: Debouncer = new Debouncer(200, () => this.loadEthNFTs());
    private loadPolygonNFTsDebouncer: Debouncer = new Debouncer(200, () => this.loadPolygonNFTs());
    private loadKlaytnNFTsDebouncer: Debouncer = new Debouncer(200, () => this.loadKlaytnNFTs());

    private async loadEthNFTs() {
        const address = await EthereumWallet.loadAddress();
        if (address !== undefined) {
            const result = await fetch(`https://api.gaiaprotocol.com/gaia-protocol-pfp/ethereum/genesis/${address}`);
            const data = await result.json();
            for (const asset of data.assets) {
                const item = new EthGenesisNftItem().appendTo(this.nftList);
                item.init(asset.token_id, BigNumber.from(0), false, BigNumber.from(0), BigNumber.from(0));
            }
        }
    }

    private async loadPolygonNFTs() {
        const address = await PolygonWallet.loadAddress();
        if (address !== undefined) {
            const result = await fetch(`https://api.gaiaprotocol.com/gaia-protocol-pfp/polygon/0x9f69C2a06c97fCAAc1E586b30Ea681c43975F052/${address}`);
            const data = await result.json();
            for (const nft of data.nfts) {
                const item = new PolygonGenesisNftItem().appendTo(this.nftList);
                item.init(nft.token_id, BigNumber.from(0), false, BigNumber.from(0), BigNumber.from(0));
            }
        }
    }

    private async loadKlaytnNFTs() {

        const address = await KlaytnWallet.loadAddress();
        if (address !== undefined) {
            const reward = await NFTAirdropContract.airdropReward(0);

            const balance = (await GaiaNFTContract.balanceOf(address)).toNumber();
            const promises: Promise<void>[] = [];

            this.tokenIds = [];

            let totalEmergency = BigNumber.from(0);
            const result = await fetch(`https://nft-holder-collector.webplusone.com/nfts/klaytn/${Config.contracts.GaiaNFT}/${address}`);
            const dataSet = await result.json();
            for (const data of dataSet) {
                const promise = async () => {
                    const item = new GenesisNftItem().appendTo(this.nftList);
                    //const tokenId = (await GaiaNFTContract.tokenOfOwnerByIndex(address, index)).toNumber();
                    const tokenId = data.tokenId;
                    if (tokenId === 0) {
                        item.delete();
                    } else {
                        //const usdc = await GaiaGenesisUSDCDistributorContract.rewardPerId(tokenId);
                        //const usdcCollected = await GaiaGenesisUSDCDistributorContract.isRewardCollected(tokenId);
                        //const collected = await NFTAirdropContract.airdropCollected(0, tokenId);

                        //item.init(tokenId, usdc, usdcCollected, reward, collected);
                        item.init(tokenId, BigNumber.from(0), false, reward, BigNumber.from(0));
                        this.tokenIds.push(tokenId);
                        /*if (usdcCollected !== true) {
                            this.usdcs.push(usdc);
                            this.usdcTokenIds.push(tokenId);
                        }*/
                        //totalEmergency = totalEmergency.add(reward.sub(collected));
                    }
                };
                promises.push(promise());
            }
            await Promise.all(promises);

            let totalUSDC = BigNumber.from(0);
            for (const usdc of this.usdcs) {
                totalUSDC = totalUSDC.add(usdc);
            }
            //this.totalKlayDisplay.empty().appendText(`${"총 미수령 이자 {amount} USDC".replace(/{amount}/, String(utils.formatUnits(totalUSDC, 6)))}`);
            //this.totalEmergencyDisplay.empty().appendText(`${msg("ALL_EMERGENCY_DESC")} ${String(utils.formatEther(totalEmergency))} KLAY`);
        }
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        clearInterval(this.interval);
        this.container.delete();
    }
}
