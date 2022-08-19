"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GaiaGenesis_json_1 = __importDefault(require("../abi/gaia-protocol-pfp/artifacts/contracts/GaiaGenesis.sol/GaiaGenesis.json"));
const ERC721Contract_1 = __importDefault(require("../ethereum-standard/ERC721Contract"));
class EthGenesis extends ERC721Contract_1.default {
    constructor() {
        super("0xb48E526d935BEe3891222f6aC10A253e31CCaBE1", GaiaGenesis_json_1.default.abi, []);
    }
    async totalSupply() {
        return await this.contract.totalSupply();
    }
    async exists(id) {
        return await this.contract.exists(id);
    }
}
exports.default = new EthGenesis();
//# sourceMappingURL=EthGenesis.js.map