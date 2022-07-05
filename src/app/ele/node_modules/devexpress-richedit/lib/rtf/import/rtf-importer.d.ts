import { FormatImportCallback, FormatImportReject, IDocumentImporter } from '../../core/formats/i-document-importer';
import { IModelOptions } from '../../core/model/document-model';
import { ChunkedText } from '@devexpress/utils/lib/class/chunked-text';
import { RtfImporterOptions } from './importer-options';
import { RtfImportData } from './rtf-import-data';
export declare class RtfImporter implements IDocumentImporter {
    rtfText: ChunkedText;
    data: RtfImportData;
    options: RtfImporterOptions;
    modelOptions: IModelOptions;
    constructor(options: RtfImporterOptions);
    importFromFile(blob: Blob, modelOptions: IModelOptions, callback: FormatImportCallback, reject: FormatImportReject): void;
    importFromString(rtfText: string, modelOptions: IModelOptions, callback: FormatImportCallback, reject: FormatImportReject): void;
    private importFromStringInner;
    private checkSignature;
}
//# sourceMappingURL=rtf-importer.d.ts.map