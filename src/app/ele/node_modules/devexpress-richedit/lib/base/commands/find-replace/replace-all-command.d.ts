import { IRichEditControl } from '../../interfaces/i-rich-edit-core';
import { CommandBase, CommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class ReplaceAllCommandOptions extends CommandOptions {
    text: string;
    replaceText: string;
    matchCase: boolean;
    constructor(control: IRichEditControl, text: string, replaceText: string, matchCase: boolean);
}
export declare class ReplaceAllCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    executeCore(_state: SimpleCommandState, options: ReplaceAllCommandOptions): boolean;
}
//# sourceMappingURL=replace-all-command.d.ts.map