"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const skydapp_browser_1 = require("skydapp-browser");
const skydapp_common_1 = require("skydapp-common");
const EthGenesisNftItem_1 = __importDefault(require("../../component/EthGenesisNftItem"));
const GenesisNftItem_1 = __importDefault(require("../../component/GenesisNftItem"));
const PolygonGenesisNftItem_1 = __importDefault(require("../../component/PolygonGenesisNftItem"));
const Config_1 = __importDefault(require("../../Config"));
const GaiaNFTContract_1 = __importDefault(require("../../contracts/GaiaNFTContract"));
const NFTAirdropContract_1 = __importDefault(require("../../contracts/NFTAirdropContract"));
const EthereumWallet_1 = __importDefault(require("../../ethereum/EthereumWallet"));
const KlaytnWallet_1 = __importDefault(require("../../klaytn/KlaytnWallet"));
const PolygonWallet_1 = __importDefault(require("../../polygon/PolygonWallet"));
const Layout_1 = __importDefault(require("../Layout"));
class Genesis {
    constructor() {
        this.tokenIds = [];
        this.usdcs = [];
        this.usdcTokenIds = [];
        this.loadEthNFTsDebouncer = new skydapp_common_1.Debouncer(200, () => this.loadEthNFTs());
        this.loadPolygonNFTsDebouncer = new skydapp_common_1.Debouncer(200, () => this.loadPolygonNFTs());
        this.loadKlaytnNFTsDebouncer = new skydapp_common_1.Debouncer(200, () => this.loadKlaytnNFTs());
        Layout_1.default.current.title = "Genesis";
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".genesis-view", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)(".title-container", (0, skydapp_browser_1.el)("h2", (0, skydapp_browser_1.msg)("GAIA_GENESIS_TITLE")), (0, skydapp_browser_1.el)("p", (0, skydapp_browser_1.msg)("GAIA_GENESIS_DESC"))), (0, skydapp_browser_1.el)(".tool-container", (0, skydapp_browser_1.el)(".title-container", (0, skydapp_browser_1.el)("h3", "My NFT")), (0, skydapp_browser_1.el)(".button-container"))), this.nftList = (0, skydapp_browser_1.el)(".nft-container")));
        this.loadKlaytnNFTsDebouncer.run();
        KlaytnWallet_1.default.on("connect", () => this.loadKlaytnNFTsDebouncer.run());
        this.loadPolygonNFTsDebouncer.run();
        PolygonWallet_1.default.on("connect", () => this.loadPolygonNFTsDebouncer.run());
        this.loadEthNFTsDebouncer.run();
        EthereumWallet_1.default.on("connect", () => this.loadEthNFTsDebouncer.run());
    }
    async loadEthNFTs() {
        const address = await EthereumWallet_1.default.loadAddress();
        if (address !== undefined) {
            const result = await fetch(`https://api.gaiaprotocol.com/gaia-protocol-pfp/ethereum/genesis/${address}`);
            const data = await result.json();
            for (const asset of data.assets) {
                const item = new EthGenesisNftItem_1.default().appendTo(this.nftList);
                item.init(asset.token_id, ethers_1.BigNumber.from(0), false, ethers_1.BigNumber.from(0), ethers_1.BigNumber.from(0));
            }
        }
    }
    async loadPolygonNFTs() {
        const address = await PolygonWallet_1.default.loadAddress();
        if (address !== undefined) {
            const result = await fetch(`https://api.gaiaprotocol.com/gaia-protocol-pfp/polygon/0x9f69C2a06c97fCAAc1E586b30Ea681c43975F052/${address}`);
            const data = await result.json();
            for (const nft of data.nfts) {
                const item = new PolygonGenesisNftItem_1.default().appendTo(this.nftList);
                item.init(nft.token_id, ethers_1.BigNumber.from(0), false, ethers_1.BigNumber.from(0), ethers_1.BigNumber.from(0));
            }
        }
    }
    async loadKlaytnNFTs() {
        const address = await KlaytnWallet_1.default.loadAddress();
        if (address !== undefined) {
            const reward = await NFTAirdropContract_1.default.airdropReward(0);
            const balance = (await GaiaNFTContract_1.default.balanceOf(address)).toNumber();
            const promises = [];
            this.tokenIds = [];
            let totalEmergency = ethers_1.BigNumber.from(0);
            const result = await fetch(`https://nft-holder-collector.webplusone.com/nfts/klaytn/${Config_1.default.contracts.GaiaNFT}/${address}`);
            const dataSet = await result.json();
            for (const data of dataSet) {
                const promise = async () => {
                    const item = new GenesisNftItem_1.default().appendTo(this.nftList);
                    const tokenId = data.tokenId;
                    if (tokenId === 0) {
                        item.delete();
                    }
                    else {
                        item.init(tokenId, ethers_1.BigNumber.from(0), false, reward, ethers_1.BigNumber.from(0));
                        this.tokenIds.push(tokenId);
                    }
                };
                promises.push(promise());
            }
            await Promise.all(promises);
            let totalUSDC = ethers_1.BigNumber.from(0);
            for (const usdc of this.usdcs) {
                totalUSDC = totalUSDC.add(usdc);
            }
        }
    }
    changeParams(params, uri) { }
    close() {
        clearInterval(this.interval);
        this.container.delete();
    }
}
exports.default = Genesis;
//# sourceMappingURL=Genesis.js.map