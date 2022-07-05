import { SubDocument } from '../../../core/model/sub-document';
import { Table } from '../../../core/model/tables/main-structures/table';
import { TableCell } from '../../../core/model/tables/main-structures/table-cell';
import { CommandBase, ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare abstract class InsertTableCellWithShiftToTheHorizontallyCommandBase extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    isEnabled(): boolean;
    executeCore(_state: SimpleCommandState, options: ICommandOptions): boolean;
    abstract insertTableCell(subDocument: SubDocument, table: Table, rowIndex: number, cellIndex: number): TableCell;
}
export declare class InsertTableCellWithShiftToTheLeftCommand extends InsertTableCellWithShiftToTheHorizontallyCommandBase {
    insertTableCell(subDocument: SubDocument, table: Table, rowIndex: number, cellIndex: number): TableCell;
}
//# sourceMappingURL=insert-table-cells-with-shift-to-the-horizontally-command.d.ts.map