import { AnchorTextBoxSize } from '../../../floating-objects/sizes';
import { ModelManipulator } from '../../../manipulators/model-manipulator';
import { SubDocumentInterval } from '../../../sub-document';
import { IntervalBasedHistoryItem } from '../../base/interval-based-history-item';
import { HistoryItemIntervalState } from '../../states/history-item-state';
import { HistoryItemIntervalStateObject } from '../../states/history-item-state-object';
export declare class ChangeAnchoredTextBoxSizeHistoryItem extends IntervalBasedHistoryItem {
    oldState: HistoryItemIntervalState<HistoryItemIntervalStateObject>;
    size: AnchorTextBoxSize;
    constructor(modelManipulator: ModelManipulator, subDocInterval: SubDocumentInterval, size: AnchorTextBoxSize);
    redo(): void;
    undo(): void;
}
//# sourceMappingURL=change-anchored-text-box-size-history-item.d.ts.map