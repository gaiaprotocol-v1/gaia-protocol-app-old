import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface PauserRoleMockInterface extends utils.Interface {
    contractName: "PauserRoleMock";
    functions: {
        "addPauser(address)": FunctionFragment;
        "isPauser(address)": FunctionFragment;
        "onlyPauserMock()": FunctionFragment;
        "removePauser(address)": FunctionFragment;
        "renouncePauser()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "addPauser", values: [string]): string;
    encodeFunctionData(functionFragment: "isPauser", values: [string]): string;
    encodeFunctionData(functionFragment: "onlyPauserMock", values?: undefined): string;
    encodeFunctionData(functionFragment: "removePauser", values: [string]): string;
    encodeFunctionData(functionFragment: "renouncePauser", values?: undefined): string;
    decodeFunctionResult(functionFragment: "addPauser", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPauser", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onlyPauserMock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removePauser", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renouncePauser", data: BytesLike): Result;
    events: {
        "PauserAdded(address)": EventFragment;
        "PauserRemoved(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "PauserAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PauserRemoved"): EventFragment;
}
export declare type PauserAddedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type PauserAddedEventFilter = TypedEventFilter<PauserAddedEvent>;
export declare type PauserRemovedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type PauserRemovedEventFilter = TypedEventFilter<PauserRemovedEvent>;
export interface PauserRoleMock extends BaseContract {
    contractName: "PauserRoleMock";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PauserRoleMockInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        addPauser(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isPauser(account: string, overrides?: CallOverrides): Promise<[boolean]>;
        onlyPauserMock(overrides?: CallOverrides): Promise<[void]>;
        removePauser(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renouncePauser(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    addPauser(account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isPauser(account: string, overrides?: CallOverrides): Promise<boolean>;
    onlyPauserMock(overrides?: CallOverrides): Promise<void>;
    removePauser(account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renouncePauser(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addPauser(account: string, overrides?: CallOverrides): Promise<void>;
        isPauser(account: string, overrides?: CallOverrides): Promise<boolean>;
        onlyPauserMock(overrides?: CallOverrides): Promise<void>;
        removePauser(account: string, overrides?: CallOverrides): Promise<void>;
        renouncePauser(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "PauserAdded(address)"(account?: string | null): PauserAddedEventFilter;
        PauserAdded(account?: string | null): PauserAddedEventFilter;
        "PauserRemoved(address)"(account?: string | null): PauserRemovedEventFilter;
        PauserRemoved(account?: string | null): PauserRemovedEventFilter;
    };
    estimateGas: {
        addPauser(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isPauser(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        onlyPauserMock(overrides?: CallOverrides): Promise<BigNumber>;
        removePauser(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renouncePauser(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addPauser(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isPauser(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onlyPauserMock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removePauser(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renouncePauser(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=PauserRoleMock.d.ts.map