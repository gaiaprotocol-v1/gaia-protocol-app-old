import { BigNumber } from "ethers";
import Config from "../Config";
import GaiaStableDAOArtifact from "./abi/gaia-protocol-pfp/artifacts/contracts/GaiaGenesis.sol/GaiaGenesis.json";
import KIP17Contract from "./standard/KIP17Contract";

class GaiaGenesisContract extends KIP17Contract {

    constructor() {
        super(Config.contracts.GaiaNFT, GaiaStableDAOArtifact.abi);
    }

    public async totalSupply(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("totalSupply"));
    }
}

export default new GaiaGenesisContract();
