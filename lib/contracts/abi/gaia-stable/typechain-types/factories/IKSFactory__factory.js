"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IKSFactory__factory = void 0;
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
            {
                internalType: "address[]",
                name: "path",
                type: "address[]",
            },
        ],
        name: "exchangeKlayNeg",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
class IKSFactory__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IKSFactory__factory = IKSFactory__factory;
IKSFactory__factory.abi = _abi;
//# sourceMappingURL=IKSFactory__factory.js.map