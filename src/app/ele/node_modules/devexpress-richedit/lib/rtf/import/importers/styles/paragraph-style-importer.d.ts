import { ParagraphStyle } from '../../../../core/model/paragraph/paragraph-style';
import { RtfImportData } from '../../rtf-import-data';
import { RtfBaseStyleImporter } from './base-style-importer';
export declare class RtfParagraphStyleImporter extends RtfBaseStyleImporter<ParagraphStyle> {
    paragraphTableStyles: Record<number, number>;
    addStyle(style: ParagraphStyle): ParagraphStyle;
    ensureStyleExist(): void;
    constructor(data: RtfImportData);
    get styleCollection(): ParagraphStyle[];
    createEmpty(): ParagraphStyle;
}
//# sourceMappingURL=paragraph-style-importer.d.ts.map