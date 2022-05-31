import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IGaiaStableDAO, IGaiaStableDAOInterface } from "../IGaiaStableDAO";
export declare class IGaiaStableDAO__factory {
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
    static createInterface(): IGaiaStableDAOInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IGaiaStableDAO;
}
//# sourceMappingURL=IGaiaStableDAO__factory.d.ts.map