import { CommandBase, CommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class InsertPageBreakCommand extends CommandBase<SimpleCommandState> {
    getState(options?: CommandOptions): SimpleCommandState;
    executeCore(_state: SimpleCommandState, options: CommandOptions): boolean;
    isEnabled(options: CommandOptions): boolean;
}
//# sourceMappingURL=insert-page-break-command.d.ts.map