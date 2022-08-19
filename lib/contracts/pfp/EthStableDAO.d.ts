import { BigNumber, BigNumberish } from "ethers";
import { GaiaStableDAO } from "../abi/gaia-protocol-pfp/typechain-types";
import ERC721Contract from "../ethereum-standard/ERC721Contract";
declare class EthStableDAO extends ERC721Contract<GaiaStableDAO> {
    constructor();
    totalSupply(): Promise<BigNumber>;
    exists(id: BigNumberish): Promise<boolean>;
}
declare const _default: EthStableDAO;
export default _default;
//# sourceMappingURL=EthStableDAO.d.ts.map