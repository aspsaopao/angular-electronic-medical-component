import { TableWidthUnitType } from '../../../../../model/tables/secondary-structures/table-units';
export declare class ColumnInterval {
    width: number;
    colSpan: number;
    type: TableWidthUnitType;
    constructor(width: number, colSpan: number, type: TableWidthUnitType);
    substract(b: ColumnInterval): ColumnInterval;
}
//# sourceMappingURL=column-interval.d.ts.map