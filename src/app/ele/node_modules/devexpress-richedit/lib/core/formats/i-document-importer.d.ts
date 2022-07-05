import { DocumentModel, IModelOptions } from '../model/document-model';
import { DocumentImporterErrors } from './document-importer-errors';
import { FormatImagesImporter } from './utils/images-import';
export declare type FormatImportCallback = (model: DocumentModel, formatImagesImporter: FormatImagesImporter) => void;
export declare type FormatImportReject = (reason: DocumentImporterErrors) => void;
export interface IDocumentImporter {
    importFromFile(blob: Blob, modelOptions: IModelOptions, callback: FormatImportCallback, reject: FormatImportReject): void;
}
//# sourceMappingURL=i-document-importer.d.ts.map