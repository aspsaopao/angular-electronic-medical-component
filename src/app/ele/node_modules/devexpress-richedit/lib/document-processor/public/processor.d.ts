import { DocumentModel } from '../../core/model/document-model';
import { DocumentFormatApi } from '../../model-api/formats/enum';
import { RichEditDocumentApi } from '../../model-api/document';
import { UnitConverterApi as UnitConverter } from '../../model-api/unit-converter';
import { CalculateDocumentVariableEventArgs } from '../docvar-args';
import { DocumentProcessorBase } from '../processor';
export declare abstract class DocumentProcessorBaseApi {
    document: RichEditDocumentApi;
    readonly unitConverter: UnitConverter;
    set onCalculateDocumentVariable(val: null | ((s: DocumentProcessorBaseApi, e: CalculateDocumentVariableEventArgs) => void));
    protected abstract _processor: DocumentProcessorBase;
    constructor();
    importDocument(source: string | File, documentFormat: DocumentFormatApi, callback: (importSuccess: boolean) => void): void;
    exportDocumentToBase64(callback: (base64: string) => void, documentFormat?: DocumentFormatApi): void;
    exportDocumentToBlob(callback: (blob: Blob) => void, documentFormat?: DocumentFormatApi): void;
    downloadDocument(fileName: string, documentFormat: DocumentFormatApi): void;
    exportToPdf(callback: (base64: string, blob: Blob, stream: any) => void, options?: ((pdfDocument: any) => void) | {
        modifyPdfDocument?: (pdfDocument: any) => void;
        modifyPdfPage?: (pdfDocument: any) => void;
    }): void;
    downloadPdf(fileName: string, options?: ((pdfDocument: any) => void) | {
        modifyPdfDocument?: (pdfDocument: any) => void;
        modifyPdfPage?: (pdfDocument: any) => void;
    }): void;
    dispose(): void;
    _importInnerDocument(model: DocumentModel): void;
    _initByEmptyModel(): void;
}
//# sourceMappingURL=processor.d.ts.map