import { BigNumber, BigNumberish } from "ethers";
import KIP17Contract from "../klaytn-standard/KIP17Contract";
declare class KlayStableDAO extends KIP17Contract {
    constructor();
    totalSupply(): Promise<BigNumber>;
    exists(id: BigNumberish): Promise<boolean>;
}
declare const _default: KlayStableDAO;
export default _default;
//# sourceMappingURL=KlayStableDAO.d.ts.map