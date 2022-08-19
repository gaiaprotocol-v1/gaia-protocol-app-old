"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const GaiaGenesis_json_1 = __importDefault(require("../abi/gaia-protocol-pfp/artifacts/contracts/GaiaGenesis.sol/GaiaGenesis.json"));
const KIP17Contract_1 = __importDefault(require("../klaytn-standard/KIP17Contract"));
class KlayGenesis extends KIP17Contract_1.default {
    constructor() {
        super("0xe9A10bB97DDb4bCD7677393405B4b769273CeF3c", GaiaGenesis_json_1.default.abi);
    }
    async totalSupply() {
        return ethers_1.BigNumber.from(await this.runMethod("totalSupply"));
    }
    async exists(id) {
        return await this.contract.exists(id);
    }
}
exports.default = new KlayGenesis();
//# sourceMappingURL=KlayGenesis.js.map