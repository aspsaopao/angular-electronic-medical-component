import { ModelManipulator } from '../../manipulators/model-manipulator';
import { RemoveIntervalOperationResult } from '../../manipulators/range/remove-interval-operation';
import { SubDocumentInterval } from '../../sub-document';
import { IntervalBasedHistoryItem } from '../base/interval-based-history-item';
export declare class RemoveIntervalHistoryItem extends IntervalBasedHistoryItem {
    result: RemoveIntervalOperationResult;
    setPropertiesSecondParagraph: boolean;
    constructor(modelManipulator: ModelManipulator, subDocInterval: SubDocumentInterval, setPropertiesSecondParagraph: boolean);
    redo(): void;
    undo(): void;
}
//# sourceMappingURL=remove-interval-history-item.d.ts.map