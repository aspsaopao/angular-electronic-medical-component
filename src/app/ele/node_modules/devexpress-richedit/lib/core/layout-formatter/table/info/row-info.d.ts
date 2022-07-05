import { LayoutColumn } from '../../../layout/main-structures/layout-column';
import { LayoutTableRowInfo } from '../../../layout/table/layout-table-row-info';
import { TableRow } from '../../../model/tables/main-structures/table-row';
import { TableRowHeightInfo, TopAndBottomMarginsForRow } from '../other';
import { CellInfo } from './cell-info';
import { TableInfo } from './table-info';
export declare class RowInfo {
    cells: CellInfo[];
    heightInfo: TableRowHeightInfo;
    cellSpacing: number;
    topAndBottomMargins: TopAndBottomMarginsForRow;
    howManyColumnsConsiderTableRow: number;
    rowIndex: number;
    tableInfo: TableInfo;
    currLayoutTableRowInfo: LayoutTableRowInfo;
    layoutRowIndexInColumn: number;
    get row(): TableRow;
    constructor(tableInfo: TableInfo, rowIndex: number);
    private init;
    initLayoutInfo(isFirstRowInColumn: boolean, column: LayoutColumn): void;
    clearLayoutInfo(): void;
}
//# sourceMappingURL=row-info.d.ts.map