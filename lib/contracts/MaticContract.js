"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ERC20Contract_1 = __importDefault(require("./polygon-standard/ERC20Contract"));
const PolygonMix_json_1 = __importDefault(require("./polygon-abi/artifacts/contracts/PolygonMix.sol/PolygonMix.json"));
class MaticContract extends ERC20Contract_1.default {
    constructor() {
        super("0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270", PolygonMix_json_1.default.abi, []);
    }
}
exports.default = new MaticContract();
//# sourceMappingURL=MaticContract.js.map