import { SubDocument } from '../../../core/model/sub-document';
import { Table } from '../../../core/model/tables/main-structures/table';
import { IProcessor } from '../../../core/processor';
import { IInterval } from '../../interval';
import { TableApi } from '../../table/table';
import { Collection } from '../collection';
export declare class TableCollection extends Collection<TableApi, Table> {
    protected _subDocument: SubDocument;
    constructor(processor: IProcessor, subDocument: SubDocument);
    create(position: number, columnCount: number, rowCount: number): TableApi;
    find(position: number | IInterval): TableApi[];
    protected _getItem(coreItem: Table): TableApi;
    protected _getCoreItems(): Table[];
}
//# sourceMappingURL=table-collection.d.ts.map