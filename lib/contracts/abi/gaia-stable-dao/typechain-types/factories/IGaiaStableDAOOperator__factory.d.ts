import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IGaiaStableDAOOperator, IGaiaStableDAOOperatorInterface } from "../IGaiaStableDAOOperator";
export declare class IGaiaStableDAOOperator__factory {
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
    })[];
    static createInterface(): IGaiaStableDAOOperatorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IGaiaStableDAOOperator;
}
//# sourceMappingURL=IGaiaStableDAOOperator__factory.d.ts.map