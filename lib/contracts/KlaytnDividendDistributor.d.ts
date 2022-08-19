import { BigNumber, BigNumberish } from "ethers";
import KlaytnContract from "./KlaytnContract";
declare class KlaytnDividendDistributor extends KlaytnContract {
    constructor();
    isRewardCollected(user: string, rewardId: BigNumberish): Promise<boolean>;
    claimRewards(rewardIds: BigNumberish[], amounts: BigNumber[], proof: string[][]): Promise<void>;
}
declare const _default: KlaytnDividendDistributor;
export default _default;
//# sourceMappingURL=KlaytnDividendDistributor.d.ts.map