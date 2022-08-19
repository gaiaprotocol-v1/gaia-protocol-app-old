import { BigNumber, BigNumberish } from "ethers";
import GaiaSupernovaArtifact from "../abi/gaia-protocol-pfp/artifacts/contracts/GaiaSupernova.sol/GaiaSupernova.json";
import KIP17Contract from "../klaytn-standard/KIP17Contract";

class KlaySupernova extends KIP17Contract {

    constructor() {
        super("0x20a33C651373cde978daE404760e853fAE877588", GaiaSupernovaArtifact.abi);
    }

    public async totalSupply(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("totalSupply"));
    }

    public async exists(id: BigNumberish): Promise<boolean> {
        return await this.contract.exists(id);
    }
}

export default new KlaySupernova();
