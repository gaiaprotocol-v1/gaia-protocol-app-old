"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GaiaStableDAO_json_1 = __importDefault(require("../abi/gaia-protocol-pfp/artifacts/contracts/GaiaStableDAO.sol/GaiaStableDAO.json"));
const ERC721Contract_1 = __importDefault(require("../ethereum-standard/ERC721Contract"));
class EthStableDAO extends ERC721Contract_1.default {
    constructor() {
        super("0xFfFd676Bffd8797f34C2Adc3E808F374CAEe49D8", GaiaStableDAO_json_1.default.abi, []);
    }
    async totalSupply() {
        return await this.contract.totalSupply();
    }
    async exists(id) {
        return await this.contract.exists(id);
    }
}
exports.default = new EthStableDAO();
//# sourceMappingURL=EthStableDAO.js.map