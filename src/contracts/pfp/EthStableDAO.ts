import { BigNumber, BigNumberish } from "ethers";
import GaiaStableDAOArtifact from "../abi/gaia-protocol-pfp/artifacts/contracts/GaiaStableDAO.sol/GaiaStableDAO.json";
import { GaiaStableDAO } from "../abi/gaia-protocol-pfp/typechain-types";
import ERC721Contract from "../ethereum-standard/ERC721Contract";

class EthStableDAO extends ERC721Contract<GaiaStableDAO>{

    constructor() {
        super("0xFfFd676Bffd8797f34C2Adc3E808F374CAEe49D8", GaiaStableDAOArtifact.abi, []);
    }

    public async totalSupply(): Promise<BigNumber> {
        return await this.contract.totalSupply();
    }

    public async exists(id: BigNumberish): Promise<boolean> {
        return await this.contract.exists(id);
    }
}

export default new EthStableDAO();
