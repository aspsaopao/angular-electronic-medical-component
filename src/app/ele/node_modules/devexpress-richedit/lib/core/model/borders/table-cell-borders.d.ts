import { ICloneable, IEquatable } from '@devexpress/utils/lib/types';
import { BorderInfo } from './border-info';
import { TableBordersBase } from './table-border-base';
export declare class TableCellBorders extends TableBordersBase implements IEquatable<TableCellBorders>, ICloneable<TableCellBorders> {
    topLeftDiagonalBorder: BorderInfo;
    topRightDiagonalBorder: BorderInfo;
    equals(obj: TableCellBorders): boolean;
    copyFrom(obj: TableCellBorders): void;
    clone(): TableCellBorders;
    static create(top: BorderInfo, right: BorderInfo, bottom: BorderInfo, left: BorderInfo, topLeftDiagonal: BorderInfo, topRightDiagonal: BorderInfo): TableCellBorders;
}
//# sourceMappingURL=table-cell-borders.d.ts.map