import { CommandBase, CommandOptions, ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class InsertSpaceCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    protected DEPRECATEDCorrectlMainCommandOptions(options: ICommandOptions): void;
    executeCore(_state: SimpleCommandState, options: CommandOptions): boolean;
}
export declare class InsertNonBreakingSpaceCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    protected DEPRECATEDCorrectlMainCommandOptions(options: ICommandOptions): void;
    executeCore(_state: SimpleCommandState, options: CommandOptions): boolean;
}
//# sourceMappingURL=insert-space-command.d.ts.map