"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KIP37Mock__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "string",
                name: "uri",
                type: "string",
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
                name: "account",
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
                name: "operator",
                type: "address",
            },
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
                internalType: "uint256[]",
                name: "ids",
                type: "uint256[]",
            },
            {
                indexed: false,
                internalType: "uint256[]",
                name: "values",
                type: "uint256[]",
            },
        ],
        name: "TransferBatch",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "operator",
                type: "address",
            },
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
                name: "id",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "TransferSingle",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "value",
                type: "string",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        name: "URI",
        type: "event",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
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
                internalType: "address[]",
                name: "accounts",
                type: "address[]",
            },
            {
                internalType: "uint256[]",
                name: "ids",
                type: "uint256[]",
            },
        ],
        name: "balanceOfBatch",
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
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "value",
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
                name: "owner",
                type: "address",
            },
            {
                internalType: "uint256[]",
                name: "ids",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "values",
                type: "uint256[]",
            },
        ],
        name: "burnBatch",
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
                name: "account",
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
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "mint",
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
                internalType: "uint256[]",
                name: "ids",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "values",
                type: "uint256[]",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "mintBatch",
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
                internalType: "uint256[]",
                name: "ids",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "amounts",
                type: "uint256[]",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "safeBatchTransferFrom",
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
                name: "id",
                type: "uint256",
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
                internalType: "address",
                name: "operator",
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
                name: "newuri",
                type: "string",
            },
        ],
        name: "setURI",
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
        inputs: [
            {
                internalType: "uint256",
                name: "_tokenId",
                type: "uint256",
            },
        ],
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
        constant: true,
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "uri",
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
];
const _bytecode = "0x60806040523480156200001157600080fd5b5060405162002d4138038062002d41833981810160405260208110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052508291506200010b90506301ffc9a760e01b6001600160e01b036200015d16565b6200011f816001600160e01b03620001e216565b6200013a636433ca1f60e01b6001600160e01b036200015d16565b620001556303a24d0760e21b6001600160e01b036200015d16565b5050620002a0565b6001600160e01b03198082161415620001bd576040805162461bcd60e51b815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b8051620001f7906004906020840190620001fb565b5050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200023e57805160ff19168380011785556200026e565b828001600101855582156200026e579182015b828111156200026e57825182559160200191906001019062000251565b506200027c92915062000280565b5090565b6200029d91905b808211156200027c576000815560010162000287565b90565b612a9180620002b06000396000f3fe608060405234801561001057600080fd5b50600436106100e95760003560e01c80636b20c4541161008c578063bd85b03911610066578063bd85b039146109ac578063e985e9c5146109c9578063f242432a146109f7578063f5298aca14610ac0576100e9565b80636b20c4541461078b578063731133e9146108be578063a22cb4651461097e576100e9565b80630e89341c116100c85780630e89341c1461020d5780631f7fdffa1461029f5780632eb2c2d6146104575780634e1273f414610618576100e9565b8062fdd58e146100ee57806301ffc9a71461012c57806302fe530514610167575b600080fd5b61011a6004803603604081101561010457600080fd5b506001600160a01b038135169060200135610af2565b60408051918252519081900360200190f35b6101536004803603602081101561014257600080fd5b50356001600160e01b031916610b61565b604080519115158252519081900360200190f35b61020b6004803603602081101561017d57600080fd5b810190602081018135600160201b81111561019757600080fd5b8201836020820111156101a957600080fd5b803590602001918460018302840111600160201b831117156101ca57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610b80945050505050565b005b61022a6004803603602081101561022357600080fd5b5035610b8c565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561026457818101518382015260200161024c565b50505050905090810190601f1680156102915780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61020b600480360360808110156102b557600080fd5b6001600160a01b038235169190810190604081016020820135600160201b8111156102df57600080fd5b8201836020820111156102f157600080fd5b803590602001918460208302840111600160201b8311171561031257600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561036157600080fd5b82018360208201111561037357600080fd5b803590602001918460208302840111600160201b8311171561039457600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b8111156103e357600080fd5b8201836020820111156103f557600080fd5b803590602001918460018302840111600160201b8311171561041657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610c24945050505050565b61020b600480360360a081101561046d57600080fd5b6001600160a01b038235811692602081013590911691810190606081016040820135600160201b8111156104a057600080fd5b8201836020820111156104b257600080fd5b803590602001918460208302840111600160201b831117156104d357600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561052257600080fd5b82018360208201111561053457600080fd5b803590602001918460208302840111600160201b8311171561055557600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b8111156105a457600080fd5b8201836020820111156105b657600080fd5b803590602001918460018302840111600160201b831117156105d757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610c36945050505050565b61073b6004803603604081101561062e57600080fd5b810190602081018135600160201b81111561064857600080fd5b82018360208201111561065a57600080fd5b803590602001918460208302840111600160201b8311171561067b57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b8111156106ca57600080fd5b8201836020820111156106dc57600080fd5b803590602001918460208302840111600160201b831117156106fd57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610f6f945050505050565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561077757818101518382015260200161075f565b505050509050019250505060405180910390f35b61020b600480360360608110156107a157600080fd5b6001600160a01b038235169190810190604081016020820135600160201b8111156107cb57600080fd5b8201836020820111156107dd57600080fd5b803590602001918460208302840111600160201b831117156107fe57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561084d57600080fd5b82018360208201111561085f57600080fd5b803590602001918460208302840111600160201b8311171561088057600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506110d6945050505050565b61020b600480360360808110156108d457600080fd5b6001600160a01b038235169160208101359160408201359190810190608081016060820135600160201b81111561090a57600080fd5b82018360208201111561091c57600080fd5b803590602001918460018302840111600160201b8311171561093d57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506110e6945050505050565b61020b6004803603604081101561099457600080fd5b506001600160a01b03813516906020013515156110f2565b61011a600480360360208110156109c257600080fd5b50356111e1565b610153600480360360408110156109df57600080fd5b506001600160a01b03813581169160200135166111f3565b61020b600480360360a0811015610a0d57600080fd5b6001600160a01b03823581169260208101359091169160408201359160608101359181019060a081016080820135600160201b811115610a4c57600080fd5b820183602082011115610a5e57600080fd5b803590602001918460018302840111600160201b83111715610a7f57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611221945050505050565b61020b60048036036060811015610ad657600080fd5b506001600160a01b03813516906020810135906040013561142d565b60006001600160a01b038316610b395760405162461bcd60e51b81526004018080602001828103825260298152602001806128896029913960400191505060405180910390fd5b5060009081526001602090815260408083206001600160a01b03949094168352929052205490565b6001600160e01b03191660009081526020819052604090205460ff1690565b610b8981611438565b50565b60048054604080516020601f6002600019610100600188161502019095169490940493840181900481028201810190925282815260609390929091830182828015610c185780601f10610bed57610100808354040283529160200191610c18565b820191906000526020600020905b815481529060010190602001808311610bfb57829003601f168201915b50505050509050919050565b610c308484848461144f565b50505050565b8151835114610c765760405162461bcd60e51b81526004018080602001828103825260268152602001806128d96026913960400191505060405180910390fd5b6001600160a01b038416610cbb5760405162461bcd60e51b81526004018080602001828103825260238152602001806129d56023913960400191505060405180910390fd5b610cc3611762565b6001600160a01b0316856001600160a01b03161480610cee5750610cee85610ce9611762565b6111f3565b610d295760405162461bcd60e51b81526004018080602001828103825260308152602001806128ff6030913960400191505060405180910390fd5b6000610d33611762565b9050610d43818787878787610f67565b60005b8451811015610e44576000858281518110610d5d57fe5b602002602001015190506000858381518110610d7557fe5b60200260200101519050610de28160405180606001604052806028815260200161292f602891396001600086815260200190815260200160002060008d6001600160a01b03166001600160a01b03168152602001908152602001600020546117679092919063ffffffff16565b60008381526001602090815260408083206001600160a01b038e811685529252808320939093558a1681522054610e1990826117fe565b60009283526001602081815260408086206001600160a01b038d168752909152909320555001610d46565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015610eca578181015183820152602001610eb2565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015610f09578181015183820152602001610ef1565b5050505090500194505050505060405180910390a4610f2c81878787878761185f565b610f675760405162461bcd60e51b81526004018080602001828103825260368152602001806129f86036913960400191505060405180910390fd5b505050505050565b60608151835114610fb15760405162461bcd60e51b815260040180806020018281038252602781526020018061281f6027913960400191505060405180910390fd5b60608351604051908082528060200260200182016040528015610fde578160200160208202803883390190505b50905060005b84518110156110ce5760006001600160a01b031685828151811061100457fe5b60200260200101516001600160a01b031614156110525760405162461bcd60e51b815260040180806020018281038252602f815260200180612a2e602f913960400191505060405180910390fd5b6001600085838151811061106257fe5b60200260200101518152602001908152602001600020600086838151811061108657fe5b60200260200101516001600160a01b03166001600160a01b03168152602001908152602001600020548282815181106110bb57fe5b6020908102919091010152600101610fe4565b509392505050565b6110e1838383611d4c565b505050565b610c3084848484612057565b816001600160a01b0316611104611762565b6001600160a01b0316141561114a5760405162461bcd60e51b81526004018080602001828103825260278152602001806129576027913960400191505060405180910390fd5b8060026000611157611762565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff19169215159290921790915561119b611762565b60408051841515815290516001600160a01b0392909216917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c319181900360200190a35050565b60009081526003602052604090205490565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205460ff1690565b6001600160a01b0384166112665760405162461bcd60e51b81526004018080602001828103825260238152602001806129d56023913960400191505060405180910390fd5b61126e611762565b6001600160a01b0316856001600160a01b03161480611294575061129485610ce9611762565b6112cf5760405162461bcd60e51b81526004018080602001828103825260278152602001806129ae6027913960400191505060405180910390fd5b60006112d9611762565b90506112f98187876112ea886121e7565b6112f3886121e7565b87610f67565b6113468360405180606001604052806028815260200161292f6028913960008781526001602090815260408083206001600160a01b038d168452909152902054919063ffffffff61176716565b60008581526001602090815260408083206001600160a01b038b8116855292528083209390935587168152205461137d90846117fe565b60008581526001602090815260408083206001600160a01b03808b168086529184529382902094909455805188815291820187905280518a8416938616927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6292908290030190a46113f281878787878761222b565b610f675760405162461bcd60e51b815260040180806020018281038252603081526020018061297e6030913960400191505060405180910390fd5b6110e18383836125f1565b805161144b906004906020840190612786565b5050565b6001600160a01b0384166114aa576040805162461bcd60e51b815260206004820152601f60248201527f4b495033373a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b81518351146114ea5760405162461bcd60e51b81526004018080602001828103825260268152602001806128d96026913960400191505060405180910390fd5b60006114f4611762565b905061150581600087878787610f67565b60005b8451811015611636576115806001600087848151811061152457fe5b602002602001015181526020019081526020016000206000886001600160a01b03166001600160a01b031681526020019081526020016000205485838151811061156a57fe5b60200260200101516117fe90919063ffffffff16565b6001600087848151811061159057fe5b602002602001015181526020019081526020016000206000886001600160a01b03166001600160a01b0316815260200190815260200160002081905550611603600360008784815181106115e057fe5b602002602001015181526020019081526020016000205485838151811061156a57fe5b6003600087848151811061161357fe5b602090810291909101810151825281019190915260400160002055600101611508565b50846001600160a01b031660006001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156116bd5781810151838201526020016116a5565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156116fc5781810151838201526020016116e4565b5050505090500194505050505060405180910390a46117208160008787878761185f565b61175b5760405162461bcd60e51b81526004018080602001828103825260368152602001806129f86036913960400191505060405180910390fd5b5050505050565b335b90565b600081848411156117f65760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156117bb5781810151838201526020016117a3565b50505050905090810190601f1680156117e85780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015611858576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6000806060611876876001600160a01b0316612780565b61188557600192505050611d42565b866001600160a01b031663bc197c8160e01b8a8a89898960405160240180866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b03168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b838110156119175781810151838201526020016118ff565b50505050905001848103835286818151815260200191508051906020019060200280838360005b8381101561195657818101518382015260200161193e565b50505050905001848103825285818151815260200191508051906020019080838360005b8381101561199257818101518382015260200161197a565b50505050905090810190601f1680156119bf5780820380516001836020036101000a031916815260200191505b5098505050505050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050506040518082805190602001908083835b60208310611a2c5780518252601f199092019160209182019101611a0d565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611a8e576040519150601f19603f3d011682016040523d82523d6000602084013e611a93565b606091505b508051919350915015801590611ad05750805163bc197c8160e01b9060208084019190811015611ac257600080fd5b50516001600160e01b031916145b15611ae057600192505050611d42565b866001600160a01b0316639b49e33260e01b8a8a89898960405160240180866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b03168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b83811015611b72578181015183820152602001611b5a565b50505050905001848103835286818151815260200191508051906020019060200280838360005b83811015611bb1578181015183820152602001611b99565b50505050905001848103825285818151815260200191508051906020019080838360005b83811015611bed578181015183820152602001611bd5565b50505050905090810190601f168015611c1a5780820380516001836020036101000a031916815260200191505b5098505050505050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050506040518082805190602001908083835b60208310611c875780518252601f199092019160209182019101611c68565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611ce9576040519150601f19603f3d011682016040523d82523d6000602084013e611cee565b606091505b508051919350915015801590611d2b57508051634da4f19960e11b9060208084019190811015611d1d57600080fd5b50516001600160e01b031916145b15611d3b57600192505050611d42565b6000925050505b9695505050505050565b6001600160a01b038316611d915760405162461bcd60e51b81526004018080602001828103825260218152602001806128686021913960400191505060405180910390fd5b8051825114611dd15760405162461bcd60e51b81526004018080602001828103825260268152602001806128d96026913960400191505060405180910390fd5b6000611ddb611762565b9050611dfb81856000868660405180602001604052806000815250610f67565b60005b8351811015611f7657611e90838281518110611e1657fe5b60200260200101516040518060600160405280602281526020016128466022913960016000888681518110611e4757fe5b602002602001015181526020019081526020016000206000896001600160a01b03166001600160a01b03168152602001908152602001600020546117679092919063ffffffff16565b60016000868481518110611ea057fe5b602002602001015181526020019081526020016000206000876001600160a01b03166001600160a01b0316815260200190815260200160002081905550611f43838281518110611eec57fe5b60200260200101516040518060600160405280602781526020016128b26027913960036000888681518110611f1d57fe5b60200260200101518152602001908152602001600020546117679092919063ffffffff16565b60036000868481518110611f5357fe5b602090810291909101810151825281019190915260400160002055600101611dfe565b5060006001600160a01b0316846001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015611ffd578181015183820152602001611fe5565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561203c578181015183820152602001612024565b5050505090500194505050505060405180910390a450505050565b6001600160a01b0384166120b2576040805162461bcd60e51b815260206004820152601f60248201527f4b495033373a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b60006120bc611762565b90506120ce816000876112ea886121e7565b60008481526001602090815260408083206001600160a01b0389168452909152902054612101908463ffffffff6117fe16565b60008581526001602090815260408083206001600160a01b038a168452825280832093909355868252600390522054612140908463ffffffff6117fe16565b600085815260036020908152604080832093909355825187815290810186905282516001600160a01b03808a1694908616927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62929081900390910190a46121ac8160008787878761222b565b61175b5760405162461bcd60e51b815260040180806020018281038252603081526020018061297e6030913960400191505060405180910390fd5b60408051600180825281830190925260609182919060208083019080388339019050509050828160008151811061221a57fe5b602090810291909101015292915050565b6000806060612242876001600160a01b0316612780565b61225157600192505050611d42565b866001600160a01b031663f23a6e6160e01b8a8a89898960405160240180866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156122e45781810151838201526020016122cc565b50505050905090810190601f1680156123115780820380516001836020036101000a031916815260200191505b509650505050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050506040518082805190602001908083835b6020831061237c5780518252601f19909201916020918201910161235d565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146123de576040519150601f19603f3d011682016040523d82523d6000602084013e6123e3565b606091505b5080519193509150158015906124205750805163f23a6e6160e01b906020808401919081101561241257600080fd5b50516001600160e01b031916145b1561243057600192505050611d42565b866001600160a01b031663e78b332560e01b8a8a89898960405160240180866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156124c35781810151838201526020016124ab565b50505050905090810190601f1680156124f05780820380516001836020036101000a031916815260200191505b509650505050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050506040518082805190602001908083835b6020831061255b5780518252601f19909201916020918201910161253c565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146125bd576040519150601f19603f3d011682016040523d82523d6000602084013e6125c2565b606091505b508051919350915015801590611d2b5750805163e78b332560e01b9060208084019190811015611d1d57600080fd5b6001600160a01b0383166126365760405162461bcd60e51b81526004018080602001828103825260218152602001806128686021913960400191505060405180910390fd5b6000612640611762565b905061267081856000612652876121e7565b61265b876121e7565b60405180602001604052806000815250610f67565b6126bd826040518060600160405280602281526020016128466022913960008681526001602090815260408083206001600160a01b038b168452909152902054919063ffffffff61176716565b60008481526001602090815260408083206001600160a01b038916845282529182902092909255805160608101909152602780825261271d92859291906128b290830139600086815260036020526040902054919063ffffffff61176716565b6000848152600360209081526040808320939093558251868152908101859052825191926001600160a01b0388811693908616927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6292908290030190a450505050565b3b151590565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106127c757805160ff19168380011785556127f4565b828001600101855582156127f4579182015b828111156127f45782518255916020019190600101906127d9565b50612800929150612804565b5090565b61176491905b80821115612800576000815560010161280a56fe4b495033373a206163636f756e747320616e6420696473206c656e677468206d69736d617463684b495033373a206275726e20616d6f756e7420657863656564732062616c616e63654b495033373a206275726e2066726f6d20746865207a65726f20616464726573734b495033373a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734b495033373a206275726e20616d6f756e74206578636565647320746f74616c20737570706c794b495033373a2069647320616e6420616d6f756e7473206c656e677468206d69736d617463684b495033373a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f7665644b495033373a20696e73756666696369656e742062616c616e636520666f72207472616e736665724b495033373a2073657474696e6720617070726f76616c2073746174757320666f722073656c664b495033373a207472616e7366657220746f206e6f6e204b49503337526563656976657220696d706c656d656e7465724b495033373a2063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f7665644b495033373a207472616e7366657220746f20746865207a65726f20616464726573734b495033373a206261746368207472616e7366657220746f206e6f6e204b49503337526563656976657220696d706c656d656e7465724b495033373a2062617463682062616c616e636520717565727920666f7220746865207a65726f2061646472657373a265627a7a72315820bf2846109ce421ac2aa131b58eda239479c8fa440f4afdcf773f9a28de4b26ca64736f6c63430005110032";
const isSuperArgs = (xs) => xs.length > 1;
class KIP37Mock__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
        this.contractName = "KIP37Mock";
    }
    deploy(uri, overrides) {
        return super.deploy(uri, overrides || {});
    }
    getDeployTransaction(uri, overrides) {
        return super.getDeployTransaction(uri, overrides || {});
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
exports.KIP37Mock__factory = KIP37Mock__factory;
KIP37Mock__factory.bytecode = _bytecode;
KIP37Mock__factory.abi = _abi;
//# sourceMappingURL=KIP37Mock__factory.js.map