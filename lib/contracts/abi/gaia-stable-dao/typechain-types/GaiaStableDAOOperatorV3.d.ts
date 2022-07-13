import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface GaiaStableDAOOperatorV3Interface extends utils.Interface {
    contractName: "GaiaStableDAOOperatorV3";
    functions: {
        "BUYBACKPRICE()": FunctionFragment;
        "PRICEWITHGKRONOS()": FunctionFragment;
        "PRICEWITHGSUPERNOVA()": FunctionFragment;
        "PUBLICPRICE()": FunctionFragment;
        "addBurnedIds(uint16[])": FunctionFragment;
        "burnedTokensAmount()": FunctionFragment;
        "buyBack(uint256[])": FunctionFragment;
        "claimTokens(address)": FunctionFragment;
        "clearBurnedIds()": FunctionFragment;
        "gaiaKronos()": FunctionFragment;
        "gaiaSupernova()": FunctionFragment;
        "getBurnedIds()": FunctionFragment;
        "isBuyBackAlive()": FunctionFragment;
        "mintStableDAO(uint256,address)": FunctionFragment;
        "oUSDC()": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "stableDAO()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "updateIsBuyBackAlive(bool)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "BUYBACKPRICE", values?: undefined): string;
    encodeFunctionData(functionFragment: "PRICEWITHGKRONOS", values?: undefined): string;
    encodeFunctionData(functionFragment: "PRICEWITHGSUPERNOVA", values?: undefined): string;
    encodeFunctionData(functionFragment: "PUBLICPRICE", values?: undefined): string;
    encodeFunctionData(functionFragment: "addBurnedIds", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "burnedTokensAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "buyBack", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "claimTokens", values: [string]): string;
    encodeFunctionData(functionFragment: "clearBurnedIds", values?: undefined): string;
    encodeFunctionData(functionFragment: "gaiaKronos", values?: undefined): string;
    encodeFunctionData(functionFragment: "gaiaSupernova", values?: undefined): string;
    encodeFunctionData(functionFragment: "getBurnedIds", values?: undefined): string;
    encodeFunctionData(functionFragment: "isBuyBackAlive", values?: undefined): string;
    encodeFunctionData(functionFragment: "mintStableDAO", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "oUSDC", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "stableDAO", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "updateIsBuyBackAlive", values: [boolean]): string;
    decodeFunctionResult(functionFragment: "BUYBACKPRICE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PRICEWITHGKRONOS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PRICEWITHGSUPERNOVA", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PUBLICPRICE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addBurnedIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burnedTokensAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "buyBack", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "clearBurnedIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gaiaKronos", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gaiaSupernova", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBurnedIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isBuyBackAlive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintStableDAO", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oUSDC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stableDAO", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateIsBuyBackAlive", data: BytesLike): Result;
    events: {
        "BuyBack(address,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "UpdateIsBuyBackAlive(bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BuyBack"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateIsBuyBackAlive"): EventFragment;
}
export declare type BuyBackEvent = TypedEvent<[
    string,
    BigNumber
], {
    user: string;
    id: BigNumber;
}>;
export declare type BuyBackEventFilter = TypedEventFilter<BuyBackEvent>;
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export declare type UpdateIsBuyBackAliveEvent = TypedEvent<[
    boolean
], {
    status: boolean;
}>;
export declare type UpdateIsBuyBackAliveEventFilter = TypedEventFilter<UpdateIsBuyBackAliveEvent>;
export interface GaiaStableDAOOperatorV3 extends BaseContract {
    contractName: "GaiaStableDAOOperatorV3";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GaiaStableDAOOperatorV3Interface;
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
        BUYBACKPRICE(overrides?: CallOverrides): Promise<[BigNumber]>;
        PRICEWITHGKRONOS(overrides?: CallOverrides): Promise<[BigNumber]>;
        PRICEWITHGSUPERNOVA(overrides?: CallOverrides): Promise<[BigNumber]>;
        PUBLICPRICE(overrides?: CallOverrides): Promise<[BigNumber]>;
        addBurnedIds(tokenIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        burnedTokensAmount(overrides?: CallOverrides): Promise<[BigNumber]>;
        buyBack(ids: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimTokens(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        clearBurnedIds(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        gaiaKronos(overrides?: CallOverrides): Promise<[string]>;
        gaiaSupernova(overrides?: CallOverrides): Promise<[string]>;
        getBurnedIds(overrides?: CallOverrides): Promise<[number[]] & {
            ids: number[];
        }>;
        isBuyBackAlive(overrides?: CallOverrides): Promise<[boolean]>;
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
        updateIsBuyBackAlive(status: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    BUYBACKPRICE(overrides?: CallOverrides): Promise<BigNumber>;
    PRICEWITHGKRONOS(overrides?: CallOverrides): Promise<BigNumber>;
    PRICEWITHGSUPERNOVA(overrides?: CallOverrides): Promise<BigNumber>;
    PUBLICPRICE(overrides?: CallOverrides): Promise<BigNumber>;
    addBurnedIds(tokenIds: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    burnedTokensAmount(overrides?: CallOverrides): Promise<BigNumber>;
    buyBack(ids: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimTokens(token: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    clearBurnedIds(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    gaiaKronos(overrides?: CallOverrides): Promise<string>;
    gaiaSupernova(overrides?: CallOverrides): Promise<string>;
    getBurnedIds(overrides?: CallOverrides): Promise<number[]>;
    isBuyBackAlive(overrides?: CallOverrides): Promise<boolean>;
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
    updateIsBuyBackAlive(status: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        BUYBACKPRICE(overrides?: CallOverrides): Promise<BigNumber>;
        PRICEWITHGKRONOS(overrides?: CallOverrides): Promise<BigNumber>;
        PRICEWITHGSUPERNOVA(overrides?: CallOverrides): Promise<BigNumber>;
        PUBLICPRICE(overrides?: CallOverrides): Promise<BigNumber>;
        addBurnedIds(tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        burnedTokensAmount(overrides?: CallOverrides): Promise<BigNumber>;
        buyBack(ids: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        claimTokens(token: string, overrides?: CallOverrides): Promise<void>;
        clearBurnedIds(overrides?: CallOverrides): Promise<void>;
        gaiaKronos(overrides?: CallOverrides): Promise<string>;
        gaiaSupernova(overrides?: CallOverrides): Promise<string>;
        getBurnedIds(overrides?: CallOverrides): Promise<number[]>;
        isBuyBackAlive(overrides?: CallOverrides): Promise<boolean>;
        mintStableDAO(amount: BigNumberish, nft: string, overrides?: CallOverrides): Promise<void>;
        oUSDC(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        stableDAO(overrides?: CallOverrides): Promise<string>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        updateIsBuyBackAlive(status: boolean, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "BuyBack(address,uint256)"(user?: string | null, id?: BigNumberish | null): BuyBackEventFilter;
        BuyBack(user?: string | null, id?: BigNumberish | null): BuyBackEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "UpdateIsBuyBackAlive(bool)"(status?: null): UpdateIsBuyBackAliveEventFilter;
        UpdateIsBuyBackAlive(status?: null): UpdateIsBuyBackAliveEventFilter;
    };
    estimateGas: {
        BUYBACKPRICE(overrides?: CallOverrides): Promise<BigNumber>;
        PRICEWITHGKRONOS(overrides?: CallOverrides): Promise<BigNumber>;
        PRICEWITHGSUPERNOVA(overrides?: CallOverrides): Promise<BigNumber>;
        PUBLICPRICE(overrides?: CallOverrides): Promise<BigNumber>;
        addBurnedIds(tokenIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        burnedTokensAmount(overrides?: CallOverrides): Promise<BigNumber>;
        buyBack(ids: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimTokens(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        clearBurnedIds(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        gaiaKronos(overrides?: CallOverrides): Promise<BigNumber>;
        gaiaSupernova(overrides?: CallOverrides): Promise<BigNumber>;
        getBurnedIds(overrides?: CallOverrides): Promise<BigNumber>;
        isBuyBackAlive(overrides?: CallOverrides): Promise<BigNumber>;
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
        updateIsBuyBackAlive(status: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        BUYBACKPRICE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PRICEWITHGKRONOS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PRICEWITHGSUPERNOVA(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PUBLICPRICE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addBurnedIds(tokenIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        burnedTokensAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        buyBack(ids: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimTokens(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        clearBurnedIds(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        gaiaKronos(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gaiaSupernova(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBurnedIds(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isBuyBackAlive(overrides?: CallOverrides): Promise<PopulatedTransaction>;
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
        updateIsBuyBackAlive(status: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=GaiaStableDAOOperatorV3.d.ts.map