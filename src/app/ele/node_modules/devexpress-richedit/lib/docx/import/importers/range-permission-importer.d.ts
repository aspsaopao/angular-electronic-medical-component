import { Data } from '../data';
import { ImportRangePermissionInfo } from '../model/import-range-permission-info';
export declare class RangePermissionImporter {
    data: Data;
    rangePermissions: Record<string, ImportRangePermissionInfo>;
    constructor(data: Data);
    insertRangePermissions(): void;
    private createDocumentPermissions;
    private addPermission;
}
//# sourceMappingURL=range-permission-importer.d.ts.map