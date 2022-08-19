"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GaiaDividendDistributor_json_1 = __importDefault(require("./abi/gaia-dividend-distributor/artifacts/contracts/GaiaDividendDistributor.sol/GaiaDividendDistributor.json"));
const KlaytnContract_1 = __importDefault(require("./KlaytnContract"));
class KlaytnDividendDistributor extends KlaytnContract_1.default {
    constructor() {
        super("0x8aa8bB59eCCAF893d551753Cc7Fb27ff52df1E67", GaiaDividendDistributor_json_1.default.abi);
    }
    async isRewardCollected(user, rewardId) {
        return await this.runMethod("isRewardCollected", user, rewardId);
    }
    async claimRewards(rewardIds, amounts, proof) {
        await this.runWalletMethod("claimRewards", rewardIds, amounts, proof);
    }
}
exports.default = new KlaytnDividendDistributor();
//# sourceMappingURL=KlaytnDividendDistributor.js.map