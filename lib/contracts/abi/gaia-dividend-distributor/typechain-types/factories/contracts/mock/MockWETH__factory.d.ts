import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { MockWETH, MockWETHInterface } from "../../../contracts/mock/MockWETH";
declare type MockWETHConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockWETH__factory extends ContractFactory {
    constructor(...args: MockWETHConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<MockWETH>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): MockWETH;
    connect(signer: Signer): MockWETH__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b506040518060400160405280600881526020016709adec6d6ae8aa8960c31b8152506040518060400160405280600581526020016409aae8aa8960db1b81525081600390816200006291906200011f565b5060046200007182826200011f565b505050620001eb565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620000a557607f821691505b602082108103620000c657634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200011a57600081815260208120601f850160051c81016020861015620000f55750805b601f850160051c820191505b81811015620001165782815560010162000101565b5050505b505050565b81516001600160401b038111156200013b576200013b6200007a565b62000153816200014c845462000090565b84620000cc565b602080601f8311600181146200018b5760008415620001725750858301515b600019600386901b1c1916600185901b17855562000116565b600085815260208120601f198616915b82811015620001bc578886015182559484019460019091019084016200019b565b5085821015620001db5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610c0e80620001fb6000396000f3fe6080604052600436106100c65760003560e01c8063395093511161007f578063a457c2d711610059578063a457c2d71461021b578063a9059cbb1461023b578063d0e30db01461025b578063dd62ed3e1461026357600080fd5b806339509351146101b057806370a08231146101d057806395d89b411461020657600080fd5b806306fdde03146100da578063095ea7b31461010557806318160ddd1461013557806323b872dd146101545780632e1a7d4d14610174578063313ce5671461019457600080fd5b366100d5576100d3610283565b005b600080fd5b3480156100e657600080fd5b506100ef61028f565b6040516100fc9190610a14565b60405180910390f35b34801561011157600080fd5b50610125610120366004610a85565b610321565b60405190151581526020016100fc565b34801561014157600080fd5b506002545b6040519081526020016100fc565b34801561016057600080fd5b5061012561016f366004610aaf565b610339565b34801561018057600080fd5b506100d361018f366004610aeb565b61035d565b3480156101a057600080fd5b50604051601281526020016100fc565b3480156101bc57600080fd5b506101256101cb366004610a85565b610398565b3480156101dc57600080fd5b506101466101eb366004610b04565b6001600160a01b031660009081526020819052604090205490565b34801561021257600080fd5b506100ef6103ba565b34801561022757600080fd5b50610125610236366004610a85565b6103c9565b34801561024757600080fd5b50610125610256366004610a85565b610449565b6100d3610283565b34801561026f57600080fd5b5061014661027e366004610b26565b610457565b61028d3334610482565b565b60606003805461029e90610b59565b80601f01602080910402602001604051908101604052809291908181526020018280546102ca90610b59565b80156103175780601f106102ec57610100808354040283529160200191610317565b820191906000526020600020905b8154815290600101906020018083116102fa57829003601f168201915b5050505050905090565b60003361032f818585610561565b5060019392505050565b600033610347858285610686565b610352858585610700565b506001949350505050565b61036733826108ce565b604051339082156108fc029083906000818181858888f19350505050158015610394573d6000803e3d6000fd5b5050565b60003361032f8185856103ab8383610457565b6103b59190610ba9565b610561565b60606004805461029e90610b59565b600033816103d78286610457565b90508381101561043c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b6103528286868403610561565b60003361032f818585610700565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0382166104d85760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610433565b80600260008282546104ea9190610ba9565b90915550506001600160a01b03821660009081526020819052604081208054839290610517908490610ba9565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b0383166105c35760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610433565b6001600160a01b0382166106245760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610433565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b60006106928484610457565b905060001981146106fa57818110156106ed5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610433565b6106fa8484848403610561565b50505050565b6001600160a01b0383166107645760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610433565b6001600160a01b0382166107c65760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610433565b6001600160a01b0383166000908152602081905260409020548181101561083e5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610433565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610875908490610ba9565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108c191815260200190565b60405180910390a36106fa565b6001600160a01b03821661092e5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610433565b6001600160a01b038216600090815260208190526040902054818110156109a25760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610433565b6001600160a01b03831660009081526020819052604081208383039055600280548492906109d1908490610bc1565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610679565b600060208083528351808285015260005b81811015610a4157858101830151858201604001528201610a25565b81811115610a53576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610a8057600080fd5b919050565b60008060408385031215610a9857600080fd5b610aa183610a69565b946020939093013593505050565b600080600060608486031215610ac457600080fd5b610acd84610a69565b9250610adb60208501610a69565b9150604084013590509250925092565b600060208284031215610afd57600080fd5b5035919050565b600060208284031215610b1657600080fd5b610b1f82610a69565b9392505050565b60008060408385031215610b3957600080fd5b610b4283610a69565b9150610b5060208401610a69565b90509250929050565b600181811c90821680610b6d57607f821691505b602082108103610b8d57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610bbc57610bbc610b93565b500190565b600082821015610bd357610bd3610b93565b50039056fea26469706673582212206781554f207ba4a26389383f69fcb3be7e6ffa0fc8300655aedc154c852f5c9264736f6c634300080f0033";
    static readonly abi: ({
        inputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    })[];
    static createInterface(): MockWETHInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockWETH;
}
export {};
//# sourceMappingURL=MockWETH__factory.d.ts.map