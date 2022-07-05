import { InvalidDocumentMode } from '../../core/formats/utils/enums';
export declare class ImporterOptions {
    invalidDocumentMode: InvalidDocumentMode;
    ignoreParseErrors: boolean;
    allowIntPercentage: boolean;
    createEmptyDocumentOnLoadError: boolean;
    throwInvalidFile: (reason: string) => void;
    ignoreDeletedText: boolean;
    ignoreInsertedText: boolean;
    ignoreComments: boolean;
    constructor(throwInvalidFile?: (reason: string) => void);
}
//# sourceMappingURL=importer-options.d.ts.map