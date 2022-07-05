import { BorderInfo } from '../../borders/border-info';
import { ShadingInfo } from '../../shadings/shading-info';
import { TableProperties, TablePropertiesMask } from '../properties/table-properties';
import { ConditionalTableStyleFormatting, TableLayoutType, TableRowAlignment } from '../secondary-structures/table-base-structures';
import { TableWidthUnit } from '../secondary-structures/table-units';
import { TableConditionalStyle } from '../styles/table-conditional-style';
import { TableMergerNotMergedPropertyResult, TablePropertiesMergerBase } from './table-properties-merger-base';
export declare abstract class TablePropertiesMerger<ResultPropertyType> extends TablePropertiesMergerBase<TableProperties, ResultPropertyType> {
    private static conditionalTableStyleFormattingPriority;
    protected getContainerFromConditionalStyle(condStyle: TableConditionalStyle): TableProperties;
    protected canUseValue(props: TableProperties): boolean;
    protected getCondTableStyleFormattingListForThisContainer(): ConditionalTableStyleFormatting[];
    getTableNotMergedProperty(container: TableProperties): TableMergerNotMergedPropertyResult<ResultPropertyType>;
    protected getNotMergedProperty(): TableMergerNotMergedPropertyResult<ResultPropertyType>;
}
export declare class TablePropertiesMergerIndent extends TablePropertiesMerger<TableWidthUnit> {
    protected getPropertyFromContainer(container: TableProperties): TableWidthUnit;
    protected getPropertyMask(): number;
}
export declare class TablePropertiesMergerCellSpacing extends TablePropertiesMerger<TableWidthUnit> {
    protected getPropertyFromContainer(container: TableProperties): TableWidthUnit;
    protected getPropertyMask(): number;
}
export declare abstract class TablePropertiesMergerBorderBase extends TablePropertiesMerger<BorderInfo> {
    private readonly isTableOuterBorder;
    constructor(isTableOuterBorder: boolean);
    protected getPropertiesMaskCore(mask: TablePropertiesMask): number;
}
export declare class TablePropertiesMergerBorderLeft extends TablePropertiesMergerBorderBase {
    constructor(isTableOuterBorder?: boolean);
    protected getPropertyFromContainer(container: TableProperties): BorderInfo;
    protected getPropertyMask(): number;
}
export declare class TablePropertiesMergerBorderRight extends TablePropertiesMergerBorderBase {
    constructor(isTableOuterBorder?: boolean);
    protected getPropertyFromContainer(container: TableProperties): BorderInfo;
    protected getPropertyMask(): number;
}
export declare class TablePropertiesMergerBorderTop extends TablePropertiesMergerBorderBase {
    constructor(isTableOuterBorder?: boolean);
    protected getPropertyFromContainer(container: TableProperties): BorderInfo;
    protected getPropertyMask(): number;
}
export declare class TablePropertiesMergerBorderBottom extends TablePropertiesMergerBorderBase {
    constructor(isTableOuterBorder?: boolean);
    protected getPropertyFromContainer(container: TableProperties): BorderInfo;
    protected getPropertyMask(): number;
}
export declare class TablePropertiesMergerBorderVertical extends TablePropertiesMerger<BorderInfo> {
    protected getPropertyFromContainer(container: TableProperties): BorderInfo;
    protected getPropertyMask(): number;
}
export declare class TablePropertiesMergerBorderHorizontal extends TablePropertiesMerger<BorderInfo> {
    protected getPropertyFromContainer(container: TableProperties): BorderInfo;
    protected getPropertyMask(): number;
}
export declare class TablePropertiesMergerMarginLeft extends TablePropertiesMerger<TableWidthUnit> {
    protected getPropertyFromContainer(container: TableProperties): TableWidthUnit;
    protected getPropertyMask(): number;
}
export declare class TablePropertiesMergerMarginRight extends TablePropertiesMerger<TableWidthUnit> {
    protected getPropertyFromContainer(container: TableProperties): TableWidthUnit;
    protected getPropertyMask(): number;
}
export declare class TablePropertiesMergerMarginTop extends TablePropertiesMerger<TableWidthUnit> {
    protected getPropertyFromContainer(container: TableProperties): TableWidthUnit;
    protected getPropertyMask(): number;
}
export declare class TablePropertiesMergerMarginBottom extends TablePropertiesMerger<TableWidthUnit> {
    protected getPropertyFromContainer(container: TableProperties): TableWidthUnit;
    protected getPropertyMask(): number;
}
export declare class TablePropertiesMergerLayoutType extends TablePropertiesMerger<TableLayoutType> {
    protected getPropertyFromContainer(container: TableProperties): TableLayoutType;
    protected getPropertyMask(): number;
}
export declare class TablePropertiesMergerShadingInfo extends TablePropertiesMerger<ShadingInfo> {
    protected getPropertyFromContainer(container: TableProperties): ShadingInfo;
    protected getPropertyMask(): number;
}
export declare class TablePropertiesMergerStyleColumnBandSize extends TablePropertiesMerger<number> {
    protected getPropertyFromContainer(container: TableProperties): number;
    protected getPropertyMask(): number;
}
export declare class TablePropertiesMergerStyleRowBandSize extends TablePropertiesMerger<number> {
    protected getPropertyFromContainer(container: TableProperties): number;
    protected getPropertyMask(): number;
}
export declare class TablePropertiesMergerHorizontalAlignment extends TablePropertiesMerger<TableRowAlignment> {
    protected getPropertyFromContainer(container: TableProperties): TableRowAlignment;
    protected getPropertyMask(): number;
    protected actionBeforeDefaultValue(): boolean;
}
//# sourceMappingURL=table-properties-merger.d.ts.map