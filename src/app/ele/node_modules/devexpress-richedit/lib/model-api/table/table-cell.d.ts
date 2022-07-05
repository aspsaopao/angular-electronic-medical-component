import { TablePosition } from '../../core/model/tables/main-structures/table';
import { IntervalApi } from '../interval';
export declare class TableCellApi {
    private _tablePosition;
    constructor(tablePosition: TablePosition);
    get index(): number;
    get interval(): IntervalApi;
}
//# sourceMappingURL=table-cell.d.ts.map