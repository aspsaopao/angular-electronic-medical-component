import { ICloneable, IEquatable } from '@devexpress/utils/lib/types';
import { TableCellBorders } from '../../borders/table-cell-borders';
import { IHashBasedCacheType } from '../../caches/hash-based-cache';
import { IMaskedProperties } from '../../interfaces';
import { ShadingInfo } from '../../shadings/shading-info';
import { TableCellMargins, TableCellVerticalAlignment, TextDirection } from '../secondary-structures/table-base-structures';
import { TableCellPropertiesBottomBorderDescriptor, TableCellPropertiesBottomMarginDescriptor, TableCellPropertiesFitTextDescriptor, TableCellPropertiesHideCellMarkDescriptor, TableCellPropertiesLeftBorderDescriptor, TableCellPropertiesLeftMarginDescriptor, TableCellPropertiesNoWrapDescriptor, TableCellPropertiesRightBorderDescriptor, TableCellPropertiesRightMarginDescriptor, TableCellPropertiesShadingInfoDescriptor, TableCellPropertiesTextDirectionDescriptor, TableCellPropertiesTopBorderDescriptor, TableCellPropertiesTopLeftDiagonalBorderDescriptor, TableCellPropertiesTopMarginDescriptor, TableCellPropertiesTopRightDiagonalBorderDescriptor, TableCellPropertiesVerticalAlignmentDescriptor } from './table-cell-descriptors';
export declare class TableCellProperties implements IEquatable<TableCellProperties>, ICloneable<TableCellProperties>, IMaskedProperties<TableCellPropertiesMask>, IHashBasedCacheType<TableCellProperties> {
    private hash;
    mask: TableCellPropertiesMask;
    cellMargins: TableCellMargins;
    borders: TableCellBorders;
    hideCellMark: boolean;
    noWrap: boolean;
    fitText: boolean;
    textDirection: TextDirection;
    verticalAlignment: TableCellVerticalAlignment;
    shadingInfo: ShadingInfo;
    protected calculateHash(): number;
    getHashCode(): number;
    equals(obj: TableCellProperties): boolean;
    clone(): TableCellProperties;
    copyFrom(obj: TableCellProperties): void;
    setUseValue(mask: TableCellPropertiesMask, value: boolean): void;
    getUseValue(mask: TableCellPropertiesMask): boolean;
    setValue<T>(desc: ITableCellPropertyDescriptor<T>, value: T): void;
}
export declare enum TableCellPropertiesMask {
    UseNone = 0,
    UseHideCellMark = 2,
    UseNoWrap = 4,
    UseFitText = 8,
    UseLeftMargin = 16,
    UseRightMargin = 32,
    UseTopMargin = 64,
    UseBottomMargin = 128,
    UseTextDirection = 256,
    UseVerticalAlignment = 512,
    UseCellConditionalFormatting = 2048,
    UseLeftBorder = 4096,
    UseRightBorder = 8192,
    UseTopBorder = 16384,
    UseBottomBorder = 32768,
    UseTopLeftDiagonalBorder = 262144,
    UseTopRightDiagonalBorder = 524288,
    UseShadingInfoIndex = 1048576,
    UseAll = 2147483647
}
export interface ITableCellPropertyDescriptor<T> {
    setProp(props: TableCellProperties, newValue: T): any;
    getProp(props: TableCellProperties): T;
    maskValue(): TableCellPropertiesMask;
}
export declare class TableCellPropertyDescriptor {
    static topBorder: TableCellPropertiesTopBorderDescriptor;
    static rightBorder: TableCellPropertiesRightBorderDescriptor;
    static bottomBorder: TableCellPropertiesBottomBorderDescriptor;
    static leftBorder: TableCellPropertiesLeftBorderDescriptor;
    static topLeftDiagonalBorder: TableCellPropertiesTopLeftDiagonalBorderDescriptor;
    static topRightDiagonalBorder: TableCellPropertiesTopRightDiagonalBorderDescriptor;
    static topMargin: TableCellPropertiesTopMarginDescriptor;
    static rightMargin: TableCellPropertiesRightMarginDescriptor;
    static bottomMargin: TableCellPropertiesBottomMarginDescriptor;
    static leftMargin: TableCellPropertiesLeftMarginDescriptor;
    static fitText: TableCellPropertiesFitTextDescriptor;
    static hideCellMark: TableCellPropertiesHideCellMarkDescriptor;
    static noWrap: TableCellPropertiesNoWrapDescriptor;
    static shadingInfo: TableCellPropertiesShadingInfoDescriptor;
    static textDirection: TableCellPropertiesTextDirectionDescriptor;
    static vertivalAlignment: TableCellPropertiesVerticalAlignmentDescriptor;
    static ALL_FIELDS: ITableCellPropertyDescriptor<any>[];
}
//# sourceMappingURL=table-cell-properties.d.ts.map