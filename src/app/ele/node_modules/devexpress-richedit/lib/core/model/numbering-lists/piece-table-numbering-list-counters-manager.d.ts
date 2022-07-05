import { SubDocument } from '../sub-document';
import { NumberingListCountersCalculator } from './numbering-list-counters-calculator';
export declare class SubDocumentNumberingListCountersManager {
    calculators: {
        [abstractNumberingListIndex: number]: NumberingListCountersCalculator;
    };
    subDocument: SubDocument;
    private currentParagraphIndex;
    constructor(subDocument: SubDocument);
    calculateCounters(paragraphIndex: number): number[];
    private getCalculator;
    reset(): void;
}
//# sourceMappingURL=piece-table-numbering-list-counters-manager.d.ts.map