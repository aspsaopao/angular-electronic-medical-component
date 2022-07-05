import { DocumentModel } from '../document-model';
import { TabProperties } from '../paragraph/paragraph-style';
export declare enum ModelCheckerResult {
    None = 0,
    Run = 1,
    Paragraph = 2,
    Chunk = 3,
    Section = 4,
    SubDocument = 5,
    Field = 6,
    Table = 7,
    PositionManager = 8,
    RangePermission = 9
}
export declare class ModelChecker {
    static disableCheckModel: boolean;
    model: DocumentModel;
    results: ModelCheckerResult[];
    constructor(model: DocumentModel);
    checkAll(): boolean;
    private check;
    checkModelProps(): ModelCheckerResult;
    checkParagraphs(): ModelCheckerResult;
    checkTabs(tabs: TabProperties): ModelCheckerResult;
    checkChunks(): ModelCheckerResult;
    checkSections(): ModelCheckerResult;
    checkParagraphChunk(): ModelCheckerResult;
    checkFields(): ModelCheckerResult;
    checkTables(): ModelCheckerResult;
    private checkField;
    private isParentOfField;
    private checkTable;
    checkPositions(): ModelCheckerResult;
}
//# sourceMappingURL=check-all.d.ts.map