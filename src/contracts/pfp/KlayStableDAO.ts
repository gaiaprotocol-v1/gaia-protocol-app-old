import { BigNumber, BigNumberish } from "ethers";
import GaiaStableDAOArtifact from "../abi/gaia-protocol-pfp/artifacts/contracts/GaiaStableDAO.sol/GaiaStableDAO.json";
import KIP17Contract from "../klaytn-standard/KIP17Contract";

class KlayStableDAO extends KIP17Contract {

    constructor() {
        super("0x5428dB8Fd0063390b3357D78d56f183D6755A446", GaiaStableDAOArtifact.abi);
    }

    public async totalSupply(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("totalSupply"));
    }

    public async exists(id: BigNumberish): Promise<boolean> {
        return await this.contract.exists(id);
    }
}

export default new KlayStableDAO();
