import { IDocumentExporter } from '../../core/formats/i-document-exporter';
import { ModelManipulator } from '../../core/model/manipulators/model-manipulator';
import { DocxExportOptions } from './docx-export-options';
export declare class DocxExporter implements IDocumentExporter {
    private data;
    private modelManipulator;
    private options;
    constructor(modelManipulator: ModelManipulator, options: DocxExportOptions);
    exportToBlob(callback: (blob: Blob) => void): void;
    exportToBase64(callback: (base64: string) => void): void;
    private exportInner;
    private exportCustomProperties;
    private exportFootNotesAndEndNotes;
    private exportComments;
    private exportWebSettings;
}
//# sourceMappingURL=exporter.d.ts.map