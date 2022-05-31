import KIP7Artifact from "./abi/gaia-stable-dao/artifacts/contracts/klaytn-contracts/token/KIP7/KIP7.sol/KIP7.json";
import KIP7Contract from "./standard/KIP7Contract";

class oUSDCContract extends KIP7Contract {

    constructor() {
        super("0x754288077d0ff82af7a5317c7cb8c444d421d103", KIP7Artifact.abi);
    }

}

export default new oUSDCContract();
