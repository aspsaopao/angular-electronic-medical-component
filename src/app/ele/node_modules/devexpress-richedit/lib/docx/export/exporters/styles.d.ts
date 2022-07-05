import { ExporterBaseWithRootElement } from './base';
export declare class StylesExporter extends ExporterBaseWithRootElement {
    get filePath(): string;
    get rootElement(): string;
    get rootNSPrefix(): string;
    get rootNSValue(): string;
    protected fillWriter(): void;
    private exportDocumentDefaults;
    private exportDocumentCharacterDefaults;
    private exportDocumentParagraphDefaults;
}
//# sourceMappingURL=styles.d.ts.map