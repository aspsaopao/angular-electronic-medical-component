import { DocumentModel } from '../../model/document-model';
import { SubDocument } from '../../model/sub-document';
export declare class TableRestorer {
    static paragraphMarkBetween(model: DocumentModel): void;
    private static joinTables;
    static fixAllTables(model: DocumentModel): void;
    static fixTables(subDocument: SubDocument): void;
    static fixLastParagraphs(model: DocumentModel): void;
    static fixLastParagraph(sd: SubDocument): void;
    private static insertParagraphInSubDocumentEnd;
    private static fixTable;
    private static normalizeRows;
    private static normalizeTableGrid;
    private static normalize;
    private static getCellColumnIndexConsiderRowGrid;
    private static getAbsoluteCellIndexInRow;
    private static getLowerCell;
    private static getUpperCell;
    private static getCell;
    private static actualizeVerticalMergingForContinueCellCore;
    private static actualizeVerticalMergingForContinueCell;
    private static actualizeVerticalMergingForRestartCell;
    private static removeInvalidVerticalSpansFromTableWithOneRow;
}
//# sourceMappingURL=table-restorer.d.ts.map