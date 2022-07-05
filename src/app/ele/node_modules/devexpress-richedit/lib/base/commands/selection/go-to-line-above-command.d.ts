import { LayoutPosition } from '../../../core/layout/layout-position';
import { TableCellIterator } from '../../../core/layout/table/table-cell-iterator';
import { Table } from '../../../core/model/tables/main-structures/table';
import { TableCell } from '../../../core/model/tables/main-structures/table-cell';
import { TableRow } from '../../../core/model/tables/main-structures/table-row';
import { GoToLineVerticallyCommandBase } from './go-to-line-vertically-command-base';
export declare class GoToLineAboveCommand extends GoToLineVerticallyCommandBase {
    extendSelection(): boolean;
    getPositionForEdgeLine(_layoutPosition: LayoutPosition): number;
    canAdvanceToNextRow(cellIterator: TableCellIterator): boolean;
    getNewLayoutPositionRowLevel(oldLayoutPosition: LayoutPosition): LayoutPosition;
    getInitialSelectionEndPosition(): number;
    protected isForwardDirection(): boolean;
}
export declare class ExtendGoToLineAboveCommand extends GoToLineAboveCommand {
    extendSelection(): boolean;
    getPositionForEdgeLine(layoutPosition: LayoutPosition): number;
    canAdvanceToNextRow(_cellIterator: TableCellIterator): boolean;
    canGoToNextTableRow(cellIterator: TableCellIterator): boolean;
    getCurrentTableRow(selectedCells: TableCell[][]): TableRow;
    checkTableRowIndex(rowIndex: number, _length?: number): boolean;
    getNextTableRow(table: Table, rowIndex: number): TableRow;
    performSelectionOnTheLastTableRow(isForward: boolean, selectedCells: TableCell[][]): void;
}
//# sourceMappingURL=go-to-line-above-command.d.ts.map