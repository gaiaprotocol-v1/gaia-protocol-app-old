"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockFactory__factory = void 0;
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
        payable: true,
        stateMutability: "payable",
        type: "fallback",
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
                internalType: "address",
                name: "outToken",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "outAmount",
                type: "uint256",
            },
            {
                internalType: "address[]",
                name: "path",
                type: "address[]",
            },
        ],
        name: "exchangeKlayNeg",
        outputs: [],
        payable: true,
        stateMutability: "payable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "priceRatio",
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
        constant: false,
        inputs: [
            {
                internalType: "uint256",
                name: "_priceRatioPercent",
                type: "uint256",
            },
        ],
        name: "setPriceRatio",
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
const _bytecode = "0x608060405260c86004556100226301ffc9a760e01b6001600160e01b0361004016565b61003b636578737160e01b6001600160e01b0361004016565b6100c4565b6001600160e01b0319808216141561009f576040805162461bcd60e51b815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b610dce806100d36000396000f3fe6080604052600436106100dd5760003560e01c806370a082311161007f578063a9059cbb11610059578063a9059cbb1461033d578063b88d4fde14610376578063dd62ed3e14610449578063eb79554914610484576100dd565b806370a082311461025b578063a66bf2e41461028e578063a7c07e92146102b8576100dd565b806318160ddd116100bb57806318160ddd1461018757806323b872dd1461019c578063423f6cef146101df57806342842e0e14610218576100dd565b806301ffc9a7146100df578063095ea7b3146101275780630aa2f42014610160575b005b3480156100eb57600080fd5b506101136004803603602081101561010257600080fd5b50356001600160e01b03191661054c565b604080519115158252519081900360200190f35b34801561013357600080fd5b506101136004803603604081101561014a57600080fd5b506001600160a01b03813516906020013561056b565b34801561016c57600080fd5b50610175610581565b60408051918252519081900360200190f35b34801561019357600080fd5b50610175610587565b3480156101a857600080fd5b50610113600480360360608110156101bf57600080fd5b506001600160a01b0381358116916020810135909116906040013561058d565b3480156101eb57600080fd5b506100dd6004803603604081101561020257600080fd5b506001600160a01b0381351690602001356105e4565b34801561022457600080fd5b506100dd6004803603606081101561023b57600080fd5b506001600160a01b03813581169160208101359091169060400135610602565b34801561026757600080fd5b506101756004803603602081101561027e57600080fd5b50356001600160a01b0316610622565b34801561029a57600080fd5b506100dd600480360360208110156102b157600080fd5b503561063d565b6100dd600480360360608110156102ce57600080fd5b6001600160a01b03823516916020810135918101906060810160408201356401000000008111156102fe57600080fd5b82018360208201111561031057600080fd5b8035906020019184602083028401116401000000008311171561033257600080fd5b509092509050610642565b34801561034957600080fd5b506101136004803603604081101561036057600080fd5b506001600160a01b03813516906020013561075a565b34801561038257600080fd5b506100dd6004803603608081101561039957600080fd5b6001600160a01b038235811692602081013590911691604082013591908101906080810160608201356401000000008111156103d457600080fd5b8201836020820111156103e657600080fd5b8035906020019184600183028401116401000000008311171561040857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610767945050505050565b34801561045557600080fd5b506101756004803603604081101561046c57600080fd5b506001600160a01b03813581169160200135166107c0565b34801561049057600080fd5b506100dd600480360360608110156104a757600080fd5b6001600160a01b03823516916020810135918101906060810160408201356401000000008111156104d757600080fd5b8201836020820111156104e957600080fd5b8035906020019184600183028401116401000000008311171561050b57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506107eb945050505050565b6001600160e01b03191660009081526020819052604090205460ff1690565b600061057833848461083d565b50600192915050565b60045481565b60035490565b600061059a848484610929565b6001600160a01b0384166000908152600260209081526040808320338085529252909120546105da9186916105d5908663ffffffff610a6d16565b61083d565b5060019392505050565b6105fe8282604051806020016040528060008152506107eb565b5050565b61061d83838360405180602001604052806000815250610767565b505050565b6001600160a01b031660009081526001602052604090205490565b600455565b6001600160a01b03841661065557600080fd5b6000606460045485028161066557fe5b049050348111156106a8576040805162461bcd60e51b8152602060048201526008602482015267534c49505041474560c01b604482015290519081900360640190fd5b6040805163a9059cbb60e01b81523360048201526024810186905290516001600160a01b0387169163a9059cbb9160448083019260209291908290030181600087803b1580156106f757600080fd5b505af115801561070b573d6000803e3d6000fd5b505050506040513d602081101561072157600080fd5b505060405133903483900380156108fc02916000818181858888f19350505050158015610752573d6000803e3d6000fd5b505050505050565b6000610578338484610929565b61077284848461058d565b5061077f84848484610ab6565b6107ba5760405162461bcd60e51b815260040180806020018281038252602e815260200180610d03602e913960400191505060405180910390fd5b50505050565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b6107f5838361075a565b5061080233848484610ab6565b61061d5760405162461bcd60e51b815260040180806020018281038252602e815260200180610d03602e913960400191505060405180910390fd5b6001600160a01b0383166108825760405162461bcd60e51b8152600401808060200182810382526023815260200180610d776023913960400191505060405180910390fd5b6001600160a01b0382166108c75760405162461bcd60e51b8152600401808060200182810382526021815260200180610ce26021913960400191505060405180910390fd5b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b03831661096e5760405162461bcd60e51b8152600401808060200182810382526024815260200180610d536024913960400191505060405180910390fd5b6001600160a01b0382166109b35760405162461bcd60e51b8152600401808060200182810382526022815260200180610d316022913960400191505060405180910390fd5b6001600160a01b0383166000908152600160205260409020546109dc908263ffffffff610a6d16565b6001600160a01b038085166000908152600160205260408082209390935590841681522054610a11908263ffffffff610bea16565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b6000610aaf83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610c44565b9392505050565b6000610aca846001600160a01b0316610cdb565b610ad657506001610be2565b604051634e8c461160e11b815233600482018181526001600160a01b03888116602485015260448401879052608060648501908152865160848601528651600095928a1694639d188c229490938c938b938b939260a4019060208501908083838e5b83811015610b50578181015183820152602001610b38565b50505050905090810190601f168015610b7d5780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b158015610b9f57600080fd5b505af1158015610bb3573d6000803e3d6000fd5b505050506040513d6020811015610bc957600080fd5b50516001600160e01b031916634e8c461160e11b149150505b949350505050565b600082820183811015610aaf576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b60008184841115610cd35760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610c98578181015183820152602001610c80565b50505050905090810190601f168015610cc55780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b3b15159056fe4b4950373a20617070726f766520746f20746865207a65726f20616464726573734b4950373a207472616e7366657220746f206e6f6e204b495037526563656976657220696d706c656d656e7465724b4950373a207472616e7366657220746f20746865207a65726f20616464726573734b4950373a207472616e736665722066726f6d20746865207a65726f20616464726573734b4950373a20617070726f76652066726f6d20746865207a65726f2061646472657373a265627a7a72315820ecafb967a54dfeb1d6c19d8faaad586ce444c7c53015e9fe89b20f5e08c8f75464736f6c63430005110032";
const isSuperArgs = (xs) => xs.length > 1;
class MockFactory__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
        this.contractName = "MockFactory";
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
exports.MockFactory__factory = MockFactory__factory;
MockFactory__factory.bytecode = _bytecode;
MockFactory__factory.abi = _abi;
//# sourceMappingURL=MockFactory__factory.js.map