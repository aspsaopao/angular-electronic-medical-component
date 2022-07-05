import { CommandBase, CommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
import { ICommandState } from '../i-command';
export declare class DeleteCommand extends CommandBase<SimpleCommandState> {
    getState(): ICommandState;
    executeCore(_state: ICommandState, options: CommandOptions): boolean;
}
//# sourceMappingURL=delete-command.d.ts.map