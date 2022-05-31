import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IGaiaStableDAOOperatorInterface extends utils.Interface {
    contractName: "IGaiaStableDAOOperator";
    functions: {
        "BUYBACKPRICE()": FunctionFragment;
        "KSP()": FunctionFragment;
        "KUSDT()": FunctionFragment;
        "KUSDT_KLAY_LP()": FunctionFragment;
        "KUSDT_KS_POOL()": FunctionFragment;
        "PUBLICPRICE()": FunctionFragment;
        "burnedTokensAmount()": FunctionFragment;
        "buyBack(uint256[])": FunctionFragment;
        "devFund()": FunctionFragment;
        "estimateNeededKlayForZapping(uint256)": FunctionFragment;
        "gaiaKronos()": FunctionFragment;
        "gaiaSupernova()": FunctionFragment;
        "getBurnedIds()": FunctionFragment;
        "isListedII(address)": FunctionFragment;
        "mintStableDAO(uint256,address)": FunctionFragment;
        "mintStableDAOAsII(uint256,address[])": FunctionFragment;
        "mintedAmountWithGaiaKronos(address)": FunctionFragment;
        "mintedAmountWithGaiaSupernova(address)": FunctionFragment;
        "stableDAO()": FunctionFragment;
        "whitelistedAmount(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "BUYBACKPRICE", values?: undefined): string;
    encodeFunctionData(functionFragment: "KSP", values?: undefined): string;
    encodeFunctionData(functionFragment: "KUSDT", values?: undefined): string;
    encodeFunctionData(functionFragment: "KUSDT_KLAY_LP", values?: undefined): string;
    encodeFunctionData(functionFragment: "KUSDT_KS_POOL", values?: undefined): string;
    encodeFunctionData(functionFragment: "PUBLICPRICE", values?: undefined): string;
    encodeFunctionData(functionFragment: "burnedTokensAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "buyBack", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "devFund", values?: undefined): string;
    encodeFunctionData(functionFragment: "estimateNeededKlayForZapping", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "gaiaKronos", values?: undefined): string;
    encodeFunctionData(functionFragment: "gaiaSupernova", values?: undefined): string;
    encodeFunctionData(functionFragment: "getBurnedIds", values?: undefined): string;
    encodeFunctionData(functionFragment: "isListedII", values: [string]): string;
    encodeFunctionData(functionFragment: "mintStableDAO", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "mintStableDAOAsII", values: [BigNumberish, string[]]): string;
    encodeFunctionData(functionFragment: "mintedAmountWithGaiaKronos", values: [string]): string;
    encodeFunctionData(functionFragment: "mintedAmountWithGaiaSupernova", values: [string]): string;
    encodeFunctionData(functionFragment: "stableDAO", values?: undefined): string;
    encodeFunctionData(functionFragment: "whitelistedAmount", values: [string]): string;
    decodeFunctionResult(functionFragment: "BUYBACKPRICE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "KSP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "KUSDT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "KUSDT_KLAY_LP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "KUSDT_KS_POOL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PUBLICPRICE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burnedTokensAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "buyBack", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "devFund", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateNeededKlayForZapping", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gaiaKronos", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gaiaSupernova", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBurnedIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isListedII", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintStableDAO", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintStableDAOAsII", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintedAmountWithGaiaKronos", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintedAmountWithGaiaSupernova", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stableDAO", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelistedAmount", data: BytesLike): Result;
    events: {
        "BuyBack(address,uint256)": EventFragment;
        "ClaimInterest(uint256,uint256)": EventFragment;
        "ClaimKSPReward(uint256)": EventFragment;
        "EmergencyWithdraw(uint256,uint256)": EventFragment;
        "SetPriceForII(uint256)": EventFragment;
        "UpdateDevFund(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BuyBack"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClaimInterest"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClaimKSPReward"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EmergencyWithdraw"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetPriceForII"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateDevFund"): EventFragment;
}
export declare type BuyBackEvent = TypedEvent<[
    string,
    BigNumber
], {
    user: string;
    id: BigNumber;
}>;
export declare type BuyBackEventFilter = TypedEventFilter<BuyBackEvent>;
export declare type ClaimInterestEvent = TypedEvent<[
    BigNumber,
    BigNumber
], {
    amountOfKUSDT: BigNumber;
    amountOfKSP: BigNumber;
}>;
export declare type ClaimInterestEventFilter = TypedEventFilter<ClaimInterestEvent>;
export declare type ClaimKSPRewardEvent = TypedEvent<[
    BigNumber
], {
    amountOfKSP: BigNumber;
}>;
export declare type ClaimKSPRewardEventFilter = TypedEventFilter<ClaimKSPRewardEvent>;
export declare type EmergencyWithdrawEvent = TypedEvent<[
    BigNumber,
    BigNumber
], {
    amountOfKUSDT: BigNumber;
    amountOfKSP: BigNumber;
}>;
export declare type EmergencyWithdrawEventFilter = TypedEventFilter<EmergencyWithdrawEvent>;
export declare type SetPriceForIIEvent = TypedEvent<[
    BigNumber
], {
    priceForII: BigNumber;
}>;
export declare type SetPriceForIIEventFilter = TypedEventFilter<SetPriceForIIEvent>;
export declare type UpdateDevFundEvent = TypedEvent<[string], {
    newDevFund: string;
}>;
export declare type UpdateDevFundEventFilter = TypedEventFilter<UpdateDevFundEvent>;
export interface IGaiaStableDAOOperator extends BaseContract {
    contractName: "IGaiaStableDAOOperator";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IGaiaStableDAOOperatorInterface;
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
        KSP(overrides?: CallOverrides): Promise<[string]>;
        KUSDT(overrides?: CallOverrides): Promise<[string]>;
        KUSDT_KLAY_LP(overrides?: CallOverrides): Promise<[string]>;
        KUSDT_KS_POOL(overrides?: CallOverrides): Promise<[string]>;
        PUBLICPRICE(overrides?: CallOverrides): Promise<[BigNumber]>;
        burnedTokensAmount(overrides?: CallOverrides): Promise<[BigNumber]>;
        buyBack(ids: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        devFund(overrides?: CallOverrides): Promise<[string]>;
        estimateNeededKlayForZapping(totalKUSDTAmount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            neededKlay: BigNumber;
        }>;
        gaiaKronos(overrides?: CallOverrides): Promise<[string]>;
        gaiaSupernova(overrides?: CallOverrides): Promise<[string]>;
        getBurnedIds(overrides?: CallOverrides): Promise<[number[]]>;
        isListedII(ii: string, overrides?: CallOverrides): Promise<[boolean]>;
        mintStableDAO(amount: BigNumberish, nft: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mintStableDAOAsII(amount: BigNumberish, path: string[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mintedAmountWithGaiaKronos(user: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        mintedAmountWithGaiaSupernova(user: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        stableDAO(overrides?: CallOverrides): Promise<[string]>;
        whitelistedAmount(user: string, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    BUYBACKPRICE(overrides?: CallOverrides): Promise<BigNumber>;
    KSP(overrides?: CallOverrides): Promise<string>;
    KUSDT(overrides?: CallOverrides): Promise<string>;
    KUSDT_KLAY_LP(overrides?: CallOverrides): Promise<string>;
    KUSDT_KS_POOL(overrides?: CallOverrides): Promise<string>;
    PUBLICPRICE(overrides?: CallOverrides): Promise<BigNumber>;
    burnedTokensAmount(overrides?: CallOverrides): Promise<BigNumber>;
    buyBack(ids: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    devFund(overrides?: CallOverrides): Promise<string>;
    estimateNeededKlayForZapping(totalKUSDTAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    gaiaKronos(overrides?: CallOverrides): Promise<string>;
    gaiaSupernova(overrides?: CallOverrides): Promise<string>;
    getBurnedIds(overrides?: CallOverrides): Promise<number[]>;
    isListedII(ii: string, overrides?: CallOverrides): Promise<boolean>;
    mintStableDAO(amount: BigNumberish, nft: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mintStableDAOAsII(amount: BigNumberish, path: string[], overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mintedAmountWithGaiaKronos(user: string, overrides?: CallOverrides): Promise<BigNumber>;
    mintedAmountWithGaiaSupernova(user: string, overrides?: CallOverrides): Promise<BigNumber>;
    stableDAO(overrides?: CallOverrides): Promise<string>;
    whitelistedAmount(user: string, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        BUYBACKPRICE(overrides?: CallOverrides): Promise<BigNumber>;
        KSP(overrides?: CallOverrides): Promise<string>;
        KUSDT(overrides?: CallOverrides): Promise<string>;
        KUSDT_KLAY_LP(overrides?: CallOverrides): Promise<string>;
        KUSDT_KS_POOL(overrides?: CallOverrides): Promise<string>;
        PUBLICPRICE(overrides?: CallOverrides): Promise<BigNumber>;
        burnedTokensAmount(overrides?: CallOverrides): Promise<BigNumber>;
        buyBack(ids: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        devFund(overrides?: CallOverrides): Promise<string>;
        estimateNeededKlayForZapping(totalKUSDTAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        gaiaKronos(overrides?: CallOverrides): Promise<string>;
        gaiaSupernova(overrides?: CallOverrides): Promise<string>;
        getBurnedIds(overrides?: CallOverrides): Promise<number[]>;
        isListedII(ii: string, overrides?: CallOverrides): Promise<boolean>;
        mintStableDAO(amount: BigNumberish, nft: string, overrides?: CallOverrides): Promise<void>;
        mintStableDAOAsII(amount: BigNumberish, path: string[], overrides?: CallOverrides): Promise<void>;
        mintedAmountWithGaiaKronos(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        mintedAmountWithGaiaSupernova(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        stableDAO(overrides?: CallOverrides): Promise<string>;
        whitelistedAmount(user: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "BuyBack(address,uint256)"(user?: string | null, id?: BigNumberish | null): BuyBackEventFilter;
        BuyBack(user?: string | null, id?: BigNumberish | null): BuyBackEventFilter;
        "ClaimInterest(uint256,uint256)"(amountOfKUSDT?: null, amountOfKSP?: null): ClaimInterestEventFilter;
        ClaimInterest(amountOfKUSDT?: null, amountOfKSP?: null): ClaimInterestEventFilter;
        "ClaimKSPReward(uint256)"(amountOfKSP?: null): ClaimKSPRewardEventFilter;
        ClaimKSPReward(amountOfKSP?: null): ClaimKSPRewardEventFilter;
        "EmergencyWithdraw(uint256,uint256)"(amountOfKUSDT?: null, amountOfKSP?: null): EmergencyWithdrawEventFilter;
        EmergencyWithdraw(amountOfKUSDT?: null, amountOfKSP?: null): EmergencyWithdrawEventFilter;
        "SetPriceForII(uint256)"(priceForII?: null): SetPriceForIIEventFilter;
        SetPriceForII(priceForII?: null): SetPriceForIIEventFilter;
        "UpdateDevFund(address)"(newDevFund?: null): UpdateDevFundEventFilter;
        UpdateDevFund(newDevFund?: null): UpdateDevFundEventFilter;
    };
    estimateGas: {
        BUYBACKPRICE(overrides?: CallOverrides): Promise<BigNumber>;
        KSP(overrides?: CallOverrides): Promise<BigNumber>;
        KUSDT(overrides?: CallOverrides): Promise<BigNumber>;
        KUSDT_KLAY_LP(overrides?: CallOverrides): Promise<BigNumber>;
        KUSDT_KS_POOL(overrides?: CallOverrides): Promise<BigNumber>;
        PUBLICPRICE(overrides?: CallOverrides): Promise<BigNumber>;
        burnedTokensAmount(overrides?: CallOverrides): Promise<BigNumber>;
        buyBack(ids: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        devFund(overrides?: CallOverrides): Promise<BigNumber>;
        estimateNeededKlayForZapping(totalKUSDTAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        gaiaKronos(overrides?: CallOverrides): Promise<BigNumber>;
        gaiaSupernova(overrides?: CallOverrides): Promise<BigNumber>;
        getBurnedIds(overrides?: CallOverrides): Promise<BigNumber>;
        isListedII(ii: string, overrides?: CallOverrides): Promise<BigNumber>;
        mintStableDAO(amount: BigNumberish, nft: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mintStableDAOAsII(amount: BigNumberish, path: string[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mintedAmountWithGaiaKronos(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        mintedAmountWithGaiaSupernova(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        stableDAO(overrides?: CallOverrides): Promise<BigNumber>;
        whitelistedAmount(user: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        BUYBACKPRICE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        KSP(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        KUSDT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        KUSDT_KLAY_LP(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        KUSDT_KS_POOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PUBLICPRICE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burnedTokensAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        buyBack(ids: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        devFund(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        estimateNeededKlayForZapping(totalKUSDTAmount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gaiaKronos(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gaiaSupernova(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBurnedIds(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isListedII(ii: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mintStableDAO(amount: BigNumberish, nft: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mintStableDAOAsII(amount: BigNumberish, path: string[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mintedAmountWithGaiaKronos(user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mintedAmountWithGaiaSupernova(user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stableDAO(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        whitelistedAmount(user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IGaiaStableDAOOperator.d.ts.map