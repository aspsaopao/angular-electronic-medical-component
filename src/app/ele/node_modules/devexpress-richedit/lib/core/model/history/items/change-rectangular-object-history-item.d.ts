import { Size } from '@devexpress/utils/lib/geometry/size';
import { ModelManipulator } from '../../manipulators/model-manipulator';
import { SubDocumentInterval } from '../../sub-document';
import { IntervalBasedHistoryItem } from '../base/interval-based-history-item';
import { HistoryItemIntervalState } from '../states/history-item-state';
import { HistoryItemIntervalStateObject } from '../states/history-item-state-object';
export declare class ChangeRectangularObjectScaleHistoryItem extends IntervalBasedHistoryItem {
    oldState: HistoryItemIntervalState<HistoryItemIntervalStateObject>;
    scale: Size;
    constructor(modelManipulator: ModelManipulator, subDocInterval: SubDocumentInterval, scale: Size);
    redo(): void;
    undo(): void;
}
export declare class ChangeRectangularObjectLockAspectRatioHistoryItem extends IntervalBasedHistoryItem {
    oldState: HistoryItemIntervalState<HistoryItemIntervalStateObject>;
    lockAspectRatio: boolean;
    constructor(modelManipulator: ModelManipulator, subDocInterval: SubDocumentInterval, lockAspectRatio: boolean);
    redo(): void;
    undo(): void;
}
//# sourceMappingURL=change-rectangular-object-history-item.d.ts.map