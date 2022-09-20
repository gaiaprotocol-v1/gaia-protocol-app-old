import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface GaiaStableDAOMinterInterface extends utils.Interface {
    functions: {
        "BUYBACKPRICE()": FunctionFragment;
        "MESH()": FunctionFragment;
        "MINTPRICE()": FunctionFragment;
        "USDC()": FunctionFragment;
        "addBurnedIds(uint16[])": FunctionFragment;
        "burnedTokensAmount()": FunctionFragment;
        "buyBack(uint256[])": FunctionFragment;
        "claimInterest()": FunctionFragment;
        "claimMeshReward()": FunctionFragment;
        "claimTokens(address)": FunctionFragment;
        "claimableInterest()": FunctionFragment;
        "clearBurnedIds()": FunctionFragment;
        "devFund()": FunctionFragment;
        "emergencyWithdraw(uint256)": FunctionFragment;
        "getBurnedIds()": FunctionFragment;
        "iUSDC()": FunctionFragment;
        "isBuyBackAlive()": FunctionFragment;
        "mintStableDAO(uint256)": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "stableDAO()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "updateDevFund(address)": FunctionFragment;
        "updateIsBuyBackAlive(bool)": FunctionFragment;
        "updateTotalSupply(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "BUYBACKPRICE" | "MESH" | "MINTPRICE" | "USDC" | "addBurnedIds" | "burnedTokensAmount" | "buyBack" | "claimInterest" | "claimMeshReward" | "claimTokens" | "claimableInterest" | "clearBurnedIds" | "devFund" | "emergencyWithdraw" | "getBurnedIds" | "iUSDC" | "isBuyBackAlive" | "mintStableDAO" | "owner" | "renounceOwnership" | "stableDAO" | "totalSupply" | "transferOwnership" | "updateDevFund" | "updateIsBuyBackAlive" | "updateTotalSupply"): FunctionFragment;
    encodeFunctionData(functionFragment: "BUYBACKPRICE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MESH", values?: undefined): string;
    encodeFunctionData(functionFragment: "MINTPRICE", values?: undefined): string;
    encodeFunctionData(functionFragment: "USDC", values?: undefined): string;
    encodeFunctionData(functionFragment: "addBurnedIds", values: [PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "burnedTokensAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "buyBack", values: [PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "claimInterest", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimMeshReward", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimTokens", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "claimableInterest", values?: undefined): string;
    encodeFunctionData(functionFragment: "clearBurnedIds", values?: undefined): string;
    encodeFunctionData(functionFragment: "devFund", values?: undefined): string;
    encodeFunctionData(functionFragment: "emergencyWithdraw", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getBurnedIds", values?: undefined): string;
    encodeFunctionData(functionFragment: "iUSDC", values?: undefined): string;
    encodeFunctionData(functionFragment: "isBuyBackAlive", values?: undefined): string;
    encodeFunctionData(functionFragment: "mintStableDAO", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "stableDAO", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "updateDevFund", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "updateIsBuyBackAlive", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "updateTotalSupply", values: [PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "BUYBACKPRICE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MESH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MINTPRICE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "USDC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addBurnedIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burnedTokensAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "buyBack", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimInterest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimMeshReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimableInterest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "clearBurnedIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "devFund", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emergencyWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBurnedIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "iUSDC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isBuyBackAlive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintStableDAO", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stableDAO", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateDevFund", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateIsBuyBackAlive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateTotalSupply", data: BytesLike): Result;
    events: {
        "BuyBack(address,uint256)": EventFragment;
        "ClaimInterest(uint256,uint256)": EventFragment;
        "EmergencyWithdraw(uint256,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "UpdateDevFund(address)": EventFragment;
        "UpdateIsBuyBackAlive(bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BuyBack"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClaimInterest"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EmergencyWithdraw"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateDevFund"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateIsBuyBackAlive"): EventFragment;
}
export interface BuyBackEventObject {
    user: string;
    tokenId: BigNumber;
}
export declare type BuyBackEvent = TypedEvent<[string, BigNumber], BuyBackEventObject>;
export declare type BuyBackEventFilter = TypedEventFilter<BuyBackEvent>;
export interface ClaimInterestEventObject {
    claimedUSDC: BigNumber;
    claimedMESH: BigNumber;
}
export declare type ClaimInterestEvent = TypedEvent<[
    BigNumber,
    BigNumber
], ClaimInterestEventObject>;
export declare type ClaimInterestEventFilter = TypedEventFilter<ClaimInterestEvent>;
export interface EmergencyWithdrawEventObject {
    claimedUSDC: BigNumber;
    claimedMESH: BigNumber;
}
export declare type EmergencyWithdrawEvent = TypedEvent<[
    BigNumber,
    BigNumber
], EmergencyWithdrawEventObject>;
export declare type EmergencyWithdrawEventFilter = TypedEventFilter<EmergencyWithdrawEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface UpdateDevFundEventObject {
    newDevFund: string;
}
export declare type UpdateDevFundEvent = TypedEvent<[string], UpdateDevFundEventObject>;
export declare type UpdateDevFundEventFilter = TypedEventFilter<UpdateDevFundEvent>;
export interface UpdateIsBuyBackAliveEventObject {
    status: boolean;
}
export declare type UpdateIsBuyBackAliveEvent = TypedEvent<[
    boolean
], UpdateIsBuyBackAliveEventObject>;
export declare type UpdateIsBuyBackAliveEventFilter = TypedEventFilter<UpdateIsBuyBackAliveEvent>;
export interface GaiaStableDAOMinter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GaiaStableDAOMinterInterface;
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
        MESH(overrides?: CallOverrides): Promise<[string]>;
        MINTPRICE(overrides?: CallOverrides): Promise<[BigNumber]>;
        USDC(overrides?: CallOverrides): Promise<[string]>;
        addBurnedIds(tokenIds: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        burnedTokensAmount(overrides?: CallOverrides): Promise<[BigNumber]>;
        buyBack(ids: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claimInterest(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claimMeshReward(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claimTokens(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claimableInterest(overrides?: CallOverrides): Promise<[BigNumber]>;
        clearBurnedIds(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        devFund(overrides?: CallOverrides): Promise<[string]>;
        emergencyWithdraw(iUSDCAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getBurnedIds(overrides?: CallOverrides): Promise<[number[]] & {
            ids: number[];
        }>;
        iUSDC(overrides?: CallOverrides): Promise<[string]>;
        isBuyBackAlive(overrides?: CallOverrides): Promise<[boolean]>;
        mintStableDAO(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stableDAO(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateDevFund(newDevFund: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateIsBuyBackAlive(status: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateTotalSupply(ts: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    BUYBACKPRICE(overrides?: CallOverrides): Promise<BigNumber>;
    MESH(overrides?: CallOverrides): Promise<string>;
    MINTPRICE(overrides?: CallOverrides): Promise<BigNumber>;
    USDC(overrides?: CallOverrides): Promise<string>;
    addBurnedIds(tokenIds: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    burnedTokensAmount(overrides?: CallOverrides): Promise<BigNumber>;
    buyBack(ids: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimInterest(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimMeshReward(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimTokens(token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimableInterest(overrides?: CallOverrides): Promise<BigNumber>;
    clearBurnedIds(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    devFund(overrides?: CallOverrides): Promise<string>;
    emergencyWithdraw(iUSDCAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getBurnedIds(overrides?: CallOverrides): Promise<number[]>;
    iUSDC(overrides?: CallOverrides): Promise<string>;
    isBuyBackAlive(overrides?: CallOverrides): Promise<boolean>;
    mintStableDAO(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stableDAO(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateDevFund(newDevFund: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateIsBuyBackAlive(status: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateTotalSupply(ts: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        BUYBACKPRICE(overrides?: CallOverrides): Promise<BigNumber>;
        MESH(overrides?: CallOverrides): Promise<string>;
        MINTPRICE(overrides?: CallOverrides): Promise<BigNumber>;
        USDC(overrides?: CallOverrides): Promise<string>;
        addBurnedIds(tokenIds: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        burnedTokensAmount(overrides?: CallOverrides): Promise<BigNumber>;
        buyBack(ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        claimInterest(overrides?: CallOverrides): Promise<void>;
        claimMeshReward(overrides?: CallOverrides): Promise<BigNumber>;
        claimTokens(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        claimableInterest(overrides?: CallOverrides): Promise<BigNumber>;
        clearBurnedIds(overrides?: CallOverrides): Promise<void>;
        devFund(overrides?: CallOverrides): Promise<string>;
        emergencyWithdraw(iUSDCAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getBurnedIds(overrides?: CallOverrides): Promise<number[]>;
        iUSDC(overrides?: CallOverrides): Promise<string>;
        isBuyBackAlive(overrides?: CallOverrides): Promise<boolean>;
        mintStableDAO(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        stableDAO(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        updateDevFund(newDevFund: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        updateIsBuyBackAlive(status: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        updateTotalSupply(ts: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "BuyBack(address,uint256)"(user?: null, tokenId?: null): BuyBackEventFilter;
        BuyBack(user?: null, tokenId?: null): BuyBackEventFilter;
        "ClaimInterest(uint256,uint256)"(claimedUSDC?: null, claimedMESH?: null): ClaimInterestEventFilter;
        ClaimInterest(claimedUSDC?: null, claimedMESH?: null): ClaimInterestEventFilter;
        "EmergencyWithdraw(uint256,uint256)"(claimedUSDC?: null, claimedMESH?: null): EmergencyWithdrawEventFilter;
        EmergencyWithdraw(claimedUSDC?: null, claimedMESH?: null): EmergencyWithdrawEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "UpdateDevFund(address)"(newDevFund?: null): UpdateDevFundEventFilter;
        UpdateDevFund(newDevFund?: null): UpdateDevFundEventFilter;
        "UpdateIsBuyBackAlive(bool)"(status?: null): UpdateIsBuyBackAliveEventFilter;
        UpdateIsBuyBackAlive(status?: null): UpdateIsBuyBackAliveEventFilter;
    };
    estimateGas: {
        BUYBACKPRICE(overrides?: CallOverrides): Promise<BigNumber>;
        MESH(overrides?: CallOverrides): Promise<BigNumber>;
        MINTPRICE(overrides?: CallOverrides): Promise<BigNumber>;
        USDC(overrides?: CallOverrides): Promise<BigNumber>;
        addBurnedIds(tokenIds: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        burnedTokensAmount(overrides?: CallOverrides): Promise<BigNumber>;
        buyBack(ids: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimInterest(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimMeshReward(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimTokens(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimableInterest(overrides?: CallOverrides): Promise<BigNumber>;
        clearBurnedIds(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        devFund(overrides?: CallOverrides): Promise<BigNumber>;
        emergencyWithdraw(iUSDCAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getBurnedIds(overrides?: CallOverrides): Promise<BigNumber>;
        iUSDC(overrides?: CallOverrides): Promise<BigNumber>;
        isBuyBackAlive(overrides?: CallOverrides): Promise<BigNumber>;
        mintStableDAO(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stableDAO(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateDevFund(newDevFund: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateIsBuyBackAlive(status: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateTotalSupply(ts: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        BUYBACKPRICE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MESH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MINTPRICE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        USDC(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addBurnedIds(tokenIds: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        burnedTokensAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        buyBack(ids: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimInterest(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimMeshReward(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimTokens(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimableInterest(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        clearBurnedIds(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        devFund(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        emergencyWithdraw(iUSDCAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getBurnedIds(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        iUSDC(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isBuyBackAlive(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mintStableDAO(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stableDAO(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateDevFund(newDevFund: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateIsBuyBackAlive(status: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateTotalSupply(ts: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=GaiaStableDAOMinter.d.ts.map