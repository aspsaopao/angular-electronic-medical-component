import { IProcessor } from '../../core/processor';
import { IPdfExportOptions } from '../export-options';
export declare function pdfExport(docProcessor: IProcessor, callback: (blob: Blob, stream: any) => void, options?: ((pdfDocument: any) => void) | IPdfExportOptions): void;
export declare function downloadPdf(docProcessor: IProcessor, fileName: string, options?: ((pdfDocument: any) => void) | IPdfExportOptions): void;
//# sourceMappingURL=pdf.d.ts.map