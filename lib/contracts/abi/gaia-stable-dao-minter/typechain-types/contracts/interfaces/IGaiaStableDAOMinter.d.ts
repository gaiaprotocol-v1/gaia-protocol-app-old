import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface IGaiaStableDAOMinterInterface extends utils.Interface {
    functions: {
        "BUYBACKPRICE()": FunctionFragment;
        "MESH()": FunctionFragment;
        "MINTPRICE()": FunctionFragment;
        "USDC()": FunctionFragment;
        "burnedTokensAmount()": FunctionFragment;
        "buyBack(uint256[])": FunctionFragment;
        "claimMeshReward()": FunctionFragment;
        "claimableInterest()": FunctionFragment;
        "devFund()": FunctionFragment;
        "getBurnedIds()": FunctionFragment;
        "iUSDC()": FunctionFragment;
        "isBuyBackAlive()": FunctionFragment;
        "mintStableDAO(uint256)": FunctionFragment;
        "stableDAO()": FunctionFragment;
        "totalSupply()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "BUYBACKPRICE" | "MESH" | "MINTPRICE" | "USDC" | "burnedTokensAmount" | "buyBack" | "claimMeshReward" | "claimableInterest" | "devFund" | "getBurnedIds" | "iUSDC" | "isBuyBackAlive" | "mintStableDAO" | "stableDAO" | "totalSupply"): FunctionFragment;
    encodeFunctionData(functionFragment: "BUYBACKPRICE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MESH", values?: undefined): string;
    encodeFunctionData(functionFragment: "MINTPRICE", values?: undefined): string;
    encodeFunctionData(functionFragment: "USDC", values?: undefined): string;
    encodeFunctionData(functionFragment: "burnedTokensAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "buyBack", values: [PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "claimMeshReward", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimableInterest", values?: undefined): string;
    encodeFunctionData(functionFragment: "devFund", values?: undefined): string;
    encodeFunctionData(functionFragment: "getBurnedIds", values?: undefined): string;
    encodeFunctionData(functionFragment: "iUSDC", values?: undefined): string;
    encodeFunctionData(functionFragment: "isBuyBackAlive", values?: undefined): string;
    encodeFunctionData(functionFragment: "mintStableDAO", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "stableDAO", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    decodeFunctionResult(functionFragment: "BUYBACKPRICE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MESH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MINTPRICE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "USDC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burnedTokensAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "buyBack", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimMeshReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimableInterest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "devFund", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBurnedIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "iUSDC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isBuyBackAlive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintStableDAO", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stableDAO", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    events: {
        "BuyBack(address,uint256)": EventFragment;
        "ClaimInterest(uint256,uint256)": EventFragment;
        "EmergencyWithdraw(uint256,uint256)": EventFragment;
        "UpdateDevFund(address)": EventFragment;
        "UpdateIsBuyBackAlive(bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BuyBack"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClaimInterest"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EmergencyWithdraw"): EventFragment;
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
export interface IGaiaStableDAOMinter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IGaiaStableDAOMinterInterface;
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
        burnedTokensAmount(overrides?: CallOverrides): Promise<[BigNumber]>;
        buyBack(ids: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claimMeshReward(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claimableInterest(overrides?: CallOverrides): Promise<[BigNumber]>;
        devFund(overrides?: CallOverrides): Promise<[string]>;
        getBurnedIds(overrides?: CallOverrides): Promise<[number[]] & {
            ids: number[];
        }>;
        iUSDC(overrides?: CallOverrides): Promise<[string]>;
        isBuyBackAlive(overrides?: CallOverrides): Promise<[boolean]>;
        mintStableDAO(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stableDAO(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    BUYBACKPRICE(overrides?: CallOverrides): Promise<BigNumber>;
    MESH(overrides?: CallOverrides): Promise<string>;
    MINTPRICE(overrides?: CallOverrides): Promise<BigNumber>;
    USDC(overrides?: CallOverrides): Promise<string>;
    burnedTokensAmount(overrides?: CallOverrides): Promise<BigNumber>;
    buyBack(ids: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimMeshReward(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimableInterest(overrides?: CallOverrides): Promise<BigNumber>;
    devFund(overrides?: CallOverrides): Promise<string>;
    getBurnedIds(overrides?: CallOverrides): Promise<number[]>;
    iUSDC(overrides?: CallOverrides): Promise<string>;
    isBuyBackAlive(overrides?: CallOverrides): Promise<boolean>;
    mintStableDAO(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stableDAO(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        BUYBACKPRICE(overrides?: CallOverrides): Promise<BigNumber>;
        MESH(overrides?: CallOverrides): Promise<string>;
        MINTPRICE(overrides?: CallOverrides): Promise<BigNumber>;
        USDC(overrides?: CallOverrides): Promise<string>;
        burnedTokensAmount(overrides?: CallOverrides): Promise<BigNumber>;
        buyBack(ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        claimMeshReward(overrides?: CallOverrides): Promise<BigNumber>;
        claimableInterest(overrides?: CallOverrides): Promise<BigNumber>;
        devFund(overrides?: CallOverrides): Promise<string>;
        getBurnedIds(overrides?: CallOverrides): Promise<number[]>;
        iUSDC(overrides?: CallOverrides): Promise<string>;
        isBuyBackAlive(overrides?: CallOverrides): Promise<boolean>;
        mintStableDAO(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        stableDAO(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "BuyBack(address,uint256)"(user?: null, tokenId?: null): BuyBackEventFilter;
        BuyBack(user?: null, tokenId?: null): BuyBackEventFilter;
        "ClaimInterest(uint256,uint256)"(claimedUSDC?: null, claimedMESH?: null): ClaimInterestEventFilter;
        ClaimInterest(claimedUSDC?: null, claimedMESH?: null): ClaimInterestEventFilter;
        "EmergencyWithdraw(uint256,uint256)"(claimedUSDC?: null, claimedMESH?: null): EmergencyWithdrawEventFilter;
        EmergencyWithdraw(claimedUSDC?: null, claimedMESH?: null): EmergencyWithdrawEventFilter;
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
        burnedTokensAmount(overrides?: CallOverrides): Promise<BigNumber>;
        buyBack(ids: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimMeshReward(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimableInterest(overrides?: CallOverrides): Promise<BigNumber>;
        devFund(overrides?: CallOverrides): Promise<BigNumber>;
        getBurnedIds(overrides?: CallOverrides): Promise<BigNumber>;
        iUSDC(overrides?: CallOverrides): Promise<BigNumber>;
        isBuyBackAlive(overrides?: CallOverrides): Promise<BigNumber>;
        mintStableDAO(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stableDAO(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        BUYBACKPRICE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MESH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MINTPRICE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        USDC(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burnedTokensAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        buyBack(ids: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimMeshReward(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimableInterest(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        devFund(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBurnedIds(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        iUSDC(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isBuyBackAlive(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mintStableDAO(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stableDAO(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IGaiaStableDAOMinter.d.ts.map