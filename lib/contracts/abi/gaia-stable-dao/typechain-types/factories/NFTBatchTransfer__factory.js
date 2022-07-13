"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFTBatchTransfer__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "contract IKIP17",
                name: "_nft",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256[]",
                name: "ids",
                type: "uint256[]",
            },
        ],
        name: "batchTransfer",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "nft",
        outputs: [
            {
                internalType: "contract IKIP17",
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b506040516102e73803806102e78339818101604052602081101561003357600080fd5b5051600080546001600160a01b039092166001600160a01b0319909216919091179055610282806100656000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806347ccca021461003b578063ac3c99521461005f575b600080fd5b6100436100e1565b604080516001600160a01b039092168252519081900360200190f35b6100df6004803603604081101561007557600080fd5b6001600160a01b0382351691908101906040810160208201356401000000008111156100a057600080fd5b8201836020820111156100b257600080fd5b803590602001918460208302840111640100000000831117156100d457600080fd5b5090925090506100f0565b005b6000546001600160a01b031681565b8060005b818110156102465760005433906001600160a01b0316636352211e86868581811061011b57fe5b905060200201356040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b15801561015657600080fd5b505afa15801561016a573d6000803e3d6000fd5b505050506040513d602081101561018057600080fd5b50516001600160a01b03161461019557600080fd5b6000546001600160a01b03166323b872dd33878787868181106101b457fe5b905060200201356040518463ffffffff1660e01b815260040180846001600160a01b03166001600160a01b03168152602001836001600160a01b03166001600160a01b031681526020018281526020019350505050600060405180830381600087803b15801561022357600080fd5b505af1158015610237573d6000803e3d6000fd5b505050506001810190506100f4565b505050505056fea265627a7a72315820a7f934419b4322b6602ac9cf80d8b27328b9159e46560d7eb1e69ccc9e20ce3c64736f6c63430005110032";
const isSuperArgs = (xs) => xs.length > 1;
class NFTBatchTransfer__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
        this.contractName = "NFTBatchTransfer";
    }
    deploy(_nft, overrides) {
        return super.deploy(_nft, overrides || {});
    }
    getDeployTransaction(_nft, overrides) {
        return super.getDeployTransaction(_nft, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.NFTBatchTransfer__factory = NFTBatchTransfer__factory;
NFTBatchTransfer__factory.bytecode = _bytecode;
NFTBatchTransfer__factory.abi = _abi;
//# sourceMappingURL=NFTBatchTransfer__factory.js.map