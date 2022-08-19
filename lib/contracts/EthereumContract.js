"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const skydapp_common_1 = require("skydapp-common");
const EthereumNetworkProvider_1 = __importDefault(require("../ethereum/EthereumNetworkProvider"));
const EthereumWallet_1 = __importDefault(require("../ethereum/EthereumWallet"));
class EthereumContract extends skydapp_common_1.EventContainer {
    constructor(address, abi, eventNames) {
        super();
        this.address = address;
        this.abi = abi;
        const init = () => {
            this.contract = new ethers_1.ethers.Contract(address, abi, EthereumNetworkProvider_1.default.provider).connect(EthereumNetworkProvider_1.default.signer);
            for (const eventName of eventNames) {
                this.contract.on(eventName, (...args) => {
                    this.fireEvent(eventName, ...args);
                });
            }
        };
        init();
        EthereumNetworkProvider_1.default.on("connect", () => init());
    }
    get interface() {
        return this.contract.interface;
    }
    async connectAndGetWalletContract() {
        if (await EthereumWallet_1.default.loadChainId() !== 1) {
            alert(`Wrong Network. Please change to Ethereum`);
            EthereumWallet_1.default.disconnectFromWalletConnect();
        }
        else {
            if (await EthereumWallet_1.default.connected() !== true) {
                await EthereumWallet_1.default.connect();
            }
            if (this.walletContract === undefined && EthereumWallet_1.default.signer !== undefined) {
                this.walletContract = new ethers_1.ethers.Contract(this.address, this.abi, EthereumWallet_1.default.provider).connect(EthereumWallet_1.default.signer);
            }
            return this.walletContract;
        }
    }
}
exports.default = EthereumContract;
//# sourceMappingURL=EthereumContract.js.map