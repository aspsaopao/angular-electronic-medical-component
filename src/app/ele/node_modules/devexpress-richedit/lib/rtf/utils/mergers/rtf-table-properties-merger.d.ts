import { DocumentModel } from '../../../core/model/document-model';
import { Table } from '../../../core/model/tables/main-structures/table';
import { TableProperties } from '../../../core/model/tables/properties/table-properties';
import { ConditionalTableStyleFormatting } from '../../../core/model/tables/secondary-structures/table-base-structures';
import { TableConditionalStyle } from '../../../core/model/tables/styles/table-conditional-style';
import { TableStyle } from '../../../core/model/tables/styles/table-style';
import { RtfTablePropertiesMergerBase } from './rtf-table-properties-merger-base';
export declare class RtfTablePropertiesMerger extends RtfTablePropertiesMergerBase<TableProperties, Table> {
    constructor(model: DocumentModel);
    get defaultProperties(): TableProperties;
    getMergedProperties(table: Table): TableProperties;
    getStyleMergedProperties(style: TableConditionalStyle, tableStyle: TableStyle, conditionalTFormatting: ConditionalTableStyleFormatting): TableProperties;
    protected merge(source: TableProperties, tableStyle: TableStyle, _table: Table, _tablePropertiesException: TableProperties, conditionalFormatting: ConditionalTableStyleFormatting): TableProperties;
}
//# sourceMappingURL=rtf-table-properties-merger.d.ts.map