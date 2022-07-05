import { SubDocument } from '../../../core/model/sub-document';
import { Table } from '../../../core/model/tables/main-structures/table';
import { TableCell } from '../../../core/model/tables/main-structures/table-cell';
import { TableWidthUnit } from '../../../core/model/tables/secondary-structures/table-units';
import { SelectedTableRowInfo } from '../../../core/selection/selected-cells-engine';
import { CommandBase, ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class InsertTableCellsWithShiftToTheVerticallyCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    isEnabled(): boolean;
    executeCore(_state: SimpleCommandState, options: ICommandOptions): boolean;
    insertTableCellWithShiftToTheVertically(subDocument: SubDocument, table: Table, rowInfo: SelectedTableRowInfo): TableCell[];
    calculateInsertedRowsCount(table: Table, rowIndex: number, startCellIndex: number, endCellIndex: number): number;
    insertCellWithShiftToTheDown(subDocument: SubDocument, table: Table, rowIndex: number, cellIndex: number): TableCell[];
    insertTableCells(subDocument: SubDocument, table: Table, patternRowIndex: number, patternCellIndex: number, insertedCellsCount: number, preferredWidth: TableWidthUnit): void;
    deleteTextInCell(subDocument: SubDocument, table: Table, rowIndex: number, rowsCount: number): void;
    deleteContentInCell(subDocument: SubDocument, table: Table, rowIndex: number, cellIndex: number): void;
}
//# sourceMappingURL=insert-table-cells-with-shift-to-the-vertically-command.d.ts.map