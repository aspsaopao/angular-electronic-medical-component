import { Table } from '../../../tables/main-structures/table';
import { SubDocumentChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class TableCellMergedHorizontallySubDocumentChange implements SubDocumentChangeBase {
    subDocumentId: number;
    table: Table;
    rowIndex: number;
    cellIndex: number;
    rightDirection: boolean;
    readonly type = ModelChangeType.TableCellMergedHorizontally;
    constructor(subDocumentId: number, table: Table, rowIndex: number, cellIndex: number, rightDirection: boolean);
}
//# sourceMappingURL=cell-merged-horizontally.d.ts.map