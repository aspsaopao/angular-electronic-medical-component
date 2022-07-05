import { DocumentCache } from '../../../caches/caches';
import { DocumentModel } from '../../../document-model';
import { TableConditionalStyle } from '../../../tables/styles/table-conditional-style';
export declare class JSONTableConditionalStyleConverter {
    static convertFromJSON(obj: any, cache: DocumentCache): TableConditionalStyle;
    static convertStylesFromJSON(jsonCondStyles: any, cache: DocumentCache): Record<number, TableConditionalStyle>;
    static convertToJSON(documentModel: DocumentModel, tableConditionalStyle: TableConditionalStyle): any;
    static convertStylesToJSON(documentModel: DocumentModel, tableConditionalStyles: {
        [typeId: number]: TableConditionalStyle;
    }): any;
}
//# sourceMappingURL=json-table-conditional-style-converter.d.ts.map