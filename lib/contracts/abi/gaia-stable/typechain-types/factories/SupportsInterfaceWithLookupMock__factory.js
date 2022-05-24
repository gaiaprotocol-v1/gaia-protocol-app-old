"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupportsInterfaceWithLookupMock__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        constant: true,
        inputs: [],
        name: "INTERFACE_ID_KIP13",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b5061002a6301ffc9a760e01b6001600160e01b0361002f16565b61009d565b6001600160e01b031980821614156100785760405162461bcd60e51b815260040180806020018281038252602e81526020018061019c602e913960400191505060405180910390fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b60f1806100ab6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c806301ffc9a7146037578063d81037cd14606f575b600080fd5b605b60048036036020811015604b57600080fd5b50356001600160e01b0319166092565b604080519115158252519081900360200190f35b607560b1565b604080516001600160e01b03199092168252519081900360200190f35b6001600160e01b03191660009081526020819052604090205460ff1690565b6301ffc9a760e01b8156fea265627a7a72315820ce14f0a064ecef095fe00298264095c081695c5f2fee89891755f81245855aa164736f6c634300051100324b49503133496e7465726661636573537570706f727465643a20696e76616c696420696e74657266616365206964";
const isSuperArgs = (xs) => xs.length > 1;
class SupportsInterfaceWithLookupMock__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
        this.contractName = "SupportsInterfaceWithLookupMock";
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
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
exports.SupportsInterfaceWithLookupMock__factory = SupportsInterfaceWithLookupMock__factory;
SupportsInterfaceWithLookupMock__factory.bytecode = _bytecode;
SupportsInterfaceWithLookupMock__factory.abi = _abi;
//# sourceMappingURL=SupportsInterfaceWithLookupMock__factory.js.map