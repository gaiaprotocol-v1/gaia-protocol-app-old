import { BigNumber, BigNumberish } from "ethers";
import Config from "../Config";
import GaiaGenesisUSDCDistributorArtifact from "./abi/usdc-distributor/artifacts/contracts/gaiaGenesisUSDCDistributor.sol/GaiaUSDCDistributor.json";
import Contract from "./Contract";

class GaiaGenesisUSDCDistributorContract extends Contract {

    constructor() {
        super(Config.contracts.GaiaGenesisUSDCDistributor, GaiaGenesisUSDCDistributorArtifact.abi);
    }

    public async rewardPerId(id: BigNumberish): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("rewardPerId", id));
    }

    public async isRewardCollected(id: BigNumberish): Promise<boolean> {
        return await this.runMethod("isRewardCollected", id);
    }

    public async claim(ids: BigNumberish[]) {
        if (ids.length > 25) {
            await this.runWalletMethodWithLargeGas("claim", ids);
        } else {
            await this.runWalletMethod("claim", ids);
        }
    }
}

export default new GaiaGenesisUSDCDistributorContract();
