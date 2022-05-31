import { BigNumber, constants, utils } from "ethers";
import { DomNode, el, msg, Store } from "skydapp-browser";
import { Debouncer, SkyUtil, View, ViewParams } from "skydapp-common";
import CommonUtil from "../../CommonUtil";
import NftItem from "../../component/StableNftItem";
import Alert from "../../component/shared/dialogue/Alert";
import GaiaGenesisContract from "../../contracts/GaiaGenesisContract";
import GaiaStableDAOContract from "../../contracts/GaiaStableDAOContract";
import GaiaStableDAOOperatorV2Contract from "../../contracts/GaiaStableDAOOperatorV2Contract";
import GaiaSupernovaContract from "../../contracts/GaiaSupernovaContract";
import oUSDCContract from "../../contracts/oUSDCContract";
import Wallet from "../../klaytn/Wallet";
import Layout from "../Layout";
import ViewUtil from "../ViewUtil";
import Confirm from "../../component/shared/dialogue/Confirm";

export default class BuyStableDAO implements View {

    private container: DomNode;
    private notice: DomNode;

    private tabType = "public";

    private price = BigNumber.from(0);
    private count = BigNumber.from(1);

    private genesisTab: DomNode;
    private supernovaTab: DomNode;
    private publicTab: DomNode;

    private totalDisplay: DomNode;
    private priceDisplay: DomNode;
    private salesDisplay: DomNode;

    private approveButton: DomNode;
    private buyButton: DomNode;

    private nftList: DomNode;

    private tokenIds: number[] = [];

    private tabStore: Store = new Store("tab-store");

    private interval: any;

    constructor() {
        Layout.current.title = msg("BUY_TITLE");
        Layout.current.content.append(this.container = el(".buy-stable-dao-view",
            el("h1", "BUY"),
            el("img", { src: "/images/logo/gaia-stable-dao.png", alt: "logo" }),
            el(".selector-container",
                this.salesDisplay = el("p", "SALES: ... EA"),
                this.priceDisplay = el("p", "PRICE: ... oUSDC"),
                this.totalDisplay = el("p", "TOTAL: ... oUSDC"),
                el(".select",
                    this.genesisTab = el("a.disable", "Genesis", { click: () => this.loadTab("genesis") }),
                    el("hr"),
                    this.supernovaTab = el("a.disable", "Supernova", { click: () => this.loadTab("supernova") }),
                    el("hr"),
                    this.publicTab = el("a.disabled", "Public", { click: () => this.loadTab("public") }),
                ),
            ),
            el(".input-container",
                this.notice = el("p"),
                el("input", {
                    placeholder: msg("BUY_INPUT"),
                    change: (event, input) => {
                        this.count = BigNumber.from((input.domElement as HTMLInputElement).value);
                        this.loadTotal();
                    },
                }),
                el(".button-container",
                    this.approveButton = el("a.disabled", msg("BUY_APPROVE_BUTTON"), {
                        click: async () => {
                            const address = await Wallet.loadAddress();
                            if (address !== undefined) {
                                if ((await oUSDCContract.allowance(address, GaiaStableDAOOperatorV2Contract.address)).eq(0)) {
                                    await oUSDCContract.approve(GaiaStableDAOOperatorV2Contract.address, constants.MaxUint256);
                                } else {
                                    new Alert("오류", "이미 사용 승인 하셨습니다.");
                                }
                            }
                        },
                    }),
                    this.buyButton = el("a.disabled", msg("BUY_NFT_BUTTON"), {
                        click: async () => {
                            const address = await Wallet.loadAddress();
                            if (address !== undefined) {
                                if ((await oUSDCContract.allowance(address, GaiaStableDAOOperatorV2Contract.address)).eq(0)) {
                                    new Alert("오류", "oUSDC 사용 승인이 필요합니다.");
                                } else if ((await oUSDCContract.balanceOf(address)).lt(this.price.mul(this.count))) {
                                    new Confirm("오류", "oUSDC 개수가 부족합니다. 구매하시겠습니까?", "oUSDC 구매하기", () => {
                                        open("https://swapscanner.io/ko/swap?from=0x0000000000000000000000000000000000000000&to=0x754288077d0ff82af7a5317c7cb8c444d421d103");
                                    });
                                } else if (await GaiaStableDAOContract.isMinter(GaiaStableDAOOperatorV2Contract.address) !== true) {
                                    new Alert("오류", "아직 판매중이 아닙니다.");
                                } else {
                                    let nft = constants.AddressZero;
                                    if (this.tabType === "genesis") {
                                        nft = GaiaGenesisContract.address;
                                    }
                                    if (this.tabType === "supernova") {
                                        nft = GaiaSupernovaContract.address;
                                    }
                                    if (this.count.toNumber() > 10) {
                                        new Alert("오류", "한 번에 최대 10개까지 구매가 가능합니다.");
                                    } else {
                                        await GaiaStableDAOOperatorV2Contract.mintStableDAO(this.count, nft);
                                        new Alert("구매 성공!", "Gaia Stable DAO 구매에 성공했습니다. 환영합니다!");
                                        ViewUtil.waitTransactionAndRefresh();
                                    }
                                }
                            }
                        },
                    }),
                ),
                el("a.usdc", msg("BUY_USDC_BUTTON"), { href: "https://swapscanner.io/ko/swap?from=0x0000000000000000000000000000000000000000&to=0x754288077d0ff82af7a5317c7cb8c444d421d103", target: "_blank" }),
            ),
            el(".warning-container",
                el("p", "예치금을 Mesh Swap으로 이전하는 거버넌스가 통과됨에 따라서 바이백 시스템 가동이 불가능합니다."),
            ),
            el(".nft-container",
                el("h2", msg("MY_NFT_TITLE")),
                this.nftList = el("section"),
            ),
        ));

        this.interval = setInterval(() => this.loadSales(), 1000);

        if (this.tabStore.get("type") === undefined) {
            this.loadTab("public");
        } else {
            this.loadTab(this.tabStore.get("type") as any);
        }

        this.loadNFTsDebouncer.run();
        Wallet.on("connect", () => this.loadNFTsDebouncer.run());
    }

