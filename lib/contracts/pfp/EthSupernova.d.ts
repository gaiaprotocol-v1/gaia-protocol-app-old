import { BigNumber, BigNumberish } from "ethers";
import { GaiaSupernova } from "../abi/gaia-protocol-pfp/typechain-types";
import ERC721Contract from "../ethereum-standard/ERC721Contract";
declare class EthSupernova extends ERC721Contract<GaiaSupernova> {
    constructor();
    totalSupply(): Promise<BigNumber>;
    exists(id: BigNumberish): Promise<boolean>;
}
declare const _default: EthSupernova;
export default _default;
//# sourceMappingURL=EthSupernova.d.ts.map