import { SubDocument } from '../../../../core/model/sub-document';
import { Table } from '../../../../core/model/tables/main-structures/table';
import { ImportBookmarkInfoCore } from '../bookmark/import-bookmark-info-core';
export declare class ImportRangePermissionInfo extends ImportBookmarkInfoCore {
    columnFirst: number;
    columnLast: number;
    table: Table;
    firstRowIndex: number;
    lastRowIndex: number;
    group: string;
    userName: string;
    constructor();
    validate(subDocument: SubDocument): boolean;
}
//# sourceMappingURL=import-range-permission-info.d.ts.map