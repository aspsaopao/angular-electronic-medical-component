import { AnchorInfoPropertyManipulator } from '../../../manipulators/floating-objects/anchor-info-property-manipulator';
import { IIntervalPropertyManipulator } from '../../../manipulators/i-properties-manipulator';
import { ModelManipulator } from '../../../manipulators/model-manipulator';
import { SubDocumentInterval } from '../../../sub-document';
import { IntervalBasedHistoryItem } from '../../base/interval-based-history-item';
import { HistoryItemIntervalState } from '../../states/history-item-state';
import { HistoryItemIntervalStateObject } from '../../states/history-item-state-object';
export declare class AnchorInfoPropertyHistoryItem<T> extends IntervalBasedHistoryItem {
    newValue: T;
    oldState: HistoryItemIntervalState<HistoryItemIntervalStateObject>;
    propertyManipulator: AnchorInfoPropertyManipulator<T>;
    constructor(modelManipulator: ModelManipulator, subDocInterval: SubDocumentInterval, newValue: T, propertyManipulator: IIntervalPropertyManipulator<T>);
    redo(): void;
    undo(): void;
}
//# sourceMappingURL=anchor-info-property-history-item.d.ts.map