"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GaiaSupernova_json_1 = __importDefault(require("../abi/gaia-protocol-pfp/artifacts/contracts/GaiaSupernova.sol/GaiaSupernova.json"));
const ERC721Contract_1 = __importDefault(require("../ethereum-standard/ERC721Contract"));
class EthSupernova extends ERC721Contract_1.default {
    constructor() {
        super("0xe7df0DcA32eb23F4182055dC6a2053A3fF239315", GaiaSupernova_json_1.default.abi, []);
    }
    async totalSupply() {
        return await this.contract.totalSupply();
    }
    async exists(id) {
        return await this.contract.exists(id);
    }
}
exports.default = new EthSupernova();
//# sourceMappingURL=EthSupernova.js.map