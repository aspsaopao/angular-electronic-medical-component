import { DocumentModel } from '../../../core/model/document-model';
import { TableRow } from '../../../core/model/tables/main-structures/table-row';
import { TableProperties } from '../../../core/model/tables/properties/table-properties';
import { TableRowProperties } from '../../../core/model/tables/properties/table-row-properties';
import { ConditionalTableStyleFormatting } from '../../../core/model/tables/secondary-structures/table-base-structures';
import { TableConditionalStyle } from '../../../core/model/tables/styles/table-conditional-style';
import { TableStyle } from '../../../core/model/tables/styles/table-style';
import { RtfTablePropertiesMergerBase } from './rtf-table-properties-merger-base';
export declare class RtfTableRowPropertiesMerger extends RtfTablePropertiesMergerBase<TableRowProperties, TableRow> {
    constructor(model: DocumentModel);
    get defaultProperties(): TableRowProperties;
    getMergedProperties(row: TableRow): TableRowProperties;
    getStyleMergedProperties(style: TableConditionalStyle, tableStyle: TableStyle, conditionalFormatting: ConditionalTableStyleFormatting): TableRowProperties;
    protected merge(source: TableRowProperties, tableStyle: TableStyle, row: TableRow, tablePropertiesException: TableProperties, conditionalFormatting: ConditionalTableStyleFormatting): TableRowProperties;
}
//# sourceMappingURL=rtf-table-row-properties-merger.d.ts.map