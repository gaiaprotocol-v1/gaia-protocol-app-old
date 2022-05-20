import { ERC20 } from "./polygon-abi/typechain";
import ERC20Contract from "./polygon-standard/ERC20Contract";
import ERC20Artifact from "./polygon-abi/artifacts/contracts/PolygonMix.sol/PolygonMix.json";

class PolygonUSDCContract extends ERC20Contract<ERC20>{

    constructor() {
        super("0x2791bca1f2de4661ed88a30c99a7a9449aa84174", ERC20Artifact.abi, []);
    }
}

export default new PolygonUSDCContract();
