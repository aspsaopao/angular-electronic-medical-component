import { ICloneable, IEquatable } from '@devexpress/utils/lib/types';
import { IHashBasedCacheType } from '../../caches/hash-based-cache';
import { IMaskedProperties } from '../../interfaces';
import { TableRowAlignment } from '../secondary-structures/table-base-structures';
import { TableWidthUnit } from '../secondary-structures/table-units';
export declare class TableRowProperties implements IEquatable<TableRowProperties>, ICloneable<TableRowProperties>, IMaskedProperties<TableRowPropertiesMask>, IHashBasedCacheType<TableRowProperties> {
    hash: number;
    mask: TableRowPropertiesMask;
    cellSpacing: TableWidthUnit;
    cantSplit: boolean;
    hideCellMark: boolean;
    header: boolean;
    tableRowAlignment: TableRowAlignment;
    divId: number;
    protected calculateHash(): number;
    getHashCode(): number;
    equals(obj: TableRowProperties): boolean;
    clone(): TableRowProperties;
    copyFrom(obj: TableRowProperties): void;
    setUseValue(mask: TableRowPropertiesMask, value: boolean): void;
    getUseValue(mask: TableRowPropertiesMask): boolean;
    setValue<T>(desc: ITableRowPropertyDescriptor<T>, value: T): void;
}
export declare enum TableRowPropertiesMask {
    UseNone = 0,
    UseCantSplit = 2,
    UseHideCellMark = 4,
    UseCellSpacing = 128,
    UseTableRowAlignment = 256,
    UseShadingInfoIndex = 2048,
    UseHeader = 1024,
    UseDivId = 4096,
    UseAll = 2147483647
}
export interface ITableRowPropertyDescriptor<T> {
    setProp(props: TableRowProperties, newValue: T): any;
    getProp(props: TableRowProperties): T;
    maskValue(): TableRowPropertiesMask;
}
//# sourceMappingURL=table-row-properties.d.ts.map