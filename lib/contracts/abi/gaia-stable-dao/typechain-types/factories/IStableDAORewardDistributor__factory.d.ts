import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IStableDAORewardDistributor, IStableDAORewardDistributorInterface } from "../IStableDAORewardDistributor";
export declare class IStableDAORewardDistributor__factory {
    static readonly abi: {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
    }[];
    static createInterface(): IStableDAORewardDistributorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IStableDAORewardDistributor;
}
//# sourceMappingURL=IStableDAORewardDistributor__factory.d.ts.map