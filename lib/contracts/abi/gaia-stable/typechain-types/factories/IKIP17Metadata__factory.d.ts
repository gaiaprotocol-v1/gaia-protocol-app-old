import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IKIP17Metadata, IKIP17MetadataInterface } from "../IKIP17Metadata";
export declare class IKIP17Metadata__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        constant?: undefined;
        outputs?: undefined;
        payable?: undefined;
        stateMutability?: undefined;
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
    static createInterface(): IKIP17MetadataInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IKIP17Metadata;
}
//# sourceMappingURL=IKIP17Metadata__factory.d.ts.map