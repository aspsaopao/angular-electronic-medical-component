import { DocumentModel } from '../../document-model';
export declare class JSONStylesExporter {
    static importStyles(documentModel: DocumentModel, content: any): void;
    static exportStyles(documentModel: DocumentModel): {};
    private static exportCharacterStyles;
    private static exportParagraphStyles;
    private static exportNumberingStyles;
    private static exportTableStyles;
    private static importCharacterStyles;
    private static importParagraphStyles;
    private static importNumberingStyles;
    private static importTableStyles;
    private static finishCharacterStylesImport;
    private static finishParagraphStylesImport;
    private static finishNumberingListStylesImport;
    private static finishTableStylesImport;
}
//# sourceMappingURL=json-styles-exporter.d.ts.map