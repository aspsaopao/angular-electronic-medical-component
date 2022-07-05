import { LayoutTableColumnInfo } from '../../layout/table/layout-table-info';
import { ColorProvider } from '../../model/color/color-provider';
import { TableCellProperties } from '../../model/tables/properties/table-cell-properties';
import { HorizontalLineBordersInfo } from './borders/horizontal-line-borders-info';
import { LayoutTableBorder } from './borders/layout-table-border';
import { Grid } from './grid-engine/grid';
import { RowInfo } from './info/row-info';
export declare class TableBackgroundInfoCreator {
    static createBackgroundInfos(colorProvider: ColorProvider, defaultTblCellProps: TableCellProperties, grid: Grid, currTableColumnInfo: LayoutTableColumnInfo, currColumnVerticalBorders: LayoutTableBorder[][][], currColumnHorizontalBorders: HorizontalLineBordersInfo[][], rowInfo: RowInfo[]): void;
}
//# sourceMappingURL=background-info-creator.d.ts.map