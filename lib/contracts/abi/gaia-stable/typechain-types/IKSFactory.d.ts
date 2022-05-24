import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IKSFactoryInterface extends utils.Interface {
    contractName: "IKSFactory";
    functions: {
        "exchangeKlayNeg(address,uint256,address[])": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "exchangeKlayNeg", values: [string, BigNumberish, string[]]): string;
    decodeFunctionResult(functionFragment: "exchangeKlayNeg", data: BytesLike): Result;
    events: {};
}
export interface IKSFactory extends BaseContract {
    contractName: "IKSFactory";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IKSFactoryInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        exchangeKlayNeg(outToken: string, outAmount: BigNumberish, path: string[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    exchangeKlayNeg(outToken: string, outAmount: BigNumberish, path: string[], overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        exchangeKlayNeg(outToken: string, outAmount: BigNumberish, path: string[], overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        exchangeKlayNeg(outToken: string, outAmount: BigNumberish, path: string[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        exchangeKlayNeg(outToken: string, outAmount: BigNumberish, path: string[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IKSFactory.d.ts.map