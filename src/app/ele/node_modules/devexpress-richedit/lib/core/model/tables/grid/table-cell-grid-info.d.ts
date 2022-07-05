import { ConstInterval } from '@devexpress/utils/lib/intervals/const';
import { Table } from '../main-structures/table';
export declare class CellGridInfo {
    protected rowIndex: number;
    protected gridCellIndex: number;
    protected cellIndexes: number[];
    constructor(rowIndex: number, gridCellIndex: number, cellIndexes: number[]);
    get rowIndexesInterval(): ConstInterval;
    getStartRowIndex(): number;
    getCellIndex(rowIndexInCell: number): number;
    getCellIndexAbs(rowIndexInTable: number): number;
    getNumRowsInCell(): number;
    getGridCellIndex(): number;
    getGridCellIndexEnd(table: Table): number;
    addCellIndex(index: number): CellGridInfo;
    intersectRow(rowIndex: number): boolean;
    getEndRowIndex(): number;
    getLastRowIndex(): number;
    getColumnSpan(table: Table): number;
    intersectGridColumn(columnIndex: number, columnSpan: number): boolean;
}
//# sourceMappingURL=table-cell-grid-info.d.ts.map