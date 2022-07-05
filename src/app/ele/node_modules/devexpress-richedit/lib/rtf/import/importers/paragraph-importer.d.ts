import { Paragraph } from '../../../core/model/paragraph/paragraph';
import { MaskedParagraphProperties } from '../../../core/model/paragraph/paragraph-properties';
import { ParagraphStyle } from '../../../core/model/paragraph/paragraph-style';
import { RtfParagraphProperties } from '../model/paragraph/paragraph-properties';
import { RtfImportData } from '../rtf-import-data';
import { RtfBaseImporter } from './importer-base';
export declare class RtfParagraphImporter extends RtfBaseImporter {
    private states;
    get paragraph(): Paragraph;
    set paragraph(value: Paragraph);
    get paragraphFormatting(): RtfParagraphProperties;
    set paragraphFormatting(value: RtfParagraphProperties);
    constructor(data: RtfImportData);
    static getOnlyOwnCharacterProperties(source: MaskedParagraphProperties, parentStyle: ParagraphStyle): MaskedParagraphProperties;
    createEmptyParagraph(): Paragraph;
    fixLastParagraph(): void;
    insertParagraph(asSectionRun?: boolean): Paragraph;
    ensureLastParagraph(): void;
    applyParagraphFormatting(paragraph: Paragraph, sectionBreak: boolean): void;
    applyParagraphFormattingCore(paragraph: Paragraph, paragraphFormatting: RtfParagraphProperties): void;
    pushState(): void;
    popState(): void;
    startImportSubDocument(): void;
    finalizeSubDocument(): void;
}
//# sourceMappingURL=paragraph-importer.d.ts.map