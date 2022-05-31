import { Signer, ContractFactory, Overrides, BytesLike } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { KIP13InterfacesSupported, KIP13InterfacesSupportedInterface } from "../KIP13InterfacesSupported";
declare type KIP13InterfacesSupportedConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class KIP13InterfacesSupported__factory extends ContractFactory {
    constructor(...args: KIP13InterfacesSupportedConstructorParams);
    deploy(interfaceIds: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<KIP13InterfacesSupported>;
    getDeployTransaction(interfaceIds: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): KIP13InterfacesSupported;
    connect(signer: Signer): KIP13InterfacesSupported__factory;
    static readonly contractName: "KIP13InterfacesSupported";
    readonly contractName: "KIP13InterfacesSupported";
    static readonly bytecode = "0x608060405234801561001057600080fd5b506040516102ad3803806102ad8339818101604052602081101561003357600080fd5b810190808051604051939291908464010000000082111561005357600080fd5b90830190602082018581111561006857600080fd5b825186602082028301116401000000008211171561008557600080fd5b82525081516020918201928201910280838360005b838110156100b257818101518382015260200161009a565b505050509050016040525050506100d56301ffc9a760e01b61011260201b60201c565b60005b815181101561010b576101038282815181106100f057fe5b602002602001015161011260201b60201c565b6001016100d8565b5050610180565b6001600160e01b0319808216141561015b5760405162461bcd60e51b815260040180806020018281038252602e81526020018061027f602e913960400191505060405180910390fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b60f18061018e6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c806301ffc9a7146037578063d81037cd14606f575b600080fd5b605b60048036036020811015604b57600080fd5b50356001600160e01b0319166092565b604080519115158252519081900360200190f35b607560b1565b604080516001600160e01b03199092168252519081900360200190f35b6001600160e01b03191660009081526020819052604090205460ff1690565b6301ffc9a760e01b8156fea265627a7a7231582087fbb5ca115a2250c83d2317b25f1290602a6139bd4c6947ee562767b1b81cd164736f6c634300051100324b49503133496e7465726661636573537570706f727465643a20696e76616c696420696e74657266616365206964";
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
    static createInterface(): KIP13InterfacesSupportedInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP13InterfacesSupported;
}
export {};
//# sourceMappingURL=KIP13InterfacesSupported__factory.d.ts.map