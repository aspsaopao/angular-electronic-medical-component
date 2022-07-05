import { CellGridInfo } from '../../../model/tables/grid/table-cell-grid-info';
import { Table, TablePositionIndexes } from '../../../model/tables/main-structures/table';
export declare class CellGridInfoManager {
    tableCellGridInfos: CellGridInfo[][];
    tableCellInfos: CellGridInfo[][];
    constructor(table: Table);
    gridInfosByTablePosition(tblPos: TablePositionIndexes): CellGridInfo;
}
//# sourceMappingURL=cell-grid-info-manager.d.ts.map