import { HistoryItemIntervalState, HistoryItemState } from '../../history/states/history-item-state';
import { HistoryItemIntervalStateObject, HistoryItemListLevelStateObject } from '../../history/states/history-item-state-object';
import { AbstractNumberingList, NumberingList } from '../../numbering-lists/numbering-list';
import { SubDocument } from '../../sub-document';
import { BaseManipulator } from '../base-manipulator';
import { ModelManipulator } from '../model-manipulator';
import { ListLevelCharacterPropertiesManipulator } from './list-level-character-properties-manipulator';
import { ListLevelParagraphPropertiesManipulator } from './list-level-paragraph-properties-manipulator';
import { ListLevelPropertiesManipulator } from './list-level-properties-manipulator';
export declare class NumberingListManipulator extends BaseManipulator {
    listLevelProperties: ListLevelPropertiesManipulator;
    listLevelCharacterProperties: ListLevelCharacterPropertiesManipulator;
    listLevelParagraphProperties: ListLevelParagraphPropertiesManipulator;
    constructor(manipulator: ModelManipulator);
    addAbstractNumberingList(abstractNumberingList: AbstractNumberingList): number;
    deleteAbstractNumberingList(abstractNumberingListIndex: number): void;
    addNumberingList(numberingList: NumberingList): number;
    deleteNumberingList(numberingListIndex: number): void;
    setIOverrideListLevelOverrideStart(numberingListIndex: number, levelIndex: number, overrideStart: boolean): HistoryItemState<HistoryItemListLevelStateObject>;
    restoreIOverrideListLevelOverrideStart(state: HistoryItemState<HistoryItemListLevelStateObject>): void;
    setIOverrideListLevelNewStart(numberingListIndex: number, levelIndex: number, newStart: number): HistoryItemState<HistoryItemListLevelStateObject>;
    restoreIOverrideListLevelNewStart(state: HistoryItemState<HistoryItemListLevelStateObject>): void;
    setParagraphNumberingList(subDocument: SubDocument, paragraphIndex: number, numberingIndex: number, listLevelIndex: number): HistoryItemIntervalState<HistoryItemIntervalStateObject>;
    removeNumberingListFromParagraph(subDocument: SubDocument, paragraphIndex: number): HistoryItemIntervalState<HistoryItemIntervalStateObject>;
    restoreParagraphNumberingList(subDocument: SubDocument, state: HistoryItemIntervalState<HistoryItemIntervalStateObject>): void;
}
//# sourceMappingURL=numbering-list-manipulator.d.ts.map