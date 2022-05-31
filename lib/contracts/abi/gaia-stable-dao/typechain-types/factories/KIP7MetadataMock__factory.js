"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KIP7MetadataMock__factory = void 0;
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
const _bytecode = "0x60806040523480156200001157600080fd5b506040516200107d3803806200107d833981810160405260608110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010a57600080fd5b9083019060208201858111156200012057600080fd5b82516401000000008111828201881017156200013b57600080fd5b82525081516020918201929091019080838360005b838110156200016a57818101518382015260200162000150565b50505050905090810190601f168015620001985780820380516001836020036101000a031916815260200191505b506040526020015191508390508282620001c26301ffc9a760e01b6001600160e01b036200023616565b620001dd636578737160e01b6001600160e01b036200023616565b8251620001f2906004906020860190620002bb565b50815162000208906005906020850190620002bb565b506006805460ff191660ff83161790556200022a63a219a02560e01b62000236565b50505050505062000360565b6001600160e01b0319808216141562000296576040805162461bcd60e51b815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620002fe57805160ff19168380011785556200032e565b828001600101855582156200032e579182015b828111156200032e57825182559160200191906001019062000311565b506200033c92915062000340565b5090565b6200035d91905b808211156200033c576000815560010162000347565b90565b610d0d80620003706000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806342842e0e1161008c578063a9059cbb11610066578063a9059cbb146102d3578063b88d4fde146102ff578063dd62ed3e146103c5578063eb795549146103f3576100ea565b806342842e0e1461026f57806370a08231146102a557806395d89b41146102cb576100ea565b806318160ddd116100c857806318160ddd146101d357806323b872dd146101ed578063313ce56714610223578063423f6cef14610241576100ea565b806301ffc9a7146100ef57806306fdde031461012a578063095ea7b3146101a7575b600080fd5b6101166004803603602081101561010557600080fd5b50356001600160e01b0319166104ae565b604080519115158252519081900360200190f35b6101326104cd565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561016c578181015183820152602001610154565b50505050905090810190601f1680156101995780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610116600480360360408110156101bd57600080fd5b506001600160a01b038135169060200135610563565b6101db610579565b60408051918252519081900360200190f35b6101166004803603606081101561020357600080fd5b506001600160a01b0381358116916020810135909116906040013561057f565b61022b6105d6565b6040805160ff9092168252519081900360200190f35b61026d6004803603604081101561025757600080fd5b506001600160a01b0381351690602001356105df565b005b61026d6004803603606081101561028557600080fd5b506001600160a01b038135811691602081013590911690604001356105fd565b6101db600480360360208110156102bb57600080fd5b50356001600160a01b031661061d565b610132610638565b610116600480360360408110156102e957600080fd5b506001600160a01b038135169060200135610699565b61026d6004803603608081101561031557600080fd5b6001600160a01b0382358116926020810135909116916040820135919081019060808101606082013564010000000081111561035057600080fd5b82018360208201111561036257600080fd5b8035906020019184600183028401116401000000008311171561038457600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506106a6945050505050565b6101db600480360360408110156103db57600080fd5b506001600160a01b03813581169160200135166106ff565b61026d6004803603606081101561040957600080fd5b6001600160a01b038235169160208101359181019060608101604082013564010000000081111561043957600080fd5b82018360208201111561044b57600080fd5b8035906020019184600183028401116401000000008311171561046d57600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061072a945050505050565b6001600160e01b03191660009081526020819052604090205460ff1690565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105595780601f1061052e57610100808354040283529160200191610559565b820191906000526020600020905b81548152906001019060200180831161053c57829003601f168201915b5050505050905090565b600061057033848461077c565b50600192915050565b60035490565b600061058c848484610868565b6001600160a01b0384166000908152600260209081526040808320338085529252909120546105cc9186916105c7908663ffffffff6109ac16565b61077c565b5060019392505050565b60065460ff1690565b6105f982826040518060200160405280600081525061072a565b5050565b610618838383604051806020016040528060008152506106a6565b505050565b6001600160a01b031660009081526001602052604090205490565b60058054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105595780601f1061052e57610100808354040283529160200191610559565b6000610570338484610868565b6106b184848461057f565b506106be848484846109f5565b6106f95760405162461bcd60e51b815260040180806020018281038252602e815260200180610c42602e913960400191505060405180910390fd5b50505050565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b6107348383610699565b50610741338484846109f5565b6106185760405162461bcd60e51b815260040180806020018281038252602e815260200180610c42602e913960400191505060405180910390fd5b6001600160a01b0383166107c15760405162461bcd60e51b8152600401808060200182810382526023815260200180610cb66023913960400191505060405180910390fd5b6001600160a01b0382166108065760405162461bcd60e51b8152600401808060200182810382526021815260200180610c216021913960400191505060405180910390fd5b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166108ad5760405162461bcd60e51b8152600401808060200182810382526024815260200180610c926024913960400191505060405180910390fd5b6001600160a01b0382166108f25760405162461bcd60e51b8152600401808060200182810382526022815260200180610c706022913960400191505060405180910390fd5b6001600160a01b03831660009081526001602052604090205461091b908263ffffffff6109ac16565b6001600160a01b038085166000908152600160205260408082209390935590841681522054610950908263ffffffff610b2916565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60006109ee83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610b83565b9392505050565b6000610a09846001600160a01b0316610c1a565b610a1557506001610b21565b604051634e8c461160e11b815233600482018181526001600160a01b03888116602485015260448401879052608060648501908152865160848601528651600095928a1694639d188c229490938c938b938b939260a4019060208501908083838e5b83811015610a8f578181015183820152602001610a77565b50505050905090810190601f168015610abc5780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b158015610ade57600080fd5b505af1158015610af2573d6000803e3d6000fd5b505050506040513d6020811015610b0857600080fd5b50516001600160e01b031916634e8c461160e11b149150505b949350505050565b6000828201838110156109ee576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b60008184841115610c125760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610bd7578181015183820152602001610bbf565b50505050905090810190601f168015610c045780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b3b15159056fe4b4950373a20617070726f766520746f20746865207a65726f20616464726573734b4950373a207472616e7366657220746f206e6f6e204b495037526563656976657220696d706c656d656e7465724b4950373a207472616e7366657220746f20746865207a65726f20616464726573734b4950373a207472616e736665722066726f6d20746865207a65726f20616464726573734b4950373a20617070726f76652066726f6d20746865207a65726f2061646472657373a265627a7a7231582092b3e553e476418dbd6d684c55778220fc0147ddbf61921c087ae02a30e08cf964736f6c63430005110032";
const isSuperArgs = (xs) => xs.length > 1;
class KIP7MetadataMock__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
        this.contractName = "KIP7MetadataMock";
    }
    deploy(name, symbol, decimals, overrides) {
        return super.deploy(name, symbol, decimals, overrides || {});
    }
    getDeployTransaction(name, symbol, decimals, overrides) {
        return super.getDeployTransaction(name, symbol, decimals, overrides || {});
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
exports.KIP7MetadataMock__factory = KIP7MetadataMock__factory;
KIP7MetadataMock__factory.bytecode = _bytecode;
KIP7MetadataMock__factory.abi = _abi;
//# sourceMappingURL=KIP7MetadataMock__factory.js.map