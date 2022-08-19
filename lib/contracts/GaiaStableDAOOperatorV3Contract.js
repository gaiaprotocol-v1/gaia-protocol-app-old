"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const Config_1 = __importDefault(require("../Config"));
const KlaytnWallet_1 = __importDefault(require("../klaytn/KlaytnWallet"));
const GaiaStableDAOOperatorV3_json_1 = __importDefault(require("./abi/gaia-stable-dao/artifacts/contracts/GaiaStableDAOOperatorV3.sol/GaiaStableDAOOperatorV3.json"));
const KlaytnContract_1 = __importDefault(require("./KlaytnContract"));
const GaiaStableDAOContract_1 = __importDefault(require("./GaiaStableDAOContract"));
class GaiaStableDAOOperatorV3Contract extends KlaytnContract_1.default {
    constructor() {
        super(Config_1.default.contracts.GaiaStableDAOOperatorV3, GaiaStableDAOOperatorV3_json_1.default.abi);
    }
    async claimableInterest() {
        return ethers_1.BigNumber.from(await this.runMethod("claimableInterest"));
    }
    async claimableKSPReward() {
        return ethers_1.BigNumber.from(await this.runMethod("claimableKSPReward"));
    }
    async whitelistedAmount(user) {
        return ethers_1.BigNumber.from(await this.runMethod("whitelistedAmount", user));
    }
    async mintStableDAO(amount, nft) {
        await this.runWalletMethod2("mintStableDAO", amount, nft);
    }
    async buyBack(ids) {
        const owner = await KlaytnWallet_1.default.loadAddress();
        if (owner !== undefined) {
            if (await GaiaStableDAOContract_1.default.isApprovedForAll(owner, this.address) !== true) {
                await GaiaStableDAOContract_1.default.setApprovalForAll(this.address, true);
            }
            await this.runWalletMethod("buyBack", ids);
        }
    }
}
exports.default = new GaiaStableDAOOperatorV3Contract();
//# sourceMappingURL=GaiaStableDAOOperatorV3Contract.js.map