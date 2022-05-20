import { BigNumber } from "ethers";
import GaiaStableDAOArtifact from "./abi/gaia-stable/artifacts/contracts/GaiaStableDAO.sol/GaiaStableDAO.json";
import KIP17Contract from "./standard/KIP17Contract";

class GaiaSupernovaContract extends KIP17Contract {

    constructor() {
        super("0x89a18aBAB20aaB069feB7cab20517630Ee7C1626", GaiaStableDAOArtifact.abi);
    }

    public async totalSupply(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("totalSupply"));
    }
}

export default new GaiaSupernovaContract();
