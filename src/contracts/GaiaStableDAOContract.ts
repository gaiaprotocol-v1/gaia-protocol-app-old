import { BigNumber } from "ethers";
import Config from "../Config";
import GaiaStableDAOArtifact from "./abi/gaia-stable-dao/artifacts/contracts/GaiaStableDAO.sol/GaiaStableDAO.json";
import KIP17Contract from "./standard/KIP17Contract";

class GaiaStableDAOContract extends KIP17Contract {

    constructor() {
        super(Config.contracts.GaiaStableDAO, GaiaStableDAOArtifact.abi);
    }

    public async totalSupply(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("totalSupply"));
    }

    public async isMinter(addr: string): Promise<boolean> {
        return await this.runMethod("isMinter", addr);
    }
}

export default new GaiaStableDAOContract();
