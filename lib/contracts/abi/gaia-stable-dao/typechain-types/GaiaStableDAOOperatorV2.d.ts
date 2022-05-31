import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface GaiaStableDAOOperatorV2Interface extends utils.Interface {
    contractName: "GaiaStableDAOOperatorV2";
    functions: {
        "PRICEWITHGKRONOS()": FunctionFragment;
        "PRICEWITHGSUPERNOVA()": FunctionFragment;
        "PUBLICPRICE()": FunctionFragment;
        "addBurnedIds(uint16[])": FunctionFragment;
        "burnedTokensAmount()": FunctionFragment;
        "claimTokens(address)": FunctionFragment;
        "clearBurnedIds()": FunctionFragment;
        "devFund()": FunctionFragment;
        "gaiaKronos()": FunctionFragment;
        "gaiaSupernova()": FunctionFragment;
        "getBurnedIds()": FunctionFragment;
        "mintStableDAO(uint256,address)": FunctionFragment;
        "oUSDC()": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "stableDAO()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "updateDevFund(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "PRICEWITHGKRONOS", values?: undefined): string;
    encodeFunctionData(functionFragment: "PRICEWITHGSUPERNOVA", values?: undefined): string;
    encodeFunctionData(functionFragment: "PUBLICPRICE", values?: undefined): string;
    encodeFunctionData(functionFragment: "addBurnedIds", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "burnedTokensAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimTokens", values: [string]): string;
    encodeFunctionData(functionFragment: "clearBurnedIds", values?: undefined): string;
    encodeFunctionData(functionFragment: "devFund", values?: undefined): string;
    encodeFunctionData(functionFragment: "gaiaKronos", values?: undefined): string;
    encodeFunctionData(functionFragment: "gaiaSupernova", values?: undefined): string;
    encodeFunctionData(functionFragment: "getBurnedIds", values?: undefined): string;
    encodeFunctionData(functionFragment: "mintStableDAO", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "oUSDC", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "stableDAO", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "updateDevFund", values: [string]): string;
    decodeFunctionResult(functionFragment: "PRICEWITHGKRONOS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PRICEWITHGSUPERNOVA", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PUBLICPRICE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addBurnedIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burnedTokensAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "clearBurnedIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "devFund", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gaiaKronos", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gaiaSupernova", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBurnedIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintStableDAO", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oUSDC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stableDAO", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateDevFund", data: BytesLike): Result;
    events: {
        "OwnershipTransferred(address,address)": EventFragment;
        "UpdateDevFund(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateDevFund"): EventFragment;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export declare type UpdateDevFundEvent = TypedEvent<[string], {
    newDevFund: string;
}>;
export declare type UpdateDevFundEventFilter = TypedEventFilter<UpdateDevFundEvent>;
export interface GaiaStableDAOOperatorV2 extends BaseContract {
    contractName: "GaiaStableDAOOperatorV2";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GaiaStableDAOOperatorV2Interface;
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
        PRICEWITHGKRONOS(overrides?: CallOverrides): Promise<[BigNumber]>;
        PRICEWITHGSUPERNOVA(overrides?: CallOverrides): Promise<[BigNumber]>;
        PUBLICPRICE(overrides?: CallOverrides): Promise<[BigNumber]>;
        addBurnedIds(tokenIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        burnedTokensAmount(overrides?: CallOverrides): Promise<[BigNumber]>;
        claimTokens(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        clearBurnedIds(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        devFund(overrides?: CallOverrides): Promise<[string]>;
        gaiaKronos(overrides?: CallOverrides): Promise<[string]>;
        gaiaSupernova(overrides?: CallOverrides): Promise<[string]>;
        getBurnedIds(overrides?: CallOverrides): Promise<[number[]] & {
            ids: number[];
        }>;
        mintStableDAO(amount: BigNumberish, nft: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        oUSDC(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stableDAO(overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateDevFund(newDevFund: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    PRICEWITHGKRONOS(overrides?: CallOverrides): Promise<BigNumber>;
    PRICEWITHGSUPERNOVA(overrides?: CallOverrides): Promise<BigNumber>;
    PUBLICPRICE(overrides?: CallOverrides): Promise<BigNumber>;
    addBurnedIds(tokenIds: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    burnedTokensAmount(overrides?: CallOverrides): Promise<BigNumber>;
    claimTokens(token: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    clearBurnedIds(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    devFund(overrides?: CallOverrides): Promise<string>;
    gaiaKronos(overrides?: CallOverrides): Promise<string>;
    gaiaSupernova(overrides?: CallOverrides): Promise<string>;
    getBurnedIds(overrides?: CallOverrides): Promise<number[]>;
    mintStableDAO(amount: BigNumberish, nft: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    oUSDC(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stableDAO(overrides?: CallOverrides): Promise<string>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateDevFund(newDevFund: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        PRICEWITHGKRONOS(overrides?: CallOverrides): Promise<BigNumber>;
        PRICEWITHGSUPERNOVA(overrides?: CallOverrides): Promise<BigNumber>;
        PUBLICPRICE(overrides?: CallOverrides): Promise<BigNumber>;
        addBurnedIds(tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        burnedTokensAmount(overrides?: CallOverrides): Promise<BigNumber>;
        claimTokens(token: string, overrides?: CallOverrides): Promise<void>;
        clearBurnedIds(overrides?: CallOverrides): Promise<void>;
        devFund(overrides?: CallOverrides): Promise<string>;
        gaiaKronos(overrides?: CallOverrides): Promise<string>;
        gaiaSupernova(overrides?: CallOverrides): Promise<string>;
        getBurnedIds(overrides?: CallOverrides): Promise<number[]>;
        mintStableDAO(amount: BigNumberish, nft: string, overrides?: CallOverrides): Promise<void>;
        oUSDC(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        stableDAO(overrides?: CallOverrides): Promise<string>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        updateDevFund(newDevFund: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "UpdateDevFund(address)"(newDevFund?: null): UpdateDevFundEventFilter;
        UpdateDevFund(newDevFund?: null): UpdateDevFundEventFilter;
    };
    estimateGas: {
        PRICEWITHGKRONOS(overrides?: CallOverrides): Promise<BigNumber>;
        PRICEWITHGSUPERNOVA(overrides?: CallOverrides): Promise<BigNumber>;
        PUBLICPRICE(overrides?: CallOverrides): Promise<BigNumber>;
        addBurnedIds(tokenIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        burnedTokensAmount(overrides?: CallOverrides): Promise<BigNumber>;
        claimTokens(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        clearBurnedIds(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        devFund(overrides?: CallOverrides): Promise<BigNumber>;
        gaiaKronos(overrides?: CallOverrides): Promise<BigNumber>;
        gaiaSupernova(overrides?: CallOverrides): Promise<BigNumber>;
        getBurnedIds(overrides?: CallOverrides): Promise<BigNumber>;
        mintStableDAO(amount: BigNumberish, nft: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        oUSDC(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stableDAO(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateDevFund(newDevFund: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        PRICEWITHGKRONOS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PRICEWITHGSUPERNOVA(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PUBLICPRICE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addBurnedIds(tokenIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        burnedTokensAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimTokens(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        clearBurnedIds(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        devFund(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gaiaKronos(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gaiaSupernova(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBurnedIds(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mintStableDAO(amount: BigNumberish, nft: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        oUSDC(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stableDAO(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateDevFund(newDevFund: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=GaiaStableDAOOperatorV2.d.ts.map