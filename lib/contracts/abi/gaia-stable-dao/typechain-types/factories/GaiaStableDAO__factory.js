"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GaiaStableDAO__factory = void 0;
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
                name: "approved",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
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
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "ApprovalForAll",
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
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
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
                indexed: false,
                internalType: "string",
                name: "baseURI",
                type: "string",
            },
        ],
        name: "SetBaseURI",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "status",
                type: "bool",
            },
        ],
        name: "SetBlacklist",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bool",
                name: "status",
                type: "bool",
            },
        ],
        name: "SetBurnable",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bool",
                name: "status",
                type: "bool",
            },
        ],
        name: "SetMintable",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "name",
                type: "string",
            },
        ],
        name: "SetName",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "symbol",
                type: "string",
            },
        ],
        name: "SetSymbol",
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
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
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
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "approve",
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
        inputs: [],
        name: "baseURI",
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
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
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
        constant: true,
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "exists",
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
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getApproved",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
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
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
        ],
        name: "isApprovedForAll",
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
                name: "user",
                type: "address",
            },
        ],
        name: "isBlacklist",
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
        name: "isBurnable",
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
        name: "isMintable",
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
        inputs: [],
        name: "isOwner",
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
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
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
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "mintedAtBlock",
        outputs: [
            {
                internalType: "uint256",
                name: "blockNumber",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
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
        constant: true,
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address payable",
                name: "",
                type: "address",
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
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "ownerOf",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
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
        inputs: [
            {
                internalType: "address",
                name: "target",
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
        inputs: [],
        name: "renounceOwnership",
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
                name: "tokenId",
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
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "_data",
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
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "setApprovalForAll",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "string",
                name: "_baseURI",
                type: "string",
            },
        ],
        name: "setBaseURI",
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
                name: "user",
                type: "address",
            },
            {
                internalType: "bool",
                name: "status",
                type: "bool",
            },
        ],
        name: "setBlacklist",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "bool",
                name: "status",
                type: "bool",
            },
        ],
        name: "setBurnable",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "bool",
                name: "status",
                type: "bool",
            },
        ],
        name: "setMintable",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "string",
                name: "_name",
                type: "string",
            },
        ],
        name: "setName",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "string",
                name: "_symbol",
                type: "string",
            },
        ],
        name: "setSymbol",
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
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
        ],
        name: "tokenOfOwnerByIndex",
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
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "tokenURI",
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
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "tokensOfOwner",
        outputs: [
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
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
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address payable",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
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
const _bytecode = "0x60c0604052600f60808190526e4761696120537461626c652044414f60881b60a09081526200003291600c9190620003fd565b50604080518082019091526004808252635344414f60e01b60209092019182526200006091600d91620003fd565b50604051806060016040528060278152602001620035fe6027913980516200009191600e91602090910190620003fd565b506011805461ff001960ff1990911660011716610100179055348015620000b757600080fd5b50620000d36301ffc9a760e01b6001600160e01b03620001de16565b600180546001600160a01b0319163317908190556040516001600160a01b0391909116906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a36200013a6380ac58cd60e01b6001600160e01b03620001de16565b6200014e336001600160e01b036200026316565b62000169630755c1f160e51b6001600160e01b03620001de16565b6200017d336001600160e01b03620002b516565b600b805460ff19169055620001a2634d5507ff60e01b6001600160e01b03620001de16565b620001bd630852cd8d60e31b6001600160e01b03620001de16565b620001d8635b5e139f60e01b6001600160e01b03620001de16565b620004a2565b6001600160e01b031980821614156200023e576040805162461bcd60e51b815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b6200027e8160096200030760201b620026901790919060201c565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b620002d081600a6200030760201b620026901790919060201c565b6040516001600160a01b038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b6200031c82826001600160e01b036200039416565b156200036f576040805162461bcd60e51b815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b60006001600160a01b038216620003dd5760405162461bcd60e51b8152600401808060200182810382526022815260200180620035dc6022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200044057805160ff191683800117855562000470565b8280016001018555821562000470579182015b828111156200047057825182559160200191906001019062000453565b506200047e92915062000482565b5090565b6200049f91905b808211156200047e576000815560010162000489565b90565b61312a80620004b26000396000f3fe608060405234801561001057600080fd5b50600436106102745760003560e01c80636ef8d66d11610151578063983b2d56116100c3578063b88d4fde11610087578063b88d4fde14610823578063b9eed00c146108e7578063c47f002714610904578063c87b56dd14610972578063e985e9c51461098f578063f2fde38b146109bd57610274565b8063983b2d56146107335780639865027514610759578063a22cb46514610761578063aa271e1a1461078f578063b84c8246146107b557610274565b80638456cb59116101155780638456cb59146106955780638462151c1461069d578063883356d9146107135780638da5cb5b1461071b5780638f32d59b1461072357806395d89b411461072b57610274565b80636ef8d66d1461061a57806370a0823114610622578063715018a61461064857806380929e5b1461065057806382dc1ec41461066f57610274565b80633f4ba83a116101ea57806346fbf68e116101ae57806346fbf68e1461053c5780634f558e791461056257806355f804b31461057f5780635c975abb146105ed5780636352211e146105f55780636c0360eb1461061257610274565b80633f4ba83a146104ad57806340c10f19146104b557806342842e0e146104e157806342966c681461051757806346b45af71461053457610274565b806318160ddd1161023c57806318160ddd146103c657806323b872dd146103e0578063285d70d4146104165780632f745c59146104355780633092afd514610461578063333e99db1461048757610274565b806301ffc9a71461027957806306fdde03146102b4578063081812fc14610331578063095ea7b31461036a578063153b0d1e14610398575b600080fd5b6102a06004803603602081101561028f57600080fd5b50356001600160e01b0319166109e3565b604080519115158252519081900360200190f35b6102bc610a06565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102f65781810151838201526020016102de565b50505050905090810190601f1680156103235780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61034e6004803603602081101561034757600080fd5b5035610a94565b604080516001600160a01b039092168252519081900360200190f35b6103966004803603604081101561038057600080fd5b506001600160a01b038135169060200135610af6565b005b610396600480360360408110156103ae57600080fd5b506001600160a01b0381351690602001351515610b4f565b6103ce610bfa565b60408051918252519081900360200190f35b610396600480360360608110156103f657600080fd5b506001600160a01b03813581169160208101359091169060400135610c01565b6103966004803603602081101561042c57600080fd5b50351515610c5c565b6103ce6004803603604081101561044b57600080fd5b506001600160a01b038135169060200135610d3f565b6103966004803603602081101561047757600080fd5b50356001600160a01b0316610dbe565b6102a06004803603602081101561049d57600080fd5b50356001600160a01b0316610e11565b610396610e2f565b6102a0600480360360408110156104cb57600080fd5b506001600160a01b038135169060200135610f00565b610396600480360360608110156104f757600080fd5b506001600160a01b03813581169160208101359091169060400135610f59565b6103966004803603602081101561052d57600080fd5b5035610f74565b6102a0610fc2565b6102a06004803603602081101561055257600080fd5b50356001600160a01b0316610fcb565b6102a06004803603602081101561057857600080fd5b5035610fe4565b6103966004803603602081101561059557600080fd5b810190602081018135600160201b8111156105af57600080fd5b8201836020820111156105c157600080fd5b803590602001918460018302840111600160201b831117156105e257600080fd5b509092509050610fef565b6102a06110a7565b61034e6004803603602081101561060b57600080fd5b50356110b0565b6102bc611104565b61039661115f565b6103ce6004803603602081101561063857600080fd5b50356001600160a01b031661116a565b6103966111d2565b6103966004803603602081101561066657600080fd5b50351515611263565b6103966004803603602081101561068557600080fd5b50356001600160a01b0316611353565b6103966113a0565b6106c3600480360360208110156106b357600080fd5b50356001600160a01b0316611471565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156106ff5781810151838201526020016106e7565b505050509050019250505060405180910390f35b6102a06114d2565b61034e6114e0565b6102a06114ef565b6102bc611500565b6103966004803603602081101561074957600080fd5b50356001600160a01b031661155b565b6103966115a8565b6103966004803603604081101561077757600080fd5b506001600160a01b03813516906020013515156115b1565b6102a0600480360360208110156107a557600080fd5b50356001600160a01b0316611606565b610396600480360360208110156107cb57600080fd5b810190602081018135600160201b8111156107e557600080fd5b8201836020820111156107f757600080fd5b803590602001918460018302840111600160201b8311171561081857600080fd5b509092509050611619565b6103966004803603608081101561083957600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135600160201b81111561087357600080fd5b82018360208201111561088557600080fd5b803590602001918460018302840111600160201b831117156108a657600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506116d1945050505050565b6103ce600480360360208110156108fd57600080fd5b5035611729565b6103966004803603602081101561091a57600080fd5b810190602081018135600160201b81111561093457600080fd5b82018360208201111561094657600080fd5b803590602001918460018302840111600160201b8311171561096757600080fd5b509092509050611749565b6102bc6004803603602081101561098857600080fd5b5035611801565b6102a0600480360360408110156109a557600080fd5b506001600160a01b0381358116916020013516611a66565b610396600480360360208110156109d357600080fd5b50356001600160a01b0316611a94565b6001600160e01b0319811660009081526020819052604090205460ff165b919050565b600c805460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181529291830182828015610a8c5780601f10610a6157610100808354040283529160200191610a8c565b820191906000526020600020905b815481529060010190602001808311610a6f57829003601f168201915b505050505081565b6000610a9f82611ae4565b610ada5760405162461bcd60e51b815260040180806020018281038252602b815260200180613069602b913960400191505060405180910390fd5b506000908152600360205260409020546001600160a01b031690565b600b5460ff1615610b41576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b610b4b8282611b01565b5050565b610b576114ef565b610b96576040805162461bcd60e51b81526020600482018190526024820152600080516020612f53833981519152604482015290519081900360640190fd5b6001600160a01b0382166000818152600f6020908152604091829020805460ff191685151590811790915582519384529083015280517ffed07c88bd5d31bfd0ce77ed7ffdc74a163a61cfc5edcec801e3a7954e33d6e79281900390910190a15050565b6008545b90565b600b5460ff1615610c4c576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b610c57838383611c28565b505050565b610c646114ef565b610ca3576040805162461bcd60e51b81526020600482018190526024820152600080516020612f53833981519152604482015290519081900360640190fd5b60115460ff168015158215151415610cf7576040805162461bcd60e51b815260206004820152601260248201527114d510551554d7d393d517d0d2105391d15160721b604482015290519081900360640190fd5b6011805483151560ff19909116811790915560408051918252517fe717a2bfc51e250b028aaac5eb448e76f4df26b9609956782bff49097bb792cf9181900360200190a15050565b6000610d4a8361116a565b8210610d875760405162461bcd60e51b815260040180806020018281038252602a815260200180612e80602a913960400191505060405180910390fd5b6001600160a01b0383166000908152600660205260409020805483908110610dab57fe5b9060005260206000200154905092915050565b610dc66114ef565b610e05576040805162461bcd60e51b81526020600482018190526024820152600080516020612f53833981519152604482015290519081900360640190fd5b610e0e81611c78565b50565b6001600160a01b03166000908152600f602052604090205460ff1690565b610e3833610fcb565b610e735760405162461bcd60e51b8152600401808060200182810382526030815260200180612e076030913960400191505060405180910390fd5b600b5460ff16610ec1576040805162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015290519081900360640190fd5b600b805460ff191690556040805133815290517f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa9181900360200190a1565b6000610f0b33611606565b610f465760405162461bcd60e51b8152600401808060200182810382526030815260200180612eaa6030913960400191505060405180910390fd5b610f508383611cc0565b50600192915050565b610c57838383604051806020016040528060008152506116d1565b610f7e3382611d89565b610fb95760405162461bcd60e51b815260040180806020018281038252602f815260200180612fc5602f913960400191505060405180910390fd5b610e0e81611e2d565b60115460ff1681565b6000610fde600a8363ffffffff611ea916565b92915050565b6000610fde82611ae4565b610ff76114ef565b611036576040805162461bcd60e51b81526020600482018190526024820152600080516020612f53833981519152604482015290519081900360640190fd5b611042600e8383612d20565b507f23c8c9488efebfd474e85a7956de6f39b17c7ab88502d42a623db2d8e382bbaa828260405180806020018281038252848482818152602001925080828437600083820152604051601f909101601f19169092018290039550909350505050a15050565b600b5460ff1690565b6000818152600260205260408120546001600160a01b031680610fde5760405162461bcd60e51b8152600401808060200182810382526028815260200180612efb6028913960400191505060405180910390fd5b600e805460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181529291830182828015610a8c5780601f10610a6157610100808354040283529160200191610a8c565b61116833611f10565b565b60006001600160a01b0382166111b15760405162461bcd60e51b8152600401808060200182810382526029815260200180612ff46029913960400191505060405180910390fd5b6001600160a01b0382166000908152600460205260409020610fde90611f58565b6111da6114ef565b611219576040805162461bcd60e51b81526020600482018190526024820152600080516020612f53833981519152604482015290519081900360640190fd5b6001546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600180546001600160a01b0319169055565b61126b6114ef565b6112aa576040805162461bcd60e51b81526020600482018190526024820152600080516020612f53833981519152604482015290519081900360640190fd5b601154610100900460ff168115158115151415611303576040805162461bcd60e51b815260206004820152601260248201527114d510551554d7d393d517d0d2105391d15160721b604482015290519081900360640190fd5b60118054831515610100810261ff00199092169190911790915560408051918252517f29c75de63228ee2a42f9ee78a0e01daa10561801f4d66d599c596a70c770b5d39181900360200190a15050565b61135c33610fcb565b6113975760405162461bcd60e51b8152600401808060200182810382526030815260200180612e076030913960400191505060405180910390fd5b610e0e81611f5c565b6113a933610fcb565b6113e45760405162461bcd60e51b8152600401808060200182810382526030815260200180612e076030913960400191505060405180910390fd5b600b5460ff161561142f576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b600b805460ff191660011790556040805133815290517f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2589181900360200190a1565b606061147c82611fa4565b8054806020026020016040519081016040528092919081815260200182805480156114c657602002820191906000526020600020905b8154815260200190600101908083116114b2575b50505050509050919050565b601154610100900460ff1681565b6001546001600160a01b031690565b6001546001600160a01b0316331490565b600d805460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181529291830182828015610a8c5780601f10610a6157610100808354040283529160200191610a8c565b61156433611606565b61159f5760405162461bcd60e51b8152600401808060200182810382526030815260200180612eaa6030913960400191505060405180910390fd5b610e0e81611fbe565b61116833611c78565b600b5460ff16156115fc576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b610b4b8282612006565b6000610fde60098363ffffffff611ea916565b6116216114ef565b611660576040805162461bcd60e51b81526020600482018190526024820152600080516020612f53833981519152604482015290519081900360640190fd5b61166c600d8383612d20565b507fadf3ae8bd543b3007d464f15cb8ea1db3f44e84d41d203164f40b95e27558ac6828260405180806020018281038252848482818152602001925080828437600083820152604051601f909101601f19169092018290039550909350505050a15050565b6116dc848484610c01565b6116e8848484846120d2565b6117235760405162461bcd60e51b8152600401808060200182810382526030815260200180612f956030913960400191505060405180910390fd5b50505050565b6000818152601060205260409020546001811415610a0157506000919050565b6117516114ef565b611790576040805162461bcd60e51b81526020600482018190526024820152600080516020612f53833981519152604482015290519081900360640190fd5b61179c600c8383612d20565b507f4df9dcd34ae35f40f2c756fd8ac83210ed0b76d065543ee73d868aec7c7fcf02828260405180806020018281038252848482818152602001925080828437600083820152604051601f909101601f19169092018290039550909350505050a15050565b606061180c82611ae4565b6118475760405162461bcd60e51b815260040180806020018281038252602e815260200180612dd9602e913960400191505060405180910390fd5b816118d357600e60405160200180828054600181600116156101000203166002900480156118ac5780601f1061188a5761010080835404028352918201916118ac565b820191906000526020600020905b815481529060010190602001808311611898575b505080600360fc1b8152506001019150506040516020818303038152906040529050610a01565b60608260005b81156118ed57600101600a820491506118d9565b6060816040519080825280601f01601f19166020018201604052801561191a576020820181803883390190505b5090505b85156119635760001990910190600a860660300160f81b81838151811061194157fe5b60200101906001600160f81b031916908160001a905350600a8604955061191e565b8093506000600e805460018160011615610100020316600290049050116119995760405180602001604052806000815250611a5c565b600e8460405160200180838054600181600116156101000203166002900480156119fa5780601f106119d85761010080835404028352918201916119fa565b820191906000526020600020905b8154815290600101906020018083116119e6575b5050825160208401908083835b60208310611a265780518252601f199092019160209182019101611a07565b6001836020036101000a038019825116818451168082178552505050505050905001925050506040516020818303038152906040525b9695505050505050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b611a9c6114ef565b611adb576040805162461bcd60e51b81526020600482018190526024820152600080516020612f53833981519152604482015290519081900360640190fd5b610e0e816124af565b6000908152600260205260409020546001600160a01b0316151590565b6000611b0c826110b0565b9050806001600160a01b0316836001600160a01b03161415611b75576040805162461bcd60e51b815260206004820181905260248201527f4b495031373a20617070726f76616c20746f2063757272656e74206f776e6572604482015290519081900360640190fd5b336001600160a01b0382161480611b915750611b918133611a66565b611bcc5760405162461bcd60e51b81526004018080602001828103825260378152602001806130946037913960400191505060405180910390fd5b60008281526003602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b611c323382611d89565b611c6d5760405162461bcd60e51b8152600401808060200182810382526030815260200180612f236030913960400191505060405180910390fd5b610c57838383612550565b611c8960098263ffffffff6125f616565b6040516001600160a01b038216907fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669290600090a250565b6001600160a01b0382166000908152600f602052604090205460ff1615611d1a576040805162461bcd60e51b815260206004820152600960248201526810931050d2d31254d560ba1b604482015290519081900360640190fd5b60115460ff168015611d2d575061271081105b611d6e576040805162461bcd60e51b815260206004820152600d60248201526c4e4f545f415641494c41424c4560981b604482015290519081900360640190fd5b6000818152601060205260409020439055610b4b828261265d565b6000611d9482611ae4565b611dcf5760405162461bcd60e51b815260040180806020018281038252602b8152602001806130cb602b913960400191505060405180910390fd5b6000611dda836110b0565b9050806001600160a01b0316846001600160a01b03161480611e155750836001600160a01b0316611e0a84610a94565b6001600160a01b0316145b80611e255750611e258185611a66565b949350505050565b601154610100900460ff168015611e4d5750611e47610bfa565b61271014155b611e8e576040805162461bcd60e51b815260206004820152600d60248201526c4e4f545f415641494c41424c4560981b604482015290519081900360640190fd5b600081815260106020526040902060019055610e0e8161267e565b60006001600160a01b038216611ef05760405162461bcd60e51b8152600401808060200182810382526022815260200180612f736022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b611f21600a8263ffffffff6125f616565b6040516001600160a01b038216907fcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e90600090a250565b5490565b611f6d600a8263ffffffff61269016565b6040516001600160a01b038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b6001600160a01b0316600090815260066020526040902090565b611fcf60098263ffffffff61269016565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b6001600160a01b038216331415612064576040805162461bcd60e51b815260206004820152601860248201527f4b495031373a20617070726f766520746f2063616c6c65720000000000000000604482015290519081900360640190fd5b3360008181526005602090815260408083206001600160a01b03871680855290835292819020805460ff1916861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b60008060606120e9866001600160a01b0316612711565b6120f857600192505050611e25565b856001600160a01b031663150b7a0260e01b3389888860405160240180856001600160a01b03166001600160a01b03168152602001846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561218457818101518382015260200161216c565b50505050905090810190601f1680156121b15780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909a16999099178952518151919890975087965094509250829150849050835b602083106122195780518252601f1990920191602091820191016121fa565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461227b576040519150601f19603f3d011682016040523d82523d6000602084013e612280565b606091505b5080519193509150158015906122bd57508051630a85bd0160e11b90602080840191908110156122af57600080fd5b50516001600160e01b031916145b156122cd57600192505050611e25565b856001600160a01b0316636745782b60e01b3389888860405160240180856001600160a01b03166001600160a01b03168152602001846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015612359578181015183820152602001612341565b50505050905090810190601f1680156123865780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909a16999099178952518151919890975087965094509250829150849050835b602083106123ee5780518252601f1990920191602091820191016123cf565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114612450576040519150601f19603f3d011682016040523d82523d6000602084013e612455565b606091505b50805191935091501580159061249257508051636745782b60e01b906020808401919081101561248457600080fd5b50516001600160e01b031916145b156124a257600192505050611e25565b5060009695505050505050565b6001600160a01b0381166124f45760405162461bcd60e51b8152600401808060200182810382526026815260200180612e376026913960400191505060405180910390fd5b6001546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600180546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b0383166000908152600f602052604090205460ff1615801561259257506001600160a01b0382166000908152600f602052604090205460ff16155b80156125ae5750336000908152600f602052604090205460ff16155b6125eb576040805162461bcd60e51b815260206004820152600960248201526810931050d2d31254d560ba1b604482015290519081900360640190fd5b610c57838383612717565b6126008282611ea9565b61263b5760405162461bcd60e51b8152600401808060200182810382526021815260200180612eda6021913960400191505060405180910390fd5b6001600160a01b0316600090815260209190915260409020805460ff19169055565b6126678282612736565b6126718282612867565b5050600880546001019055565b610e0e61268a826110b0565b826128a5565b61269a8282611ea9565b156126ec576040805162461bcd60e51b815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b3b151590565b6127228383836128d5565b61272c8382612a19565b610c578282612867565b6001600160a01b038216612791576040805162461bcd60e51b815260206004820152601f60248201527f4b495031373a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b61279a81611ae4565b156127ec576040805162461bcd60e51b815260206004820152601b60248201527f4b495031373a20746f6b656e20616c7265616479206d696e7465640000000000604482015290519081900360640190fd5b600081815260026020908152604080832080546001600160a01b0319166001600160a01b03871690811790915583526004909152902061282b90612b0e565b60405181906001600160a01b038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6001600160a01b0390911660009081526006602081815260408084208054868652600784529185208290559282526001810183559183529091200155565b6128af8282612b17565b6128b98282612a19565b6000908152600760205260408120555060088054600019019055565b826001600160a01b03166128e8826110b0565b6001600160a01b03161461292d5760405162461bcd60e51b815260040180806020018281038252602881526020018061301d6028913960400191505060405180910390fd5b6001600160a01b0382166129725760405162461bcd60e51b8152600401808060200182810382526023815260200180612e5d6023913960400191505060405180910390fd5b61297b81612bee565b6001600160a01b038316600090815260046020526040902061299c90612c29565b6001600160a01b03821660009081526004602052604090206129bd90612b0e565b60008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6001600160a01b038216600090815260066020526040812054612a4390600163ffffffff612c4016565b600083815260076020526040902054909150808214612ade576001600160a01b0384166000908152600660205260408120805484908110612a8057fe5b906000526020600020015490508060066000876001600160a01b03166001600160a01b031681526020019081526020016000208381548110612abe57fe5b600091825260208083209091019290925591825260079052604090208190555b6001600160a01b0384166000908152600660205260409020805490612b07906000198301612d9e565b5050505050565b80546001019055565b816001600160a01b0316612b2a826110b0565b6001600160a01b031614612b6f5760405162461bcd60e51b81526004018080602001828103825260248152602001806130456024913960400191505060405180910390fd5b612b7881612bee565b6001600160a01b0382166000908152600460205260409020612b9990612c29565b60008181526002602052604080822080546001600160a01b0319169055518291906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b6000818152600360205260409020546001600160a01b031615610e0e57600090815260036020526040902080546001600160a01b0319169055565b8054612c3c90600163ffffffff612c4016565b9055565b6000612c8283836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250612c89565b9392505050565b60008184841115612d185760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612cdd578181015183820152602001612cc5565b50505050905090810190601f168015612d0a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10612d615782800160ff19823516178555612d8e565b82800160010185558215612d8e579182015b82811115612d8e578235825591602001919060010190612d73565b50612d9a929150612dbe565b5090565b815481835581811115610c5757600083815260209020610c579181019083015b610bfe91905b80821115612d9a5760008155600101612dc456fe4b495031374d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e506175736572526f6c653a2063616c6c657220646f6573206e6f742068617665207468652050617573657220726f6c654f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734b495031373a207472616e7366657220746f20746865207a65726f20616464726573734b49503137456e756d657261626c653a206f776e657220696e646578206f7574206f6620626f756e64734d696e746572526f6c653a2063616c6c657220646f6573206e6f74206861766520746865204d696e74657220726f6c65526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c654b495031373a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e4b495031373a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f7665644f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572526f6c65733a206163636f756e7420697320746865207a65726f20616464726573734b495031373a207472616e7366657220746f206e6f6e204b49503137526563656976657220696d706c656d656e7465724b495031374275726e61626c653a2063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f7665644b495031373a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734b495031373a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4b495031373a206275726e206f6620746f6b656e2074686174206973206e6f74206f776e4b495031373a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4b495031373a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4b495031373a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656ea265627a7a723158202f96283877a643a81fe8e0506e9196e5ddeea3876be13bb94032404b0b39ec0364736f6c63430005110032526f6c65733a206163636f756e7420697320746865207a65726f206164647265737368747470733a2f2f6170692e6761696170726f746f636f6c2e636f6d2f737461626c6564616f2f";
const isSuperArgs = (xs) => xs.length > 1;
class GaiaStableDAO__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
        this.contractName = "GaiaStableDAO";
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
exports.GaiaStableDAO__factory = GaiaStableDAO__factory;
GaiaStableDAO__factory.bytecode = _bytecode;
GaiaStableDAO__factory.abi = _abi;
//# sourceMappingURL=GaiaStableDAO__factory.js.map