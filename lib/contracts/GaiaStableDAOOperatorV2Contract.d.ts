import { BigNumber, BigNumberish } from "ethers";
import Contract from "./Contract";
declare class GaiaStableDAOOperatorV2Contract extends Contract {
    constructor();
    claimableInterest(): Promise<BigNumber>;
    claimableKSPReward(): Promise<BigNumber>;
    whitelistedAmount(user: string): Promise<BigNumber>;
    mintStableDAO(amount: BigNumberish, nft: string): Promise<void>;
    buyBack(ids: BigNumberish[]): Promise<void>;
}
declare const _default: GaiaStableDAOOperatorV2Contract;
export default _default;
//# sourceMappingURL=GaiaStableDAOOperatorV2Contract.d.ts.map