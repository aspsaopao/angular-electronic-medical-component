import { ModelManipulator } from '../../manipulators/model-manipulator';
import { SubDocumentInterval } from '../../sub-document';
import { IntervalBasedHistoryItem } from '../base/interval-based-history-item';
export declare class ApplyFieldHyperlinkStyleHistoryItem extends IntervalBasedHistoryItem {
    private static mask;
    private historyItems;
    constructor(modelManipulator: ModelManipulator, subDocInterval: SubDocumentInterval);
    redo(): void;
    undo(): void;
}
//# sourceMappingURL=apply-field-hyperlink-style-history-item.d.ts.map