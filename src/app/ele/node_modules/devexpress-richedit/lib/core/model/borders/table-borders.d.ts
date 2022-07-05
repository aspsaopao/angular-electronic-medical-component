import { ICloneable, IEquatable } from '@devexpress/utils/lib/types';
import { BorderInfo } from './border-info';
import { TableBordersBase } from './table-border-base';
export declare class TableBorders extends TableBordersBase implements IEquatable<TableBorders>, ICloneable<TableBorders> {
    insideHorizontalBorder: BorderInfo;
    insideVerticalBorder: BorderInfo;
    getHashCode(): number;
    equals(obj: TableBorders): boolean;
    copyFrom(obj: TableBorders): void;
    clone(): TableBorders;
    static create(top: BorderInfo, right: BorderInfo, bottom: BorderInfo, left: BorderInfo, insideHorizontal: BorderInfo, insideVertical: BorderInfo): TableBorders;
}
//# sourceMappingURL=table-borders.d.ts.map