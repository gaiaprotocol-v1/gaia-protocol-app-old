import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { KIP17MetadataMintable, KIP17MetadataMintableInterface } from "../KIP17MetadataMintable";
export declare class KIP17MetadataMintable__factory {
    static readonly abi: ({
        inputs: never[];
        payable: boolean;
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        constant?: undefined;
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
        payable?: undefined;
        stateMutability?: undefined;
        constant?: undefined;
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
        anonymous?: undefined;
    })[];
    static createInterface(): KIP17MetadataMintableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP17MetadataMintable;
}
//# sourceMappingURL=KIP17MetadataMintable__factory.d.ts.map