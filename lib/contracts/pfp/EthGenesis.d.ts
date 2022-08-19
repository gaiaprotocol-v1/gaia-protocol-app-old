import { BigNumber, BigNumberish } from "ethers";
import { GaiaGenesis } from "../abi/gaia-protocol-pfp/typechain-types";
import ERC721Contract from "../ethereum-standard/ERC721Contract";
declare class EthGenesis extends ERC721Contract<GaiaGenesis> {
    constructor();
    totalSupply(): Promise<BigNumber>;
    exists(id: BigNumberish): Promise<boolean>;
}
declare const _default: EthGenesis;
export default _default;
//# sourceMappingURL=EthGenesis.d.ts.map