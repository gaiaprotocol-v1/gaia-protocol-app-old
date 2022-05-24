import { BigNumber, BigNumberish } from "ethers";
import Contract from "./Contract";
declare class GaiaGenesisUSDCDistributorContract extends Contract {
    constructor();
    rewardPerId(id: BigNumberish): Promise<BigNumber>;
    isRewardCollected(id: BigNumberish): Promise<boolean>;
    claim(ids: BigNumberish[]): Promise<void>;
}
declare const _default: GaiaGenesisUSDCDistributorContract;
export default _default;
//# sourceMappingURL=GaiaGenesisUSDCDistributorContract.d.ts.map