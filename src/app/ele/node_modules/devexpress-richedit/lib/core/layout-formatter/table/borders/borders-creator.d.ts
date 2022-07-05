import { LayoutTableColumnInfo } from '../../../layout/table/layout-table-info';
import { Grid } from '../grid-engine/grid';
import { RowInfo } from '../info/row-info';
import { HorizontalLineBordersInfo } from './horizontal-line-borders-info';
import { LayoutTableBorder } from './layout-table-border';
export declare class BorderCreator {
    static setColumnHorizontalBorders(currTableColumnInfo: LayoutTableColumnInfo, rowInfo: RowInfo[], currColumnHorizontalBorders: HorizontalLineBordersInfo[][], isThisColumnFirstInTable: boolean): void;
    static setColumnVerticalBorders(currTableColumnInfo: LayoutTableColumnInfo, grid: Grid, rowInfo: RowInfo[], isThisColumnFirstInTable: boolean, currColumnHorizontalBorders: HorizontalLineBordersInfo[][], newVerticalBorders: LayoutTableBorder[][][], verticalBorders: LayoutTableBorder[][][], considerSpacing: boolean): void;
}
//# sourceMappingURL=borders-creator.d.ts.map