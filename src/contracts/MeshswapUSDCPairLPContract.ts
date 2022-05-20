import { BigNumber } from "ethers";
import { ERC20 } from "./polygon-abi/typechain";
import ERC20Contract from "./polygon-standard/ERC20Contract";

class MeshswapUSDCPairLPContract extends ERC20Contract<ERC20>{

    constructor() {
        super("0x111d7a73b40aa5ee52bf651e8f07aa26f8e9efe8", require("./MeshswapUSDCPairLPContractABI.json"), []);
    }

    public async miningIndex(): Promise<BigNumber> {
        return await this.contract.miningIndex();
    }

    public async userLastIndex(user: string): Promise<BigNumber> {
        return await this.contract.userLastIndex(user);
    }
}

export default new MeshswapUSDCPairLPContract();
