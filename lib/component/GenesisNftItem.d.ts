import { BigNumber } from "ethers";
import { DomNode } from "skydapp-browser";
export default class GenesisNftItem extends DomNode {
    private imageDisplay;
    private nameDisplay;
    private klayDisplay;
    private emergencyDisplay;
    private id;
    private klay;
    constructor();
    init(id: number, reward: BigNumber, collected: BigNumber): void;
    private loadKlay;
    delete(): void;
}
//# sourceMappingURL=GenesisNftItem.d.ts.map