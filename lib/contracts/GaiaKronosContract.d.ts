import { BigNumber } from "ethers";
import KIP17Contract from "./standard/KIP17Contract";
declare class GaiaKronosContract extends KIP17Contract {
    constructor();
    totalSupply(): Promise<BigNumber>;
}
declare const _default: GaiaKronosContract;
export default _default;
//# sourceMappingURL=GaiaKronosContract.d.ts.map