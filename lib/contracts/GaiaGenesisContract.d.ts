import { BigNumber } from "ethers";
import KIP17Contract from "./standard/KIP17Contract";
declare class GaiaGenesisContract extends KIP17Contract {
    constructor();
    totalSupply(): Promise<BigNumber>;
}
declare const _default: GaiaGenesisContract;
export default _default;
//# sourceMappingURL=GaiaGenesisContract.d.ts.map