import { ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
import { TableCommandBase } from './table-command-base';
export declare class DeleteTableCellsWithShiftToTheVerticallyCommand extends TableCommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    isEnabled(): boolean;
    executeCore(_state: SimpleCommandState, options: ICommandOptions): boolean;
    private removeTableCell;
}
//# sourceMappingURL=delete-table-cells-with-shift-to-the-vertically-command.d.ts.map