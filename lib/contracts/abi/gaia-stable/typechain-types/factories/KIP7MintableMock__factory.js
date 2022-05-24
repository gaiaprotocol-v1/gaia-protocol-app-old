"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KIP7MintableMock__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "MinterAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "MinterRemoved",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "addMinter",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
        ],
        name: "allowance",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
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
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "isMinter",
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
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "onlyMinterMock",
        outputs: [],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "removeMinter",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "renounceMinter",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "safeTransfer",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "safeTransfer",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "safeTransferFrom",
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
    {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transfer",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60806040526200001f6301ffc9a760e01b6001600160e01b036200006f16565b6200003a636578737160e01b6001600160e01b036200006f16565b6200004e336001600160e01b03620000f416565b62000069630755c1f160e51b6001600160e01b036200006f16565b6200023c565b6001600160e01b03198082161415620000cf576040805162461bcd60e51b815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b6200010f8160046200014660201b62000e491790919060201c565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b6200015b82826001600160e01b03620001d316565b15620001ae576040805162461bcd60e51b815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b60006001600160a01b0382166200021c5760405162461bcd60e51b8152600401808060200182810382526022815260200180620012e36022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b611097806200024c6000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806370a08231116100a2578063aa271e1a11610071578063aa271e1a146102fd578063b5dba35b14610323578063b88d4fde1461032b578063dd62ed3e146103f1578063eb7955491461041f5761010b565b806370a082311461027d578063983b2d56146102a357806398650275146102c9578063a9059cbb146102d15761010b565b80633092afd5116100de5780633092afd5146101c757806340c10f19146101ef578063423f6cef1461021b57806342842e0e146102475761010b565b806301ffc9a714610110578063095ea7b31461014b57806318160ddd1461017757806323b872dd14610191575b600080fd5b6101376004803603602081101561012657600080fd5b50356001600160e01b0319166104da565b604080519115158252519081900360200190f35b6101376004803603604081101561016157600080fd5b506001600160a01b0381351690602001356104f9565b61017f61050f565b60408051918252519081900360200190f35b610137600480360360608110156101a757600080fd5b506001600160a01b03813581169160208101359091169060400135610515565b6101ed600480360360208110156101dd57600080fd5b50356001600160a01b031661056c565b005b6101376004803603604081101561020557600080fd5b506001600160a01b038135169060200135610578565b6101ed6004803603604081101561023157600080fd5b506001600160a01b0381351690602001356105c8565b6101ed6004803603606081101561025d57600080fd5b506001600160a01b038135811691602081013590911690604001356105e6565b61017f6004803603602081101561029357600080fd5b50356001600160a01b0316610606565b6101ed600480360360208110156102b957600080fd5b50356001600160a01b0316610621565b6101ed61066e565b610137600480360360408110156102e757600080fd5b506001600160a01b038135169060200135610679565b6101376004803603602081101561031357600080fd5b50356001600160a01b0316610686565b6101ed61069f565b6101ed6004803603608081101561034157600080fd5b6001600160a01b0382358116926020810135909116916040820135919081019060808101606082013564010000000081111561037c57600080fd5b82018360208201111561038e57600080fd5b803590602001918460018302840111640100000000831117156103b057600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506106e3945050505050565b61017f6004803603604081101561040757600080fd5b506001600160a01b038135811691602001351661073c565b6101ed6004803603606081101561043557600080fd5b6001600160a01b038235169160208101359181019060608101604082013564010000000081111561046557600080fd5b82018360208201111561047757600080fd5b8035906020019184600183028401116401000000008311171561049957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610767945050505050565b6001600160e01b03191660009081526020819052604090205460ff1690565b60006105063384846107b9565b50600192915050565b60035490565b60006105228484846108a5565b6001600160a01b03841660009081526002602090815260408083203380855292529091205461056291869161055d908663ffffffff6109e916565b6107b9565b5060019392505050565b61057581610a32565b50565b600061058333610686565b6105be5760405162461bcd60e51b8152600401808060200182810382526030815260200180610fa96030913960400191505060405180910390fd5b6105068383610a3b565b6105e2828260405180602001604052806000815250610767565b5050565b610601838383604051806020016040528060008152506106e3565b505050565b6001600160a01b031660009081526001602052604090205490565b61062a33610686565b6106655760405162461bcd60e51b8152600401808060200182810382526030815260200180610fa96030913960400191505060405180910390fd5b61057581610b2d565b61067733610a32565b565b60006105063384846108a5565b600061069960048363ffffffff610b7516565b92915050565b6106a833610686565b6106775760405162461bcd60e51b8152600401808060200182810382526030815260200180610fa96030913960400191505060405180910390fd5b6106ee848484610515565b506106fb84848484610bdc565b6107365760405162461bcd60e51b815260040180806020018281038252602e815260200180610f59602e913960400191505060405180910390fd5b50505050565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b6107718383610679565b5061077e33848484610bdc565b6106015760405162461bcd60e51b815260040180806020018281038252602e815260200180610f59602e913960400191505060405180910390fd5b6001600160a01b0383166107fe5760405162461bcd60e51b81526004018080602001828103825260238152602001806110406023913960400191505060405180910390fd5b6001600160a01b0382166108435760405162461bcd60e51b8152600401808060200182810382526021815260200180610f386021913960400191505060405180910390fd5b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166108ea5760405162461bcd60e51b8152600401808060200182810382526024815260200180610ffa6024913960400191505060405180910390fd5b6001600160a01b03821661092f5760405162461bcd60e51b8152600401808060200182810382526022815260200180610f876022913960400191505060405180910390fd5b6001600160a01b038316600090815260016020526040902054610958908263ffffffff6109e916565b6001600160a01b03808516600090815260016020526040808220939093559084168152205461098d908263ffffffff610d1016565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b6000610a2b83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610d6a565b9392505050565b61057581610e01565b6001600160a01b038216610a96576040805162461bcd60e51b815260206004820152601e60248201527f4b4950373a206d696e7420746f20746865207a65726f20616464726573730000604482015290519081900360640190fd5b600354610aa9908263ffffffff610d1016565b6003556001600160a01b038216600090815260016020526040902054610ad5908263ffffffff610d1016565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b610b3e60048263ffffffff610e4916565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b60006001600160a01b038216610bbc5760405162461bcd60e51b815260040180806020018281038252602281526020018061101e6022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b6000610bf0846001600160a01b0316610eca565b610bfc57506001610d08565b604051634e8c461160e11b815233600482018181526001600160a01b03888116602485015260448401879052608060648501908152865160848601528651600095928a1694639d188c229490938c938b938b939260a4019060208501908083838e5b83811015610c76578181015183820152602001610c5e565b50505050905090810190601f168015610ca35780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b158015610cc557600080fd5b505af1158015610cd9573d6000803e3d6000fd5b505050506040513d6020811015610cef57600080fd5b50516001600160e01b031916634e8c461160e11b149150505b949350505050565b600082820183811015610a2b576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b60008184841115610df95760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610dbe578181015183820152602001610da6565b50505050905090810190601f168015610deb5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b610e1260048263ffffffff610ed016565b6040516001600160a01b038216907fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669290600090a250565b610e538282610b75565b15610ea5576040805162461bcd60e51b815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b3b151590565b610eda8282610b75565b610f155760405162461bcd60e51b8152600401808060200182810382526021815260200180610fd96021913960400191505060405180910390fd5b6001600160a01b0316600090815260209190915260409020805460ff1916905556fe4b4950373a20617070726f766520746f20746865207a65726f20616464726573734b4950373a207472616e7366657220746f206e6f6e204b495037526563656976657220696d706c656d656e7465724b4950373a207472616e7366657220746f20746865207a65726f20616464726573734d696e746572526f6c653a2063616c6c657220646f6573206e6f74206861766520746865204d696e74657220726f6c65526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c654b4950373a207472616e736665722066726f6d20746865207a65726f2061646472657373526f6c65733a206163636f756e7420697320746865207a65726f20616464726573734b4950373a20617070726f76652066726f6d20746865207a65726f2061646472657373a265627a7a7231582096b66bf1eeb52b2530214ca39a451c6eaf4bc7e6bf5f6332a96ba1fa5a5a3a0564736f6c63430005110032526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373";
const isSuperArgs = (xs) => xs.length > 1;
class KIP7MintableMock__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
        this.contractName = "KIP7MintableMock";
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
exports.KIP7MintableMock__factory = KIP7MintableMock__factory;
KIP7MintableMock__factory.bytecode = _bytecode;
KIP7MintableMock__factory.abi = _abi;
//# sourceMappingURL=KIP7MintableMock__factory.js.map