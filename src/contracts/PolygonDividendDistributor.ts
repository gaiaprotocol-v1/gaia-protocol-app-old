import { BigNumber, BigNumberish } from "ethers";
import GaiaDividendDistributorArtifact from "./abi/gaia-dividend-distributor/artifacts/contracts/GaiaDividendDistributor.sol/GaiaDividendDistributor.json";
import { GaiaDividendDistributor } from "./abi/gaia-dividend-distributor/typechain-types";
import PolygonContract from "./PolygonContract";

class PolygonDividendDistributor extends PolygonContract<GaiaDividendDistributor> {

    constructor() {
        super("0x8aa8bB59eCCAF893d551753Cc7Fb27ff52df1E67", GaiaDividendDistributorArtifact.abi, []);
    }

    public async isRewardCollected(user: string, rewardId: BigNumberish): Promise<boolean> {
        return await this.contract.isRewardCollected(user, rewardId);
    }

    public async claimRewards(rewardIds: BigNumberish[], amounts: BigNumber[], proof: string[][]) {
        const contract = await this.connectAndGetWalletContract();
        await contract?.claimRewards(rewardIds, amounts, proof);
    }
}

export default new PolygonDividendDistributor();
