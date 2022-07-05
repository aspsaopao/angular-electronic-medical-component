import { Table } from '../../../tables/main-structures/table';
import { SubDocumentChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class TableCellRemovedSubDocumentChange implements SubDocumentChangeBase {
    subDocumentId: number;
    table: Table;
    rowIndex: number;
    cellIndex: number;
    readonly type = ModelChangeType.TableCellRemoved;
    constructor(subDocumentId: number, table: Table, rowIndex: number, cellIndex: number);
}
//# sourceMappingURL=cell-removed.d.ts.map