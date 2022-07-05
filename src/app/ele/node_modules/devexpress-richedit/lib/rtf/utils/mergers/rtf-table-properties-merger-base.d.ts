import { DocumentModel } from '../../../core/model/document-model';
import { Table } from '../../../core/model/tables/main-structures/table';
import { TableCell } from '../../../core/model/tables/main-structures/table-cell';
import { TableRow } from '../../../core/model/tables/main-structures/table-row';
import { TableCellProperties } from '../../../core/model/tables/properties/table-cell-properties';
import { TableProperties } from '../../../core/model/tables/properties/table-properties';
import { TableRowProperties } from '../../../core/model/tables/properties/table-row-properties';
import { ConditionalTableStyleFormatting } from '../../../core/model/tables/secondary-structures/table-base-structures';
import { TableConditionalStyle } from '../../../core/model/tables/styles/table-conditional-style';
import { TableStyle } from '../../../core/model/tables/styles/table-style';
export declare abstract class RtfTablePropertiesMergerBase<TProps extends TableCellProperties | TableRowProperties | TableProperties, TObj extends TableCell | TableRow | Table> {
    readonly model: DocumentModel;
    constructor(model: DocumentModel);
    abstract get defaultProperties(): TProps;
    abstract getMergedProperties(object: TObj): TProps;
    abstract getStyleMergedProperties(style: TableConditionalStyle, tableStyle: TableStyle, conditionalTFormatting: ConditionalTableStyleFormatting): TProps;
    protected abstract merge(source: TProps, tableStyle: TableStyle, object: TObj, tablePropertiesException: TableProperties, conditionalTFormatting: ConditionalTableStyleFormatting): TProps;
}
//# sourceMappingURL=rtf-table-properties-merger-base.d.ts.map