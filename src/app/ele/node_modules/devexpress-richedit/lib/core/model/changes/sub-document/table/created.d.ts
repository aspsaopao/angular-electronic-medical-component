import { Table } from '../../../tables/main-structures/table';
import { SubDocumentChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class TableCreatedSubDocumentChange implements SubDocumentChangeBase {
    subDocumentId: number;
    table: Table;
    readonly type = ModelChangeType.TableCreated;
    constructor(subDocumentId: number, table: Table);
}
//# sourceMappingURL=created.d.ts.map