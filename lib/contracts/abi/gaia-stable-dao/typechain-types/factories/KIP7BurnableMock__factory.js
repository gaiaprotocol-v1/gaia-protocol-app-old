"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KIP7BurnableMock__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "initialAccount",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "initialBalance",
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
const _bytecode = "0x608060405234801561001057600080fd5b5060405162000f7b38038062000f7b8339818101604052604081101561003557600080fd5b5080516020909101516100576301ffc9a760e01b6001600160e01b036100a316565b610070636578737160e01b6001600160e01b036100a316565b61008963076b417f60e31b6001600160e01b036100a316565b61009c82826001600160e01b0361012716565b5050610286565b6001600160e01b03198082161415610102576040805162461bcd60e51b815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b6001600160a01b038216610182576040805162461bcd60e51b815260206004820152601e60248201527f4b4950373a206d696e7420746f20746865207a65726f20616464726573730000604482015290519081900360640190fd5b61019b8160035461022560201b610b011790919060201c565b6003556001600160a01b0382166000908152600160209081526040909120546101cd918390610b01610225821b17901c565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b60008282018381101561027f576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b610ce580620002966000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806342966c681161008c578063a9059cbb11610066578063a9059cbb1461025e578063b88d4fde1461028a578063dd62ed3e14610350578063eb7955491461037e576100cf565b806342966c68146101ef57806370a082311461020c57806379cc679014610232576100cf565b806301ffc9a7146100d4578063095ea7b31461010f57806318160ddd1461013b57806323b872dd14610155578063423f6cef1461018b57806342842e0e146101b9575b600080fd5b6100fb600480360360208110156100ea57600080fd5b50356001600160e01b031916610439565b604080519115158252519081900360200190f35b6100fb6004803603604081101561012557600080fd5b506001600160a01b038135169060200135610458565b61014361046e565b60408051918252519081900360200190f35b6100fb6004803603606081101561016b57600080fd5b506001600160a01b03813581169160208101359091169060400135610474565b6101b7600480360360408110156101a157600080fd5b506001600160a01b0381351690602001356104cb565b005b6101b7600480360360608110156101cf57600080fd5b506001600160a01b038135811691602081013590911690604001356104e9565b6101b76004803603602081101561020557600080fd5b5035610509565b6101436004803603602081101561022257600080fd5b50356001600160a01b0316610516565b6101b76004803603604081101561024857600080fd5b506001600160a01b038135169060200135610531565b6100fb6004803603604081101561027457600080fd5b506001600160a01b03813516906020013561053b565b6101b7600480360360808110156102a057600080fd5b6001600160a01b038235811692602081013590911691604082013591908101906080810160608201356401000000008111156102db57600080fd5b8201836020820111156102ed57600080fd5b8035906020019184600183028401116401000000008311171561030f57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610548945050505050565b6101436004803603604081101561036657600080fd5b506001600160a01b03813581169160200135166105a1565b6101b76004803603606081101561039457600080fd5b6001600160a01b03823516916020810135918101906060810160408201356401000000008111156103c457600080fd5b8201836020820111156103d657600080fd5b803590602001918460018302840111640100000000831117156103f857600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506105cc945050505050565b6001600160e01b03191660009081526020819052604090205460ff1690565b600061046533848461061e565b50600192915050565b60035490565b600061048184848461070a565b6001600160a01b0384166000908152600260209081526040808320338085529252909120546104c19186916104bc908663ffffffff61084e16565b61061e565b5060019392505050565b6104e58282604051806020016040528060008152506105cc565b5050565b61050483838360405180602001604052806000815250610548565b505050565b6105133382610897565b50565b6001600160a01b031660009081526001602052604090205490565b6104e58282610988565b600061046533848461070a565b610553848484610474565b50610560848484846109cd565b61059b5760405162461bcd60e51b815260040180806020018281038252602e815260200180610c1a602e913960400191505060405180910390fd5b50505050565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b6105d6838361053b565b506105e3338484846109cd565b6105045760405162461bcd60e51b815260040180806020018281038252602e815260200180610c1a602e913960400191505060405180910390fd5b6001600160a01b0383166106635760405162461bcd60e51b8152600401808060200182810382526023815260200180610c8e6023913960400191505060405180910390fd5b6001600160a01b0382166106a85760405162461bcd60e51b8152600401808060200182810382526021815260200180610bf96021913960400191505060405180910390fd5b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b03831661074f5760405162461bcd60e51b8152600401808060200182810382526024815260200180610c6a6024913960400191505060405180910390fd5b6001600160a01b0382166107945760405162461bcd60e51b8152600401808060200182810382526022815260200180610c486022913960400191505060405180910390fd5b6001600160a01b0383166000908152600160205260409020546107bd908263ffffffff61084e16565b6001600160a01b0380851660009081526001602052604080822093909355908416815220546107f2908263ffffffff610b0116565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600061089083836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610b5b565b9392505050565b6001600160a01b0382166108f2576040805162461bcd60e51b815260206004820181905260248201527f4b4950373a206275726e2066726f6d20746865207a65726f2061646472657373604482015290519081900360640190fd5b600354610905908263ffffffff61084e16565b6003556001600160a01b038216600090815260016020526040902054610931908263ffffffff61084e16565b6001600160a01b0383166000818152600160209081526040808320949094558351858152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35050565b6109928282610897565b6001600160a01b0382166000908152600260209081526040808320338085529252909120546104e59184916104bc908563ffffffff61084e16565b60006109e1846001600160a01b0316610bf2565b6109ed57506001610af9565b604051634e8c461160e11b815233600482018181526001600160a01b03888116602485015260448401879052608060648501908152865160848601528651600095928a1694639d188c229490938c938b938b939260a4019060208501908083838e5b83811015610a67578181015183820152602001610a4f565b50505050905090810190601f168015610a945780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b158015610ab657600080fd5b505af1158015610aca573d6000803e3d6000fd5b505050506040513d6020811015610ae057600080fd5b50516001600160e01b031916634e8c461160e11b149150505b949350505050565b600082820183811015610890576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b60008184841115610bea5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610baf578181015183820152602001610b97565b50505050905090810190601f168015610bdc5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b3b15159056fe4b4950373a20617070726f766520746f20746865207a65726f20616464726573734b4950373a207472616e7366657220746f206e6f6e204b495037526563656976657220696d706c656d656e7465724b4950373a207472616e7366657220746f20746865207a65726f20616464726573734b4950373a207472616e736665722066726f6d20746865207a65726f20616464726573734b4950373a20617070726f76652066726f6d20746865207a65726f2061646472657373a265627a7a7231582050183727b953e99aacecc77066b2bc9cff6acb932364da02014a52c51a0dd27164736f6c63430005110032";
const isSuperArgs = (xs) => xs.length > 1;
class KIP7BurnableMock__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
        this.contractName = "KIP7BurnableMock";
    }
    deploy(initialAccount, initialBalance, overrides) {
        return super.deploy(initialAccount, initialBalance, overrides || {});
    }
    getDeployTransaction(initialAccount, initialBalance, overrides) {
        return super.getDeployTransaction(initialAccount, initialBalance, overrides || {});
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
exports.KIP7BurnableMock__factory = KIP7BurnableMock__factory;
KIP7BurnableMock__factory.bytecode = _bytecode;
KIP7BurnableMock__factory.abi = _abi;
//# sourceMappingURL=KIP7BurnableMock__factory.js.map