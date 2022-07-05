import { FormatterManager } from '../../../layout-formatter/managers/formatter-manager';
import { DocumentLayout } from '../../../layout/document-layout';
import { ISelectionBase } from '../../../selection/selection-base';
import { ModelManipulator } from '../../manipulators/model-manipulator';
import { SubDocumentInterval } from '../../sub-document';
import { IntervalBasedHistoryItem } from '../base/interval-based-history-item';
import { HistoryItemIntervalState } from '../states/history-item-state';
import { HistoryItemTextBufferStateObject } from '../states/history-item-state-object';
export declare abstract class ChangeCaseHistoryItemBase extends IntervalBasedHistoryItem {
    oldState: HistoryItemIntervalState<HistoryItemTextBufferStateObject>;
    layoutFormatterManager: FormatterManager;
    layout: DocumentLayout;
    selection: ISelectionBase;
    constructor(modelManipulator: ModelManipulator, subDocInterval: SubDocumentInterval, selection: ISelectionBase, layoutFormatterManager: FormatterManager);
    undo(): void;
}
export declare class UpperCaseHistoryItem extends ChangeCaseHistoryItemBase {
    redo(): void;
}
export declare class LowerCaseHistoryItem extends ChangeCaseHistoryItemBase {
    redo(): void;
}
export declare class CapitalizeEachWordCaseHistoryItem extends ChangeCaseHistoryItemBase {
    redo(): void;
}
export declare class ToggleCaseHistoryItem extends ChangeCaseHistoryItemBase {
    redo(): void;
}
export declare class SentenceCaseHistoryItem extends ChangeCaseHistoryItemBase {
    redo(): void;
}
//# sourceMappingURL=text-run-change-case-history-item.d.ts.map