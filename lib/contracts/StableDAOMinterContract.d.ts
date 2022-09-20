import { BigNumber, BigNumberish } from "ethers";
import { GaiaStableDAOMinter } from "./abi/gaia-stable-dao-minter/typechain-types";
import PolygonContract from "./PolygonContract";
declare class StableDAOMinterContract extends PolygonContract<GaiaStableDAOMinter> {
    constructor();
    claimableInterest(): Promise<BigNumber>;
    totalSupply(): Promise<BigNumber>;
    mintStableDAO(amount: BigNumberish): Promise<void>;
    buyBack(ids: BigNumberish[]): Promise<void>;
}
declare const _default: StableDAOMinterContract;
export default _default;
//# sourceMappingURL=StableDAOMinterContract.d.ts.map