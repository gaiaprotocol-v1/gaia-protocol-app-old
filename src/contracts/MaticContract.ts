import { ERC20 } from "./abi/polygon-abi/typechain";
import ERC20Contract from "./polygon-standard/ERC20Contract";
import ERC20Artifact from "./abi/polygon-abi/artifacts/contracts/PolygonMix.sol/PolygonMix.json";

class MaticContract extends ERC20Contract<ERC20>{

    constructor() {
        super("0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270", ERC20Artifact.abi, []);
    }
}

export default new MaticContract();
