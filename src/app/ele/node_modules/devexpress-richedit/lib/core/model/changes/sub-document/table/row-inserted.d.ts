import { Table } from '../../../tables/main-structures/table';
import { SubDocumentChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class TableRowInsertedSubDocumentChange implements SubDocumentChangeBase {
    subDocumentId: number;
    table: Table;
    rowIndex: number;
    readonly type = ModelChangeType.TableRowInserted;
    constructor(subDocumentId: number, table: Table, rowIndex: number);
}
//# sourceMappingURL=row-inserted.d.ts.map