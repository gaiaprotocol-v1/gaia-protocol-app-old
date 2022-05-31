import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface GaiaStableDAOOperatorInterface extends utils.Interface {
    contractName: "GaiaStableDAOOperator";
    functions: {
        "BUYBACKPRICE()": FunctionFragment;
        "KSP()": FunctionFragment;
        "KUSDT()": FunctionFragment;
        "KUSDT_KLAY_LP()": FunctionFragment;
        "KUSDT_KS_POOL()": FunctionFragment;
        "PUBLICPRICE()": FunctionFragment;
        "burnedTokensAmount()": FunctionFragment;
        "buyBack(uint256[])": FunctionFragment;
        "claimInterest()": FunctionFragment;
        "claimKSPReward()": FunctionFragment;
        "claimTokens(address)": FunctionFragment;
        "claimableInterest()": FunctionFragment;
        "claimableKSPReward()": FunctionFragment;
        "devFund()": FunctionFragment;
        "emergencyWithdraw(uint256)": FunctionFragment;
        "estimateNeededKlayForZapping(uint256)": FunctionFragment;
        "gaiaKronos()": FunctionFragment;
        "gaiaSupernova()": FunctionFragment;
        "getBurnedIds()": FunctionFragment;
        "isListedII(address)": FunctionFragment;
        "mintStableDAO(uint256,address)": FunctionFragment;
        "mintStableDAOAsII(uint256,address[])": FunctionFragment;
        "mintedAmountWithGaiaKronos(address)": FunctionFragment;
        "mintedAmountWithGaiaSupernova(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setIIList(address[],bool[])": FunctionFragment;
        "setPriceForII(uint256)": FunctionFragment;
        "setWhitelist(address[],uint256[])": FunctionFragment;
        "stableDAO()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "updateDevFund(address)": FunctionFragment;
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
    encodeFunctionData(functionFragment: "claimInterest", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimKSPReward", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimTokens", values: [string]): string;
    encodeFunctionData(functionFragment: "claimableInterest", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimableKSPReward", values?: undefined): string;
    encodeFunctionData(functionFragment: "devFund", values?: undefined): string;
    encodeFunctionData(functionFragment: "emergencyWithdraw", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "estimateNeededKlayForZapping", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "gaiaKronos", values?: undefined): string;
    encodeFunctionData(functionFragment: "gaiaSupernova", values?: undefined): string;
    encodeFunctionData(functionFragment: "getBurnedIds", values?: undefined): string;
    encodeFunctionData(functionFragment: "isListedII", values: [string]): string;
    encodeFunctionData(functionFragment: "mintStableDAO", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "mintStableDAOAsII", values: [BigNumberish, string[]]): string;
    encodeFunctionData(functionFragment: "mintedAmountWithGaiaKronos", values: [string]): string;
    encodeFunctionData(functionFragment: "mintedAmountWithGaiaSupernova", values: [string]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setIIList", values: [string[], boolean[]]): string;
    encodeFunctionData(functionFragment: "setPriceForII", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setWhitelist", values: [string[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "stableDAO", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "updateDevFund", values: [string]): string;
    encodeFunctionData(functionFragment: "whitelistedAmount", values: [string]): string;
    decodeFunctionResult(functionFragment: "BUYBACKPRICE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "KSP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "KUSDT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "KUSDT_KLAY_LP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "KUSDT_KS_POOL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PUBLICPRICE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burnedTokensAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "buyBack", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimInterest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimKSPReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimableInterest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimableKSPReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "devFund", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emergencyWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateNeededKlayForZapping", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gaiaKronos", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gaiaSupernova", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBurnedIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isListedII", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintStableDAO", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintStableDAOAsII", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintedAmountWithGaiaKronos", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintedAmountWithGaiaSupernova", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setIIList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPriceForII", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stableDAO", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateDevFund", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelistedAmount", data: BytesLike): Result;
    events: {
        "BuyBack(address,uint256)": EventFragment;
        "ClaimInterest(uint256,uint256)": EventFragment;
        "ClaimKSPReward(uint256)": EventFragment;
        "EmergencyWithdraw(uint256,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "SetPriceForII(uint256)": EventFragment;
        "UpdateDevFund(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BuyBack"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClaimInterest"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClaimKSPReward"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EmergencyWithdraw"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
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
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
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
export interface GaiaStableDAOOperator extends BaseContract {
    contractName: "GaiaStableDAOOperator";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GaiaStableDAOOperatorInterface;
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
        claimInterest(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimKSPReward(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimTokens(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimableInterest(overrides?: CallOverrides): Promise<[BigNumber]>;
        claimableKSPReward(overrides?: CallOverrides): Promise<[BigNumber]>;
        devFund(overrides?: CallOverrides): Promise<[string]>;
        emergencyWithdraw(iKUSDTAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        estimateNeededKlayForZapping(totalKUSDTAmount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            neededKlay: BigNumber;
        }>;
        gaiaKronos(overrides?: CallOverrides): Promise<[string]>;
        gaiaSupernova(overrides?: CallOverrides): Promise<[string]>;
        getBurnedIds(overrides?: CallOverrides): Promise<[number[]]>;
        isListedII(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        mintStableDAO(amount: BigNumberish, nft: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mintStableDAOAsII(amount: BigNumberish, path: string[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mintedAmountWithGaiaKronos(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        mintedAmountWithGaiaSupernova(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setIIList(iis: string[], eligible: boolean[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPriceForII(_priceForII: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setWhitelist(users: string[], tickets: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stableDAO(overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateDevFund(newDevFund: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        whitelistedAmount(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
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
    claimInterest(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimKSPReward(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimTokens(token: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimableInterest(overrides?: CallOverrides): Promise<BigNumber>;
    claimableKSPReward(overrides?: CallOverrides): Promise<BigNumber>;
    devFund(overrides?: CallOverrides): Promise<string>;
    emergencyWithdraw(iKUSDTAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    estimateNeededKlayForZapping(totalKUSDTAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    gaiaKronos(overrides?: CallOverrides): Promise<string>;
    gaiaSupernova(overrides?: CallOverrides): Promise<string>;
    getBurnedIds(overrides?: CallOverrides): Promise<number[]>;
    isListedII(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    mintStableDAO(amount: BigNumberish, nft: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mintStableDAOAsII(amount: BigNumberish, path: string[], overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mintedAmountWithGaiaKronos(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    mintedAmountWithGaiaSupernova(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setIIList(iis: string[], eligible: boolean[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPriceForII(_priceForII: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setWhitelist(users: string[], tickets: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stableDAO(overrides?: CallOverrides): Promise<string>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateDevFund(newDevFund: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    whitelistedAmount(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        BUYBACKPRICE(overrides?: CallOverrides): Promise<BigNumber>;
        KSP(overrides?: CallOverrides): Promise<string>;
        KUSDT(overrides?: CallOverrides): Promise<string>;
        KUSDT_KLAY_LP(overrides?: CallOverrides): Promise<string>;
        KUSDT_KS_POOL(overrides?: CallOverrides): Promise<string>;
        PUBLICPRICE(overrides?: CallOverrides): Promise<BigNumber>;
        burnedTokensAmount(overrides?: CallOverrides): Promise<BigNumber>;
        buyBack(ids: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        claimInterest(overrides?: CallOverrides): Promise<void>;
        claimKSPReward(overrides?: CallOverrides): Promise<void>;
        claimTokens(token: string, overrides?: CallOverrides): Promise<void>;
        claimableInterest(overrides?: CallOverrides): Promise<BigNumber>;
        claimableKSPReward(overrides?: CallOverrides): Promise<BigNumber>;
        devFund(overrides?: CallOverrides): Promise<string>;
        emergencyWithdraw(iKUSDTAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        estimateNeededKlayForZapping(totalKUSDTAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        gaiaKronos(overrides?: CallOverrides): Promise<string>;
        gaiaSupernova(overrides?: CallOverrides): Promise<string>;
        getBurnedIds(overrides?: CallOverrides): Promise<number[]>;
        isListedII(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        mintStableDAO(amount: BigNumberish, nft: string, overrides?: CallOverrides): Promise<void>;
        mintStableDAOAsII(amount: BigNumberish, path: string[], overrides?: CallOverrides): Promise<void>;
        mintedAmountWithGaiaKronos(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        mintedAmountWithGaiaSupernova(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setIIList(iis: string[], eligible: boolean[], overrides?: CallOverrides): Promise<void>;
        setPriceForII(_priceForII: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setWhitelist(users: string[], tickets: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        stableDAO(overrides?: CallOverrides): Promise<string>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        updateDevFund(newDevFund: string, overrides?: CallOverrides): Promise<void>;
        whitelistedAmount(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
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
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
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
        claimInterest(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimKSPReward(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimTokens(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimableInterest(overrides?: CallOverrides): Promise<BigNumber>;
        claimableKSPReward(overrides?: CallOverrides): Promise<BigNumber>;
        devFund(overrides?: CallOverrides): Promise<BigNumber>;
        emergencyWithdraw(iKUSDTAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        estimateNeededKlayForZapping(totalKUSDTAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        gaiaKronos(overrides?: CallOverrides): Promise<BigNumber>;
        gaiaSupernova(overrides?: CallOverrides): Promise<BigNumber>;
        getBurnedIds(overrides?: CallOverrides): Promise<BigNumber>;
        isListedII(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        mintStableDAO(amount: BigNumberish, nft: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mintStableDAOAsII(amount: BigNumberish, path: string[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mintedAmountWithGaiaKronos(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        mintedAmountWithGaiaSupernova(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setIIList(iis: string[], eligible: boolean[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPriceForII(_priceForII: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setWhitelist(users: string[], tickets: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stableDAO(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateDevFund(newDevFund: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        whitelistedAmount(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
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
        claimInterest(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimKSPReward(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimTokens(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimableInterest(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimableKSPReward(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        devFund(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        emergencyWithdraw(iKUSDTAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        estimateNeededKlayForZapping(totalKUSDTAmount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gaiaKronos(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gaiaSupernova(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBurnedIds(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isListedII(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mintStableDAO(amount: BigNumberish, nft: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mintStableDAOAsII(amount: BigNumberish, path: string[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mintedAmountWithGaiaKronos(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mintedAmountWithGaiaSupernova(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setIIList(iis: string[], eligible: boolean[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPriceForII(_priceForII: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setWhitelist(users: string[], tickets: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stableDAO(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateDevFund(newDevFund: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        whitelistedAmount(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=GaiaStableDAOOperator.d.ts.map