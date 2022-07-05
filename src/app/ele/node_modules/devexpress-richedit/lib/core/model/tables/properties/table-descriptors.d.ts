import { BorderInfo } from '../../borders/border-info';
import { ShadingInfo } from '../../shadings/shading-info';
import { TableLayoutType, TableRowAlignment } from '../secondary-structures/table-base-structures';
import { TableWidthUnit } from '../secondary-structures/table-units';
import { ITablePropertyDescriptor, TableProperties, TablePropertiesMask } from './table-properties';
export declare class TablePropertiesAvoidDoubleBordersDescriptor implements ITablePropertyDescriptor<boolean> {
    setProp(props: TableProperties, newValue: boolean): void;
    getProp(props: TableProperties): boolean;
    maskValue(): TablePropertiesMask;
}
export declare class TablePropertiesTopBorderDescriptor implements ITablePropertyDescriptor<BorderInfo> {
    setProp(props: TableProperties, newValue: BorderInfo): void;
    getProp(props: TableProperties): BorderInfo;
    maskValue(): TablePropertiesMask;
}
export declare class TablePropertiesRightBorderDescriptor implements ITablePropertyDescriptor<BorderInfo> {
    setProp(props: TableProperties, newValue: BorderInfo): void;
    getProp(props: TableProperties): BorderInfo;
    maskValue(): TablePropertiesMask;
}
export declare class TablePropertiesBottomBorderDescriptor implements ITablePropertyDescriptor<BorderInfo> {
    setProp(props: TableProperties, newValue: BorderInfo): void;
    getProp(props: TableProperties): BorderInfo;
    maskValue(): TablePropertiesMask;
}
export declare class TablePropertiesLeftBorderDescriptor implements ITablePropertyDescriptor<BorderInfo> {
    setProp(props: TableProperties, newValue: BorderInfo): void;
    getProp(props: TableProperties): BorderInfo;
    maskValue(): TablePropertiesMask;
}
export declare class TablePropertiesInsideHorizontalBorderDescriptor implements ITablePropertyDescriptor<BorderInfo> {
    setProp(props: TableProperties, newValue: BorderInfo): void;
    getProp(props: TableProperties): BorderInfo;
    maskValue(): TablePropertiesMask;
}
export declare class TablePropertiesInsideVerticalBorderDescriptor implements ITablePropertyDescriptor<BorderInfo> {
    setProp(props: TableProperties, newValue: BorderInfo): void;
    getProp(props: TableProperties): BorderInfo;
    maskValue(): TablePropertiesMask;
}
export declare class TablePropertiesTopMarginDescriptor implements ITablePropertyDescriptor<TableWidthUnit> {
    setProp(props: TableProperties, newValue: TableWidthUnit): void;
    getProp(props: TableProperties): TableWidthUnit;
    maskValue(): TablePropertiesMask;
}
export declare class TablePropertiesRightMarginDescriptor implements ITablePropertyDescriptor<TableWidthUnit> {
    setProp(props: TableProperties, newValue: TableWidthUnit): void;
    getProp(props: TableProperties): TableWidthUnit;
    maskValue(): TablePropertiesMask;
}
export declare class TablePropertiesBottomMarginDescriptor implements ITablePropertyDescriptor<TableWidthUnit> {
    setProp(props: TableProperties, newValue: TableWidthUnit): void;
    getProp(props: TableProperties): TableWidthUnit;
    maskValue(): TablePropertiesMask;
}
export declare class TablePropertiesLeftMarginDescriptor implements ITablePropertyDescriptor<TableWidthUnit> {
    setProp(props: TableProperties, newValue: TableWidthUnit): void;
    getProp(props: TableProperties): TableWidthUnit;
    maskValue(): TablePropertiesMask;
}
export declare class TablePropertiesCellSpacingDescriptor implements ITablePropertyDescriptor<TableWidthUnit> {
    setProp(props: TableProperties, newValue: TableWidthUnit): void;
    getProp(props: TableProperties): TableWidthUnit;
    maskValue(): TablePropertiesMask;
}
export declare class TablePropertiesIndentDescriptor implements ITablePropertyDescriptor<TableWidthUnit> {
    setProp(props: TableProperties, newValue: TableWidthUnit): void;
    getProp(props: TableProperties): TableWidthUnit;
    maskValue(): TablePropertiesMask;
}
export declare class TablePropertiesLayoutTypeDescriptor implements ITablePropertyDescriptor<TableLayoutType> {
    setProp(props: TableProperties, newValue: TableLayoutType): void;
    getProp(props: TableProperties): TableLayoutType;
    maskValue(): TablePropertiesMask;
}
export declare class TablePropertiesShadingInfoDescriptor implements ITablePropertyDescriptor<ShadingInfo> {
    setProp(props: TableProperties, newValue: ShadingInfo): void;
    getProp(props: TableProperties): ShadingInfo;
    maskValue(): TablePropertiesMask;
}
export declare class TablePropertiesRowAlignmentDescriptor implements ITablePropertyDescriptor<TableRowAlignment> {
    setProp(props: TableProperties, newValue: TableRowAlignment): void;
    getProp(props: TableProperties): TableRowAlignment;
    maskValue(): TablePropertiesMask;
}
export declare class TablePropertiesStyleColumnBandSizeDescriptor implements ITablePropertyDescriptor<number> {
    setProp(props: TableProperties, newValue: number): void;
    getProp(props: TableProperties): number;
    maskValue(): TablePropertiesMask;
}
export declare class TablePropertiesStyleRowBandSizeDescriptor implements ITablePropertyDescriptor<number> {
    setProp(props: TableProperties, newValue: number): void;
    getProp(props: TableProperties): number;
    maskValue(): TablePropertiesMask;
}
//# sourceMappingURL=table-descriptors.d.ts.map