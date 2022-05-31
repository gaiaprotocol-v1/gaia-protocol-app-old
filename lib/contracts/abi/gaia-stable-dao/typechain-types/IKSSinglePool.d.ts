import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IKSSinglePoolInterface extends utils.Interface {
    contractName: "IKSSinglePool";
    functions: {
        "balanceOf(address)": FunctionFragment;
        "claimReward()": FunctionFragment;
        "depositKct(uint256)": FunctionFragment;
        "exchangeRateStored()": FunctionFragment;
        "getCash()": FunctionFragment;
        "miningIndex()": FunctionFragment;
        "totalBorrows()": FunctionFragment;
        "totalReserves()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "userLastIndex(address)": FunctionFragment;
        "withdraw(uint256)": FunctionFragment;
        "withdrawByAmount(uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "claimReward", values?: undefined): string;
    encodeFunctionData(functionFragment: "depositKct", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "exchangeRateStored", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCash", values?: undefined): string;
    encodeFunctionData(functionFragment: "miningIndex", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalBorrows", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalReserves", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "userLastIndex", values: [string]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdrawByAmount", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositKct", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchangeRateStored", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "miningIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalBorrows", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalReserves", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userLastIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawByAmount", data: BytesLike): Result;
    events: {};
}
export interface IKSSinglePool extends BaseContract {
    contractName: "IKSSinglePool";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IKSSinglePoolInterface;
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
        balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        claimReward(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        depositKct(depositAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        exchangeRateStored(overrides?: CallOverrides): Promise<[BigNumber]>;
        getCash(overrides?: CallOverrides): Promise<[BigNumber]>;
        miningIndex(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalBorrows(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalReserves(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        userLastIndex(user: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        withdraw(withdrawAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawByAmount(withdrawTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    claimReward(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    depositKct(depositAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    exchangeRateStored(overrides?: CallOverrides): Promise<BigNumber>;
    getCash(overrides?: CallOverrides): Promise<BigNumber>;
    miningIndex(overrides?: CallOverrides): Promise<BigNumber>;
    totalBorrows(overrides?: CallOverrides): Promise<BigNumber>;
    totalReserves(overrides?: CallOverrides): Promise<BigNumber>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    userLastIndex(user: string, overrides?: CallOverrides): Promise<BigNumber>;
    withdraw(withdrawAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawByAmount(withdrawTokens: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        claimReward(overrides?: CallOverrides): Promise<void>;
        depositKct(depositAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        exchangeRateStored(overrides?: CallOverrides): Promise<BigNumber>;
        getCash(overrides?: CallOverrides): Promise<BigNumber>;
        miningIndex(overrides?: CallOverrides): Promise<BigNumber>;
        totalBorrows(overrides?: CallOverrides): Promise<BigNumber>;
        totalReserves(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        userLastIndex(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(withdrawAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        withdrawByAmount(withdrawTokens: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        claimReward(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        depositKct(depositAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        exchangeRateStored(overrides?: CallOverrides): Promise<BigNumber>;
        getCash(overrides?: CallOverrides): Promise<BigNumber>;
        miningIndex(overrides?: CallOverrides): Promise<BigNumber>;
        totalBorrows(overrides?: CallOverrides): Promise<BigNumber>;
        totalReserves(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        userLastIndex(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(withdrawAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawByAmount(withdrawTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        balanceOf(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimReward(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        depositKct(depositAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        exchangeRateStored(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCash(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        miningIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalBorrows(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalReserves(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        userLastIndex(user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw(withdrawAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawByAmount(withdrawTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IKSSinglePool.d.ts.map