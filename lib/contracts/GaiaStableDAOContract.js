"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const Config_1 = __importDefault(require("../Config"));
const GaiaStableDAO_json_1 = __importDefault(require("./abi/gaia-stable-dao/artifacts/contracts/GaiaStableDAO.sol/GaiaStableDAO.json"));
const KIP17Contract_1 = __importDefault(require("./standard/KIP17Contract"));
class GaiaStableDAOContract extends KIP17Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.GaiaStableDAO, GaiaStableDAO_json_1.default.abi);
    }
    async totalSupply() {
        return ethers_1.BigNumber.from(await this.runMethod("totalSupply"));
    }
    async isMinter(addr) {
        return await this.runMethod("isMinter", addr);
    }
}
exports.default = new GaiaStableDAOContract();
//# sourceMappingURL=GaiaStableDAOContract.js.map