import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { KIP37Receiver, KIP37ReceiverInterface } from "../KIP37Receiver";
export declare class KIP37Receiver__factory {
    static readonly abi: ({
        inputs: never[];
        payable: boolean;
        stateMutability: string;
        type: string;
        constant?: undefined;
        name?: undefined;
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
    })[];
    static createInterface(): KIP37ReceiverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP37Receiver;
}
//# sourceMappingURL=KIP37Receiver__factory.d.ts.map