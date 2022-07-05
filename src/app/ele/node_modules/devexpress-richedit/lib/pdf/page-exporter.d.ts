import { AnchorObjectsPositionInfo } from '../core/layout/document-layout';
import { LayoutPage } from '../core/layout/main-structures/layout-page';
import { IMeasurer } from '../core/measurer/measurer';
import { LayoutFontsCollectorCache } from '../core/model/fonts/grabber';
import { IPdfKitDocument } from './interfaces';
import { PdfLayoutPageAreaExporter } from './page-area-exporter';
export declare class PdfLayoutPageExporter {
    readonly pageAreaExporter: PdfLayoutPageAreaExporter;
    private doc;
    constructor(doc: IPdfKitDocument, textFontMapCache: LayoutFontsCollectorCache, measurer: IMeasurer);
    export(page: LayoutPage, anchorObjectsPositionInfo: AnchorObjectsPositionInfo, pageColor: number): void;
    private exportFloatingObjects;
    private exportFloatingObject;
    private drawRect;
    private drawOutlineRect;
    private exportMainSubDocument;
    private exportHeaderFooter;
    private getPageOptions;
}
//# sourceMappingURL=page-exporter.d.ts.map