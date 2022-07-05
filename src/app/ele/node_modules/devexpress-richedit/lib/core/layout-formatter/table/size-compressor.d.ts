import { Rectangle } from '@devexpress/utils/lib/geometry/rectangle';
import { LayoutTableColumnInfo } from '../../layout/table/layout-table-info';
import { LayoutTableRowInfo } from '../../layout/table/layout-table-row-info';
export declare class LayoutTableSizeCompressor {
    static tableRowContentCompress(row: LayoutTableRowInfo): void;
    static tableCompress(tableInfo: LayoutTableColumnInfo, boundsRelativeColumn: Rectangle): void;
    private static compressBorders;
    private static rowCompress;
    private static cellCompress;
    private static compress;
    private static compressVerticalBorder;
    private static compressHorizontalBorder;
}
//# sourceMappingURL=size-compressor.d.ts.map