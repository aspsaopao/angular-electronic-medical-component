import { TableWidthUnit } from '../../../core/model/tables/secondary-structures/table-units';
import { ImportedTableCellInfo } from '../containers/tables';
import { HtmlTagImporterBase } from './base';
export declare class HtmlTrTagImporter extends HtmlTagImporterBase {
    static tagName: string;
    cells: ImportedTableCellInfo[];
    gridBeforeInfo: {
        gridBefore: number;
        widthBefore: TableWidthUnit;
    };
    private rowElement;
    elementTag(): string;
    importBefore(): void;
    isImportChilds(): boolean;
    importAfter(): void;
    private static importGridBefore;
    private static importGridAfter;
}
//# sourceMappingURL=tr.d.ts.map