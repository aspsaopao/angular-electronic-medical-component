import { FormatImportCallback, FormatImportReject, IDocumentImporter } from '../../core/formats/i-document-importer';
import { IModelOptions } from '../../core/model/document-model';
import { Data } from './data';
import { ImporterOptions } from './importer-options';
export declare class Importer implements IDocumentImporter {
    data: Data;
    callback: FormatImportCallback;
    private options;
    readonly asyncImportFromFile: boolean;
    private reject;
    constructor(options: ImporterOptions);
    importFromFile(blob: Blob, modelOptions: IModelOptions, callback: FormatImportCallback, reject: FormatImportReject): Promise<void>;
    private importRootRelations;
    private importMainSubDocument;
    private importStyles;
    private importThemes;
    private importNumbering;
    private importSettings;
    private linkNumberingListStyles;
}
//# sourceMappingURL=importer.d.ts.map