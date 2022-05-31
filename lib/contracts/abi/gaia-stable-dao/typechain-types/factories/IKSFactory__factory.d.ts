import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IKSFactory, IKSFactoryInterface } from "../IKSFactory";
export declare class IKSFactory__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IKSFactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IKSFactory;
}
//# sourceMappingURL=IKSFactory__factory.d.ts.map