import { LayoutBox } from '../core/layout/main-structures/layout-boxes/layout-box';
import { LayoutRow } from '../core/layout/main-structures/layout-row';
import { IMeasurer } from '../core/measurer/measurer';
import { LayoutFontsCollectorCache } from '../core/model/fonts/grabber';
import { Point } from '@devexpress/utils/lib/geometry/point';
import { IPdfKitDocument } from './interfaces';
export declare class PdfBoxExporter {
    private readonly characterPropertiesExporter;
    private readonly textFontMapCache;
    private doc;
    private measurer;
    constructor(doc: IPdfKitDocument, textFontMapCache: LayoutFontsCollectorCache, measurer: IMeasurer);
    export(row: LayoutRow, box: LayoutBox, boxIndex: number, rowOffset: Point, baseLine: number, lastBoxIndexWhatCanStrikeoutAndUnderline: number): void;
    private getTextPosition;
    private createTextProperties;
    private exportText;
    private separateTextByFont;
}
//# sourceMappingURL=box-exporter.d.ts.map