import { Rectangle } from '@devexpress/utils/lib/geometry/rectangle';
import { LayoutTableCellInfo } from './layout-table-cell-info';
import { LayoutTableColumnInfo } from './layout-table-info';
export declare class LayoutTableCellBackgroundInfo extends Rectangle {
    color: number;
    constructor(bound: Rectangle, color: number);
}
export declare class LayoutTableRowInfo extends Rectangle {
    parentTable: LayoutTableColumnInfo;
    rowIndex: number;
    rowCells: LayoutTableCellInfo[];
    backgroundInfos: LayoutTableCellBackgroundInfo[];
    constructor(parentTable: LayoutTableColumnInfo, bound: Rectangle, rowIndex: number);
    isBoundWithPrev(): boolean;
    getCellIndexByExactlyCellGridIndex(cellGridIndex: number): number;
    getCellByExactlyCellGridIndex(cellGridIndex: number): LayoutTableCellInfo;
}
//# sourceMappingURL=layout-table-row-info.d.ts.map