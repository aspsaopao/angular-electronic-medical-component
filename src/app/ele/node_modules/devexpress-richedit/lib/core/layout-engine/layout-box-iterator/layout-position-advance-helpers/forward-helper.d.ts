import { LayoutTableCellInfo } from '../../../layout/table/layout-table-cell-info';
import { LayoutTableColumnInfo } from '../../../layout/table/layout-table-info';
import { LayoutPositionBaseAdvanceHelper } from './base-advance-helper';
export declare class LayoutPositionAdvanceForwardHelper extends LayoutPositionBaseAdvanceHelper {
    advance(): boolean;
    protected moveToNextRow(): boolean;
    protected moveToNextCell(cell: LayoutTableCellInfo): boolean;
    protected toNextRowAfterTable(table: LayoutTableColumnInfo): boolean;
}
//# sourceMappingURL=forward-helper.d.ts.map