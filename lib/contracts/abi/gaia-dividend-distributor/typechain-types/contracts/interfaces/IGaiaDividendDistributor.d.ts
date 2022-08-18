import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export declare namespace IGaiaDividendDistributor {
    type RewardStruct = {
        token: PromiseOrValue<string>;
        amount: PromiseOrValue<BigNumberish>;
        merkleRoot: PromiseOrValue<BytesLike>;
    };
    type RewardStructOutput = [string, BigNumber, string] & {
        token: string;
        amount: BigNumber;
        merkleRoot: string;
    };
}
export interface IGaiaDividendDistributorInterface extends utils.Interface {
    functions: {
        "WETH()": FunctionFragment;
        "claimRewards(uint256[],uint256[],bytes32[][])": FunctionFragment;
        "depositReward(address,uint256,bytes32)": FunctionFragment;
        "isRewardCollected(address,uint256)": FunctionFragment;
        "rewards(uint256)": FunctionFragment;
        "rewardsCount()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "WETH" | "claimRewards" | "depositReward" | "isRewardCollected" | "rewards" | "rewardsCount"): FunctionFragment;
    encodeFunctionData(functionFragment: "WETH", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimRewards", values: [
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BytesLike>[][]
    ]): string;
    encodeFunctionData(functionFragment: "depositReward", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "isRewardCollected", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "rewards", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "rewardsCount", values?: undefined): string;
    decodeFunctionResult(functionFragment: "WETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isRewardCollected", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardsCount", data: BytesLike): Result;
    events: {
        "Claim(address,uint256,address,uint256)": EventFragment;
        "Distribute(address,uint256,bytes32,uint256)": EventFragment;
        "EmergencyWithdraw(address,uint256)": EventFragment;
        "UpdateDepositor(address,bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Claim"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Distribute"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EmergencyWithdraw"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateDepositor"): EventFragment;
}
export interface ClaimEventObject {
    user: string;
    rewardId: BigNumber;
    token: string;
    amount: BigNumber;
}
export declare type ClaimEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    BigNumber
], ClaimEventObject>;
export declare type ClaimEventFilter = TypedEventFilter<ClaimEvent>;
export interface DistributeEventObject {
    token: string;
    amount: BigNumber;
    merkleRoot: string;
    rewardId: BigNumber;
}
export declare type DistributeEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    BigNumber
], DistributeEventObject>;
export declare type DistributeEventFilter = TypedEventFilter<DistributeEvent>;
export interface EmergencyWithdrawEventObject {
    token: string;
    amount: BigNumber;
}
export declare type EmergencyWithdrawEvent = TypedEvent<[
    string,
    BigNumber
], EmergencyWithdrawEventObject>;
export declare type EmergencyWithdrawEventFilter = TypedEventFilter<EmergencyWithdrawEvent>;
export interface UpdateDepositorEventObject {
    depositor: string;
    status: boolean;
}
export declare type UpdateDepositorEvent = TypedEvent<[
    string,
    boolean
], UpdateDepositorEventObject>;
export declare type UpdateDepositorEventFilter = TypedEventFilter<UpdateDepositorEvent>;
export interface IGaiaDividendDistributor extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IGaiaDividendDistributorInterface;
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
        WETH(overrides?: CallOverrides): Promise<[string]>;
        claimRewards(rewardIds: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], proof: PromiseOrValue<BytesLike>[][], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        depositReward(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, merkleRoot: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isRewardCollected(user: PromiseOrValue<string>, rewardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        rewards(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[IGaiaDividendDistributor.RewardStructOutput]>;
        rewardsCount(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    WETH(overrides?: CallOverrides): Promise<string>;
    claimRewards(rewardIds: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], proof: PromiseOrValue<BytesLike>[][], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    depositReward(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, merkleRoot: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isRewardCollected(user: PromiseOrValue<string>, rewardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    rewards(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IGaiaDividendDistributor.RewardStructOutput>;
    rewardsCount(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        WETH(overrides?: CallOverrides): Promise<string>;
        claimRewards(rewardIds: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], proof: PromiseOrValue<BytesLike>[][], overrides?: CallOverrides): Promise<void>;
        depositReward(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, merkleRoot: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        isRewardCollected(user: PromiseOrValue<string>, rewardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        rewards(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IGaiaDividendDistributor.RewardStructOutput>;
        rewardsCount(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "Claim(address,uint256,address,uint256)"(user?: null, rewardId?: null, token?: null, amount?: null): ClaimEventFilter;
        Claim(user?: null, rewardId?: null, token?: null, amount?: null): ClaimEventFilter;
        "Distribute(address,uint256,bytes32,uint256)"(token?: null, amount?: null, merkleRoot?: null, rewardId?: null): DistributeEventFilter;
        Distribute(token?: null, amount?: null, merkleRoot?: null, rewardId?: null): DistributeEventFilter;
        "EmergencyWithdraw(address,uint256)"(token?: null, amount?: null): EmergencyWithdrawEventFilter;
        EmergencyWithdraw(token?: null, amount?: null): EmergencyWithdrawEventFilter;
        "UpdateDepositor(address,bool)"(depositor?: null, status?: null): UpdateDepositorEventFilter;
        UpdateDepositor(depositor?: null, status?: null): UpdateDepositorEventFilter;
    };
    estimateGas: {
        WETH(overrides?: CallOverrides): Promise<BigNumber>;
        claimRewards(rewardIds: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], proof: PromiseOrValue<BytesLike>[][], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        depositReward(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, merkleRoot: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isRewardCollected(user: PromiseOrValue<string>, rewardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        rewards(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        rewardsCount(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        WETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimRewards(rewardIds: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], proof: PromiseOrValue<BytesLike>[][], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        depositReward(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, merkleRoot: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isRewardCollected(user: PromiseOrValue<string>, rewardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewards(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardsCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IGaiaDividendDistributor.d.ts.map