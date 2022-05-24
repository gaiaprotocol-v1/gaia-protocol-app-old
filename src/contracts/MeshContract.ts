import { ERC20 } from "./polygon-abi/typechain";
import ERC20Contract from "./polygon-standard/ERC20Contract";
import ERC20Artifact from "./polygon-abi/artifacts/contracts/PolygonMix.sol/PolygonMix.json";

class MeshContract extends ERC20Contract<ERC20>{

    constructor() {
        super("0x82362ec182db3cf7829014bc61e9be8a2e82868a", ERC20Artifact.abi, []);
    }
}

export default new MeshContract();
