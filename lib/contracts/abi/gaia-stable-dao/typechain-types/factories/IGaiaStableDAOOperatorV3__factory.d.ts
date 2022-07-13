import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IGaiaStableDAOOperatorV3, IGaiaStableDAOOperatorV3Interface } from "../IGaiaStableDAOOperatorV3";
export declare class IGaiaStableDAOOperatorV3__factory {
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
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: never[];
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
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): IGaiaStableDAOOperatorV3Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IGaiaStableDAOOperatorV3;
}
//# sourceMappingURL=IGaiaStableDAOOperatorV3__factory.d.ts.map