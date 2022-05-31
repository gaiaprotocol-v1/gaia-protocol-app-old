"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const KIP7_json_1 = __importDefault(require("./abi/gaia-stable-dao/artifacts/contracts/klaytn-contracts/token/KIP7/KIP7.sol/KIP7.json"));
const KIP7Contract_1 = __importDefault(require("./standard/KIP7Contract"));
class oUSDCContract extends KIP7Contract_1.default {
    constructor() {
        super("0x754288077d0ff82af7a5317c7cb8c444d421d103", KIP7_json_1.default.abi);
    }
}
exports.default = new oUSDCContract();
//# sourceMappingURL=oUSDCContract.js.map