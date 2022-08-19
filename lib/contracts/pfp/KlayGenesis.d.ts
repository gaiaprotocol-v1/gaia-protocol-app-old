import { BigNumber, BigNumberish } from "ethers";
import KIP17Contract from "../klaytn-standard/KIP17Contract";
declare class KlayGenesis extends KIP17Contract {
    constructor();
    totalSupply(): Promise<BigNumber>;
    exists(id: BigNumberish): Promise<boolean>;
}
declare const _default: KlayGenesis;
export default _default;
//# sourceMappingURL=KlayGenesis.d.ts.map