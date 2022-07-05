import { IIntervalPropertyManipulator } from '../../manipulators/i-properties-manipulator';
import { ModelManipulator } from '../../manipulators/model-manipulator';
import { NonVisualDrawingObjectInfoManipulator } from '../../manipulators/picture-manipulator/picture-manipulator';
import { SubDocumentInterval } from '../../sub-document';
import { IntervalBasedHistoryItem } from '../base/interval-based-history-item';
import { HistoryItemIntervalState } from '../states/history-item-state';
import { HistoryItemIntervalStateObject } from '../states/history-item-state-object';
export declare class NonVisualDrawingObjectInfoPropertyHistoryItem<T> extends IntervalBasedHistoryItem {
    newValue: T;
    oldState: HistoryItemIntervalState<HistoryItemIntervalStateObject>;
    propertyManipulator: NonVisualDrawingObjectInfoManipulator<T>;
    constructor(modelManipulator: ModelManipulator, subDocInterval: SubDocumentInterval, newValue: T, propertyManipulator: IIntervalPropertyManipulator<T>);
    redo(): void;
    undo(): void;
}
//# sourceMappingURL=non-visual-drawing-object-info.d.ts.map