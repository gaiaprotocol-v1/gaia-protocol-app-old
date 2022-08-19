import { BigNumber, BigNumberish } from "ethers";
import GaiaGenesisArtifact from "../abi/gaia-protocol-pfp/artifacts/contracts/GaiaGenesis.sol/GaiaGenesis.json";
import { GaiaGenesis } from "../abi/gaia-protocol-pfp/typechain-types";
import ERC721Contract from "../ethereum-standard/ERC721Contract";

class EthGenesis extends ERC721Contract<GaiaGenesis>{

    constructor() {
        super("0xb48E526d935BEe3891222f6aC10A253e31CCaBE1", GaiaGenesisArtifact.abi, []);
    }

    public async totalSupply(): Promise<BigNumber> {
        return await this.contract.totalSupply();
    }

    public async exists(id: BigNumberish): Promise<boolean> {
        return await this.contract.exists(id);
    }
}

export default new EthGenesis();
