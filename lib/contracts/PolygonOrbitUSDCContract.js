"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ERC20Contract_1 = __importDefault(require("./polygon-standard/ERC20Contract"));
const PolygonMix_json_1 = __importDefault(require("./polygon-abi/artifacts/contracts/PolygonMix.sol/PolygonMix.json"));
class PolygonOrbitUSDCContract extends ERC20Contract_1.default {
    constructor() {
        super("0x5bef2617ecca9a39924c09017c5f1e25efbb3ba8", PolygonMix_json_1.default.abi, []);
    }
}
exports.default = new PolygonOrbitUSDCContract();
//# sourceMappingURL=PolygonOrbitUSDCContract.js.map