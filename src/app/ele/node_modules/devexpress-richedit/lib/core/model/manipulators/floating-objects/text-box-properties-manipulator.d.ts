import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { TextBoxProperties } from '../../floating-objects/text-box-properties';
import { HistoryItemIntervalState } from '../../history/states/history-item-state';
import { HistoryItemIntervalAnchoredTextBoxPropertiesStateObject } from '../../history/states/history-item-state-object';
import { SubDocument } from '../../sub-document';
import { BaseManipulator } from '../base-manipulator';
export declare class TextBoxPropertiesManipulator extends BaseManipulator {
    setValue(subDocument: SubDocument, interval: FixedInterval, newValue: TextBoxProperties): HistoryItemIntervalState<HistoryItemIntervalAnchoredTextBoxPropertiesStateObject>;
    restoreValue(subDocument: SubDocument, state: HistoryItemIntervalState<HistoryItemIntervalAnchoredTextBoxPropertiesStateObject>): void;
}
//# sourceMappingURL=text-box-properties-manipulator.d.ts.map