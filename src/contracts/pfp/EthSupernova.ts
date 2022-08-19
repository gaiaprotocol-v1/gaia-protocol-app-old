import { BigNumber, BigNumberish } from "ethers";
import GaiaSupernovaArtifact from "../abi/gaia-protocol-pfp/artifacts/contracts/GaiaSupernova.sol/GaiaSupernova.json";
import { GaiaSupernova } from "../abi/gaia-protocol-pfp/typechain-types";
import ERC721Contract from "../ethereum-standard/ERC721Contract";

class EthSupernova extends ERC721Contract<GaiaSupernova>{

    constructor() {
        super("0xe7df0DcA32eb23F4182055dC6a2053A3fF239315", GaiaSupernovaArtifact.abi, []);
    }

    public async totalSupply(): Promise<BigNumber> {
        return await this.contract.totalSupply();
    }

    public async exists(id: BigNumberish): Promise<boolean> {
        return await this.contract.exists(id);
    }
}

export default new EthSupernova();
