import { CellGridInfo } from '../../../model/tables/grid/table-cell-grid-info';
import { Table } from '../../../model/tables/main-structures/table';
import { Columns } from './columns';
export declare class Grid {
    table: Table;
    columns: Columns;
    tableCellGridInfos: CellGridInfo[][];
    tableCellInfos: CellGridInfo[][];
    constructor(table: Table);
    get commonWidth(): number;
}
//# sourceMappingURL=grid.d.ts.map