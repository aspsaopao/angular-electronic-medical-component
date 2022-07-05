import { SubDocument } from '../../../core/model/sub-document';
import { Table } from '../../../core/model/tables/main-structures/table';
import { TableCell } from '../../../core/model/tables/main-structures/table-cell';
import { TableRow } from '../../../core/model/tables/main-structures/table-row';
import { ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
import { TableCommandBase } from './table-command-base';
export declare abstract class InsertTableColumnCommandBase extends TableCommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    isEnabled(): boolean;
    executeCore(_state: SimpleCommandState, options: ICommandOptions): boolean;
    private getInsertedColumnCount;
    private getColumnCellIndices;
    protected insertParagraphToTheLeft(subDocument: SubDocument, currentCell: TableCell): void;
    protected insertParagraphToTheRight(subDocument: SubDocument, currentCell: TableCell): void;
    protected abstract splitTableCellCore(subDocument: SubDocument, table: Table, rowIndex: number, cellIndex: number, patternCell: TableCell): TableCell;
    protected abstract getPatternCell(): TableCell;
    protected abstract getColumnIndex(patternCell: TableCell): number;
    protected abstract getCurrentCellIndex(relativeColumnIndex: number, currentRow: TableRow): number;
}
export declare class InsertTableColumnToTheLeftCommand extends InsertTableColumnCommandBase {
    protected splitTableCellCore(subDocument: SubDocument, table: Table, rowIndex: number, cellIndex: number, patternCell: TableCell): TableCell;
    protected getPatternCell(): TableCell;
    protected getColumnIndex(patternCell: TableCell): number;
    protected getCurrentCellIndex(relativeColumnIndex: number, currentRow: TableRow): number;
}
export declare class InsertTableColumnToTheRightCommand extends InsertTableColumnCommandBase {
    protected splitTableCellCore(subDocument: SubDocument, table: Table, rowIndex: number, cellIndex: number, patternCell: TableCell): TableCell;
    protected getPatternCell(): TableCell;
    protected getColumnIndex(patternCell: TableCell): number;
    protected getCurrentCellIndex(relativeColumnIndex: number, currentRow: TableRow): number;
}
//# sourceMappingURL=insert-table-column-commands.d.ts.map