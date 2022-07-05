import { ImportedTableRowInfo } from '../containers/tables';
import { HtmlTagImporterBase } from './base';
export declare class HtmlTableTagImporter extends HtmlTagImporterBase {
    rows: ImportedTableRowInfo[];
    static tagName: string;
    elementTag(): string;
    importBefore(): void;
    isImportChilds(): boolean;
    importAfter(): void;
    private getTableProperties;
    private getTableWidth;
}
//# sourceMappingURL=table.d.ts.map