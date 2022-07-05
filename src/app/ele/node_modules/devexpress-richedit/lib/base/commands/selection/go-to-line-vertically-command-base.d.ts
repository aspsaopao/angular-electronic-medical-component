import { LayoutPosition } from '../../../core/layout/layout-position';
import { TableCellIterator } from '../../../core/layout/table/table-cell-iterator';
import { Table } from '../../../core/model/tables/main-structures/table';
import { TableCell } from '../../../core/model/tables/main-structures/table-cell';
import { TableRow } from '../../../core/model/tables/main-structures/table-row';
import { ICommandOptions } from '../command-base';
import { ICommandState } from '../i-command';
import { SelectionCommandBase } from './selection-command-base';
export declare abstract class GoToLineVerticallyCommandBase extends SelectionCommandBase {
    private extendTableCellsSelection;
    private getSelectedCells;
    private getLogPositionByX;
    private isEndOfLine;
    selectTableCellsRange(parameters: any): boolean;
    executeCore(_state: ICommandState, _options: ICommandOptions): boolean;
    private getInitialLayoutPosition;
    abstract canAdvanceToNextRow(cellInterator: TableCellIterator): boolean;
    abstract extendSelection(): boolean;
    abstract getNewLayoutPositionRowLevel(oldLayoutPosition: LayoutPosition): LayoutPosition;
    abstract getPositionForEdgeLine(layoutPosition: LayoutPosition): number;
    abstract getInitialSelectionEndPosition(): number;
    canGoToNextTableRow(_cellInterator: TableCellIterator): boolean;
    checkTableRowIndex(_rowIndex: number, _length: number): boolean;
    getCurrentTableRow(_selectedCells: TableCell[][]): TableRow;
    getNextTableRow(_table: Table, _rowIndex: number): TableRow;
    private performTableCellsSelection;
    performSelectionOnTheLastTableRow(_isForward: boolean, _selectedCells: TableCell[][]): void;
    protected isForwardDirection(): boolean;
}
//# sourceMappingURL=go-to-line-vertically-command-base.d.ts.map