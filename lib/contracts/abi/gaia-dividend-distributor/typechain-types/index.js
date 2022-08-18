"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockWETH__factory = exports.ERC20Mock__factory = exports.IWETH__factory = exports.IGaiaDividendDistributor__factory = exports.GaiaDividendDistributor__factory = exports.IERC20__factory = exports.IERC20Metadata__factory = exports.IERC20Permit__factory = exports.ERC20__factory = exports.Ownable__factory = exports.factories = void 0;
exports.factories = __importStar(require("./factories"));
var Ownable__factory_1 = require("./factories/@openzeppelin/contracts/access/Ownable__factory");
Object.defineProperty(exports, "Ownable__factory", { enumerable: true, get: function () { return Ownable__factory_1.Ownable__factory; } });
var ERC20__factory_1 = require("./factories/@openzeppelin/contracts/token/ERC20/ERC20__factory");
Object.defineProperty(exports, "ERC20__factory", { enumerable: true, get: function () { return ERC20__factory_1.ERC20__factory; } });
var IERC20Permit__factory_1 = require("./factories/@openzeppelin/contracts/token/ERC20/extensions/draft-IERC20Permit.sol/IERC20Permit__factory");
Object.defineProperty(exports, "IERC20Permit__factory", { enumerable: true, get: function () { return IERC20Permit__factory_1.IERC20Permit__factory; } });
var IERC20Metadata__factory_1 = require("./factories/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata__factory");
Object.defineProperty(exports, "IERC20Metadata__factory", { enumerable: true, get: function () { return IERC20Metadata__factory_1.IERC20Metadata__factory; } });
var IERC20__factory_1 = require("./factories/@openzeppelin/contracts/token/ERC20/IERC20__factory");
Object.defineProperty(exports, "IERC20__factory", { enumerable: true, get: function () { return IERC20__factory_1.IERC20__factory; } });
var GaiaDividendDistributor__factory_1 = require("./factories/contracts/GaiaDividendDistributor__factory");
Object.defineProperty(exports, "GaiaDividendDistributor__factory", { enumerable: true, get: function () { return GaiaDividendDistributor__factory_1.GaiaDividendDistributor__factory; } });
var IGaiaDividendDistributor__factory_1 = require("./factories/contracts/interfaces/IGaiaDividendDistributor__factory");
Object.defineProperty(exports, "IGaiaDividendDistributor__factory", { enumerable: true, get: function () { return IGaiaDividendDistributor__factory_1.IGaiaDividendDistributor__factory; } });
var IWETH__factory_1 = require("./factories/contracts/interfaces/IWETH__factory");
Object.defineProperty(exports, "IWETH__factory", { enumerable: true, get: function () { return IWETH__factory_1.IWETH__factory; } });
var ERC20Mock__factory_1 = require("./factories/contracts/mock/ERC20Mock__factory");
Object.defineProperty(exports, "ERC20Mock__factory", { enumerable: true, get: function () { return ERC20Mock__factory_1.ERC20Mock__factory; } });
var MockWETH__factory_1 = require("./factories/contracts/mock/MockWETH__factory");
Object.defineProperty(exports, "MockWETH__factory", { enumerable: true, get: function () { return MockWETH__factory_1.MockWETH__factory; } });
//# sourceMappingURL=index.js.map