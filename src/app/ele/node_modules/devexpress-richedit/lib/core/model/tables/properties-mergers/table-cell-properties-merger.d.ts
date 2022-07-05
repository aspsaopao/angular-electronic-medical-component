import { BorderInfo } from '../../borders/border-info';
import { DocumentModel } from '../../document-model';
import { ShadingInfo } from '../../shadings/shading-info';
import { Table } from '../main-structures/table';
import { TableCellProperties } from '../properties/table-cell-properties';
import { TableProperties } from '../properties/table-properties';
import { ConditionalTableStyleFormatting, TableCellVerticalAlignment } from '../secondary-structures/table-base-structures';
import { TableWidthUnit } from '../secondary-structures/table-units';
import { TableConditionalStyle } from '../styles/table-conditional-style';
import { TablePropertiesMerger } from './table-properties-merger';
import { TableMergerNotMergedPropertyResult, TablePropertiesMergerBase } from './table-properties-merger-base';
export declare abstract class TableCellPropertiesMerger<ResultPropertyType> extends TablePropertiesMergerBase<TableCellProperties, ResultPropertyType> {
    static conditionalTableStyleFormattingPriority: ConditionalTableStyleFormatting[];
    protected getContainerFromConditionalStyle(condStyle: TableConditionalStyle): TableCellProperties;
    protected canUseValue(props: TableCellProperties): boolean;
    protected getCondTableStyleFormattingListForThisContainer(): ConditionalTableStyleFormatting[];
    protected getNotMergedProperty(): TableMergerNotMergedPropertyResult<ResultPropertyType>;
}
export declare abstract class TableCellPropertiesMergerMarginBase extends TableCellPropertiesMerger<TableWidthUnit> {
    protected table: Table;
    protected model: DocumentModel;
    constructor(table: Table, model: DocumentModel, tablePropertiesException: TableProperties);
    protected actionBeforeDefaultValue(): boolean;
    protected abstract getMarginMerger(): TablePropertiesMerger<TableWidthUnit>;
    protected getNotMergedProperty(): TableMergerNotMergedPropertyResult<TableWidthUnit>;
}
export declare class TableCellPropertiesMergerMarginLeft extends TableCellPropertiesMergerMarginBase {
    protected getPropertyMask(): number;
    protected getPropertyFromContainer(container: TableCellProperties): TableWidthUnit;
    protected getMarginMerger(): TablePropertiesMerger<TableWidthUnit>;
}
export declare class TableCellPropertiesMergerMarginRight extends TableCellPropertiesMergerMarginBase {
    protected getPropertyMask(): number;
    protected getPropertyFromContainer(container: TableCellProperties): TableWidthUnit;
    protected getMarginMerger(): TablePropertiesMerger<TableWidthUnit>;
}
export declare class TableCellPropertiesMergerMarginTop extends TableCellPropertiesMergerMarginBase {
    protected getPropertyMask(): number;
    protected getPropertyFromContainer(container: TableCellProperties): TableWidthUnit;
    protected getMarginMerger(): TablePropertiesMerger<TableWidthUnit>;
}
export declare class TableCellPropertiesMergerMarginBottom extends TableCellPropertiesMergerMarginBase {
    protected getPropertyMask(): number;
    protected getPropertyFromContainer(container: TableCellProperties): TableWidthUnit;
    protected getMarginMerger(): TablePropertiesMerger<TableWidthUnit>;
}
export declare abstract class TableCellPropertiesMergerBorderBase extends TableCellPropertiesMerger<BorderInfo> {
    constructor(tablePropertiesException: TableProperties);
    protected actionBeforeDefaultValue(): boolean;
}
export declare class TableCellPropertiesMergerBorderLeft extends TableCellPropertiesMergerBorderBase {
    isOutsideBorder: boolean;
    constructor(tablePropertiesException: TableProperties, isOutsideBorder: boolean);
    protected getPropertyFromContainer(container: TableCellProperties): BorderInfo;
    protected getPropertyMask(): number;
    protected getNotMergedProperty(): TableMergerNotMergedPropertyResult<BorderInfo>;
}
export declare class TableCellPropertiesMergerBorderRight extends TableCellPropertiesMergerBorderBase {
    isOutsideBorder: boolean;
    constructor(tablePropertiesException: TableProperties, isOutsideBorder: boolean);
    protected getPropertyFromContainer(container: TableCellProperties): BorderInfo;
    protected getPropertyMask(): number;
    protected getNotMergedProperty(): TableMergerNotMergedPropertyResult<BorderInfo>;
}
export declare class TableCellPropertiesMergerBorderTop extends TableCellPropertiesMergerBorderBase {
    isOutsideBorder: boolean;
    constructor(tablePropertiesException: TableProperties, isOutsideBorder: boolean);
    protected getPropertyFromContainer(container: TableCellProperties): BorderInfo;
    protected getPropertyMask(): number;
    protected getNotMergedProperty(): TableMergerNotMergedPropertyResult<BorderInfo>;
}
export declare class TableCellPropertiesMergerBorderBottom extends TableCellPropertiesMergerBorderBase {
    isOutsideBorder: boolean;
    constructor(tablePropertiesException: TableProperties, isOutsideBorder: boolean);
    protected getPropertyFromContainer(container: TableCellProperties): BorderInfo;
    protected getPropertyMask(): number;
    protected getNotMergedProperty(): TableMergerNotMergedPropertyResult<BorderInfo>;
}
export declare class TableCellPropertiesMergerBorderTopLeftDiagonal extends TableCellPropertiesMergerBorderBase {
    protected getPropertyFromContainer(container: TableCellProperties): BorderInfo;
    protected getPropertyMask(): number;
}
export declare class TableCellPropertiesMergerBorderTopRightDiagonal extends TableCellPropertiesMergerBorderBase {
    protected getPropertyFromContainer(container: TableCellProperties): BorderInfo;
    protected getPropertyMask(): number;
}
export declare class TableCellPropertiesMergerNoWrap extends TableCellPropertiesMerger<boolean> {
    protected getPropertyFromContainer(container: TableCellProperties): boolean;
    protected getPropertyMask(): number;
}
export declare class TableCellPropertiesMergerShadingInfo extends TableCellPropertiesMerger<ShadingInfo> {
    protected getPropertyFromContainer(container: TableCellProperties): ShadingInfo;
    protected getPropertyMask(): number;
}
export declare class TableCellVerticalAlignmentMerger extends TableCellPropertiesMerger<TableCellVerticalAlignment> {
    protected getPropertyFromContainer(container: TableCellProperties): TableCellVerticalAlignment;
    protected getPropertyMask(): number;
}
//# sourceMappingURL=table-cell-properties-merger.d.ts.map