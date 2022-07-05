import { ICloneable, IEquatable } from '@devexpress/utils/lib/types';
import { TableBorders } from '../../borders/table-borders';
import { IHashBasedCacheType } from '../../caches/hash-based-cache';
import { IMaskedProperties } from '../../interfaces';
import { ShadingInfo } from '../../shadings/shading-info';
import { HorizontalAlignMode, HorizontalAnchorTypes, TableCellMargins, TableLayoutType, TableRowAlignment, TextWrapping, VerticalAlignMode, VerticalAnchorTypes } from '../secondary-structures/table-base-structures';
import { TableWidthUnit } from '../secondary-structures/table-units';
import { TablePropertiesAvoidDoubleBordersDescriptor, TablePropertiesBottomBorderDescriptor, TablePropertiesBottomMarginDescriptor, TablePropertiesCellSpacingDescriptor, TablePropertiesIndentDescriptor, TablePropertiesInsideHorizontalBorderDescriptor, TablePropertiesInsideVerticalBorderDescriptor, TablePropertiesLayoutTypeDescriptor, TablePropertiesLeftBorderDescriptor, TablePropertiesLeftMarginDescriptor, TablePropertiesRightBorderDescriptor, TablePropertiesRightMarginDescriptor, TablePropertiesRowAlignmentDescriptor, TablePropertiesShadingInfoDescriptor, TablePropertiesStyleColumnBandSizeDescriptor, TablePropertiesStyleRowBandSizeDescriptor, TablePropertiesTopBorderDescriptor, TablePropertiesTopMarginDescriptor } from './table-descriptors';
export declare class TableProperties implements IEquatable<TableProperties>, ICloneable<TableProperties>, IMaskedProperties<TablePropertiesMask>, IHashBasedCacheType<TableProperties> {
    private hash;
    mask: TablePropertiesMask;
    cellMargins: TableCellMargins;
    cellSpacing: TableWidthUnit;
    indent: TableWidthUnit;
    borders: TableBorders;
    tableStyleColumnBandSize: number;
    tableStyleRowBandSize: number;
    avoidDoubleBorders: boolean;
    layoutType: TableLayoutType;
    shadingInfo: ShadingInfo;
    tableRowAlignment: TableRowAlignment;
    isTableOverlap: boolean;
    bottomFromText: number;
    leftFromText: number;
    topFromText: number;
    rightFromText: number;
    tableHorizontalPosition: number;
    tableVerticalPosition: number;
    horizontalAlignMode: HorizontalAlignMode;
    verticalAlignMode: VerticalAlignMode;
    horizontalAnchorType: HorizontalAnchorTypes;
    verticalAnchorType: VerticalAnchorTypes;
    textWrapping: TextWrapping;
    protected calculateHash(): number;
    getHashCode(): number;
    equals(obj: TableProperties): boolean;
    clone(): TableProperties;
    copyFrom(obj: TableProperties): void;
    setUseValue(mask: TablePropertiesMask, value: boolean): void;
    getUseValue(mask: TablePropertiesMask): boolean;
    setValue<T>(desc: ITablePropertyDescriptor<T>, value: T): void;
}
export declare enum TablePropertiesMask {
    UseNone = 0,
    UseLeftMargin = 1,
    UseRightMargin = 2,
    UseTopMargin = 4,
    UseBottomMargin = 8,
    UseCellSpacing = 16,
    UseTableIndent = 32,
    UseTableLayout = 64,
    UseTableStyleColBandSize = 512,
    UseTableStyleRowBandSize = 1024,
    UseIsTableOverlap = 2048,
    UseFloatingPosition = 4096,
    UseLeftBorder = 8192,
    UseRightBorder = 16384,
    UseTopBorder = 32768,
    UseBottomBorder = 65536,
    UseInsideHorizontalBorder = 131072,
    UseInsideVerticalBorder = 262144,
    UseShadingInfoIndex = 524288,
    UseTableAlignment = 1048576,
    UseAvoidDoubleBorders = 2097152,
    UseRightToLeft = 4194304,
    UseAll = 2147483647
}
export interface ITablePropertyDescriptor<T> {
    setProp(props: TableProperties, newValue: T): any;
    getProp(props: TableProperties): T;
    maskValue(): TablePropertiesMask;
}
export declare class TablePropertyDescriptor {
    static avoidDoubleBorders: TablePropertiesAvoidDoubleBordersDescriptor;
    static topBorder: TablePropertiesTopBorderDescriptor;
    static rightBorder: TablePropertiesRightBorderDescriptor;
    static bottomBorder: TablePropertiesBottomBorderDescriptor;
    static leftBorder: TablePropertiesLeftBorderDescriptor;
    static insideHorizontalBorder: TablePropertiesInsideHorizontalBorderDescriptor;
    static insideVerticalBorder: TablePropertiesInsideVerticalBorderDescriptor;
    static topMargin: TablePropertiesTopMarginDescriptor;
    static rightMargin: TablePropertiesRightMarginDescriptor;
    static bottomMargin: TablePropertiesBottomMarginDescriptor;
    static leftMargin: TablePropertiesLeftMarginDescriptor;
    static cellSpacing: TablePropertiesCellSpacingDescriptor;
    static indent: TablePropertiesIndentDescriptor;
    static layoutType: TablePropertiesLayoutTypeDescriptor;
    static shadingInfo: TablePropertiesShadingInfoDescriptor;
    static rowAlignment: TablePropertiesRowAlignmentDescriptor;
    static styleColumnBandSize: TablePropertiesStyleColumnBandSizeDescriptor;
    static styleRowBandSize: TablePropertiesStyleRowBandSizeDescriptor;
    static ALL_FIELDS: ITablePropertyDescriptor<any>[];
}
//# sourceMappingURL=table-properties.d.ts.map