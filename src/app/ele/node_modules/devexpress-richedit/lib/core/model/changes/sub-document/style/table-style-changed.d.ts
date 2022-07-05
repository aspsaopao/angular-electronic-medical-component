import { Table } from '../../../tables/main-structures/table';
import { TableStyle } from '../../../tables/styles/table-style';
import { SubDocumentChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class TableStyleChangedSubDocumentChange implements SubDocumentChangeBase {
    subDocumentId: number;
    table: Table;
    newStyle: TableStyle;
    readonly type = ModelChangeType.TableStyleChanged;
    constructor(subDocumentId: number, table: Table, newStyle: TableStyle);
}
//# sourceMappingURL=table-style-changed.d.ts.map