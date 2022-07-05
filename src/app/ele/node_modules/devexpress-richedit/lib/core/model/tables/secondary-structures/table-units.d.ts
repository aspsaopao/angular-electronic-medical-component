import { ICloneable, IEquatable, SimpleConverter } from '@devexpress/utils/lib/types';
export declare class TableCustomUnit<ValueTypeVariants> implements IEquatable<TableCustomUnit<ValueTypeVariants>> {
    value: number;
    type: ValueTypeVariants;
    getHashCode(): number;
    equals(obj: TableCustomUnit<ValueTypeVariants>): boolean;
    copyFrom(obj: any): void;
}
export declare class TableWidthUnit extends TableCustomUnit<TableWidthUnitType> implements ICloneable<TableWidthUnit> {
    static MAX_PERCENT_WIDTH: number;
    static MUTLIPLIER_FOR_PERCENTS: number;
    static createDefault(): TableWidthUnit;
    static create(value: number, type: TableWidthUnitType): TableWidthUnit;
    init(value: number, type: TableWidthUnitType): TableWidthUnit;
    clone(): TableWidthUnit;
    asNumberNoPercentType(converter: SimpleConverter<number>): number;
    asNumber(avaliableWidth: number, converter: SimpleConverter<number>): number;
    divide(n: number): void;
}
export declare class TableHeightUnit extends TableCustomUnit<TableHeightUnitType> implements ICloneable<TableHeightUnit> {
    init(value: number, type: TableHeightUnitType): TableHeightUnit;
    clone(): TableHeightUnit;
    static create(value: number, type: TableHeightUnitType): TableHeightUnit;
    static createDefault(): TableHeightUnit;
}
export declare enum TableHeightUnitType {
    Minimum = 0,
    Auto = 1,
    Exact = 2
}
export declare enum TableWidthUnitType {
    Nil = 0,
    Auto = 1,
    FiftiethsOfPercent = 2,
    ModelUnits = 3
}
//# sourceMappingURL=table-units.d.ts.map