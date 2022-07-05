import { IRichEditControl } from '../../interfaces/i-rich-edit-core';
import { CommandBase, CommandSimpleOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class ForceSyncWithServerCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    protected canModify(): boolean;
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<() => void>): boolean;
}
export declare class ForceSyncWithServerCallbackManager {
    private static id;
    private map;
    constructor();
    reset(): void;
    addCallback(control: IRichEditControl, callback: () => void): void;
    handleResponce(responce: any): void;
}
//# sourceMappingURL=force-sync-with-server-command.d.ts.map