import { CommandBase, ICommandOptions } from './command-base';
import { SimpleCommandState } from './command-states';
export declare class RedoCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    isEnabled(): boolean;
    executeCore(state: SimpleCommandState, _options: ICommandOptions): boolean;
    canModify(): boolean;
}
//# sourceMappingURL=redo-command.d.ts.map