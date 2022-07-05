import { LayoutPosition } from '../../../core/layout/layout-position';
import { TableCellIterator } from '../../../core/layout/table/table-cell-iterator';
import { Table } from '../../../core/model/tables/main-structures/table';
import { TableCell } from '../../../core/model/tables/main-structures/table-cell';
import { TableRow } from '../../../core/model/tables/main-structures/table-row';
import { GoToLineVerticallyCommandBase } from './go-to-line-vertically-command-base';
export declare class LineDownCommand extends GoToLineVerticallyCommandBase {
    extendSelection(): boolean;
    getPositionForEdgeLine(_layoutPosition: LayoutPosition): number;
    canAdvanceToNextRow(cellIterator: TableCellIterator): boolean;
    getNewLayoutPositionRowLevel(oldLayoutPosition: LayoutPosition): LayoutPosition;
    getInitialSelectionEndPosition(): number;
    protected isForwardDirection(): boolean;
}
export declare class ExtendLineDownCommand extends LineDownCommand {
    extendSelection(): boolean;
    getPositionForEdgeLine(layoutPosition: LayoutPosition): number;
    canAdvanceToNextRow(_cellIterator: TableCellIterator): boolean;
    canGoToNextTableRow(cellInterator: TableCellIterator): boolean;
    getCurrentTableRow(selectedCells: TableCell[][]): TableRow;
    checkTableRowIndex(rowIndex: number, length?: number): boolean;
    getNextTableRow(table: Table, rowIndex: number): TableRow;
    performSelectionOnTheLastTableRow(isForward: boolean, selectedCells: TableCell[][]): void;
}
//# sourceMappingURL=go-to-line-below-command.d.ts.map