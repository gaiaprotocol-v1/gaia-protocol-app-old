"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ERC20Contract_1 = __importDefault(require("./polygon-standard/ERC20Contract"));
const PolygonMix_json_1 = __importDefault(require("./polygon-abi/artifacts/contracts/PolygonMix.sol/PolygonMix.json"));
class PolygonUSDCContract extends ERC20Contract_1.default {
    constructor() {
        super("0x2791bca1f2de4661ed88a30c99a7a9449aa84174", PolygonMix_json_1.default.abi, []);
    }
}
exports.default = new PolygonUSDCContract();
//# sourceMappingURL=PolygonUSDCContract.js.map