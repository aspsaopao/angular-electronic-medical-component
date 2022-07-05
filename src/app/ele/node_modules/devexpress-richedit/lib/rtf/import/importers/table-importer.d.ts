import { RtfImportData } from '../rtf-import-data';
import { RtfTableReader } from '../table/table-reader';
import { RtfBaseImporter } from './importer-base';
export declare class RtfTableImporter extends RtfBaseImporter {
    get tableReader(): RtfTableReader;
    constructor(data: RtfImportData);
    private insertTables;
    pushState(): void;
    popState(): void;
    startImportSubDocument(): void;
    finalizeSubDocument(): void;
}
//# sourceMappingURL=table-importer.d.ts.map