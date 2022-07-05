import { CommandOptions } from '../command-base';
import { IntervalCommandStateEx } from '../command-states';
import { NumberingListCommandBase } from './numbering-list-command-base';
export declare class RestartNumberingListCommand extends NumberingListCommandBase {
    getState(options?: CommandOptions): IntervalCommandStateEx;
    executeCore(_state: IntervalCommandStateEx, options: CommandOptions): boolean;
}
//# sourceMappingURL=restart-numbering-list-command.d.ts.map