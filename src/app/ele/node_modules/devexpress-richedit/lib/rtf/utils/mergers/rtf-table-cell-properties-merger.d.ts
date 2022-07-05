import { DocumentModel } from '../../../core/model/document-model';
import { TableCell } from '../../../core/model/tables/main-structures/table-cell';
import { TableCellProperties } from '../../../core/model/tables/properties/table-cell-properties';
import { TableProperties } from '../../../core/model/tables/properties/table-properties';
import { ConditionalTableStyleFormatting } from '../../../core/model/tables/secondary-structures/table-base-structures';
import { TableConditionalStyle } from '../../../core/model/tables/styles/table-conditional-style';
import { TableStyle } from '../../../core/model/tables/styles/table-style';
import { RtfTablePropertiesMergerBase } from './rtf-table-properties-merger-base';
export declare class RtfTableCellPropertiesMerger extends RtfTablePropertiesMergerBase<TableCellProperties, TableCell> {
    constructor(model: DocumentModel);
    get defaultProperties(): TableCellProperties;
    getMergedProperties(cell: TableCell): TableCellProperties;
    getStyleMergedProperties(style: TableConditionalStyle, tableStyle: TableStyle, conditionalTFormatting: ConditionalTableStyleFormatting): TableCellProperties;
    protected merge(source: TableCellProperties, tableStyle: TableStyle, cell: TableCell, _tablePropertiesException: TableProperties | null, conditionalFormatting: ConditionalTableStyleFormatting): TableCellProperties;
}
//# sourceMappingURL=rtf-table-cell-properties-merger.d.ts.map