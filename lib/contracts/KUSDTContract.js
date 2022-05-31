"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const KIP7_json_1 = __importDefault(require("./abi/gaia-stable-dao/artifacts/contracts/klaytn-contracts/token/KIP7/KIP7.sol/KIP7.json"));
const KIP7Contract_1 = __importDefault(require("./standard/KIP7Contract"));
class KUSDTContract extends KIP7Contract_1.default {
    constructor() {
        super("0xceE8FAF64bB97a73bb51E115Aa89C17FfA8dD167", KIP7_json_1.default.abi);
    }
}
exports.default = new KUSDTContract();
//# sourceMappingURL=KUSDTContract.js.map