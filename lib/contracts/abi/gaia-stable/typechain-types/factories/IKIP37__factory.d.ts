import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IKIP37, IKIP37Interface } from "../IKIP37";
export declare class IKIP37__factory {
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
    static createInterface(): IKIP37Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IKIP37;
}
//# sourceMappingURL=IKIP37__factory.d.ts.map