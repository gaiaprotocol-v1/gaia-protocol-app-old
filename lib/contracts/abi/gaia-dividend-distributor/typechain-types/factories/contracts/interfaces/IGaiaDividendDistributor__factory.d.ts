import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IGaiaDividendDistributor, IGaiaDividendDistributorInterface } from "../../../contracts/interfaces/IGaiaDividendDistributor";
export declare class IGaiaDividendDistributor__factory {
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
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): IGaiaDividendDistributorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IGaiaDividendDistributor;
}
//# sourceMappingURL=IGaiaDividendDistributor__factory.d.ts.map