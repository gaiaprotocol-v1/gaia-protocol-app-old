import { BigNumber, BigNumberish } from "ethers";
import Contract from "./Contract";
declare class GaiaStableDAOOperatorContract extends Contract {
    constructor();
    claimableInterest(): Promise<BigNumber>;
    claimableKSPReward(): Promise<BigNumber>;
    mintedAmountWithGaiaKronos(user: string): Promise<BigNumber>;
    mintedAmountWithGaiaSupernova(user: string): Promise<BigNumber>;
    whitelistedAmount(user: string): Promise<BigNumber>;
    mintStableDAO(amount: BigNumberish, nft: string): Promise<void>;
    buyBack(ids: BigNumberish[]): Promise<void>;
}
declare const _default: GaiaStableDAOOperatorContract;
export default _default;
//# sourceMappingURL=GaiaStableDAOOperatorContract.d.ts.map