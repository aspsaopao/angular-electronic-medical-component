import { LayoutTableCellInfo } from '../../../layout/table/layout-table-cell-info';
import { LayoutTableInfo } from '../../../layout/table/layout-table-info';
import { LayoutPositionBaseAdvanceHelper } from './base-advance-helper';
export declare class LayoutPositionAdvanceBackwardHelper extends LayoutPositionBaseAdvanceHelper {
    advance(): boolean;
    protected moveToPrevRow(): boolean;
    protected setOnLastCellOnTable(logicInfo: LayoutTableInfo): void;
    protected moveToPrevCell(cell: LayoutTableCellInfo): boolean;
}
//# sourceMappingURL=backward-helper.d.ts.map