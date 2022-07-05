import { HtmlImporter } from '../html-importer';
import { HtmlTagImporterBase } from './base';
import { HtmlTableTagImporter } from './table';
import { HtmlTrTagImporter } from './tr';
export declare class HtmlTdTagImporter extends HtmlTagImporterBase {
    private startPosition;
    private rowImporter;
    elementTag(): string;
    importBefore(): void;
    isImportChilds(): boolean;
    importAfter(): void;
    static addVerticalMergedCells(importer: HtmlImporter, tableImporter: HtmlTableTagImporter, rowImporter: HtmlTrTagImporter): void;
    private setBackgroungColor;
    private setVerticalAlign;
    private importCellBorders;
    private importMargins;
    private importMargin;
    private static verticalAlignInfo;
}
export declare class HtmlThTagImporter extends HtmlTdTagImporter {
    elementTag(): string;
}
//# sourceMappingURL=td.d.ts.map