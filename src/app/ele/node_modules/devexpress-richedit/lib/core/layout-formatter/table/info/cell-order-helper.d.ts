import { TablePositionIndexes } from '../../../model/tables/main-structures/table';
import { TableInfo } from './table-info';
export declare class CellOrderHelper {
    private tableInfo;
    constructor(tableInfo: TableInfo);
    getFirstNotFullyRenderedCell(startRowIndex: number): TablePositionIndexes;
    getNextPos(currTblPos: TablePositionIndexes): TablePositionIndexes;
    isTableFullyFormatted(): boolean;
    private getNextPositionOnRow;
    private isCellContendFullyPlaced;
    private cellRenderedOnThisColumn;
}
//# sourceMappingURL=cell-order-helper.d.ts.map