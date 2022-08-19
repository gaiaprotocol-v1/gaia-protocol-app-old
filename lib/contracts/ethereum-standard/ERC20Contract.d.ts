import { BigNumber, ContractInterface, ethers } from "ethers";
import EthereumContract from "../EthereumContract";
export default abstract class ERC20Contract<CT extends ethers.Contract> extends EthereumContract<CT> {
    constructor(address: string, abi: ContractInterface, eventNames: string[]);
    getName(): Promise<string>;
    getNonce(owner: string): Promise<BigNumber>;
    getTotalSupply(): Promise<BigNumber>;
    balanceOf(owner: string): Promise<BigNumber>;
    allowance(owner: string, spender: string): Promise<BigNumber>;
}
//# sourceMappingURL=ERC20Contract.d.ts.map