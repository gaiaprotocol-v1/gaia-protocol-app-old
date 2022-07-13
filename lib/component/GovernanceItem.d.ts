import { DomNode } from "skydapp-browser";
export default class GovernancesItem extends DomNode {
    private statusDisplay;
    private nftDisplay;
    constructor(id: string, name: string, status: string, nfts: Array<string>, endTime: number);
    init(nfts: Array<string>, status: string): void;
    loadStatus(status: string): void;
    loadNfts(nfts: Array<string>): void;
    delete(): void;
}
//# sourceMappingURL=GovernanceItem.d.ts.map