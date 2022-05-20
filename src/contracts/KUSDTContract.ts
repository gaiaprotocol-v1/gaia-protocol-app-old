import KIP7Artifact from "./abi/gaia-stable/artifacts/contracts/klaytn-contracts/token/KIP7/KIP7.sol/KIP7.json";
import KIP7Contract from "./standard/KIP7Contract";

class KUSDTContract extends KIP7Contract {

    constructor() {
        super("0xceE8FAF64bB97a73bb51E115Aa89C17FfA8dD167", KIP7Artifact.abi);
    }

}

export default new KUSDTContract();
