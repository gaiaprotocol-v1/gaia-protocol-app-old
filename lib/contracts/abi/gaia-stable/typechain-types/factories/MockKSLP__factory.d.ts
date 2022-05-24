import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockKSLP, MockKSLPInterface } from "../MockKSLP";
declare type MockKSLPConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockKSLP__factory extends ContractFactory {
    constructor(...args: MockKSLPConstructorParams);
    deploy(_factory: string, _tokenA: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockKSLP>;
    getDeployTransaction(_factory: string, _tokenA: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockKSLP;
    connect(signer: Signer): MockKSLP__factory;
    static readonly contractName: "MockKSLP";
    readonly contractName: "MockKSLP";
    static readonly bytecode = "0x6080604052600280546001600160a01b031916905534801561002057600080fd5b506040516102a23803806102a28339818101604052604081101561004357600080fd5b508051602090910151600080546001600160a01b039384166001600160a01b031991821617909155600180549390921692169190911790556102188061008a6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630fc63d10146100515780635f64b55b14610075578063c07598421461007d578063c45a0155146100bb575b600080fd5b6100596100c3565b604080516001600160a01b039092168252519081900360200190f35b6100596100d2565b6100a96004803603604081101561009357600080fd5b506001600160a01b0381351690602001356100e1565b60408051918252519081900360200190f35b6100596101d4565b6001546001600160a01b031681565b6002546001600160a01b031681565b6000805460408051600481526024810182526020810180516001600160e01b0316625517a160e51b178152915181516060946001600160a01b03169382918083835b602083106101425780518252601f199092019160209182019101610123565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855afa9150503d80600081146101a2576040519150601f19603f3d011682016040523d82523d6000602084013e6101a7565b606091505b5091505060008180602001905160208110156101c257600080fd5b50516064940293909304949350505050565b6000546001600160a01b03168156fea265627a7a72315820f9586772113df8ccffa3bbd0f5f1272daaff80b207e8b301ebbc867bdba0956e64736f6c63430005110032";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        constant?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        constant: boolean;
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
        payable: boolean;
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): MockKSLPInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockKSLP;
}
export {};
//# sourceMappingURL=MockKSLP__factory.d.ts.map