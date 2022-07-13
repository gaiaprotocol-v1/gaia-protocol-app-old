import { View, ViewParams } from "skydapp-common";
export default class Governance implements View {
    private container;
    private title;
    private createTime;
    private endTime;
    private nftDisplay;
    private statusDisplay;
    private candidateDisplay;
    private creatorDisplay;
    private candidateChartDisplay;
    private content;
    constructor(params: ViewParams);
    private init;
    private loadGovernance;
    loadCandidate(candidate: Array<{
        name: string;
        users: Array<string>;
    }>): void;
    loadChart(candidate: Array<{
        name: string;
        users: Array<string>;
    }>): void;
    loadStatus(status: string): void;
    loadNfts(nfts: Array<string>): void;
    changeParams(params: ViewParams, uri: string): void;
    close(): void;
}
//# sourceMappingURL=GovernanceDetail.d.ts.map