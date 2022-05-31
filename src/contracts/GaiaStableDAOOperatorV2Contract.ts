import { BigNumber, BigNumberish } from "ethers";
import Config from "../Config";
import Wallet from "../klaytn/Wallet";
import GaiaStableDAOOperatorV2Artifact from "./abi/gaia-stable-dao/artifacts/contracts/GaiaStableDAOOperatorV2.sol/GaiaStableDAOOperatorV2.json";
import Contract from "./Contract";
import GaiaStableDAOContract from "./GaiaStableDAOContract";

class GaiaStableDAOOperatorV2Contract extends Contract {

    constructor() {
        super(Config.contracts.GaiaStableDAOOperatorV2, GaiaStableDAOOperatorV2Artifact.abi);
    }

    public async claimableInterest(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("claimableInterest"));
    }

    public async claimableKSPReward(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("claimableKSPReward"));
    }

    public async whitelistedAmount(user: string): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("whitelistedAmount", user));
    }

    public async mintStableDAO(amount: BigNumberish, nft: string): Promise<void> {
        await this.runWalletMethod2("mintStableDAO", amount, nft);
    }

    public async buyBack(ids: BigNumberish[]): Promise<void> {
        const owner = await Wallet.loadAddress();
        if (owner !== undefined) {
            if (await GaiaStableDAOContract.isApprovedForAll(owner, this.address) !== true) {
                await GaiaStableDAOContract.setApprovalForAll(this.address, true);
            }
            await this.runWalletMethod("buyBack", ids);
        }
    }
}

export default new GaiaStableDAOOperatorV2Contract();
