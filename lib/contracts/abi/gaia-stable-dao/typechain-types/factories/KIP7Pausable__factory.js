"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KIP7Pausable__factory = void 0;
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
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "Paused",
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
        name: "PauserAdded",
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
        name: "PauserRemoved",
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
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "Unpaused",
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
        name: "addPauser",
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
        name: "isPauser",
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
        inputs: [],
        name: "pause",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "paused",
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
        inputs: [],
        name: "renouncePauser",
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
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
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
    {
        constant: false,
        inputs: [],
        name: "unpause",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60806040523480156200001157600080fd5b506200002d6301ffc9a760e01b6001600160e01b036200008716565b62000048636578737160e01b6001600160e01b036200008716565b6200005c336001600160e01b036200010c16565b6005805460ff1916905562000081634d5507ff60e01b6001600160e01b036200008716565b62000254565b6001600160e01b03198082161415620000e7576040805162461bcd60e51b815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b620001278160046200015e60201b62000ea01790919060201c565b6040516001600160a01b038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b6200017382826001600160e01b03620001eb16565b15620001c6576040805162461bcd60e51b815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b60006001600160a01b038216620002345760405162461bcd60e51b8152600401808060200182810382526022815260200180620013dc6022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b61117880620002646000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c80635c975abb116100a25780638456cb59116100715780638456cb59146102b5578063a9059cbb146102bd578063b88d4fde146102e9578063dd62ed3e146103af578063eb795549146103dd5761010b565b80635c975abb146102595780636ef8d66d1461026157806370a082311461026957806382dc1ec41461028f5761010b565b80633f4ba83a116100de5780633f4ba83a146101c7578063423f6cef146101d157806342842e0e146101fd57806346fbf68e146102335761010b565b806301ffc9a714610110578063095ea7b31461014b57806318160ddd1461017757806323b872dd14610191575b600080fd5b6101376004803603602081101561012657600080fd5b50356001600160e01b031916610498565b604080519115158252519081900360200190f35b6101376004803603604081101561016157600080fd5b506001600160a01b0381351690602001356104b7565b61017f610516565b60408051918252519081900360200190f35b610137600480360360608110156101a757600080fd5b506001600160a01b0381358116916020810135909116906040013561051c565b6101cf61057d565b005b6101cf600480360360408110156101e757600080fd5b506001600160a01b03813516906020013561064e565b6101cf6004803603606081101561021357600080fd5b506001600160a01b0381358116916020810135909116906040013561066c565b6101376004803603602081101561024957600080fd5b50356001600160a01b031661068c565b6101376106a5565b6101cf6106ae565b61017f6004803603602081101561027f57600080fd5b50356001600160a01b03166106b9565b6101cf600480360360208110156102a557600080fd5b50356001600160a01b03166106d4565b6101cf610724565b610137600480360360408110156102d357600080fd5b506001600160a01b0381351690602001356107f5565b6101cf600480360360808110156102ff57600080fd5b6001600160a01b0382358116926020810135909116916040820135919081019060808101606082013564010000000081111561033a57600080fd5b82018360208201111561034c57600080fd5b8035906020019184600183028401116401000000008311171561036e57600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061084d945050505050565b61017f600480360360408110156103c557600080fd5b506001600160a01b03813581169160200135166108a6565b6101cf600480360360608110156103f357600080fd5b6001600160a01b038235169160208101359181019060608101604082013564010000000081111561042357600080fd5b82018360208201111561043557600080fd5b8035906020019184600183028401116401000000008311171561045757600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506108d1945050505050565b6001600160e01b03191660009081526020819052604090205460ff1690565b60055460009060ff1615610505576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b61050f8383610923565b9392505050565b60035490565b60055460009060ff161561056a576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b610575848484610939565b949350505050565b6105863361068c565b6105c15760405162461bcd60e51b81526004018080602001828103825260308152602001806110686030913960400191505060405180910390fd5b60055460ff1661060f576040805162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015290519081900360640190fd5b6005805460ff191690556040805133815290517f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa9181900360200190a1565b6106688282604051806020016040528060008152506108d1565b5050565b6106878383836040518060200160405280600081525061084d565b505050565b600061069f60048363ffffffff61099016565b92915050565b60055460ff1690565b6106b7336109f7565b565b6001600160a01b031660009081526001602052604090205490565b6106dd3361068c565b6107185760405162461bcd60e51b81526004018080602001828103825260308152602001806110686030913960400191505060405180910390fd5b61072181610a3f565b50565b61072d3361068c565b6107685760405162461bcd60e51b81526004018080602001828103825260308152602001806110686030913960400191505060405180910390fd5b60055460ff16156107b3576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b6005805460ff191660011790556040805133815290517f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2589181900360200190a1565b60055460009060ff1615610843576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b61050f8383610a87565b61085884848461051c565b5061086584848484610a94565b6108a05760405162461bcd60e51b815260040180806020018281038252602e81526020018061103a602e913960400191505060405180910390fd5b50505050565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b6108db83836107f5565b506108e833848484610a94565b6106875760405162461bcd60e51b815260040180806020018281038252602e81526020018061103a602e913960400191505060405180910390fd5b6000610930338484610bc7565b50600192915050565b6000610946848484610cb3565b6001600160a01b038416600090815260026020908152604080832033808552925290912054610986918691610981908663ffffffff610df716565b610bc7565b5060019392505050565b60006001600160a01b0382166109d75760405162461bcd60e51b81526004018080602001828103825260228152602001806110ff6022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b610a0860048263ffffffff610e3916565b6040516001600160a01b038216907fcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e90600090a250565b610a5060048263ffffffff610ea016565b6040516001600160a01b038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b6000610930338484610cb3565b6000610aa8846001600160a01b0316610f21565b610ab457506001610575565b604051634e8c461160e11b815233600482018181526001600160a01b03888116602485015260448401879052608060648501908152865160848601528651600095928a1694639d188c229490938c938b938b939260a4019060208501908083838e5b83811015610b2e578181015183820152602001610b16565b50505050905090810190601f168015610b5b5780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b158015610b7d57600080fd5b505af1158015610b91573d6000803e3d6000fd5b505050506040513d6020811015610ba757600080fd5b50516001600160e01b031916634e8c461160e11b14915050949350505050565b6001600160a01b038316610c0c5760405162461bcd60e51b81526004018080602001828103825260238152602001806111216023913960400191505060405180910390fd5b6001600160a01b038216610c515760405162461bcd60e51b81526004018080602001828103825260218152602001806110196021913960400191505060405180910390fd5b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038316610cf85760405162461bcd60e51b81526004018080602001828103825260248152602001806110db6024913960400191505060405180910390fd5b6001600160a01b038216610d3d5760405162461bcd60e51b81526004018080602001828103825260228152602001806110986022913960400191505060405180910390fd5b6001600160a01b038316600090815260016020526040902054610d66908263ffffffff610df716565b6001600160a01b038085166000908152600160205260408082209390935590841681522054610d9b908263ffffffff610f2716565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600061050f83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610f81565b610e438282610990565b610e7e5760405162461bcd60e51b81526004018080602001828103825260218152602001806110ba6021913960400191505060405180910390fd5b6001600160a01b0316600090815260209190915260409020805460ff19169055565b610eaa8282610990565b15610efc576040805162461bcd60e51b815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b3b151590565b60008282018381101561050f576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600081848411156110105760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610fd5578181015183820152602001610fbd565b50505050905090810190601f1680156110025780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50505090039056fe4b4950373a20617070726f766520746f20746865207a65726f20616464726573734b4950373a207472616e7366657220746f206e6f6e204b495037526563656976657220696d706c656d656e746572506175736572526f6c653a2063616c6c657220646f6573206e6f742068617665207468652050617573657220726f6c654b4950373a207472616e7366657220746f20746865207a65726f2061646472657373526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c654b4950373a207472616e736665722066726f6d20746865207a65726f2061646472657373526f6c65733a206163636f756e7420697320746865207a65726f20616464726573734b4950373a20617070726f76652066726f6d20746865207a65726f2061646472657373a265627a7a723158205b83fb74febd93f538c9ee77b3bc02de5d178339b6e0257408d78eaeb2ffdddc64736f6c63430005110032526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373";
const isSuperArgs = (xs) => xs.length > 1;
class KIP7Pausable__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
        this.contractName = "KIP7Pausable";
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
exports.KIP7Pausable__factory = KIP7Pausable__factory;
KIP7Pausable__factory.bytecode = _bytecode;
KIP7Pausable__factory.abi = _abi;
//# sourceMappingURL=KIP7Pausable__factory.js.map