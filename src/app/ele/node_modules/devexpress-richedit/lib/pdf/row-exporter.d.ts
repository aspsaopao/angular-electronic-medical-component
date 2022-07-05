import { LayoutRow } from '../core/layout/main-structures/layout-row';
import { IMeasurer } from '../core/measurer/measurer';
import { LayoutFontsCollectorCache } from '../core/model/fonts/grabber';
import { Point } from '@devexpress/utils/lib/geometry/point';
import { IPdfKitDocument } from './interfaces';
export declare class PdfLayoutRowExporter {
    private readonly boxExporter;
    private doc;
    constructor(doc: IPdfKitDocument, textFontMapCache: LayoutFontsCollectorCache, measurer: IMeasurer);
    export(row: LayoutRow, columnOffset: Point): void;
}
//# sourceMappingURL=row-exporter.d.ts.map