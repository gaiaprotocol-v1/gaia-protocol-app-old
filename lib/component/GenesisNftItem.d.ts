import { BigNumber } from "ethers";
import { DomNode } from "skydapp-browser";
export default class GenesisNftItem extends DomNode {
    private imageDisplay;
    private nameDisplay;
    private klayDisplay;
    private claimButton;
    private emergencyDisplay;
    private id;
    constructor();
    init(id: number, usdc: BigNumber, usdcCollected: boolean, reward: BigNumber, collected: BigNumber): void;
    delete(): void;
}
//# sourceMappingURL=GenesisNftItem.d.ts.map