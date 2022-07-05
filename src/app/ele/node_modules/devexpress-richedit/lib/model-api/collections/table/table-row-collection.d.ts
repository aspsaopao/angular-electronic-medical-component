import { Table } from '../../../core/model/tables/main-structures/table';
import { TableRow } from '../../../core/model/tables/main-structures/table-row';
import { IProcessor } from '../../../core/processor';
import { TableRowApi } from '../../table/table-row';
import { Collection } from '../collection';
export declare class TableRowCollection extends Collection<TableRowApi, TableRow> {
    private _table;
    constructor(processor: IProcessor, table: Table);
    protected _getItem(coreItem: TableRow): TableRowApi;
    protected _getCoreItems(): TableRow[];
}
//# sourceMappingURL=table-row-collection.d.ts.map