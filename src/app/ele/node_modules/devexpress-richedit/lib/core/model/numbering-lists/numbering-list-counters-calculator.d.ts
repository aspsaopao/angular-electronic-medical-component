import { Paragraph } from '../paragraph/paragraph';
import { AbstractNumberingList } from './numbering-list';
export declare class NumberingListCountersCalculator {
    list: AbstractNumberingList;
    counters: number[];
    usedListIndecies: {
        [key: number]: boolean;
    };
    currentParagraphIndex: number;
    constructor(list: AbstractNumberingList);
    calculateCounters(paragraph: Paragraph): number[];
    calculateNextCounters(paragraph: Paragraph): number[];
    getLastCounters(paragraph: Paragraph): number[];
    private shouldAdvanceListLevelCounters;
    private advanceListLevelCounters;
    private advanceSkippedLevelCounters;
    private restartNextLevelCounters;
    private getActualRangeCounters;
}
//# sourceMappingURL=numbering-list-counters-calculator.d.ts.map