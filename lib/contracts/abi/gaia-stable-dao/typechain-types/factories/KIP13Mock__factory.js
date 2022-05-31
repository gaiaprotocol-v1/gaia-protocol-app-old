"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KIP13Mock__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        constant: false,
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "registerInterface",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
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
const _bytecode = "0x608060405261001d6301ffc9a760e01b6001600160e01b0361002216565b6100a6565b6001600160e01b03198082161415610081576040805162461bcd60e51b815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b610183806100b56000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806301ffc9a71461003b578063214cdb8014610076575b600080fd5b6100626004803603602081101561005157600080fd5b50356001600160e01b03191661009f565b604080519115158252519081900360200190f35b61009d6004803603602081101561008c57600080fd5b50356001600160e01b0319166100be565b005b6001600160e01b03191660009081526020819052604090205460ff1690565b6100c7816100ca565b50565b6001600160e01b03198082161415610129576040805162461bcd60e51b815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff1916600117905556fea265627a7a723158208f5dc1978c445e571689302f1c9cea2fa923cdc803137e82a58d466922f8f23064736f6c63430005110032";
const isSuperArgs = (xs) => xs.length > 1;
class KIP13Mock__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
        this.contractName = "KIP13Mock";
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
exports.KIP13Mock__factory = KIP13Mock__factory;
KIP13Mock__factory.bytecode = _bytecode;
KIP13Mock__factory.abi = _abi;
//# sourceMappingURL=KIP13Mock__factory.js.map