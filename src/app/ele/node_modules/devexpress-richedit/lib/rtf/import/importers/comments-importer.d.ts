import { RtfImportData } from '../rtf-import-data';
import { RtfBaseImporter } from './importer-base';
export declare class RtfCommentsImporter extends RtfBaseImporter {
    constructor(data: RtfImportData);
    private insertComments;
    pushState(): void;
    popState(): void;
    startImportSubDocument(): void;
    finalizeSubDocument(): void;
}
//# sourceMappingURL=comments-importer.d.ts.map