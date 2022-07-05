import { ConstInterval } from '@devexpress/utils/lib/intervals/const';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { CellGridInfoManager } from '../layout-formatter/table/grid-engine/cell-grid-info-manager';
import { SubDocument } from '../model/sub-document';
import { Table } from '../model/tables/main-structures/table';
import { TableCell } from '../model/tables/main-structures/table-cell';
import { TableRow } from '../model/tables/main-structures/table-row';
export declare class SelectedTableRowInfo {
    rowIndex: number;
    cells: SelectedTableCellInfo[];
    get row(): TableRow;
    constructor(rowIndex: number, cells: SelectedTableCellInfo[]);
    get isSeries(): boolean;
    get columnCountInSeries(): number;
}
export declare class SelectedTableCellInfo {
    cell: TableCell;
    cellIndex: number;
    constructor(cell: TableCell, cellIndex: number);
}
export declare class TableSelectionData {
    private _isSquare;
    private _withoutGapByRows;
    private _isSelectedEntireTable;
    private _areCellsSelectedInSeries;
    info: SelectedTableInfo;
    readonly rows: SelectedTableRowInfo[];
    get numRows(): number;
    get startRowIndex(): number;
    get isSquare(): boolean;
    get firstCell(): TableCell;
    get firstCellInfo(): SelectedTableCellInfo;
    get firstRowInfo(): SelectedTableRowInfo;
    get lastCellInfo(): SelectedTableCellInfo;
    get lastCell(): TableCell;
    get lastRowInfo(): SelectedTableRowInfo;
    get withoutGapByRows(): boolean;
    get isSelectedEntireTable(): boolean;
    get areCellsSelectedInSeries(): boolean;
    constructor(info: SelectedTableInfo, rows: SelectedTableRowInfo[]);
    foreach(onEachRowCallback: (rowInfo: SelectedTableRowInfo) => void, onEachCellCallback: (cellInfo: SelectedTableCellInfo, rowInfo: SelectedTableRowInfo) => void): void;
    allOfCells(onEachCellCallback: (cellInfo: SelectedTableCellInfo, rowInfo: SelectedTableRowInfo) => boolean): boolean;
    private calculateIsSquare;
    atLeastOneCellFullySelected(intervals: FixedInterval[]): boolean;
}
export declare class SelectedTableInfo {
    table: Table;
    gridInfoManager: CellGridInfoManager;
    rawData: TableSelectionData;
    extendedData: TableSelectionData;
    get isSelected(): boolean;
    constructor(table: Table, gridInfoManager: CellGridInfoManager, rawRowsData: SelectedTableRowInfo[], extendedRowsData: SelectedTableRowInfo[]);
}
export declare class SelectedCellsCalculator {
    private map;
    calculate(tables: Table[], intervals: ConstInterval[]): SelectedTableInfo;
    private findTable;
    private fillResult;
    private add;
    private extendMergedCells;
    private static translateRowPositionsToSelectedInfo;
}
export declare class TableSelectionExtender {
    static correctIntervalDueToTables(subDocument: SubDocument, newInterval: FixedInterval): void;
    private static firstCellIsParentCellForSecondCellsTable;
}
//# sourceMappingURL=selected-cells-engine.d.ts.map