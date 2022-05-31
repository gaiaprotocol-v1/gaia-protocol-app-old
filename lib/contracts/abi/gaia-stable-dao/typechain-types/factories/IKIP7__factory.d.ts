import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IKIP7, IKIP7Interface } from "../IKIP7";
export declare class IKIP7__factory {
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
    static createInterface(): IKIP7Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IKIP7;
}
//# sourceMappingURL=IKIP7__factory.d.ts.map