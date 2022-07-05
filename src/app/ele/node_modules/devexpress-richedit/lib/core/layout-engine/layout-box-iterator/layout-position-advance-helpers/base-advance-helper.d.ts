import { Grid } from '../../../layout-formatter/table/grid-engine/grid';
import { DocumentLayout } from '../../../layout/document-layout';
import { LayoutPosition } from '../../../layout/layout-position';
import { LayoutTableCellInfo } from '../../../layout/table/layout-table-cell-info';
import { LayoutTableInfo } from '../../../layout/table/layout-table-info';
import { CellGridInfo } from '../../../model/tables/grid/table-cell-grid-info';
export declare class LayoutPositionBaseAdvanceHelper {
    lp: LayoutPosition;
    protected layout: DocumentLayout;
    protected oldLp: LayoutPosition;
    constructor(lp: LayoutPosition, layout: DocumentLayout);
    protected finalHandle(result: boolean): boolean;
    protected setLayoutRowInCell(cell: LayoutTableCellInfo, onStart: boolean): void;
    protected setLayoutRow(rowIndex: number, onStart: boolean): boolean;
    protected advanceBoxSimple(allowChangeHighLevels: boolean, toNext: boolean): boolean;
    protected advanceRowSimple(allowChangeHighLevels: boolean, toNext: boolean): boolean;
    protected advanceColumnSimple(allowChangeHighLevels: boolean, toNext: boolean): boolean;
    protected advancePageAreaSimple(allowChangeHighLevels: boolean, toNext: boolean): boolean;
    protected advancePageSimple(toNext: boolean): boolean;
    protected setRowByGridInfo(isStartFindWithStartTable: boolean, logicInfo: LayoutTableInfo, cellGridInfo: CellGridInfo, isAdvanceToNextColumn: boolean, isNeedColumnAdvance: boolean): boolean;
    protected static getNextTableCellGridInfo(isStartFindWithStartTable: boolean, grid: Grid, startCellInfo: CellGridInfo, startRowIndex: number, cellIndex: number): CellGridInfo;
}
//# sourceMappingURL=base-advance-helper.d.ts.map