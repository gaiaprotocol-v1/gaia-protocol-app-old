import { BigNumber, BigNumberish } from "ethers";
import GaiaSupernovaArtifact from "../abi/gaia-protocol-pfp/artifacts/contracts/GaiaSupernova.sol/GaiaSupernova.json";
import { GaiaSupernova } from "../abi/gaia-protocol-pfp/typechain-types";
import ERC721Contract from "../polygon-standard/ERC721Contract";

class PolySupernova extends ERC721Contract<GaiaSupernova>{

    constructor() {
        super("0xECFFc91149b8B702dEa6905Ae304A9D36527060F", GaiaSupernovaArtifact.abi, []);
    }

    public async totalSupply(): Promise<BigNumber> {
        return await this.contract.totalSupply();
    }

    public async exists(id: BigNumberish): Promise<boolean> {
        return await this.contract.exists(id);
    }
}

export default new PolySupernova();
