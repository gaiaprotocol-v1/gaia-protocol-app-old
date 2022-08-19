"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const GaiaSupernova_json_1 = __importDefault(require("../abi/gaia-protocol-pfp/artifacts/contracts/GaiaSupernova.sol/GaiaSupernova.json"));
const KIP17Contract_1 = __importDefault(require("../klaytn-standard/KIP17Contract"));
class KlaySupernova extends KIP17Contract_1.default {
    constructor() {
        super("0x20a33C651373cde978daE404760e853fAE877588", GaiaSupernova_json_1.default.abi);
    }
    async totalSupply() {
        return ethers_1.BigNumber.from(await this.runMethod("totalSupply"));
    }
    async exists(id) {
        return await this.contract.exists(id);
    }
}
exports.default = new KlaySupernova();
//# sourceMappingURL=KlaySupernova.js.map