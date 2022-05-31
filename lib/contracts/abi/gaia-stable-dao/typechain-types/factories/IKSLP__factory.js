"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IKSLP__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "outToken",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "outAmount",
                type: "uint256",
            },
        ],
        name: "estimateNeg",
        outputs: [
            {
                internalType: "uint256",
                name: "inAmount",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "factory",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "tokenA",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "tokenB",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
class IKSLP__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IKSLP__factory = IKSLP__factory;
IKSLP__factory.abi = _abi;
//# sourceMappingURL=IKSLP__factory.js.map