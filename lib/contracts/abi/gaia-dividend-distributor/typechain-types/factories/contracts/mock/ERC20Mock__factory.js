"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC20Mock__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
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
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
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
        stateMutability: "nonpayable",
        type: "function",
    },
    {
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
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "approveInternal",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
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
        stateMutability: "view",
        type: "function",
    },
    {
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
        name: "burnFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
            },
        ],
        name: "decreaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256",
            },
        ],
        name: "increaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
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
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
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
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
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
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "transferInternal",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60806040523480156200001157600080fd5b50604051806040016040528060048152602001634d6f636b60e01b8152506040518060400160405280600381526020016204d32360ec1b81525081600390816200005c919062000119565b5060046200006b828262000119565b505050620001e5565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200009f57607f821691505b602082108103620000c057634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200011457600081815260208120601f850160051c81016020861015620000ef5750805b601f850160051c820191505b818110156200011057828155600101620000fb565b5050505b505050565b81516001600160401b0381111562000135576200013562000074565b6200014d816200014684546200008a565b84620000c6565b602080601f8311600181146200018557600084156200016c5750858301515b600019600386901b1c1916600185901b17855562000110565b600085815260208120601f198616915b82811015620001b65788860151825594840194600190910190840162000195565b5085821015620001d55787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610b9b80620001f56000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806340c10f191161009757806395d89b411161006657806395d89b41146101f9578063a457c2d714610201578063a9059cbb14610214578063dd62ed3e1461022757600080fd5b806340c10f191461019757806356189cb4146101aa57806370a08231146101bd57806379cc6790146101e657600080fd5b8063222f5be0116100d3578063222f5be01461014d57806323b872dd14610162578063313ce56714610175578063395093511461018457600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b61010261023a565b60405161010f91906109ba565b60405180910390f35b61012b610126366004610a2b565b6102cc565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61016061015b366004610a55565b6102e4565b005b61012b610170366004610a55565b6102f4565b6040516012815260200161010f565b61012b610192366004610a2b565b610318565b6101606101a5366004610a2b565b61033a565b6101606101b8366004610a55565b610348565b61013f6101cb366004610a91565b6001600160a01b031660009081526020819052604090205490565b6101606101f4366004610a2b565b610353565b61010261035d565b61012b61020f366004610a2b565b61036c565b61012b610222366004610a2b565b6103ec565b61013f610235366004610ab3565b6103fa565b60606003805461024990610ae6565b80601f016020809104026020016040519081016040528092919081815260200182805461027590610ae6565b80156102c25780601f10610297576101008083540402835291602001916102c2565b820191906000526020600020905b8154815290600101906020018083116102a557829003601f168201915b5050505050905090565b6000336102da818585610425565b5060019392505050565b6102ef838383610549565b505050565b600033610302858285610719565b61030d858585610549565b506001949350505050565b6000336102da81858561032b83836103fa565b6103359190610b36565b610425565b610344828261078d565b5050565b6102ef838383610425565b610344828261086c565b60606004805461024990610ae6565b6000338161037a82866103fa565b9050838110156103df5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b61030d8286868403610425565b6000336102da818585610549565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166104875760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103d6565b6001600160a01b0382166104e85760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103d6565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166105ad5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103d6565b6001600160a01b03821661060f5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103d6565b6001600160a01b038316600090815260208190526040902054818110156106875760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103d6565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906106be908490610b36565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161070a91815260200190565b60405180910390a35b50505050565b600061072584846103fa565b9050600019811461071357818110156107805760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103d6565b6107138484848403610425565b6001600160a01b0382166107e35760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103d6565b80600260008282546107f59190610b36565b90915550506001600160a01b03821660009081526020819052604081208054839290610822908490610b36565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b0382166108cc5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103d6565b6001600160a01b038216600090815260208190526040902054818110156109405760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103d6565b6001600160a01b038316600090815260208190526040812083830390556002805484929061096f908490610b4e565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b600060208083528351808285015260005b818110156109e7578581018301518582016040015282016109cb565b818111156109f9576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610a2657600080fd5b919050565b60008060408385031215610a3e57600080fd5b610a4783610a0f565b946020939093013593505050565b600080600060608486031215610a6a57600080fd5b610a7384610a0f565b9250610a8160208501610a0f565b9150604084013590509250925092565b600060208284031215610aa357600080fd5b610aac82610a0f565b9392505050565b60008060408385031215610ac657600080fd5b610acf83610a0f565b9150610add60208401610a0f565b90509250929050565b600181811c90821680610afa57607f821691505b602082108103610b1a57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610b4957610b49610b20565b500190565b600082821015610b6057610b60610b20565b50039056fea2646970667358221220a84a19439554af3909f4101c98ca413e0de3d52265ea948ce9a4e0fec437fbb564736f6c634300080f0033";
const isSuperArgs = (xs) => xs.length > 1;
class ERC20Mock__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
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
exports.ERC20Mock__factory = ERC20Mock__factory;
ERC20Mock__factory.bytecode = _bytecode;
ERC20Mock__factory.abi = _abi;
//# sourceMappingURL=ERC20Mock__factory.js.map