import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { KIP13, KIP13Interface } from "../KIP13";
export declare class KIP13__factory {
    static readonly abi: ({
        inputs: never[];
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
    static createInterface(): KIP13Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP13;
}
//# sourceMappingURL=KIP13__factory.d.ts.map