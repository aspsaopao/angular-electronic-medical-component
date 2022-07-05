import { SubDocument } from '../../../core/model/sub-document';
import { TablePosition } from '../../../core/model/tables/main-structures/table';
import { TableCell } from '../../../core/model/tables/main-structures/table-cell';
import { CommandSimpleOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
import { SplitTableCellsDialogParameters } from '../dialogs/dialog-split-table-cells-command';
import { TableCommandBase } from './table-command-base';
export declare class SplitTableCellsCommand extends TableCommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    isEnabled(): boolean;
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<SplitTableCellsDialogParameters>): boolean;
    splitTableCellsHorizontally(subDocument: SubDocument, selectedCells: TableCell[][], parameters: SplitTableCellsDialogParameters): void;
    splitTableCellsVertically(subDocument: SubDocument, selectedCells: TableCell[][], parameters: SplitTableCellsDialogParameters): void;
    splitTableCellsVerticallyCore(subDocument: SubDocument, position: TablePosition, rowsCount: number, columnsCount: number): void;
    insertRows(subDocument: SubDocument, position: TablePosition, rowsCount: number): void;
    splitMergedCellsVertically(subDocument: SubDocument, position: TablePosition, columnsCount: number, rowsCount: number): void;
    splitMergedCellsVerticallyCore(subDocument: SubDocument, position: TablePosition, rowsCount: number): void;
    splitTableCellsHorizontallyCore(subDocument: SubDocument, position: TablePosition, columnsCount: number): void;
    normalizeColumnSpansAfterSplitHorizontally(subDocument: SubDocument, verticalSpanPositions: TablePosition[], columnIndex: number, newColumnsCount: number): void;
    private getColumnsCountForSplitVertically;
    private filterRemovedCells;
}
//# sourceMappingURL=split-table-cells-command.d.ts.map