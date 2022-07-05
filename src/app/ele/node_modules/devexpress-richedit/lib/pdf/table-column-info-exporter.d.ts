import * as PDFDocument from 'pdfkit';
import { LayoutTableColumnInfo } from '../core/layout/table/layout-table-info';
import { Point } from '@devexpress/utils/lib/geometry/point';
export declare class PdfLayoutTableColumnInfoExporter {
    doc: typeof PDFDocument;
    constructor(doc: any);
    export(tableColumnInfo: LayoutTableColumnInfo, columnOffset: Point): void;
    private isRenderTableBorder;
    private exportHorizontalBorder;
    private exportVerticalBorder;
    private drawHorizontalLine;
    private drawVerticalLine;
}
//# sourceMappingURL=table-column-info-exporter.d.ts.map