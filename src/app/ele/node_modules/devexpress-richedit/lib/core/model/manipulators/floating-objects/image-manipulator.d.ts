import { Size as SizeCore } from '@devexpress/utils/lib/geometry/size';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { HistoryItemIntervalState } from '../../history/states/history-item-state';
import { HistoryItemIntervalStateObject } from '../../history/states/history-item-state-object';
import { BaseManipulator } from '../base-manipulator';
import { IIntervalPropertyManipulator } from '../i-properties-manipulator';
import { SubDocument } from '../../sub-document';
export declare class ImageManipulator extends BaseManipulator implements IIntervalPropertyManipulator<[string, SizeCore?]> {
    setValue(subDocument: SubDocument, interval: FixedInterval, newValue: [string, SizeCore]): HistoryItemIntervalState<HistoryItemIntervalStateObject>;
    restoreValue(subDocument: SubDocument, state: HistoryItemIntervalState<HistoryItemIntervalStateObject>): void;
    private setPropertyValue;
    private notifyModelChanged;
}
//# sourceMappingURL=image-manipulator.d.ts.map