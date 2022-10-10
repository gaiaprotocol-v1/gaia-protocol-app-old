import { BigNumber, constants, utils } from "ethers";
import { DomNode, el, msg } from "skydapp-browser";
import { Debouncer, View, ViewParams } from "skydapp-common";
import CommonUtil from "../../CommonUtil";
import PolygonStableNftItem from "../../component/PolygonStableNftItem";
import Alert from "../../component/shared/dialogue/Alert";
import Confirm from "../../component/shared/dialogue/Confirm";
import PolygonUSDCContract from "../../contracts/PolygonUSDCContract";
import StableDAOMinterContract from "../../contracts/StableDAOMinterContract";
import PolygonWallet from "../../polygon/PolygonWallet";
import Layout from "../Layout";
import ViewUtil from "../ViewUtil";

export default class BuyStableDAO implements View {

    private container: DomNode;
    //private notice: DomNode;

    private price = utils.parseUnits("1300", 6);
    private count = BigNumber.from(0);

    //private totalDisplay: DomNode;
    //private priceDisplay: DomNode;
    //private salesDisplay: DomNode;

    //private approveButton: DomNode;
    //private buyButton: DomNode;

    private nftList: DomNode;

    private tokenIds: number[] = [];

    private interval: any;

    constructor() {
        Layout.current.title = msg("BUY_TITLE");
        Layout.current.content.append(this.container = el(".buy-stable-dao-view",
            el("h1", "BUY"),
            el("img", { src: "/images/logo/gaia-stable-dao.png", alt: "logo" }),
            el(".selector-container",
                //this.salesDisplay = el("p", "SALES: ... EA"),
                //this.priceDisplay = el("p", "PRICE: ... USDC"),
                //this.totalDisplay = el("p", "TOTAL: ... USDC"),
            ),
            el("p", "Gaia Protocol 2.0을 위해 바이백 정책이 변경중입니다."),
            el("a", "Gaia Protocol 2.0 제안 보기", { href: "https://medium.com/gaiaprotocol/gaia-protocol-2-0-%EC%A0%9C%EC%95%88-98e40c0d7663", target: "_blank" }),
            /*el(".input-container",
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
                            const address = await PolygonWallet.loadAddress();
                            if (address !== undefined) {
                                if ((await PolygonUSDCContract.allowance(address, StableDAOMinterContract.address)).eq(0)) {
                                    await PolygonUSDCContract.approve(StableDAOMinterContract.address, constants.MaxUint256);
                                } else {
                                    new Alert("오류", "이미 사용 승인 하셨습니다.");
                                }
                            }
                        },
                    }),
                    this.buyButton = el("a.disabled", msg("BUY_NFT_BUTTON"), {
                        click: async () => {
                            const address = await PolygonWallet.loadAddress();
                            if (address !== undefined) {
                                if ((await PolygonUSDCContract.allowance(address, StableDAOMinterContract.address)).eq(0)) {
                                    new Alert("오류", "USDC 사용 승인이 필요합니다.");
                                } else if ((await PolygonUSDCContract.balanceOf(address)).lt(this.price.mul(this.count))) {
                                    new Confirm("오류", "USDC 개수가 부족합니다. 구매하시겠습니까?", "USDC 구매하기", () => {
                                        open("https://meshswap.fi/exchange/swap?output=0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174");
                                    });
                                } else {
                                    if (this.count.toNumber() > 10) {
                                        new Alert("오류", "한 번에 최대 10개까지 구매가 가능합니다.");
                                    } else {
                                        await StableDAOMinterContract.mintStableDAO(this.count);
                                        new Alert("구매 성공!", "Gaia Stable DAO 구매에 성공했습니다. 환영합니다!");
                                        ViewUtil.waitTransactionAndRefresh();
                                    }
                                }
                            }
                        },
                    }),
                ),
                el("a.usdc", msg("BUY_USDC_BUTTON"), { href: "https://meshswap.fi/exchange/swap?output=0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", target: "_blank" }),
            ),*/
            // el(".warning-container",
            //     el("p", "예치금을 Mesh Swap으로 이전하는 거버넌스가 통과됨에 따라서 바이백 시스템 가동이 불가능합니다."),
            // ),
            el(".nft-container",
                el("h2", msg("MY_NFT_TITLE")),
                this.nftList = el("section"),
            ),
        ));

        this.interval = setInterval(() => this.loadSales(), 1000);

        //this.priceDisplay.empty().appendText(`PRICE: ${CommonUtil.numberWithCommas(utils.formatUnits(this.price, 6))} USDC`);
        this.loadTotal();

        this.loadNFTsDebouncer.run();
        PolygonWallet.on("connect", () => this.loadNFTsDebouncer.run());
    }

    private loadNFTsDebouncer: Debouncer = new Debouncer(200, () => this.loadNFTs());

    private async loadSales() {

        /*this.notice.empty().appendText("Gaia Protocol 2.0을 위해 바이백 정책이 변경중입니다.");

        const sales = await StableDAOMinterContract.totalSupply();
        this.salesDisplay.empty().appendText(`SALES: ${sales} EA`);

        const address = await PolygonWallet.loadAddress();
        if (address !== undefined) {
            if ((await PolygonUSDCContract.allowance(address, StableDAOMinterContract.address)).eq(0)) {
                this.approveButton.deleteClass("disabled");
                this.buyButton.addClass("disabled");
            } else {
                this.approveButton.addClass("disabled");
                this.buyButton.deleteClass("disabled");
            }
        }*/
    }

    private async loadTotal() {
        //this.totalDisplay.empty().appendText(`TOTAL: ${CommonUtil.numberWithCommas(utils.formatUnits(this.count.mul(this.price), 6))} USDC`);
    }

    private async loadNFTs() {
        this.nftList.empty();
        const address = await PolygonWallet.loadAddress();
        if (address !== undefined) {

            const result = await fetch(`https://api.gaiaprotocol.com/gaia-protocol-pfp/polygon/0xa5f5b6C05a6d48a56E95E4Ce15078008a18BC79B/${address}`);
            const data = await result.json();

            if (data.nfts.length === 0) {
                this.nftList.append(el("p.empty", "폴리곤 체인에 Stable DAO가 없습니다."));
            }

            for (const nft of data.nfts) {
                const item = new PolygonStableNftItem().appendTo(this.nftList);
                const tokenId = parseInt(nft.token_id, 10);
                item.init(tokenId);
                this.tokenIds.push(tokenId);
            }
        }
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        clearInterval(this.interval);
        this.container.delete();
    }
}
