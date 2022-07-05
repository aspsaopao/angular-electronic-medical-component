import { IRichEditControl } from '../../interfaces/i-rich-edit-core';
import { CommandBase, CommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class AssignShortcutCommandOptions extends CommandOptions {
    keyCode: number;
    callback: () => void;
    constructor(control: IRichEditControl, keyCode: number, callback: () => void);
}
export declare class AssignShortcutCommand extends CommandBase<SimpleCommandState> {
    isEnabled(): boolean;
    getState(): SimpleCommandState;
    isEnabledInReadOnlyMode(): boolean;
    executeCore(_state: SimpleCommandState, options: AssignShortcutCommandOptions): boolean;
}
//# sourceMappingURL=assign-shortcut-command.d.ts.map