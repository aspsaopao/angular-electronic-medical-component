import { IProcessor } from '../core/processor';
import { IPdfExportOptions } from './export-options';
export declare class PdfExporter {
    readonly docProcessor: IProcessor;
    private get layoutFormatterManager();
    private get measurer();
    private get pdfFontCache();
    private get pdfSettings();
    private get fontsSettings();
    constructor(docProcessor: IProcessor);
    export(callback: (blob: Blob, stream: any) => void, options: ((pdfDocument: any | null) => void) | IPdfExportOptions): void;
    private exportDocument;
    private replaceUnloadedFonts;
    private getControlFontByType;
}
//# sourceMappingURL=exporter.d.ts.map