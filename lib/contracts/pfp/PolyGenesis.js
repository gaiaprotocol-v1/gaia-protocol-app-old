"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GaiaGenesis_json_1 = __importDefault(require("../abi/gaia-protocol-pfp/artifacts/contracts/GaiaGenesis.sol/GaiaGenesis.json"));
const ERC721Contract_1 = __importDefault(require("../polygon-standard/ERC721Contract"));
class PolyGenesis extends ERC721Contract_1.default {
    constructor() {
        super("0x9f69C2a06c97fCAAc1E586b30Ea681c43975F052", GaiaGenesis_json_1.default.abi, []);
    }
    async totalSupply() {
        return await this.contract.totalSupply();
    }
    async exists(id) {
        return await this.contract.exists(id);
    }
}
exports.default = new PolyGenesis();
//# sourceMappingURL=PolyGenesis.js.map