    private loadNFTsDebouncer: Debouncer = new Debouncer(200, () => this.loadNFTs());

    private async loadSales() {

        if (await GaiaStableDAOContract.isMinter(GaiaStableDAOOperatorV2Contract.address) !== true) {
            this.notice.empty().appendText("아직 판매중이 아닙니다.");
        } else {
            this.notice.empty().appendText("현재 판매중입니다.");
        }

        const sales = await GaiaStableDAOContract.totalSupply();
        this.salesDisplay.empty().appendText(`SALES: ${sales} EA`);

        const address = await Wallet.loadAddress();
        if (address !== undefined) {
            if ((await oUSDCContract.allowance(address, GaiaStableDAOOperatorV2Contract.address)).eq(0)) {
                this.approveButton.deleteClass("disabled");
                this.buyButton.addClass("disabled");
            } else {
                this.approveButton.addClass("disabled");
                this.buyButton.deleteClass("disabled");
            }
        }
    }

    private async loadTab(type: "genesis" | "supernova" | "public") {

        this.tabStore.set("type", this.tabType = type);
        this.genesisTab.addClass("disable");
        this.supernovaTab.addClass("disable");
        this.publicTab.addClass("disable");

        if (type === "genesis") {
            this.genesisTab.deleteClass("disable");
            this.price = utils.parseUnits("1200", 6);
        }
        if (type === "supernova") {
            this.supernovaTab.deleteClass("disable");
            this.price = utils.parseUnits("1250", 6);
        }
        if (type === "public") {
            this.publicTab.deleteClass("disable");
            this.price = utils.parseUnits("1300", 6);
        }

        this.priceDisplay.empty().appendText(`PRICE: ${CommonUtil.numberWithCommas(utils.formatUnits(this.price, 6))} oUSDC`);
        this.loadTotal();
    }

    private async loadTotal() {
        this.totalDisplay.empty().appendText(`TOTAL: ${CommonUtil.numberWithCommas(utils.formatUnits(this.count.mul(this.price), 6))} oUSDC`);
    }

    private async loadNFTs() {
        this.nftList.empty();
        const address = await Wallet.loadAddress();
        if (address !== undefined) {
            const balance = (await GaiaStableDAOContract.balanceOf(address)).toNumber();
            if (balance === 0) {
                this.nftList.append(el("p.empty", "아직 구매하신 Stable DAO가 없습니다."));
            }

            const promises: Promise<void>[] = [];

            this.tokenIds = [];
            SkyUtil.repeat(balance, (i: number) => {
                const promise = async (index: number) => {
                    const item = new NftItem().appendTo(this.nftList);
                    const tokenId = (await GaiaStableDAOContract.tokenOfOwnerByIndex(address, index)).toNumber();
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
