import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IKSSinglePool, IKSSinglePoolInterface } from "../IKSSinglePool";
export declare class IKSSinglePool__factory {
    static readonly abi: {
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
    }[];
    static createInterface(): IKSSinglePoolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IKSSinglePool;
}
//# sourceMappingURL=IKSSinglePool__factory.d.ts.map