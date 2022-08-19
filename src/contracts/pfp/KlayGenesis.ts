import { BigNumber, BigNumberish } from "ethers";
import GaiaGenesisArtifact from "../abi/gaia-protocol-pfp/artifacts/contracts/GaiaGenesis.sol/GaiaGenesis.json";
import KIP17Contract from "../klaytn-standard/KIP17Contract";

class KlayGenesis extends KIP17Contract {

    constructor() {
        super("0xe9A10bB97DDb4bCD7677393405B4b769273CeF3c", GaiaGenesisArtifact.abi);
    }

    public async totalSupply(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("totalSupply"));
    }

    public async exists(id: BigNumberish): Promise<boolean> {
        return await this.contract.exists(id);
    }
}

export default new KlayGenesis();
