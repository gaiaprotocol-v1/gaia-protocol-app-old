import { BigNumber, BigNumberish } from "ethers";
import GaiaStableDAOArtifact from "../abi/gaia-protocol-pfp/artifacts/contracts/GaiaStableDAO.sol/GaiaStableDAO.json";
import { GaiaStableDAO } from "../abi/gaia-protocol-pfp/typechain-types";
import ERC721Contract from "../polygon-standard/ERC721Contract";

class PolyStableDAO extends ERC721Contract<GaiaStableDAO>{

    constructor() {
        super("0xa5f5b6C05a6d48a56E95E4Ce15078008a18BC79B", GaiaStableDAOArtifact.abi, []);
    }

    public async totalSupply(): Promise<BigNumber> {
        return await this.contract.totalSupply();
    }

    public async exists(id: BigNumberish): Promise<boolean> {
        return await this.contract.exists(id);
    }
}

export default new PolyStableDAO();
