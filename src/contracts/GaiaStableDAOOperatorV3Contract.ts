import { BigNumber, BigNumberish } from "ethers";
import Config from "../Config";
import KlaytnWallet from "../klaytn/KlaytnWallet";
import GaiaStableDAOOperatorV3Artifact from "./abi/gaia-stable-dao/artifacts/contracts/GaiaStableDAOOperatorV3.sol/GaiaStableDAOOperatorV3.json";
import Contract from "./KlaytnContract";
import GaiaStableDAOContract from "./GaiaStableDAOContract";

class GaiaStableDAOOperatorV3Contract extends Contract {

    constructor() {
        super(Config.contracts.GaiaStableDAOOperatorV3, GaiaStableDAOOperatorV3Artifact.abi);
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
        const owner = await KlaytnWallet.loadAddress();
        if (owner !== undefined) {
            if (await GaiaStableDAOContract.isApprovedForAll(owner, this.address) !== true) {
                await GaiaStableDAOContract.setApprovalForAll(this.address, true);
            }
            await this.runWalletMethod("buyBack", ids);
        }
    }
}

export default new GaiaStableDAOOperatorV3Contract();
