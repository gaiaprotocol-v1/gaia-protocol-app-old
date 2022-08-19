import { BigNumber, BigNumberish } from "ethers";
import { GaiaStableDAO } from "../abi/gaia-protocol-pfp/typechain-types";
import ERC721Contract from "../polygon-standard/ERC721Contract";
declare class PolyStableDAO extends ERC721Contract<GaiaStableDAO> {
    constructor();
    totalSupply(): Promise<BigNumber>;
    exists(id: BigNumberish): Promise<boolean>;
}
declare const _default: PolyStableDAO;
export default _default;
//# sourceMappingURL=PolyStableDAO.d.ts.map