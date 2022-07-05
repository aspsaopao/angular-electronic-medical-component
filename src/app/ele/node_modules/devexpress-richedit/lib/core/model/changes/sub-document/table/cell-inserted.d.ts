import { Table } from '../../../tables/main-structures/table';
import { SubDocumentChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class TableCellInsertedSubDocumentChange implements SubDocumentChangeBase {
    subDocumentId: number;
    table: Table;
    rowIndex: number;
    cellIndex: number;
    readonly type = ModelChangeType.TableCellInserted;
    constructor(subDocumentId: number, table: Table, rowIndex: number, cellIndex: number);
}
//# sourceMappingURL=cell-inserted.d.ts.map