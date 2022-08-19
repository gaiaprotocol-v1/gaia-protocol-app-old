"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EthereumContract_1 = __importDefault(require("../EthereumContract"));
class ERC20Contract extends EthereumContract_1.default {
    constructor(address, abi, eventNames) {
        super(address, abi, eventNames.concat([
            "Transfer",
            "Approval",
        ]));
    }
    async getName() {
        return await this.contract.name();
    }
    async getNonce(owner) {
        return await this.contract.nonces(owner);
    }
    async getTotalSupply() {
        return await this.contract.totalSupply();
    }
    async balanceOf(owner) {
        return await this.contract.balanceOf(owner);
    }
    async allowance(owner, spender) {
        return await this.contract.allowance(owner, spender);
    }
}
exports.default = ERC20Contract;
//# sourceMappingURL=ERC20Contract.js.map