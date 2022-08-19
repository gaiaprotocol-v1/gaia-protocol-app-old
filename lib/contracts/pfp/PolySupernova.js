"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GaiaSupernova_json_1 = __importDefault(require("../abi/gaia-protocol-pfp/artifacts/contracts/GaiaSupernova.sol/GaiaSupernova.json"));
const ERC721Contract_1 = __importDefault(require("../polygon-standard/ERC721Contract"));
class PolySupernova extends ERC721Contract_1.default {
    constructor() {
        super("0xECFFc91149b8B702dEa6905Ae304A9D36527060F", GaiaSupernova_json_1.default.abi, []);
    }
    async totalSupply() {
        return await this.contract.totalSupply();
    }
    async exists(id) {
        return await this.contract.exists(id);
    }
}
exports.default = new PolySupernova();
//# sourceMappingURL=PolySupernova.js.map