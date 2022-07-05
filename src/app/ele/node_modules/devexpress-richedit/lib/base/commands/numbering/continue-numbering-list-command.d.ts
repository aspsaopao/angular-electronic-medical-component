import { CommandOptions } from '../command-base';
import { IntervalCommandStateEx } from '../command-states';
import { NumberingListCommandBase } from './numbering-list-command-base';
export declare class ContinueNumberingListCommand extends NumberingListCommandBase {
    getState(options?: CommandOptions): IntervalCommandStateEx;
    executeCore(state: IntervalCommandStateEx, options: CommandOptions): boolean;
    private getTargetNumberingListIndex;
}
//# sourceMappingURL=continue-numbering-list-command.d.ts.map