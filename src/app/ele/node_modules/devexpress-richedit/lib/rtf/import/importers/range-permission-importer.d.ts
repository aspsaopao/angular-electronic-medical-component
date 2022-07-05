import { ImportRangePermissionInfo } from '../model/range-permission/import-range-permission-info';
import { RtfRevisionAuthors } from '../model/rtf-revision-authors';
import { RtfImportData } from '../rtf-import-data';
import { RtfBaseImporter } from './importer-base';
export declare class RtfRangePermissionImporter extends RtfBaseImporter {
    get rangePermissions(): Record<string, ImportRangePermissionInfo>;
    revisionAuthors: RtfRevisionAuthors;
    userNames: string[];
    constructor(data: RtfImportData);
    private insertRangePermissions;
    getUserNameById(id: number): string;
    pushState(): void;
    popState(): void;
    startImportSubDocument(): void;
    finalizeSubDocument(): void;
}
//# sourceMappingURL=range-permission-importer.d.ts.map