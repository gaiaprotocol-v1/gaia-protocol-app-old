import { BigNumber, BigNumberish } from "ethers";
import { GaiaGenesis } from "../abi/gaia-protocol-pfp/typechain-types";
import ERC721Contract from "../polygon-standard/ERC721Contract";
declare class PolyGenesis extends ERC721Contract<GaiaGenesis> {
    constructor();
    totalSupply(): Promise<BigNumber>;
    exists(id: BigNumberish): Promise<boolean>;
}
declare const _default: PolyGenesis;
export default _default;
//# sourceMappingURL=PolyGenesis.d.ts.map