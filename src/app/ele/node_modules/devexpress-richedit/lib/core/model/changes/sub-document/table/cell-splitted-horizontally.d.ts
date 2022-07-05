import { Table } from '../../../tables/main-structures/table';
import { SubDocumentChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class TableCellSplittedHorizontallySubDocumentChange implements SubDocumentChangeBase {
    subDocumentId: number;
    table: Table;
    rowIndex: number;
    cellIndex: number;
    rightDirection: boolean;
    readonly type = ModelChangeType.TableCellSplittedHorizontally;
    constructor(subDocumentId: number, table: Table, rowIndex: number, cellIndex: number, rightDirection: boolean);
}
//# sourceMappingURL=cell-splitted-horizontally.d.ts.map