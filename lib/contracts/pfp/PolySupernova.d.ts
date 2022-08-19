import { BigNumber, BigNumberish } from "ethers";
import { GaiaSupernova } from "../abi/gaia-protocol-pfp/typechain-types";
import ERC721Contract from "../polygon-standard/ERC721Contract";
declare class PolySupernova extends ERC721Contract<GaiaSupernova> {
    constructor();
    totalSupply(): Promise<BigNumber>;
    exists(id: BigNumberish): Promise<boolean>;
}
declare const _default: PolySupernova;
export default _default;
//# sourceMappingURL=PolySupernova.d.ts.map