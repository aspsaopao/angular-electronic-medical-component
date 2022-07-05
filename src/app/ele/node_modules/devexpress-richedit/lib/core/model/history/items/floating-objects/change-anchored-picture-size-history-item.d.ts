import { PictureSize } from '../../../floating-objects/sizes';
import { ModelManipulator } from '../../../manipulators/model-manipulator';
import { SubDocumentInterval } from '../../../sub-document';
import { IntervalBasedHistoryItem } from '../../base/interval-based-history-item';
import { HistoryItemIntervalState } from '../../states/history-item-state';
import { HistoryItemIntervalStateObject } from '../../states/history-item-state-object';
export declare class ChangeAnchoredPictureSizeHistoryItem extends IntervalBasedHistoryItem {
    oldState: HistoryItemIntervalState<HistoryItemIntervalStateObject>;
    size: PictureSize;
    constructor(modelManipulator: ModelManipulator, subDocInterval: SubDocumentInterval, size: PictureSize);
    redo(): void;
    undo(): void;
}
//# sourceMappingURL=change-anchored-picture-size-history-item.d.ts.map