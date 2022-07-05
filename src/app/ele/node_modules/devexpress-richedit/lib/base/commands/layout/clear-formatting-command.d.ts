import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { CommandBase, CommandOptions, ICommandOptions } from '../command-base';
import { IntervalCommandStateEx } from '../command-states';
export declare class ClearFormattingCommand extends CommandBase<IntervalCommandStateEx> {
    getActualIntervals(): FixedInterval[];
    getState(): IntervalCommandStateEx;
    protected DEPRECATEDCorrectlMainCommandOptions(options: ICommandOptions): void;
    executeCore(_state: IntervalCommandStateEx, options: CommandOptions): boolean;
    isEnabled(): boolean;
}
//# sourceMappingURL=clear-formatting-command.d.ts.map