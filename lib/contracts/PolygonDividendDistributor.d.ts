import { BigNumber, BigNumberish } from "ethers";
import { GaiaDividendDistributor } from "./abi/gaia-dividend-distributor/typechain-types";
import PolygonContract from "./PolygonContract";
declare class PolygonDividendDistributor extends PolygonContract<GaiaDividendDistributor> {
    constructor();
    isRewardCollected(user: string, rewardId: BigNumberish): Promise<boolean>;
    claimRewards(rewardIds: BigNumberish[], amounts: BigNumber[], proof: string[][]): Promise<void>;
}
declare const _default: PolygonDividendDistributor;
export default _default;
//# sourceMappingURL=PolygonDividendDistributor.d.ts.map