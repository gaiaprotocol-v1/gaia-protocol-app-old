"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const skydapp_common_1 = require("skydapp-common");
const EthSupernovaNftItem_1 = __importDefault(require("../../component/EthSupernovaNftItem"));
const SupernovaNftItem_1 = __importDefault(require("../../component/SupernovaNftItem"));
const Config_1 = __importDefault(require("../../Config"));
const GaiaSupernovaContract_1 = __importDefault(require("../../contracts/GaiaSupernovaContract"));
const SupernovaRewardDistributor_1 = __importDefault(require("../../contracts/SupernovaRewardDistributor"));
const EthereumWallet_1 = __importDefault(require("../../ethereum/EthereumWallet"));
const KlaytnWallet_1 = __importDefault(require("../../klaytn/KlaytnWallet"));
const ViewUtil_1 = __importDefault(require("../ViewUtil"));
const Layout_1 = __importDefault(require("./../Layout"));
class Supernova {
    constructor() {
        this.tokenIds = [];
        this.loadEthNFTsDebouncer = new skydapp_common_1.Debouncer(200, () => this.loadEthNFTs());
        this.loadKlaytnNFTsDebouncer = new skydapp_common_1.Debouncer(200, () => this.loadKlaytnNFTs());
        Layout_1.default.current.title = (0, skydapp_browser_1.msg)("GAIA_SUPERNOVA_TITLE");
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".supernova-view", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)(".title-container", (0, skydapp_browser_1.el)("h2", (0, skydapp_browser_1.msg)("GAIA_SUPERNOVA_TITLE")), (0, skydapp_browser_1.el)("p", (0, skydapp_browser_1.msg)("GAIA_SUPERNOVA_DESC"))), (0, skydapp_browser_1.el)(".tool-container", (0, skydapp_browser_1.el)(".title-container", (0, skydapp_browser_1.el)("h3", "My NFT")))), (0, skydapp_browser_1.el)(".warning-container", (0, skydapp_browser_1.el)("p", "GAIA SUPERNOVA는 경품 이벤트를 진행하고 있으며 디스코드에서 확인 가능합니다."), (0, skydapp_browser_1.el)("a", "역대 상품 보기 >", { click: () => { ViewUtil_1.default.go("/supernova/event"); } })), this.nftList = (0, skydapp_browser_1.el)(".nft-container")));
        this.interval = setInterval(() => this.load(), 1000);
        this.loadKlaytnNFTsDebouncer.run();
        KlaytnWallet_1.default.on("connect", () => this.loadKlaytnNFTsDebouncer.run());
        this.loadEthNFTsDebouncer.run();
        EthereumWallet_1.default.on("connect", () => this.loadEthNFTsDebouncer.run());
    }
    async load() {
        const totalDistribution = (await SupernovaRewardDistributor_1.default.totalDistribution()).add("14450505446857445842091");
    }
    async loadEthNFTs() {
        const address = await EthereumWallet_1.default.loadAddress();
        if (address !== undefined) {
            const result = await fetch(`https://api.gaiaprotocol.com/gaia-protocol-pfp/ethereum/supernova/${address}`);
            const data = await result.json();
            for (const asset of data.assets) {
                const item = new EthSupernovaNftItem_1.default().appendTo(this.nftList);
                item.init(asset.token_id);
            }
        }
    }
    async loadKlaytnNFTs() {
        const address = await KlaytnWallet_1.default.loadAddress();
        if (address !== undefined) {
            const balance = (await GaiaSupernovaContract_1.default.balanceOf(address)).toNumber();
            const promises = [];
            this.tokenIds = [];
            const result = await fetch(`https://nft-holder-collector.webplusone.com/nfts/klaytn/${Config_1.default.contracts.GaiaSupernova}/${address}`);
            const dataSet = await result.json();
            for (const data of dataSet) {
                const promise = async () => {
                    const item = new SupernovaNftItem_1.default().appendTo(this.nftList);
                    const tokenId = data.tokenId;
                    if (tokenId === 0) {
                        item.delete();
                    }
                    else {
                        item.init(tokenId);
                        this.tokenIds.push(tokenId);
                    }
                };
                promises.push(promise());
            }
            await Promise.all(promises);
        }
        const promises = [];
        await Promise.all(promises);
    }
    changeParams(params, uri) { }
    close() {
        clearInterval(this.interval);
        this.container.delete();
    }
}
exports.default = Supernova;
//# sourceMappingURL=Supernova.js.map