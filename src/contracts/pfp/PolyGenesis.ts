import { BigNumber, BigNumberish } from "ethers";
import GaiaGenesisArtifact from "../abi/gaia-protocol-pfp/artifacts/contracts/GaiaGenesis.sol/GaiaGenesis.json";
import { GaiaGenesis } from "../abi/gaia-protocol-pfp/typechain-types";
import ERC721Contract from "../polygon-standard/ERC721Contract";

class PolyGenesis extends ERC721Contract<GaiaGenesis>{

    constructor() {
        super("0x9f69C2a06c97fCAAc1E586b30Ea681c43975F052", GaiaGenesisArtifact.abi, []);
    }

    public async totalSupply(): Promise<BigNumber> {
        return await this.contract.totalSupply();
    }

    public async exists(id: BigNumberish): Promise<boolean> {
        return await this.contract.exists(id);
    }
}

export default new PolyGenesis();
