import { CommandBase, ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class DeleteTableCellsByBackspaceCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    isEnabled(): boolean;
    executeCore(_state: SimpleCommandState, _options: ICommandOptions): boolean;
}
//# sourceMappingURL=delete-table-cells-by-backspace.d.ts.map