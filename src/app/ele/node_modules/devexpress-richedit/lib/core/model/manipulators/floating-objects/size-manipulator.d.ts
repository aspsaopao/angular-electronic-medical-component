import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { AnchorTextBoxSize, PictureSize } from '../../floating-objects/sizes';
import { HistoryItemIntervalState } from '../../history/states/history-item-state';
import { HistoryItemIntervalAnchorSizeStateObject } from '../../history/states/history-item-state-object';
import { SubDocument } from '../../sub-document';
import { BaseManipulator } from '../base-manipulator';
export declare abstract class AnchorSizeManipulatorBase extends BaseManipulator {
    setValue(subDocument: SubDocument, interval: FixedInterval, newValue: PictureSize | AnchorTextBoxSize): HistoryItemIntervalState<HistoryItemIntervalAnchorSizeStateObject>;
    restoreValue(subDocument: SubDocument, state: HistoryItemIntervalState<HistoryItemIntervalAnchorSizeStateObject>): void;
    abstract notify(interval: FixedInterval, objectId: number, newState: HistoryItemIntervalState<HistoryItemIntervalAnchorSizeStateObject>, subDocument: SubDocument): any;
}
export declare class AnchorTextBoxSizeManipulator extends AnchorSizeManipulatorBase {
    setValue(subDocument: SubDocument, interval: FixedInterval, newValue: AnchorTextBoxSize): HistoryItemIntervalState<HistoryItemIntervalAnchorSizeStateObject>;
    notify(interval: FixedInterval, objectId: number, newState: HistoryItemIntervalState<HistoryItemIntervalAnchorSizeStateObject>, subDocument: SubDocument): void;
}
export declare class AnchorPictureSizeManipulator extends AnchorSizeManipulatorBase {
    setValue(subDocument: SubDocument, interval: FixedInterval, newValue: PictureSize): HistoryItemIntervalState<HistoryItemIntervalAnchorSizeStateObject>;
    notify(interval: FixedInterval, objectId: number, newState: HistoryItemIntervalState<HistoryItemIntervalAnchorSizeStateObject>, subDocument: SubDocument): void;
}
//# sourceMappingURL=size-manipulator.d.ts.map