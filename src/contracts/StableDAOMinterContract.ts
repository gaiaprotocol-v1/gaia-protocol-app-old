import { BigNumber, BigNumberish } from "ethers";
import PolygonWallet from "../polygon/PolygonWallet";
import GaiaStableDAOMinterArtifact from "./abi/gaia-stable-dao-minter/artifacts/contracts/GaiaStableDAOMinter.sol/GaiaStableDAOMinter.json";
import { GaiaStableDAOMinter } from "./abi/gaia-stable-dao-minter/typechain-types";
import PolygonContract from "./PolygonContract";
import PolygonGaiaStableDAOContract from "./PolygonGaiaStableDAOContract";

class StableDAOMinterContract extends PolygonContract<GaiaStableDAOMinter> {

    constructor() {
        super("0xC2a6f0de98478Dff521D7D2afEbfCD53F253853d", GaiaStableDAOMinterArtifact.abi, []);
    }

    public async claimableInterest(): Promise<BigNumber> {
        return await this.contract.claimableInterest();
    }

    public async totalSupply(): Promise<BigNumber> {
        return await this.contract.totalSupply();
    }

    public async mintStableDAO(amount: BigNumberish): Promise<void> {
        const contract = await this.connectAndGetWalletContract();
        await contract?.mintStableDAO(amount);
    }

    public async buyBack(ids: BigNumberish[]): Promise<void> {
        const owner = await PolygonWallet.loadAddress();
        if (owner !== undefined) {
            if (await PolygonGaiaStableDAOContract.isApprovedForAll(owner, this.address) !== true) {
                await PolygonGaiaStableDAOContract.setApprovalForAll(this.address, true);
            }
            const contract = await this.connectAndGetWalletContract();
            await contract?.buyBack(ids);
        }
    }
}

export default new StableDAOMinterContract();
