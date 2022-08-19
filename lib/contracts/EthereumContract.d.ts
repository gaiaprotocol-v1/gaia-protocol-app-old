import { ContractInterface, ethers } from "ethers";
import { EventContainer } from "skydapp-common";
export default abstract class EthereumContract<CT extends ethers.Contract> extends EventContainer {
    address: string;
    private abi;
    protected walletContract: CT | undefined;
    protected contract: CT;
    constructor(address: string, abi: ContractInterface, eventNames: string[]);
    get interface(): ethers.utils.Interface;
    connectAndGetWalletContract(): Promise<CT | undefined>;
}
//# sourceMappingURL=EthereumContract.d.ts.map