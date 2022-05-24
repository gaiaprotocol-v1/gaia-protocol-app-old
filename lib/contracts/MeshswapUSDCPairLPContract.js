"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ERC20Contract_1 = __importDefault(require("./polygon-standard/ERC20Contract"));
class MeshswapUSDCPairLPContract extends ERC20Contract_1.default {
    constructor() {
        super("0x111d7a73b40aa5ee52bf651e8f07aa26f8e9efe8", require("./MeshswapUSDCPairLPContractABI.json"), []);
    }
    async miningIndex() {
        return await this.contract.miningIndex();
    }
    async userLastIndex(user) {
        return await this.contract.userLastIndex(user);
    }
}
exports.default = new MeshswapUSDCPairLPContract();
//# sourceMappingURL=MeshswapUSDCPairLPContract.js.map