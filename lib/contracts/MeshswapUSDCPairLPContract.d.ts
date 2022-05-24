import { BigNumber } from "ethers";
import { ERC20 } from "./polygon-abi/typechain";
import ERC20Contract from "./polygon-standard/ERC20Contract";
declare class MeshswapUSDCPairLPContract extends ERC20Contract<ERC20> {
    constructor();
    miningIndex(): Promise<BigNumber>;
    userLastIndex(user: string): Promise<BigNumber>;
}
declare const _default: MeshswapUSDCPairLPContract;
export default _default;
//# sourceMappingURL=MeshswapUSDCPairLPContract.d.ts.map