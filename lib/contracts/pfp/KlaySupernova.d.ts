import { BigNumber, BigNumberish } from "ethers";
import KIP17Contract from "../klaytn-standard/KIP17Contract";
declare class KlaySupernova extends KIP17Contract {
    constructor();
    totalSupply(): Promise<BigNumber>;
    exists(id: BigNumberish): Promise<boolean>;
}
declare const _default: KlaySupernova;
export default _default;
//# sourceMappingURL=KlaySupernova.d.ts.map