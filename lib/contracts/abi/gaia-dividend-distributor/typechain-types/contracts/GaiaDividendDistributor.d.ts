import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
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
export interface GaiaDividendDistributorInterface extends utils.Interface {
    functions: {
        "WETH()": FunctionFragment;
        "claimRewards(uint256[],uint256[],bytes32[][])": FunctionFragment;
        "claimRewardsByOwner(address[],uint256[],uint256[],bytes32[][])": FunctionFragment;
        "depositReward(address,uint256,bytes32)": FunctionFragment;
        "emergencyWithdraw(address)": FunctionFragment;
        "isDepositor(address)": FunctionFragment;
        "isRewardCollected(address,uint256)": FunctionFragment;
        "merkleRootUsed(bytes32)": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "rewards(uint256)": FunctionFragment;
        "rewardsCount()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "updateDepositor(address,bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "WETH" | "claimRewards" | "claimRewardsByOwner" | "depositReward" | "emergencyWithdraw" | "isDepositor" | "isRewardCollected" | "merkleRootUsed" | "owner" | "renounceOwnership" | "rewards" | "rewardsCount" | "transferOwnership" | "updateDepositor"): FunctionFragment;
    encodeFunctionData(functionFragment: "WETH", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimRewards", values: [
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BytesLike>[][]
    ]): string;
    encodeFunctionData(functionFragment: "claimRewardsByOwner", values: [
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BytesLike>[][]
    ]): string;
    encodeFunctionData(functionFragment: "depositReward", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "emergencyWithdraw", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isDepositor", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isRewardCollected", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "merkleRootUsed", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewards", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "rewardsCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "updateDepositor", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    decodeFunctionResult(functionFragment: "WETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimRewardsByOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emergencyWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isDepositor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isRewardCollected", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "merkleRootUsed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardsCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateDepositor", data: BytesLike): Result;
    events: {
        "Claim(address,uint256,address,uint256)": EventFragment;
        "Distribute(address,uint256,bytes32,uint256)": EventFragment;
        "EmergencyWithdraw(address,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "UpdateDepositor(address,bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Claim"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Distribute"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EmergencyWithdraw"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
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
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface UpdateDepositorEventObject {
    depositor: string;
    status: boolean;
}
export declare type UpdateDepositorEvent = TypedEvent<[
    string,
    boolean
], UpdateDepositorEventObject>;
export declare type UpdateDepositorEventFilter = TypedEventFilter<UpdateDepositorEvent>;
export interface GaiaDividendDistributor extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GaiaDividendDistributorInterface;
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
        claimRewardsByOwner(users: PromiseOrValue<string>[], rewardIds: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], proof: PromiseOrValue<BytesLike>[][], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        depositReward(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, merkleRoot: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        emergencyWithdraw(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isDepositor(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isRewardCollected(user: PromiseOrValue<string>, rewardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        merkleRootUsed(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        rewards(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[IGaiaDividendDistributor.RewardStructOutput]>;
        rewardsCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateDepositor(depositor: PromiseOrValue<string>, status: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    WETH(overrides?: CallOverrides): Promise<string>;
    claimRewards(rewardIds: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], proof: PromiseOrValue<BytesLike>[][], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimRewardsByOwner(users: PromiseOrValue<string>[], rewardIds: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], proof: PromiseOrValue<BytesLike>[][], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    depositReward(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, merkleRoot: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    emergencyWithdraw(token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isDepositor(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isRewardCollected(user: PromiseOrValue<string>, rewardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    merkleRootUsed(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    rewards(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IGaiaDividendDistributor.RewardStructOutput>;
    rewardsCount(overrides?: CallOverrides): Promise<BigNumber>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateDepositor(depositor: PromiseOrValue<string>, status: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        WETH(overrides?: CallOverrides): Promise<string>;
        claimRewards(rewardIds: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], proof: PromiseOrValue<BytesLike>[][], overrides?: CallOverrides): Promise<void>;
        claimRewardsByOwner(users: PromiseOrValue<string>[], rewardIds: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], proof: PromiseOrValue<BytesLike>[][], overrides?: CallOverrides): Promise<void>;
        depositReward(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, merkleRoot: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        emergencyWithdraw(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        isDepositor(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isRewardCollected(user: PromiseOrValue<string>, rewardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        merkleRootUsed(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        rewards(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IGaiaDividendDistributor.RewardStructOutput>;
        rewardsCount(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        updateDepositor(depositor: PromiseOrValue<string>, status: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Claim(address,uint256,address,uint256)"(user?: null, rewardId?: null, token?: null, amount?: null): ClaimEventFilter;
        Claim(user?: null, rewardId?: null, token?: null, amount?: null): ClaimEventFilter;
        "Distribute(address,uint256,bytes32,uint256)"(token?: null, amount?: null, merkleRoot?: null, rewardId?: null): DistributeEventFilter;
        Distribute(token?: null, amount?: null, merkleRoot?: null, rewardId?: null): DistributeEventFilter;
        "EmergencyWithdraw(address,uint256)"(token?: null, amount?: null): EmergencyWithdrawEventFilter;
        EmergencyWithdraw(token?: null, amount?: null): EmergencyWithdrawEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "UpdateDepositor(address,bool)"(depositor?: null, status?: null): UpdateDepositorEventFilter;
        UpdateDepositor(depositor?: null, status?: null): UpdateDepositorEventFilter;
    };
    estimateGas: {
        WETH(overrides?: CallOverrides): Promise<BigNumber>;
        claimRewards(rewardIds: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], proof: PromiseOrValue<BytesLike>[][], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimRewardsByOwner(users: PromiseOrValue<string>[], rewardIds: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], proof: PromiseOrValue<BytesLike>[][], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        depositReward(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, merkleRoot: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        emergencyWithdraw(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isDepositor(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isRewardCollected(user: PromiseOrValue<string>, rewardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        merkleRootUsed(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        rewards(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        rewardsCount(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateDepositor(depositor: PromiseOrValue<string>, status: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        WETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimRewards(rewardIds: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], proof: PromiseOrValue<BytesLike>[][], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimRewardsByOwner(users: PromiseOrValue<string>[], rewardIds: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], proof: PromiseOrValue<BytesLike>[][], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        depositReward(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, merkleRoot: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        emergencyWithdraw(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isDepositor(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isRewardCollected(user: PromiseOrValue<string>, rewardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        merkleRootUsed(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        rewards(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardsCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateDepositor(depositor: PromiseOrValue<string>, status: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=GaiaDividendDistributor.d.ts.map