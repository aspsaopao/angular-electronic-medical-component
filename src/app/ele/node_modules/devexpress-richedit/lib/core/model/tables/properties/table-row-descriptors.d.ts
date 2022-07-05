import { TableRowAlignment } from '../secondary-structures/table-base-structures';
import { TableWidthUnit } from '../secondary-structures/table-units';
import { ITableRowPropertyDescriptor, TableRowProperties, TableRowPropertiesMask } from './table-row-properties';
export declare class TableRowPropertiesCantSplitDescriptor implements ITableRowPropertyDescriptor<boolean> {
    setProp(props: TableRowProperties, newValue: boolean): void;
    getProp(props: TableRowProperties): boolean;
    maskValue(): TableRowPropertiesMask;
}
export declare class TableRowPropertiesCellSpacingDescriptor implements ITableRowPropertyDescriptor<TableWidthUnit> {
    setProp(props: TableRowProperties, newValue: TableWidthUnit): void;
    getProp(props: TableRowProperties): TableWidthUnit;
    maskValue(): TableRowPropertiesMask;
}
export declare class TableRowPropertiesDivIdDescriptor implements ITableRowPropertyDescriptor<number> {
    setProp(props: TableRowProperties, newValue: number): void;
    getProp(props: TableRowProperties): number;
    maskValue(): TableRowPropertiesMask;
}
export declare class TableRowPropertiesHeaderDescriptor implements ITableRowPropertyDescriptor<boolean> {
    setProp(props: TableRowProperties, newValue: boolean): void;
    getProp(props: TableRowProperties): boolean;
    maskValue(): TableRowPropertiesMask;
}
export declare class TableRowPropertiesHideCellMarkDescriptor implements ITableRowPropertyDescriptor<boolean> {
    setProp(props: TableRowProperties, newValue: boolean): void;
    getProp(props: TableRowProperties): boolean;
    maskValue(): TableRowPropertiesMask;
}
export declare class TableRowPropertiesRowAlignmentDescriptor implements ITableRowPropertyDescriptor<TableRowAlignment> {
    setProp(props: TableRowProperties, newValue: TableRowAlignment): void;
    getProp(props: TableRowProperties): TableRowAlignment;
    maskValue(): TableRowPropertiesMask;
}
//# sourceMappingURL=table-row-descriptors.d.ts.map