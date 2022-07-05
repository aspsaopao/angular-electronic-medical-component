import { TablePosition } from '../../../core/model/tables/main-structures/table';
import { TableCell } from '../../../core/model/tables/main-structures/table-cell';
import { IProcessor } from '../../../core/processor';
import { TableCellApi } from '../../table/table-cell';
import { Collection } from '../collection';
export declare class TableCellCollection extends Collection<TableCellApi, TableCell> {
    private _tablePosition;
    constructor(processor: IProcessor, tablePosition: TablePosition);
    protected _getItem(coreItem: TableCell): TableCellApi;
    protected _getCoreItems(): TableCell[];
}
//# sourceMappingURL=table-cell-collection.d.ts.map