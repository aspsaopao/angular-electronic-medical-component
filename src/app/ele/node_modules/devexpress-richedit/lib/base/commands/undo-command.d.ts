import { CommandBase, CommandOptions } from './command-base';
import { SimpleCommandState } from './command-states';
export declare class UndoCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    isEnabled(): boolean;
    executeCore(state: SimpleCommandState, _options: CommandOptions): boolean;
    canModify(): boolean;
}
//# sourceMappingURL=undo-command.d.ts.map