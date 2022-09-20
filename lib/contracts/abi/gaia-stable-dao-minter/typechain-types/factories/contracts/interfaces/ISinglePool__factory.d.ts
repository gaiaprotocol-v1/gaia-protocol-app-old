import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISinglePool, ISinglePoolInterface } from "../../../contracts/interfaces/ISinglePool";
export declare class ISinglePool__factory {
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
    static createInterface(): ISinglePoolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISinglePool;
}
//# sourceMappingURL=ISinglePool__factory.d.ts.map