import { ConstInterval } from '@devexpress/utils/lib/intervals/const';
import { IModelManager } from '../../model-manager';
import { DocumentModel } from '../document-model';
import { SubDocument } from '../sub-document';
import { Table, TablePosition } from './main-structures/table';
import { TableCell } from './main-structures/table-cell';
import { TableRow } from './main-structures/table-row';
export declare class TableCellUtils {
    static getCellIndexByColumnIndex(row: TableRow, startColumnIndex: number): number;
    static getCellIndexByEndColumnIndex(row: TableRow, endColumnIndex: number): number;
    static getStartColumnIndex(cell: TableCell): number;
    static getEndColumnIndex(cell: TableCell): number;
    static getColumnCount(table: Table): number;
    static getCellIndicesByColumnsRange(row: TableRow, interval: ConstInterval): number[];
    static getAbsoluteCellIndexInRow(row: TableRow, columnIndex: number): number;
    static getVerticalSpanCellPositions(restartCellPosition: TablePosition, patternCellStartColumnIndex: number): TablePosition[];
    static getSameTableCells(firstCell: TableCell, lastCell: TableCell): {
        firstCell: TableCell;
        lastCell: TableCell;
    };
}
export declare class TableConditionalFormattingCalculator {
    static updateTable(control: IModelManager, table: Table, subDocument: SubDocument): void;
    static updateTableWithoutHistory(model: DocumentModel, table: Table): void;
    private static getRowConditionalFormatting;
    private static getCellConditionalFormatting;
}
//# sourceMappingURL=table-utils.d.ts.map