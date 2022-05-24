import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { KIP37Pausable, KIP37PausableInterface } from "../KIP37Pausable";
export declare class KIP37Pausable__factory {
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
    static createInterface(): KIP37PausableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP37Pausable;
}
//# sourceMappingURL=KIP37Pausable__factory.d.ts.map