import { SubDocument } from '../../core/model/sub-document';
import { Table } from '../../core/model/tables/main-structures/table';
import { IProcessor } from '../../core/processor';
import { TableRowCollection } from '../collections/table/table-row-collection';
import { IntervalApi } from '../interval';
export declare class TableApi {
    private _processor;
    private _subDocument;
    private _table;
    constructor(processor: IProcessor, subDocument: SubDocument, table: Table);
    get index(): number;
    get interval(): IntervalApi;
    delete(): void;
    get rows(): TableRowCollection;
}
//# sourceMappingURL=table.d.ts.map