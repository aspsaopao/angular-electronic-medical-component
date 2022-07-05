import { CommandBase, ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class InsertAnchoredTextBoxCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    canModify(): boolean;
    isEnabled(): boolean;
    executeCore(_state: SimpleCommandState, options: ICommandOptions): boolean;
}
//# sourceMappingURL=insert-anchored-text-box-command.d.ts.map