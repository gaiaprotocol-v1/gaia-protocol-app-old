"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const GaiaStableDAO_json_1 = __importDefault(require("../abi/gaia-protocol-pfp/artifacts/contracts/GaiaStableDAO.sol/GaiaStableDAO.json"));
const KIP17Contract_1 = __importDefault(require("../klaytn-standard/KIP17Contract"));
class KlayStableDAO extends KIP17Contract_1.default {
    constructor() {
        super("0x5428dB8Fd0063390b3357D78d56f183D6755A446", GaiaStableDAO_json_1.default.abi);
    }
    async totalSupply() {
        return ethers_1.BigNumber.from(await this.runMethod("totalSupply"));
    }
    async exists(id) {
        return await this.contract.exists(id);
    }
}
exports.default = new KlayStableDAO();
//# sourceMappingURL=KlayStableDAO.js.map