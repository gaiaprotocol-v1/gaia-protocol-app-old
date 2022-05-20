import { BigNumber } from "ethers";
import GaiaStableDAOArtifact from "./abi/gaia-stable/artifacts/contracts/GaiaStableDAO.sol/GaiaStableDAO.json";
import KIP17Contract from "./standard/KIP17Contract";

class GaiaKronosContract extends KIP17Contract {

    constructor() {
        super("0xBb915237D8b46Dcdfe813c914Bf98708e0dAd84A", GaiaStableDAOArtifact.abi);
    }

    public async totalSupply(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("totalSupply"));
    }
}

export default new GaiaKronosContract();
