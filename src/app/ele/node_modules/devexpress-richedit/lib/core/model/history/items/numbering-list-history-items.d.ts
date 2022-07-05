import { ModelManipulator } from '../../manipulators/model-manipulator';
import { AbstractNumberingList, NumberingList } from '../../numbering-lists/numbering-list';
import { SubDocument } from '../../sub-document';
import { HistoryItem } from '../base/history-item';
import { HistoryItemIntervalState, HistoryItemState } from '../states/history-item-state';
import { HistoryItemIntervalStateObject, HistoryItemListLevelStateObject } from '../states/history-item-state-object';
import { ParagraphUseValueHistoryItem } from './paragraph-properties-history-items';
export declare class AddAbstractNumberingListHistoryItem extends HistoryItem {
    abstractNumberingList: AbstractNumberingList;
    abstractNumberingListIndex: number;
    constructor(modelManipulator: ModelManipulator, abstractNumberingList: AbstractNumberingList);
    redo(): void;
    undo(): void;
}
export declare class AddNumberingListHistoryItem extends HistoryItem {
    numberingList: NumberingList;
    numberingListIndex: number;
    constructor(modelManipulator: ModelManipulator, numberingList: NumberingList);
    redo(): void;
    undo(): void;
}
export declare class AddParagraphToListHistoryItem extends HistoryItem {
    paragraphIndex: number;
    numberingListIndex: number;
    listLevelIndex: number;
    state: HistoryItemIntervalState<HistoryItemIntervalStateObject>;
    useValHistItem: ParagraphUseValueHistoryItem;
    subDocument: SubDocument;
    constructor(modelManipulator: ModelManipulator, subDocument: SubDocument, paragraphIndex: number, numberingListIndex: number, listLevelIndex: number);
    redo(): void;
    undo(): void;
}
export declare class RemoveParagraphFromListHistoryItem extends HistoryItem {
    paragraphIndex: number;
    state: HistoryItemIntervalState<HistoryItemIntervalStateObject>;
    subDocument: SubDocument;
    constructor(modelManipulator: ModelManipulator, subDocument: SubDocument, paragraphIndex: number);
    redo(): void;
    undo(): void;
}
export declare class ListLevelNewStartHistoryItem extends HistoryItem {
    oldState: HistoryItemState<HistoryItemListLevelStateObject>;
    newValue: number;
    listIndex: number;
    levelIndex: number;
    constructor(modelManipulator: ModelManipulator, listIndex: number, levelIndex: number, newValue: number);
    redo(): void;
    undo(): void;
}
export declare class ListLevelOverrideStartHistoryItem extends HistoryItem {
    oldState: HistoryItemState<HistoryItemListLevelStateObject>;
    newValue: boolean;
    listIndex: number;
    levelIndex: number;
    constructor(modelManipulator: ModelManipulator, listIndex: number, levelIndex: number, overrideStart: boolean);
    redo(): void;
    undo(): void;
}
//# sourceMappingURL=numbering-list-history-items.d.ts.map