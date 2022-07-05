import { IEquatable } from '@devexpress/utils/lib/types';
import { BorderInfo } from './border-info';
export declare class TableBordersBase implements IEquatable<TableBordersBase> {
    bottomBorder: BorderInfo;
    leftBorder: BorderInfo;
    rightBorder: BorderInfo;
    topBorder: BorderInfo;
    getHashCode(): number;
    equals(obj: TableBordersBase): boolean;
    copyFrom(obj: TableBordersBase): void;
}
//# sourceMappingURL=table-border-base.d.ts.map