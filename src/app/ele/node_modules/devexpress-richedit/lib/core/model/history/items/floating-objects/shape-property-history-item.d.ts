import { ShapePropertyManipulator } from '../../../manipulators/floating-objects/shape-manipulator';
import { IIntervalPropertyManipulator } from '../../../manipulators/i-properties-manipulator';
import { ModelManipulator } from '../../../manipulators/model-manipulator';
import { Shape } from '../../../shapes/shape';
import { SubDocumentInterval } from '../../../sub-document';
import { IntervalBasedHistoryItem } from '../../base/interval-based-history-item';
import { HistoryItemIntervalState } from '../../states/history-item-state';
import { HistoryItemIntervalStateObject } from '../../states/history-item-state-object';
export declare class ShapePropertyHistoryItem<T> extends IntervalBasedHistoryItem {
    newValue: T;
    oldState: HistoryItemIntervalState<HistoryItemIntervalStateObject>;
    propertyManipulator: ShapePropertyManipulator<T>;
    constructor(modelManipulator: ModelManipulator, subDocInterval: SubDocumentInterval, newValue: T, propertyManipulator: IIntervalPropertyManipulator<T>);
    redo(): void;
    undo(): void;
}
export declare class ShapeHistoryItem extends IntervalBasedHistoryItem {
    newValue: Shape;
    oldState: HistoryItemIntervalState<HistoryItemIntervalStateObject>;
    constructor(modelManipulator: ModelManipulator, subDocInterval: SubDocumentInterval, newValue: Shape);
    redo(): void;
    undo(): void;
}
//# sourceMappingURL=shape-property-history-item.d.ts.map