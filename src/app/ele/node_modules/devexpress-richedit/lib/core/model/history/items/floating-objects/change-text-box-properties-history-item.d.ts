import { TextBoxProperties } from '../../../floating-objects/text-box-properties';
import { ModelManipulator } from '../../../manipulators/model-manipulator';
import { SubDocumentInterval } from '../../../sub-document';
import { IntervalBasedHistoryItem } from '../../base/interval-based-history-item';
import { HistoryItemIntervalState } from '../../states/history-item-state';
import { HistoryItemIntervalStateObject } from '../../states/history-item-state-object';
export declare class ChangeTextBoxPropertiesHistoryItem extends IntervalBasedHistoryItem {
    oldState: HistoryItemIntervalState<HistoryItemIntervalStateObject>;
    textBoxProperties: TextBoxProperties;
    constructor(modelManipulator: ModelManipulator, subDocInterval: SubDocumentInterval, textBoxProperties: TextBoxProperties);
    redo(): void;
    undo(): void;
}
//# sourceMappingURL=change-text-box-properties-history-item.d.ts.map