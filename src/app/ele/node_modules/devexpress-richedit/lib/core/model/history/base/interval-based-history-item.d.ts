import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { ModelManipulator } from '../../manipulators/model-manipulator';
import { SubDocument, SubDocumentInterval } from '../../sub-document';
import { HistoryItem } from './history-item';
export declare abstract class IntervalBasedHistoryItem extends HistoryItem {
    subDocInterval: SubDocumentInterval;
    get boundSubDocument(): SubDocument;
    get interval(): FixedInterval;
    constructor(modelManipulator: ModelManipulator, subDocInterval: SubDocumentInterval);
}
//# sourceMappingURL=interval-based-history-item.d.ts.map