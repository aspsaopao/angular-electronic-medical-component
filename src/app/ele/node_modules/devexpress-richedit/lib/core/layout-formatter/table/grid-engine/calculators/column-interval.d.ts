import { MinMaxNumber } from '@devexpress/utils/lib/class/min-max';
import { TableWidthUnitType } from '../../../../model/tables/secondary-structures/table-units';
import { ColumnInterval } from './column-width-engine/column-interval';
export declare abstract class GridColumnBase {
    width: number;
    type: TableWidthUnitType;
    percentValue: number;
    preferredWidth: number;
    bounds: MinMaxNumber;
    get isPercentBased(): boolean;
    constructor(interval: ColumnInterval);
    updateMinBound(val: number): void;
    updateMaxBound(val: number): void;
    static totalMinWidth(columns: ColumnIntervalAuto[], startColumnIndex?: number, endColumnIndex?: number): number;
    static totalMaxWidth(columns: ColumnIntervalAuto[], startColumnIndex?: number, endColumnIndex?: number): number;
    static totalWidth(columns: GridColumnBase[], startColumnIndex?: number, endColumnIndex?: number): number;
    static totalPercentWidth(columns: GridColumnBase[], startColumnIndex?: number, endColumnIndex?: number): number;
    static totalPreferredWidth(columns: GridColumnBase[], startColumnIndex?: number, endColumnIndex?: number): number;
    static getLastDXAColumnIndex(columns: GridColumnBase[], startColumnIndex?: number, endColumnIndex?: number): number;
}
export declare class ColumnIntervalFixed extends GridColumnBase {
}
export declare class ColumnIntervalAuto extends GridColumnBase {
    totalHorizontalMargins: number;
    constructor(interval: ColumnInterval);
    static totalHorizontalMargins(columns: ColumnIntervalAuto[], startColumnIndex: number, endColumnIndex: number): number;
    static hasColumnsWithoutPreferredWidth(columns: ColumnIntervalAuto[], startColumnIndex?: number, endColumnIndex?: number): boolean;
}
//# sourceMappingURL=column-interval.d.ts.map