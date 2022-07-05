import { TableStyle } from '../../../../core/model/tables/styles/table-style';
import { RtfImportData } from '../../rtf-import-data';
import { RtfBaseStyleImporter } from './base-style-importer';
export declare class RtfTableStyleImporter extends RtfBaseStyleImporter<TableStyle> {
    get styleCollection(): TableStyle[];
    constructor(data: RtfImportData);
    createEmpty(): TableStyle;
    addStyle(style: TableStyle): TableStyle;
}
//# sourceMappingURL=table-style-importer.d.ts.map