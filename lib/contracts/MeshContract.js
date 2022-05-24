"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ERC20Contract_1 = __importDefault(require("./polygon-standard/ERC20Contract"));
const PolygonMix_json_1 = __importDefault(require("./polygon-abi/artifacts/contracts/PolygonMix.sol/PolygonMix.json"));
class MeshContract extends ERC20Contract_1.default {
    constructor() {
        super("0x82362ec182db3cf7829014bc61e9be8a2e82868a", PolygonMix_json_1.default.abi, []);
    }
}
exports.default = new MeshContract();
//# sourceMappingURL=MeshContract.js.map