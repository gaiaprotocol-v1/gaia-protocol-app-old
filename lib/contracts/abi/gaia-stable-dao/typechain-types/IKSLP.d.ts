import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IKSLPInterface extends utils.Interface {
    contractName: "IKSLP";
    functions: {
        "estimateNeg(address,uint256)": FunctionFragment;
        "factory()": FunctionFragment;
        "tokenA()": FunctionFragment;
        "tokenB()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "estimateNeg", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenA", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenB", values?: undefined): string;
    decodeFunctionResult(functionFragment: "estimateNeg", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenA", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenB", data: BytesLike): Result;
    events: {};
}
export interface IKSLP extends BaseContract {
    contractName: "IKSLP";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IKSLPInterface;
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
        estimateNeg(outToken: string, outAmount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            inAmount: BigNumber;
        }>;
        factory(overrides?: CallOverrides): Promise<[string]>;
        tokenA(overrides?: CallOverrides): Promise<[string]>;
        tokenB(overrides?: CallOverrides): Promise<[string]>;
    };
    estimateNeg(outToken: string, outAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    factory(overrides?: CallOverrides): Promise<string>;
    tokenA(overrides?: CallOverrides): Promise<string>;
    tokenB(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        estimateNeg(outToken: string, outAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<string>;
        tokenA(overrides?: CallOverrides): Promise<string>;
        tokenB(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        estimateNeg(outToken: string, outAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        tokenA(overrides?: CallOverrides): Promise<BigNumber>;
        tokenB(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        estimateNeg(outToken: string, outAmount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenA(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenB(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IKSLP.d.ts.map