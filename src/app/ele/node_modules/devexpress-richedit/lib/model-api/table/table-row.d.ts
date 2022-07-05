import { TablePosition } from '../../core/model/tables/main-structures/table';
import { IProcessor } from '../../core/processor';
import { TableCellCollection } from '../collections/table/table-cell-collection';
import { IntervalApi } from '../interval';
export declare class TableRowApi {
    private _tablePosition;
    private _processor;
    constructor(processor: IProcessor, tablePosition: TablePosition);
    get index(): number;
    get interval(): IntervalApi;
    get cells(): TableCellCollection;
}
//# sourceMappingURL=table-row.d.ts.map