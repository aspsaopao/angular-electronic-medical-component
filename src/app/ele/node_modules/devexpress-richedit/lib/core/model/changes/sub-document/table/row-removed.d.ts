import { Table } from '../../../tables/main-structures/table';
import { SubDocumentChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class TableRowRemovedSubDocumentChange implements SubDocumentChangeBase {
    subDocumentId: number;
    table: Table;
    rowIndex: number;
    readonly type = ModelChangeType.TableRowRemoved;
    constructor(subDocumentId: number, table: Table, rowIndex: number);
}
//# sourceMappingURL=row-removed.d.ts.map