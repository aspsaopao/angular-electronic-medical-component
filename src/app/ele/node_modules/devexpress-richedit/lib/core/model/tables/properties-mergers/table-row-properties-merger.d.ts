import { DocumentModel } from '../../document-model';
import { Table } from '../main-structures/table';
import { TableProperties } from '../properties/table-properties';
import { TableRowProperties } from '../properties/table-row-properties';
import { ConditionalTableStyleFormatting, TableRowAlignment } from '../secondary-structures/table-base-structures';
import { TableWidthUnit } from '../secondary-structures/table-units';
import { TableConditionalStyle } from '../styles/table-conditional-style';
import { TableMergerNotMergedPropertyResult, TablePropertiesMergerBase } from './table-properties-merger-base';
export declare abstract class TableRowPropertiesMerger<ResultPropertyType> extends TablePropertiesMergerBase<TableRowProperties, ResultPropertyType> {
    private static conditionalTableStyleFormattingPriority;
    protected getContainerFromConditionalStyle(condStyle: TableConditionalStyle): TableRowProperties;
    protected canUseValue(props: TableRowProperties): boolean;
    protected getCondTableStyleFormattingListForThisContainer(): ConditionalTableStyleFormatting[];
    protected getNotMergedProperty(): TableMergerNotMergedPropertyResult<ResultPropertyType>;
}
export declare class TableRowPropertiesMergerCellSpacing extends TableRowPropertiesMerger<TableWidthUnit> {
    model: DocumentModel;
    table: Table;
    constructor(model: DocumentModel, table: Table, tablePropertiesException: TableProperties);
    protected getPropertyFromContainer(container: TableRowProperties): TableWidthUnit;
    protected getPropertyMask(): number;
    protected getNotMergedProperty(): TableMergerNotMergedPropertyResult<TableWidthUnit>;
    protected actionBeforeDefaultValue(): boolean;
}
export declare class TableRowPropertiesMergerCantSplit extends TableRowPropertiesMerger<boolean> {
    protected getPropertyFromContainer(container: TableRowProperties): boolean;
    protected getPropertyMask(): number;
}
export declare class TableRowPropertiesMergerHorizontalAlignment extends TableRowPropertiesMerger<TableRowAlignment> {
    constructor(tablePropertiesException: TableProperties);
    protected getPropertyFromContainer(container: TableRowProperties): TableRowAlignment;
    protected getPropertyMask(): number;
    protected actionBeforeDefaultValue(): boolean;
    protected getNotMergedProperty(): TableMergerNotMergedPropertyResult<TableRowAlignment>;
}
export declare class TableRowPropertiesMergerDivId extends TableRowPropertiesMerger<number> {
    protected getPropertyFromContainer(container: TableRowProperties): number;
    protected getPropertyMask(): number;
    protected actionBeforeDefaultValue(): boolean;
}
//# sourceMappingURL=table-row-properties-merger.d.ts.map