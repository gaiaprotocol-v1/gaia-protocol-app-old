import { BaseContract, BigNumber, Signer, utils } from "ethers";
import { EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IStableDAORewardDistributorInterface extends utils.Interface {
    contractName: "IStableDAORewardDistributor";
    functions: {};
    events: {
        "Claim(address,uint256)": EventFragment;
        "DisclaimReward(address,uint256)": EventFragment;
        "Distribute(address,uint256)": EventFragment;
        "UpdateClaimInterval(uint256)": EventFragment;
        "UpdateDevFund(address)": EventFragment;
        "UpdateUnclaimed(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Claim"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DisclaimReward"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Distribute"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateClaimInterval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateDevFund"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateUnclaimed"): EventFragment;
}
export declare type ClaimEvent = TypedEvent<[
    string,
    BigNumber
], {
    user: string;
    amount: BigNumber;
}>;
export declare type ClaimEventFilter = TypedEventFilter<ClaimEvent>;
export declare type DisclaimRewardEvent = TypedEvent<[
    string,
    BigNumber
], {
    user: string;
    amount: BigNumber;
}>;
export declare type DisclaimRewardEventFilter = TypedEventFilter<DisclaimRewardEvent>;
export declare type DistributeEvent = TypedEvent<[
    string,
    BigNumber
], {
    token: string;
    amount: BigNumber;
}>;
export declare type DistributeEventFilter = TypedEventFilter<DistributeEvent>;
export declare type UpdateClaimIntervalEvent = TypedEvent<[
    BigNumber
], {
    newInterval: BigNumber;
}>;
export declare type UpdateClaimIntervalEventFilter = TypedEventFilter<UpdateClaimIntervalEvent>;
export declare type UpdateDevFundEvent = TypedEvent<[string], {
    newDevFund: string;
}>;
export declare type UpdateDevFundEventFilter = TypedEventFilter<UpdateDevFundEvent>;
export declare type UpdateUnclaimedEvent = TypedEvent<[
    string,
    BigNumber
], {
    user: string;
    amount: BigNumber;
}>;
export declare type UpdateUnclaimedEventFilter = TypedEventFilter<UpdateUnclaimedEvent>;
export interface IStableDAORewardDistributor extends BaseContract {
    contractName: "IStableDAORewardDistributor";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IStableDAORewardDistributorInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {};
    callStatic: {};
    filters: {
        "Claim(address,uint256)"(user?: string | null, amount?: null): ClaimEventFilter;
        Claim(user?: string | null, amount?: null): ClaimEventFilter;
        "DisclaimReward(address,uint256)"(user?: string | null, amount?: null): DisclaimRewardEventFilter;
        DisclaimReward(user?: string | null, amount?: null): DisclaimRewardEventFilter;
        "Distribute(address,uint256)"(token?: null, amount?: null): DistributeEventFilter;
        Distribute(token?: null, amount?: null): DistributeEventFilter;
        "UpdateClaimInterval(uint256)"(newInterval?: null): UpdateClaimIntervalEventFilter;
        UpdateClaimInterval(newInterval?: null): UpdateClaimIntervalEventFilter;
        "UpdateDevFund(address)"(newDevFund?: null): UpdateDevFundEventFilter;
        UpdateDevFund(newDevFund?: null): UpdateDevFundEventFilter;
        "UpdateUnclaimed(address,uint256)"(user?: string | null, amount?: null): UpdateUnclaimedEventFilter;
        UpdateUnclaimed(user?: string | null, amount?: null): UpdateUnclaimedEventFilter;
    };
    estimateGas: {};
    populateTransaction: {};
}
//# sourceMappingURL=IStableDAORewardDistributor.d.ts.map