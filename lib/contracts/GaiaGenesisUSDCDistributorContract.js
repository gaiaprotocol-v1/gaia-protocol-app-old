"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const Config_1 = __importDefault(require("../Config"));
const GaiaUSDCDistributor_json_1 = __importDefault(require("./abi/usdc-distributor/artifacts/contracts/gaiaGenesisUSDCDistributor.sol/GaiaUSDCDistributor.json"));
const Contract_1 = __importDefault(require("./Contract"));
class GaiaGenesisUSDCDistributorContract extends Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.GaiaGenesisUSDCDistributor, GaiaUSDCDistributor_json_1.default.abi);
    }
    async rewardPerId(id) {
        return ethers_1.BigNumber.from(await this.runMethod("rewardPerId", id));
    }
    async isRewardCollected(id) {
        return await this.runMethod("isRewardCollected", id);
    }
    async claim(ids) {
        if (ids.length > 25) {
            await this.runWalletMethodWithLargeGas("claim", ids);
        }
        else {
            await this.runWalletMethod("claim", ids);
        }
    }
}
exports.default = new GaiaGenesisUSDCDistributorContract();
//# sourceMappingURL=GaiaGenesisUSDCDistributorContract.js.map