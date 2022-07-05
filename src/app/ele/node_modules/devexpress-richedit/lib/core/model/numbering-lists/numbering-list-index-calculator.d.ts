import { SubDocument } from '../sub-document';
import { NumberingType } from './numbering-list';
export declare class NumberingListIndexCalculator {
    subDocument: SubDocument;
    targetType: NumberingType;
    startIndex: number;
    constructor(subDocument: SubDocument, targetType: NumberingType, startIndex: number);
    getTargetListInfo(paragraphIndices: number[]): {
        listIndex: number;
        listlevelIndex: number;
    };
    private getTargetParagraph;
    private isStartIndexMatch;
    private hasSameParagraphType;
}
//# sourceMappingURL=numbering-list-index-calculator.d.ts.map