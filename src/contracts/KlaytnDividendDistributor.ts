import { BigNumber, BigNumberish } from "ethers";
import GaiaDividendDistributorArtifact from "./abi/gaia-dividend-distributor/artifacts/contracts/GaiaDividendDistributor.sol/GaiaDividendDistributor.json";
import KlaytnContract from "./KlaytnContract";

class KlaytnDividendDistributor extends KlaytnContract {

    constructor() {
        super("0x8aa8bB59eCCAF893d551753Cc7Fb27ff52df1E67", GaiaDividendDistributorArtifact.abi);
    }

    public async isRewardCollected(user: string, rewardId: BigNumberish): Promise<boolean> {
        return await this.runMethod("isRewardCollected", user, rewardId);
    }

    public async claimRewards(rewardIds: BigNumberish[], amounts: BigNumber[], proof: string[][]) {
        await this.runWalletMethod("claimRewards", rewardIds, amounts, proof);
    }
}

export default new KlaytnDividendDistributor();
