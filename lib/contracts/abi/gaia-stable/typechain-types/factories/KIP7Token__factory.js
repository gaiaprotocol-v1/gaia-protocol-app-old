"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KIP7Token__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "string",
                name: "symbol",
                type: "string",
            },
            {
                internalType: "uint8",
                name: "decimals",
                type: "uint8",
            },
            {
                internalType: "uint256",
                name: "initialSupply",
                type: "uint256",
            },
        ],
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
        name: "addMinter",
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
        constant: false,
        inputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "burn",
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
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
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
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
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
        name: "renounceMinter",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
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
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
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
const _bytecode = "0x60806040523480156200001157600080fd5b5060405162001f4c38038062001f4c833981810160405260808110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010a57600080fd5b9083019060208201858111156200012057600080fd5b82516401000000008111828201881017156200013b57600080fd5b82525081516020918201929091019080838360005b838110156200016a57818101518382015260200162000150565b50505050905090810190601f168015620001985780820380516001836020036101000a031916815260200191505b50604090815260208201519101519092509050838383620001c96301ffc9a760e01b6001600160e01b03620002d316565b620001e4636578737160e01b6001600160e01b03620002d316565b620001f8336001600160e01b036200035816565b62000213630755c1f160e51b6001600160e01b03620002d316565b6200022e63076b417f60e31b6001600160e01b03620002d316565b62000242336001600160e01b03620003aa16565b6006805460ff1916905562000267634d5507ff60e01b6001600160e01b03620002d316565b82516200027c90600790602086019062000659565b5081516200029290600890602085019062000659565b506009805460ff191660ff8316179055620002b463a219a02560e01b620002d3565b505050620002c93382620003fc60201b60201c565b50505050620006fe565b6001600160e01b0319808216141562000333576040805162461bcd60e51b815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b620003738160046200050160201b6200156e1790919060201c565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b620003c58160056200050160201b6200156e1790919060201c565b6040516001600160a01b038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b6001600160a01b03821662000458576040805162461bcd60e51b815260206004820152601e60248201527f4b4950373a206d696e7420746f20746865207a65726f20616464726573730000604482015290519081900360640190fd5b62000474816003546200058e60201b620014ad1790919060201c565b6003556001600160a01b038216600090815260016020908152604090912054620004a9918390620014ad6200058e821b17901c565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6200051682826001600160e01b03620005f016565b1562000569576040805162461bcd60e51b815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b600082820183811015620005e9576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b60006001600160a01b038216620006395760405162461bcd60e51b815260040180806020018281038252602281526020018062001f2a6022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200069c57805160ff1916838001178555620006cc565b82800160010185558215620006cc579182015b82811115620006cc578251825591602001919060010190620006af565b50620006da929150620006de565b5090565b620006fb91905b80821115620006da5760008155600101620006e5565b90565b61181c806200070e6000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c80636ef8d66d116100de578063983b2d5611610097578063aa271e1a11610071578063aa271e1a146104b2578063b88d4fde146104d8578063dd62ed3e1461059e578063eb795549146105cc5761018e565b8063983b2d5614610458578063986502751461047e578063a9059cbb146104865761018e565b80636ef8d66d146103c857806370a08231146103d057806379cc6790146103f657806382dc1ec4146104225780638456cb591461044857806395d89b41146104505761018e565b80633f4ba83a1161014b57806342842e0e1161012557806342842e0e1461034757806342966c681461037d57806346fbf68e1461039a5780635c975abb146103c05761018e565b80633f4ba83a146102e557806340c10f19146102ef578063423f6cef1461031b5761018e565b806301ffc9a71461019357806306fdde03146101ce578063095ea7b31461024b57806318160ddd1461027757806323b872dd14610291578063313ce567146102c7575b600080fd5b6101ba600480360360208110156101a957600080fd5b50356001600160e01b031916610687565b604080519115158252519081900360200190f35b6101d66106a6565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102105781810151838201526020016101f8565b50505050905090810190601f16801561023d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101ba6004803603604081101561026157600080fd5b506001600160a01b03813516906020013561073c565b61027f61079b565b60408051918252519081900360200190f35b6101ba600480360360608110156102a757600080fd5b506001600160a01b038135811691602081013590911690604001356107a1565b6102cf610802565b6040805160ff9092168252519081900360200190f35b6102ed61080b565b005b6101ba6004803603604081101561030557600080fd5b506001600160a01b0381351690602001356108dc565b6102ed6004803603604081101561033157600080fd5b506001600160a01b038135169060200135610935565b6102ed6004803603606081101561035d57600080fd5b506001600160a01b03813581169160208101359091169060400135610953565b6102ed6004803603602081101561039357600080fd5b5035610973565b6101ba600480360360208110156103b057600080fd5b50356001600160a01b0316610980565b6101ba610999565b6102ed6109a2565b61027f600480360360208110156103e657600080fd5b50356001600160a01b03166109ad565b6102ed6004803603604081101561040c57600080fd5b506001600160a01b0381351690602001356109c8565b6102ed6004803603602081101561043857600080fd5b50356001600160a01b03166109d2565b6102ed610a1f565b6101d6610af0565b6102ed6004803603602081101561046e57600080fd5b50356001600160a01b0316610b51565b6102ed610b9e565b6101ba6004803603604081101561049c57600080fd5b506001600160a01b038135169060200135610ba7565b6101ba600480360360208110156104c857600080fd5b50356001600160a01b0316610bff565b6102ed600480360360808110156104ee57600080fd5b6001600160a01b0382358116926020810135909116916040820135919081019060808101606082013564010000000081111561052957600080fd5b82018360208201111561053b57600080fd5b8035906020019184600183028401116401000000008311171561055d57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610c12945050505050565b61027f600480360360408110156105b457600080fd5b506001600160a01b0381358116916020013516610c6b565b6102ed600480360360608110156105e257600080fd5b6001600160a01b038235169160208101359181019060608101604082013564010000000081111561061257600080fd5b82018360208201111561062457600080fd5b8035906020019184600183028401116401000000008311171561064657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610c96945050505050565b6001600160e01b03191660009081526020819052604090205460ff1690565b60078054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107325780601f1061070757610100808354040283529160200191610732565b820191906000526020600020905b81548152906001019060200180831161071557829003601f168201915b5050505050905090565b60065460009060ff161561078a576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b6107948383610ce8565b9392505050565b60035490565b60065460009060ff16156107ef576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b6107fa848484610cf5565b949350505050565b60095460ff1690565b61081433610980565b61084f5760405162461bcd60e51b81526004018080602001828103825260308152602001806116dc6030913960400191505060405180910390fd5b60065460ff1661089d576040805162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015290519081900360640190fd5b6006805460ff191690556040805133815290517f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa9181900360200190a1565b60006108e733610bff565b6109225760405162461bcd60e51b815260040180806020018281038252603081526020018061172e6030913960400191505060405180910390fd5b61092c8383610d4c565b50600192915050565b61094f828260405180602001604052806000815250610c96565b5050565b61096e83838360405180602001604052806000815250610c12565b505050565b61097d3382610e3e565b50565b600061099360058363ffffffff610f2f16565b92915050565b60065460ff1690565b6109ab33610f96565b565b6001600160a01b031660009081526001602052604090205490565b61094f8282610fde565b6109db33610980565b610a165760405162461bcd60e51b81526004018080602001828103825260308152602001806116dc6030913960400191505060405180910390fd5b61097d81611023565b610a2833610980565b610a635760405162461bcd60e51b81526004018080602001828103825260308152602001806116dc6030913960400191505060405180910390fd5b60065460ff1615610aae576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b6006805460ff191660011790556040805133815290517f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2589181900360200190a1565b60088054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107325780601f1061070757610100808354040283529160200191610732565b610b5a33610bff565b610b955760405162461bcd60e51b815260040180806020018281038252603081526020018061172e6030913960400191505060405180910390fd5b61097d8161106b565b6109ab336110b3565b60065460009060ff1615610bf5576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b61079483836110fb565b600061099360048363ffffffff610f2f16565b610c1d8484846107a1565b50610c2a84848484611108565b610c655760405162461bcd60e51b815260040180806020018281038252602e8152602001806116ae602e913960400191505060405180910390fd5b50505050565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b610ca08383610ba7565b50610cad33848484611108565b61096e5760405162461bcd60e51b815260040180806020018281038252602e8152602001806116ae602e913960400191505060405180910390fd5b600061092c33848461123b565b6000610d02848484611327565b6001600160a01b038416600090815260026020908152604080832033808552925290912054610d42918691610d3d908663ffffffff61146b16565b61123b565b5060019392505050565b6001600160a01b038216610da7576040805162461bcd60e51b815260206004820152601e60248201527f4b4950373a206d696e7420746f20746865207a65726f20616464726573730000604482015290519081900360640190fd5b600354610dba908263ffffffff6114ad16565b6003556001600160a01b038216600090815260016020526040902054610de6908263ffffffff6114ad16565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6001600160a01b038216610e99576040805162461bcd60e51b815260206004820181905260248201527f4b4950373a206275726e2066726f6d20746865207a65726f2061646472657373604482015290519081900360640190fd5b600354610eac908263ffffffff61146b16565b6003556001600160a01b038216600090815260016020526040902054610ed8908263ffffffff61146b16565b6001600160a01b0383166000818152600160209081526040808320949094558351858152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35050565b60006001600160a01b038216610f765760405162461bcd60e51b81526004018080602001828103825260228152602001806117a36022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b610fa760058263ffffffff61150716565b6040516001600160a01b038216907fcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e90600090a250565b610fe88282610e3e565b6001600160a01b03821660009081526002602090815260408083203380855292529091205461094f918491610d3d908563ffffffff61146b16565b61103460058263ffffffff61156e16565b6040516001600160a01b038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b61107c60048263ffffffff61156e16565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b6110c460048263ffffffff61150716565b6040516001600160a01b038216907fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669290600090a250565b600061092c338484611327565b600061111c846001600160a01b03166115ef565b611128575060016107fa565b604051634e8c461160e11b815233600482018181526001600160a01b03888116602485015260448401879052608060648501908152865160848601528651600095928a1694639d188c229490938c938b938b939260a4019060208501908083838e5b838110156111a257818101518382015260200161118a565b50505050905090810190601f1680156111cf5780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b1580156111f157600080fd5b505af1158015611205573d6000803e3d6000fd5b505050506040513d602081101561121b57600080fd5b50516001600160e01b031916634e8c461160e11b14915050949350505050565b6001600160a01b0383166112805760405162461bcd60e51b81526004018080602001828103825260238152602001806117c56023913960400191505060405180910390fd5b6001600160a01b0382166112c55760405162461bcd60e51b815260040180806020018281038252602181526020018061168d6021913960400191505060405180910390fd5b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b03831661136c5760405162461bcd60e51b815260040180806020018281038252602481526020018061177f6024913960400191505060405180910390fd5b6001600160a01b0382166113b15760405162461bcd60e51b815260040180806020018281038252602281526020018061170c6022913960400191505060405180910390fd5b6001600160a01b0383166000908152600160205260409020546113da908263ffffffff61146b16565b6001600160a01b03808516600090815260016020526040808220939093559084168152205461140f908263ffffffff6114ad16565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600061079483836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506115f5565b600082820183811015610794576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6115118282610f2f565b61154c5760405162461bcd60e51b815260040180806020018281038252602181526020018061175e6021913960400191505060405180910390fd5b6001600160a01b0316600090815260209190915260409020805460ff19169055565b6115788282610f2f565b156115ca576040805162461bcd60e51b815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b3b151590565b600081848411156116845760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611649578181015183820152602001611631565b50505050905090810190601f1680156116765780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50505090039056fe4b4950373a20617070726f766520746f20746865207a65726f20616464726573734b4950373a207472616e7366657220746f206e6f6e204b495037526563656976657220696d706c656d656e746572506175736572526f6c653a2063616c6c657220646f6573206e6f742068617665207468652050617573657220726f6c654b4950373a207472616e7366657220746f20746865207a65726f20616464726573734d696e746572526f6c653a2063616c6c657220646f6573206e6f74206861766520746865204d696e74657220726f6c65526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c654b4950373a207472616e736665722066726f6d20746865207a65726f2061646472657373526f6c65733a206163636f756e7420697320746865207a65726f20616464726573734b4950373a20617070726f76652066726f6d20746865207a65726f2061646472657373a265627a7a7231582077588aff1aa3ad136c8751aa3ac2faef99a4379bfe8d33b5c6d47eb5915d5c1364736f6c63430005110032526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373";
const isSuperArgs = (xs) => xs.length > 1;
class KIP7Token__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
        this.contractName = "KIP7Token";
    }
    deploy(name, symbol, decimals, initialSupply, overrides) {
        return super.deploy(name, symbol, decimals, initialSupply, overrides || {});
    }
    getDeployTransaction(name, symbol, decimals, initialSupply, overrides) {
        return super.getDeployTransaction(name, symbol, decimals, initialSupply, overrides || {});
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
exports.KIP7Token__factory = KIP7Token__factory;
KIP7Token__factory.bytecode = _bytecode;
KIP7Token__factory.abi = _abi;
//# sourceMappingURL=KIP7Token__factory.js.map