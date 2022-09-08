"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PolygonWallet_1 = __importDefault(require("../polygon/PolygonWallet"));
const GaiaStableDAOMinter_json_1 = __importDefault(require("./abi/gaia-stable-dao-minter/artifacts/contracts/GaiaStableDAOMinter.sol/GaiaStableDAOMinter.json"));
const PolygonContract_1 = __importDefault(require("./PolygonContract"));
const PolygonGaiaStableDAOContract_1 = __importDefault(require("./PolygonGaiaStableDAOContract"));
class StableDAOMinterContract extends PolygonContract_1.default {
    constructor() {
        super("0xC2a6f0de98478Dff521D7D2afEbfCD53F253853d", GaiaStableDAOMinter_json_1.default.abi, []);
    }
    async claimableInterest() {
        return await this.contract.claimableInterest();
    }
    async totalSupply() {
        return await this.contract.totalSupply();
    }
    async mintStableDAO(amount) {
        const contract = await this.connectAndGetWalletContract();
        await contract?.mintStableDAO(amount);
    }
    async buyBack(ids) {
        const owner = await PolygonWallet_1.default.loadAddress();
        if (owner !== undefined) {
            if (await PolygonGaiaStableDAOContract_1.default.isApprovedForAll(owner, this.address) !== true) {
                await PolygonGaiaStableDAOContract_1.default.setApprovalForAll(this.address, true);
            }
            const contract = await this.connectAndGetWalletContract();
            await contract?.buyBack(ids);
        }
    }
}
exports.default = new StableDAOMinterContract();
//# sourceMappingURL=StableDAOMinterContract.js.map