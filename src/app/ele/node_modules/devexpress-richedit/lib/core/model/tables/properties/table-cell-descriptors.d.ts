import { BorderInfo } from '../../borders/border-info';
import { ShadingInfo } from '../../shadings/shading-info';
import { TableCellVerticalAlignment, TextDirection } from '../secondary-structures/table-base-structures';
import { TableWidthUnit } from '../secondary-structures/table-units';
import { ITableCellPropertyDescriptor, TableCellProperties, TableCellPropertiesMask } from './table-cell-properties';
export declare class TableCellPropertiesTopBorderDescriptor implements ITableCellPropertyDescriptor<BorderInfo> {
    setProp(props: TableCellProperties, newValue: BorderInfo): void;
    getProp(props: TableCellProperties): BorderInfo;
    maskValue(): TableCellPropertiesMask;
}
export declare class TableCellPropertiesRightBorderDescriptor implements ITableCellPropertyDescriptor<BorderInfo> {
    setProp(props: TableCellProperties, newValue: BorderInfo): void;
    getProp(props: TableCellProperties): BorderInfo;
    maskValue(): TableCellPropertiesMask;
}
export declare class TableCellPropertiesBottomBorderDescriptor implements ITableCellPropertyDescriptor<BorderInfo> {
    setProp(props: TableCellProperties, newValue: BorderInfo): void;
    getProp(props: TableCellProperties): BorderInfo;
    maskValue(): TableCellPropertiesMask;
}
export declare class TableCellPropertiesLeftBorderDescriptor implements ITableCellPropertyDescriptor<BorderInfo> {
    setProp(props: TableCellProperties, newValue: BorderInfo): void;
    getProp(props: TableCellProperties): BorderInfo;
    maskValue(): TableCellPropertiesMask;
}
export declare class TableCellPropertiesTopLeftDiagonalBorderDescriptor implements ITableCellPropertyDescriptor<BorderInfo> {
    setProp(props: TableCellProperties, newValue: BorderInfo): void;
    getProp(props: TableCellProperties): BorderInfo;
    maskValue(): TableCellPropertiesMask;
}
export declare class TableCellPropertiesTopRightDiagonalBorderDescriptor implements ITableCellPropertyDescriptor<BorderInfo> {
    setProp(props: TableCellProperties, newValue: BorderInfo): void;
    getProp(props: TableCellProperties): BorderInfo;
    maskValue(): TableCellPropertiesMask;
}
export declare class TableCellPropertiesTopMarginDescriptor implements ITableCellPropertyDescriptor<TableWidthUnit> {
    setProp(props: TableCellProperties, newValue: TableWidthUnit): void;
    getProp(props: TableCellProperties): TableWidthUnit;
    maskValue(): TableCellPropertiesMask;
}
export declare class TableCellPropertiesRightMarginDescriptor implements ITableCellPropertyDescriptor<TableWidthUnit> {
    setProp(props: TableCellProperties, newValue: TableWidthUnit): void;
    getProp(props: TableCellProperties): TableWidthUnit;
    maskValue(): TableCellPropertiesMask;
}
export declare class TableCellPropertiesBottomMarginDescriptor implements ITableCellPropertyDescriptor<TableWidthUnit> {
    setProp(props: TableCellProperties, newValue: TableWidthUnit): void;
    getProp(props: TableCellProperties): TableWidthUnit;
    maskValue(): TableCellPropertiesMask;
}
export declare class TableCellPropertiesLeftMarginDescriptor implements ITableCellPropertyDescriptor<TableWidthUnit> {
    setProp(props: TableCellProperties, newValue: TableWidthUnit): void;
    getProp(props: TableCellProperties): TableWidthUnit;
    maskValue(): TableCellPropertiesMask;
}
export declare class TableCellPropertiesFitTextDescriptor implements ITableCellPropertyDescriptor<boolean> {
    setProp(props: TableCellProperties, newValue: boolean): void;
    getProp(props: TableCellProperties): boolean;
    maskValue(): TableCellPropertiesMask;
}
export declare class TableCellPropertiesHideCellMarkDescriptor implements ITableCellPropertyDescriptor<boolean> {
    setProp(props: TableCellProperties, newValue: boolean): void;
    getProp(props: TableCellProperties): boolean;
    maskValue(): TableCellPropertiesMask;
}
export declare class TableCellPropertiesNoWrapDescriptor implements ITableCellPropertyDescriptor<boolean> {
    setProp(props: TableCellProperties, newValue: boolean): void;
    getProp(props: TableCellProperties): boolean;
    maskValue(): TableCellPropertiesMask;
}
export declare class TableCellPropertiesShadingInfoDescriptor implements ITableCellPropertyDescriptor<ShadingInfo> {
    setProp(props: TableCellProperties, newValue: ShadingInfo): void;
    getProp(props: TableCellProperties): ShadingInfo;
    maskValue(): TableCellPropertiesMask;
}
export declare class TableCellPropertiesTextDirectionDescriptor implements ITableCellPropertyDescriptor<TextDirection> {
    setProp(props: TableCellProperties, newValue: TextDirection): void;
    getProp(props: TableCellProperties): TextDirection;
    maskValue(): TableCellPropertiesMask;
}
export declare class TableCellPropertiesVerticalAlignmentDescriptor implements ITableCellPropertyDescriptor<TableCellVerticalAlignment> {
    setProp(props: TableCellProperties, newValue: TableCellVerticalAlignment): void;
    getProp(props: TableCellProperties): TableCellVerticalAlignment;
    maskValue(): TableCellPropertiesMask;
}
//# sourceMappingURL=table-cell-descriptors.d.ts.map