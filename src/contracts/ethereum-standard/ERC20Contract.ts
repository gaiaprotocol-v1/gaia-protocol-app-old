import { BigNumber, BigNumberish, ContractInterface, ethers } from "ethers";
import EthereumContract from "../EthereumContract";

export default abstract class ERC20Contract<CT extends ethers.Contract> extends EthereumContract<CT> {

    constructor(address: string, abi: ContractInterface, eventNames: string[]) {
        super(address, abi, eventNames.concat([
            "Transfer",
            "Approval",
        ]));
    }

    public async getName(): Promise<string> {
        return await this.contract.name();
    }

    public async getNonce(owner: string): Promise<BigNumber> {
        return await this.contract.nonces(owner);
    }

    public async getTotalSupply(): Promise<BigNumber> {
        return await this.contract.totalSupply();
    }

    public async balanceOf(owner: string): Promise<BigNumber> {
        return await this.contract.balanceOf(owner);
    }

    public async allowance(owner: string, spender: string): Promise<BigNumber> {
        return await this.contract.allowance(owner, spender);
    }
}
