import { LayoutTableColumnInfo } from '../../layout/table/layout-table-info';
import { Table } from '../../model/tables/main-structures/table';
import { TableCellProperties } from '../../model/tables/properties/table-cell-properties';
import { TableRowAlignment } from '../../model/tables/secondary-structures/table-base-structures';
import { Grid } from './grid-engine/grid';
import { RowInfo } from './info/row-info';
export declare class TableAlignmentApplier {
    static getTableAlignment(table: Table): TableRowAlignment;
    static applyHorizontalAlignment(currTableColumnInfo: LayoutTableColumnInfo, tableMaxWidth: number): void;
    static applyCellsVerticalAlignment(defaultTableCellProps: TableCellProperties, grid: Grid, currTableColumnInfo: LayoutTableColumnInfo, rowInfo: RowInfo[]): void;
    private static moveAllTable;
}
//# sourceMappingURL=table-alignment-applier.d.ts.map