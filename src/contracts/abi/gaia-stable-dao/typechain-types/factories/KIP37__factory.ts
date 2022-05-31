/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { KIP37, KIP37Interface } from "../KIP37";

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

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001dcb38038062001dcb833981810160405260208110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052506200010a91506301ffc9a760e01b90506001600160e01b036200015b16565b6200011e816001600160e01b03620001e016565b62000139636433ca1f60e01b6001600160e01b036200015b16565b620001546303a24d0760e21b6001600160e01b036200015b16565b506200029e565b6001600160e01b03198082161415620001bb576040805162461bcd60e51b815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b8051620001f5906004906020840190620001f9565b5050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200023c57805160ff19168380011785556200026c565b828001600101855582156200026c579182015b828111156200026c5782518255916020019190600101906200024f565b506200027a9291506200027e565b5090565b6200029b91905b808211156200027a576000815560010162000285565b90565b611b1d80620002ae6000396000f3fe608060405234801561001057600080fd5b50600436106100925760003560e01c80634e1273f4116100665780634e1273f414610365578063a22cb465146104d8578063bd85b03914610506578063e985e9c514610523578063f242432a1461055157610092565b8062fdd58e1461009757806301ffc9a7146100d55780630e89341c146101105780632eb2c2d6146101a2575b600080fd5b6100c3600480360360408110156100ad57600080fd5b506001600160a01b03813516906020013561061a565b60408051918252519081900360200190f35b6100fc600480360360208110156100eb57600080fd5b50356001600160e01b031916610689565b604080519115158252519081900360200190f35b61012d6004803603602081101561012657600080fd5b50356106a8565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561016757818101518382015260200161014f565b50505050905090810190601f1680156101945780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610363600480360360a08110156101b857600080fd5b6001600160a01b038235811692602081013590911691810190606081016040820135600160201b8111156101eb57600080fd5b8201836020820111156101fd57600080fd5b803590602001918460208302840111600160201b8311171561021e57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561026d57600080fd5b82018360208201111561027f57600080fd5b803590602001918460208302840111600160201b831117156102a057600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b8111156102ef57600080fd5b82018360208201111561030157600080fd5b803590602001918460018302840111600160201b8311171561032257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610740945050505050565b005b6104886004803603604081101561037b57600080fd5b810190602081018135600160201b81111561039557600080fd5b8201836020820111156103a757600080fd5b803590602001918460208302840111600160201b831117156103c857600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561041757600080fd5b82018360208201111561042957600080fd5b803590602001918460208302840111600160201b8311171561044a57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610a79945050505050565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156104c45781810151838201526020016104ac565b505050509050019250505060405180910390f35b610363600480360360408110156104ee57600080fd5b506001600160a01b0381351690602001351515610be0565b6100c36004803603602081101561051c57600080fd5b5035610ccf565b6100fc6004803603604081101561053957600080fd5b506001600160a01b0381358116916020013516610ce1565b610363600480360360a081101561056757600080fd5b6001600160a01b03823581169260208101359091169160408201359160608101359181019060a081016080820135600160201b8111156105a657600080fd5b8201836020820111156105b857600080fd5b803590602001918460018302840111600160201b831117156105d957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610d0f945050505050565b60006001600160a01b0383166106615760405162461bcd60e51b815260040180806020018281038252602981526020018061193c6029913960400191505060405180910390fd5b5060009081526001602090815260408083206001600160a01b03949094168352929052205490565b6001600160e01b03191660009081526020819052604090205460ff1690565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107345780601f1061070957610100808354040283529160200191610734565b820191906000526020600020905b81548152906001019060200180831161071757829003601f168201915b50505050509050919050565b81518351146107805760405162461bcd60e51b81526004018080602001828103825260268152602001806119656026913960400191505060405180910390fd5b6001600160a01b0384166107c55760405162461bcd60e51b8152600401808060200182810382526023815260200180611a616023913960400191505060405180910390fd5b6107cd610f1b565b6001600160a01b0316856001600160a01b031614806107f857506107f8856107f3610f1b565b610ce1565b6108335760405162461bcd60e51b815260040180806020018281038252603081526020018061198b6030913960400191505060405180910390fd5b600061083d610f1b565b905061084d818787878787610a71565b60005b845181101561094e57600085828151811061086757fe5b60200260200101519050600085838151811061087f57fe5b602002602001015190506108ec816040518060600160405280602881526020016119bb602891396001600086815260200190815260200160002060008d6001600160a01b03166001600160a01b0316815260200190815260200160002054610f1f9092919063ffffffff16565b60008381526001602090815260408083206001600160a01b038e811685529252808320939093558a16815220546109239082610fb6565b60009283526001602081815260408086206001600160a01b038d168752909152909320555001610850565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156109d45781810151838201526020016109bc565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015610a135781810151838201526020016109fb565b5050505090500194505050505060405180910390a4610a36818787878787611017565b610a715760405162461bcd60e51b8152600401808060200182810382526036815260200180611a846036913960400191505060405180910390fd5b505050505050565b60608151835114610abb5760405162461bcd60e51b81526004018080602001828103825260278152602001806119156027913960400191505060405180910390fd5b60608351604051908082528060200260200182016040528015610ae8578160200160208202803883390190505b50905060005b8451811015610bd85760006001600160a01b0316858281518110610b0e57fe5b60200260200101516001600160a01b03161415610b5c5760405162461bcd60e51b815260040180806020018281038252602f815260200180611aba602f913960400191505060405180910390fd5b60016000858381518110610b6c57fe5b602002602001015181526020019081526020016000206000868381518110610b9057fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002054828281518110610bc557fe5b6020908102919091010152600101610aee565b509392505050565b816001600160a01b0316610bf2610f1b565b6001600160a01b03161415610c385760405162461bcd60e51b81526004018080602001828103825260278152602001806119e36027913960400191505060405180910390fd5b8060026000610c45610f1b565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff191692151592909217909155610c89610f1b565b60408051841515815290516001600160a01b0392909216917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c319181900360200190a35050565b60009081526003602052604090205490565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205460ff1690565b6001600160a01b038416610d545760405162461bcd60e51b8152600401808060200182810382526023815260200180611a616023913960400191505060405180910390fd5b610d5c610f1b565b6001600160a01b0316856001600160a01b03161480610d825750610d82856107f3610f1b565b610dbd5760405162461bcd60e51b8152600401808060200182810382526027815260200180611a3a6027913960400191505060405180910390fd5b6000610dc7610f1b565b9050610de7818787610dd888611504565b610de188611504565b87610a71565b610e34836040518060600160405280602881526020016119bb6028913960008781526001602090815260408083206001600160a01b038d168452909152902054919063ffffffff610f1f16565b60008581526001602090815260408083206001600160a01b038b81168552925280832093909355871681522054610e6b9084610fb6565b60008581526001602090815260408083206001600160a01b03808b168086529184529382902094909455805188815291820187905280518a8416938616927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6292908290030190a4610ee0818787878787611548565b610a715760405162461bcd60e51b8152600401808060200182810382526030815260200180611a0a6030913960400191505060405180910390fd5b3390565b60008184841115610fae5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610f73578181015183820152602001610f5b565b50505050905090810190601f168015610fa05780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015611010576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b600080606061102e876001600160a01b031661190e565b61103d576001925050506114fa565b866001600160a01b031663bc197c8160e01b8a8a89898960405160240180866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b03168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b838110156110cf5781810151838201526020016110b7565b50505050905001848103835286818151815260200191508051906020019060200280838360005b8381101561110e5781810151838201526020016110f6565b50505050905001848103825285818151815260200191508051906020019080838360005b8381101561114a578181015183820152602001611132565b50505050905090810190601f1680156111775780820380516001836020036101000a031916815260200191505b5098505050505050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050506040518082805190602001908083835b602083106111e45780518252601f1990920191602091820191016111c5565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611246576040519150601f19603f3d011682016040523d82523d6000602084013e61124b565b606091505b5080519193509150158015906112885750805163bc197c8160e01b906020808401919081101561127a57600080fd5b50516001600160e01b031916145b15611298576001925050506114fa565b866001600160a01b0316639b49e33260e01b8a8a89898960405160240180866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b03168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b8381101561132a578181015183820152602001611312565b50505050905001848103835286818151815260200191508051906020019060200280838360005b83811015611369578181015183820152602001611351565b50505050905001848103825285818151815260200191508051906020019080838360005b838110156113a557818101518382015260200161138d565b50505050905090810190601f1680156113d25780820380516001836020036101000a031916815260200191505b5098505050505050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050506040518082805190602001908083835b6020831061143f5780518252601f199092019160209182019101611420565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146114a1576040519150601f19603f3d011682016040523d82523d6000602084013e6114a6565b606091505b5080519193509150158015906114e357508051634da4f19960e11b90602080840191908110156114d557600080fd5b50516001600160e01b031916145b156114f3576001925050506114fa565b6000925050505b9695505050505050565b60408051600180825281830190925260609182919060208083019080388339019050509050828160008151811061153757fe5b602090810291909101015292915050565b600080606061155f876001600160a01b031661190e565b61156e576001925050506114fa565b866001600160a01b031663f23a6e6160e01b8a8a89898960405160240180866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156116015781810151838201526020016115e9565b50505050905090810190601f16801561162e5780820380516001836020036101000a031916815260200191505b509650505050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050506040518082805190602001908083835b602083106116995780518252601f19909201916020918201910161167a565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146116fb576040519150601f19603f3d011682016040523d82523d6000602084013e611700565b606091505b50805191935091501580159061173d5750805163f23a6e6160e01b906020808401919081101561172f57600080fd5b50516001600160e01b031916145b1561174d576001925050506114fa565b866001600160a01b031663e78b332560e01b8a8a89898960405160240180866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156117e05781810151838201526020016117c8565b50505050905090810190601f16801561180d5780820380516001836020036101000a031916815260200191505b509650505050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050506040518082805190602001908083835b602083106118785780518252601f199092019160209182019101611859565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146118da576040519150601f19603f3d011682016040523d82523d6000602084013e6118df565b606091505b5080519193509150158015906114e35750805163e78b332560e01b90602080840191908110156114d557600080fd5b3b15159056fe4b495033373a206163636f756e747320616e6420696473206c656e677468206d69736d617463684b495033373a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734b495033373a2069647320616e6420616d6f756e7473206c656e677468206d69736d617463684b495033373a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f7665644b495033373a20696e73756666696369656e742062616c616e636520666f72207472616e736665724b495033373a2073657474696e6720617070726f76616c2073746174757320666f722073656c664b495033373a207472616e7366657220746f206e6f6e204b49503337526563656976657220696d706c656d656e7465724b495033373a2063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f7665644b495033373a207472616e7366657220746f20746865207a65726f20616464726573734b495033373a206261746368207472616e7366657220746f206e6f6e204b49503337526563656976657220696d706c656d656e7465724b495033373a2062617463682062616c616e636520717565727920666f7220746865207a65726f2061646472657373a265627a7a723158201410bd2d248df5d593d43b7212fca94fdf0023706fe963cb546c6005418a01fa64736f6c63430005110032";

type KIP37ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: KIP37ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class KIP37__factory extends ContractFactory {
  constructor(...args: KIP37ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "KIP37";
  }

  deploy(
    uri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<KIP37> {
    return super.deploy(uri, overrides || {}) as Promise<KIP37>;
  }
  getDeployTransaction(
    uri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(uri, overrides || {});
  }
  attach(address: string): KIP37 {
    return super.attach(address) as KIP37;
  }
  connect(signer: Signer): KIP37__factory {
    return super.connect(signer) as KIP37__factory;
  }
  static readonly contractName: "KIP37";
  public readonly contractName: "KIP37";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KIP37Interface {
    return new utils.Interface(_abi) as KIP37Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): KIP37 {
    return new Contract(address, _abi, signerOrProvider) as KIP37;
  }
}