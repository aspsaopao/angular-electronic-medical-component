import { DocumentModel } from '../document-model';
import { Position } from '../position/position';
export declare class PositionChecker {
    model: DocumentModel;
    private poss;
    constructor(model: DocumentModel);
    check(): boolean;
    compare(poss: Position[], registered: Position[]): boolean;
    private getNewRegInterval;
    private checkValue;
    private sort;
    private addSections;
    private addParagraphs;
    private addTables;
    private addFields;
    private addBookmarks;
    private addRangePermissions;
}
//# sourceMappingURL=position.d.ts.map