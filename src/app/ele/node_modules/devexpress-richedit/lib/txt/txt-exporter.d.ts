import { IDocumentExporter } from '../core/formats/i-document-exporter';
import { DocumentExporterOptions } from '../core/formats/options';
import { ModelManipulator } from '../core/model/manipulators/model-manipulator';
export declare class TxtExporter implements IDocumentExporter {
    private options;
    private modelManipulator;
    private get model();
    constructor(modelManipulator: ModelManipulator, options: DocumentExporterOptions);
    exportToBlob(callback: (blob: Blob) => void): void;
    exportToBase64(callback: (base64: string) => void): void;
    private getBlob;
}
//# sourceMappingURL=txt-exporter.d.ts.map