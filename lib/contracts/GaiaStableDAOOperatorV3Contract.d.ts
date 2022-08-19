import { BigNumber, BigNumberish } from "ethers";
import Contract from "./KlaytnContract";
declare class GaiaStableDAOOperatorV3Contract extends Contract {
    constructor();
    claimableInterest(): Promise<BigNumber>;
    claimableKSPReward(): Promise<BigNumber>;
    whitelistedAmount(user: string): Promise<BigNumber>;
    mintStableDAO(amount: BigNumberish, nft: string): Promise<void>;
    buyBack(ids: BigNumberish[]): Promise<void>;
}
declare const _default: GaiaStableDAOOperatorV3Contract;
export default _default;
//# sourceMappingURL=GaiaStableDAOOperatorV3Contract.d.ts.map