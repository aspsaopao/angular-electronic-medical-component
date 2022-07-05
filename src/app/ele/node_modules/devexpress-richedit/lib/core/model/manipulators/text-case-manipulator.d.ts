import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { FormatterManager } from '../../layout-formatter/managers/formatter-manager';
import { ISelectionBase } from '../../selection/selection-base';
import { HistoryItemIntervalState } from '../history/states/history-item-state';
import { HistoryItemTextBufferStateObject } from '../history/states/history-item-state-object';
import { SubDocument } from '../sub-document';
import { BaseManipulator } from './base-manipulator';
export declare class TextCaseManipulator extends BaseManipulator {
    applyUpperCase(layoutFormatterManager: FormatterManager, selection: ISelectionBase, subDocument: SubDocument, interval: FixedInterval): HistoryItemIntervalState<HistoryItemTextBufferStateObject>;
    applyLowerCase(layoutFormatterManager: FormatterManager, selection: ISelectionBase, subDocument: SubDocument, interval: FixedInterval): HistoryItemIntervalState<HistoryItemTextBufferStateObject>;
    applyCapitalizeEachWordCase(layoutFormatterManager: FormatterManager, selection: ISelectionBase, subDocument: SubDocument, interval: FixedInterval): HistoryItemIntervalState<HistoryItemTextBufferStateObject>;
    applyToggleCase(layoutFormatterManager: FormatterManager, selection: ISelectionBase, subDocument: SubDocument, interval: FixedInterval): HistoryItemIntervalState<HistoryItemTextBufferStateObject>;
    applySentenceCase(layoutFormatterManager: FormatterManager, selection: ISelectionBase, subDocument: SubDocument, interval: FixedInterval): HistoryItemIntervalState<HistoryItemTextBufferStateObject>;
    applyBufferState(subDocument: SubDocument, oldState: HistoryItemIntervalState<HistoryItemTextBufferStateObject>): void;
}
//# sourceMappingURL=text-case-manipulator.d.ts.map