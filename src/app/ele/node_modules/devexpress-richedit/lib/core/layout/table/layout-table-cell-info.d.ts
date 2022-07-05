import { Flag } from '@devexpress/utils/lib/class/flag';
import { Rectangle } from '@devexpress/utils/lib/geometry/rectangle';
import { LayoutRowWithIndex } from '../main-structures/layout-row';
import { LayoutTableColumnInfo } from './layout-table-info';
import { LayoutTableRowInfo } from './layout-table-row-info';
export declare enum TableCellBoundFlags {
    StartAndEndOnOtherColumns = 0,
    StartOnThisColumn = 1,
    EndOnThisColumn = 2
}
export declare class LayoutTableCellInfo extends Rectangle {
    cellGridIndex: number;
    parentRow: LayoutTableRowInfo;
    avaliableContentWidth: number;
    layoutRows: LayoutRowWithIndex[];
    boundFlags: Flag;
    internalTables: Record<number, LayoutTableColumnInfo>;
    constructor(parentRow: LayoutTableRowInfo, bound: Rectangle, cellGridIndex: number, avaliableContentWidth: number);
    isStartWithInternalTable(): boolean;
    isEndWithInternalTable(): boolean;
    getLastLayoutRowIncludingInternalTables(): LayoutRowWithIndex;
    getFirstLayoutRowByModelPositionIncludingInternalTables(): LayoutRowWithIndex;
    getEndPosition(): number;
    isEmpty(): boolean;
}
//# sourceMappingURL=layout-table-cell-info.d.ts.map