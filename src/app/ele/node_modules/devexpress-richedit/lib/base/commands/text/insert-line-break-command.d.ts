import { CommandBase, CommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class InsertLineBreakCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    executeCore(_state: SimpleCommandState, options: CommandOptions): boolean;
}
//# sourceMappingURL=insert-line-break-command.d.ts.map