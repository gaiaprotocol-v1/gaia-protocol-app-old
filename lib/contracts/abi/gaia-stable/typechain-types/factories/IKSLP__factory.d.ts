import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IKSLP, IKSLPInterface } from "../IKSLP";
export declare class IKSLP__factory {
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
    static createInterface(): IKSLPInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IKSLP;
}
//# sourceMappingURL=IKSLP__factory.d.ts.map