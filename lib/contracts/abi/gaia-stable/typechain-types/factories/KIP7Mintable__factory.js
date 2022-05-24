"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KIP7Mintable__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
    },
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
const _bytecode = "0x60806040523480156200001157600080fd5b506200002d6301ffc9a760e01b6001600160e01b036200007d16565b62000048636578737160e01b6001600160e01b036200007d16565b6200005c336001600160e01b036200010216565b62000077630755c1f160e51b6001600160e01b036200007d16565b6200024a565b6001600160e01b03198082161415620000dd576040805162461bcd60e51b815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b6200011d8160046200015460201b62000daf1790919060201c565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b6200016982826001600160e01b03620001e116565b15620001bc576040805162461bcd60e51b815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b60006001600160a01b0382166200022a5760405162461bcd60e51b8152600401808060200182810382526022815260200180620012576022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b610ffd806200025a6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806370a0823111610097578063aa271e1a11610066578063aa271e1a146102c1578063b88d4fde146102e7578063dd62ed3e146103ad578063eb795549146103db576100f5565b806370a0823114610241578063983b2d5614610267578063986502751461028d578063a9059cbb14610295576100f5565b806323b872dd116100d357806323b872dd1461017b57806340c10f19146101b1578063423f6cef146101dd57806342842e0e1461020b576100f5565b806301ffc9a7146100fa578063095ea7b31461013557806318160ddd14610161575b600080fd5b6101216004803603602081101561011057600080fd5b50356001600160e01b031916610496565b604080519115158252519081900360200190f35b6101216004803603604081101561014b57600080fd5b506001600160a01b0381351690602001356104b5565b6101696104cb565b60408051918252519081900360200190f35b6101216004803603606081101561019157600080fd5b506001600160a01b038135811691602081013590911690604001356104d1565b610121600480360360408110156101c757600080fd5b506001600160a01b038135169060200135610528565b610209600480360360408110156101f357600080fd5b506001600160a01b038135169060200135610578565b005b6102096004803603606081101561022157600080fd5b506001600160a01b03813581169160208101359091169060400135610596565b6101696004803603602081101561025757600080fd5b50356001600160a01b03166105b6565b6102096004803603602081101561027d57600080fd5b50356001600160a01b03166105d1565b610209610621565b610121600480360360408110156102ab57600080fd5b506001600160a01b03813516906020013561062c565b610121600480360360208110156102d757600080fd5b50356001600160a01b0316610639565b610209600480360360808110156102fd57600080fd5b6001600160a01b0382358116926020810135909116916040820135919081019060808101606082013564010000000081111561033857600080fd5b82018360208201111561034a57600080fd5b8035906020019184600183028401116401000000008311171561036c57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610652945050505050565b610169600480360360408110156103c357600080fd5b506001600160a01b03813581169160200135166106ab565b610209600480360360608110156103f157600080fd5b6001600160a01b038235169160208101359181019060608101604082013564010000000081111561042157600080fd5b82018360208201111561043357600080fd5b8035906020019184600183028401116401000000008311171561045557600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506106d6945050505050565b6001600160e01b03191660009081526020819052604090205460ff1690565b60006104c2338484610728565b50600192915050565b60035490565b60006104de848484610814565b6001600160a01b03841660009081526002602090815260408083203380855292529091205461051e918691610519908663ffffffff61095816565b610728565b5060019392505050565b600061053333610639565b61056e5760405162461bcd60e51b8152600401808060200182810382526030815260200180610f0f6030913960400191505060405180910390fd5b6104c283836109a1565b6105928282604051806020016040528060008152506106d6565b5050565b6105b183838360405180602001604052806000815250610652565b505050565b6001600160a01b031660009081526001602052604090205490565b6105da33610639565b6106155760405162461bcd60e51b8152600401808060200182810382526030815260200180610f0f6030913960400191505060405180910390fd5b61061e81610a93565b50565b61062a33610adb565b565b60006104c2338484610814565b600061064c60048363ffffffff610b2316565b92915050565b61065d8484846104d1565b5061066a84848484610b8a565b6106a55760405162461bcd60e51b815260040180806020018281038252602e815260200180610ebf602e913960400191505060405180910390fd5b50505050565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b6106e0838361062c565b506106ed33848484610b8a565b6105b15760405162461bcd60e51b815260040180806020018281038252602e815260200180610ebf602e913960400191505060405180910390fd5b6001600160a01b03831661076d5760405162461bcd60e51b8152600401808060200182810382526023815260200180610fa66023913960400191505060405180910390fd5b6001600160a01b0382166107b25760405162461bcd60e51b8152600401808060200182810382526021815260200180610e9e6021913960400191505060405180910390fd5b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166108595760405162461bcd60e51b8152600401808060200182810382526024815260200180610f606024913960400191505060405180910390fd5b6001600160a01b03821661089e5760405162461bcd60e51b8152600401808060200182810382526022815260200180610eed6022913960400191505060405180910390fd5b6001600160a01b0383166000908152600160205260409020546108c7908263ffffffff61095816565b6001600160a01b0380851660009081526001602052604080822093909355908416815220546108fc908263ffffffff610cbe16565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600061099a83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610d18565b9392505050565b6001600160a01b0382166109fc576040805162461bcd60e51b815260206004820152601e60248201527f4b4950373a206d696e7420746f20746865207a65726f20616464726573730000604482015290519081900360640190fd5b600354610a0f908263ffffffff610cbe16565b6003556001600160a01b038216600090815260016020526040902054610a3b908263ffffffff610cbe16565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b610aa460048263ffffffff610daf16565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b610aec60048263ffffffff610e3016565b6040516001600160a01b038216907fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669290600090a250565b60006001600160a01b038216610b6a5760405162461bcd60e51b8152600401808060200182810382526022815260200180610f846022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b6000610b9e846001600160a01b0316610e97565b610baa57506001610cb6565b604051634e8c461160e11b815233600482018181526001600160a01b03888116602485015260448401879052608060648501908152865160848601528651600095928a1694639d188c229490938c938b938b939260a4019060208501908083838e5b83811015610c24578181015183820152602001610c0c565b50505050905090810190601f168015610c515780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b158015610c7357600080fd5b505af1158015610c87573d6000803e3d6000fd5b505050506040513d6020811015610c9d57600080fd5b50516001600160e01b031916634e8c461160e11b149150505b949350505050565b60008282018381101561099a576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b60008184841115610da75760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610d6c578181015183820152602001610d54565b50505050905090810190601f168015610d995780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b610db98282610b23565b15610e0b576040805162461bcd60e51b815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b610e3a8282610b23565b610e755760405162461bcd60e51b8152600401808060200182810382526021815260200180610f3f6021913960400191505060405180910390fd5b6001600160a01b0316600090815260209190915260409020805460ff19169055565b3b15159056fe4b4950373a20617070726f766520746f20746865207a65726f20616464726573734b4950373a207472616e7366657220746f206e6f6e204b495037526563656976657220696d706c656d656e7465724b4950373a207472616e7366657220746f20746865207a65726f20616464726573734d696e746572526f6c653a2063616c6c657220646f6573206e6f74206861766520746865204d696e74657220726f6c65526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c654b4950373a207472616e736665722066726f6d20746865207a65726f2061646472657373526f6c65733a206163636f756e7420697320746865207a65726f20616464726573734b4950373a20617070726f76652066726f6d20746865207a65726f2061646472657373a265627a7a72315820653e7e1e930d406dcd400a4659930c7b3ede12cbec79e51c7f95908f35b4fb5764736f6c63430005110032526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373";
const isSuperArgs = (xs) => xs.length > 1;
class KIP7Mintable__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
        this.contractName = "KIP7Mintable";
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
exports.KIP7Mintable__factory = KIP7Mintable__factory;
KIP7Mintable__factory.bytecode = _bytecode;
KIP7Mintable__factory.abi = _abi;
//# sourceMappingURL=KIP7Mintable__factory.js.map