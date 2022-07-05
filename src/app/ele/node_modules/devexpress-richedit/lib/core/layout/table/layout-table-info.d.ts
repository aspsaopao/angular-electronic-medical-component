import { Rectangle } from '@devexpress/utils/lib/geometry/rectangle';
import { LayoutCursorHorizontalTableBorder, LayoutCursorVerticalTableBorder, LayoutTableBorder } from '../../layout-formatter/table/borders/layout-table-border';
import { Grid } from '../../layout-formatter/table/grid-engine/grid';
import { LayoutTableCellInfo } from './layout-table-cell-info';
import { LayoutTableRowInfo } from './layout-table-row-info';
export declare class LayoutTableInfo {
    backgroundColor: number;
    grid: Grid;
    isEditable: boolean;
    constructor(backgroundColor: number, grid: Grid);
}
export declare class LayoutTableColumnInfo extends Rectangle {
    logicInfo: LayoutTableInfo;
    horizontalBorders: LayoutTableBorder[];
    verticalBorders: LayoutTableBorder[];
    verticalCursorBorders: LayoutCursorVerticalTableBorder[];
    horizontalCursorBorders: LayoutCursorHorizontalTableBorder[];
    parentCell: LayoutTableCellInfo;
    tableRows: LayoutTableRowInfo[];
    private boundFlags;
    constructor(parentCell: LayoutTableCellInfo, logicInfo: LayoutTableInfo, bound: Rectangle);
    isLastLayoutColumnInModelTable(): boolean;
    calculateFlags(): void;
    getTopLevelColumn(): LayoutTableColumnInfo;
    isBoundWithPrev(): boolean;
    isBoundWithNext(): boolean;
    static getFirstCellInPageThatBoundWithCellPlacedInNextPage(tableInfos: LayoutTableColumnInfo[]): LayoutTableCellInfo;
    isEmpty(): boolean;
}
//# sourceMappingURL=layout-table-info.d.ts.map