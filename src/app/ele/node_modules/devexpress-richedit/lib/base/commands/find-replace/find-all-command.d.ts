import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { IRichEditControl } from '../../interfaces/i-rich-edit-core';
import { CommandBase, CommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class FindAllCommandOptions extends CommandOptions {
    text: string;
    matchCase: boolean;
    highlightResults: boolean;
    results?: FixedInterval[];
    constructor(control: IRichEditControl, text: string, matchCase: boolean, highlightResults: boolean, results?: FixedInterval[]);
}
export declare class FindAllCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    executeCore(_state: SimpleCommandState, options: FindAllCommandOptions): boolean;
    isEnabledInReadOnlyMode(): boolean;
}
//# sourceMappingURL=find-all-command.d.ts.map