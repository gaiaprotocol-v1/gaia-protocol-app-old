import { ERC20 } from "./polygon-abi/typechain";
import ERC20Contract from "./polygon-standard/ERC20Contract";
import ERC20Artifact from "./polygon-abi/artifacts/contracts/PolygonMix.sol/PolygonMix.json";

class PolygonOrbitUSDCContract extends ERC20Contract<ERC20>{

    constructor() {
        super("0x5bef2617ecca9a39924c09017c5f1e25efbb3ba8", ERC20Artifact.abi, []);
    }
}

export default new PolygonOrbitUSDCContract();
