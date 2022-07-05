import { IListLevelPropertyManipulator } from '../../manipulators/i-properties-manipulator';
import { ModelManipulator } from '../../manipulators/model-manipulator';
import { ListNumberAlignment, NumberingFormat } from '../../numbering-lists/list-level-properties';
import { HistoryItem } from '../base/history-item';
import { HistoryItemState } from '../states/history-item-state';
import { HistoryItemListLevelStateObject } from '../states/history-item-state-object';
export declare class ListLevelPropertiesHistoryItemBase<T> extends HistoryItem {
    oldState: HistoryItemState<HistoryItemListLevelStateObject>;
    newValue: T;
    isAbstractList: boolean;
    listIndex: number;
    levelIndex: number;
    constructor(modelManipulator: ModelManipulator, isAbstractList: boolean, listIndex: number, levelIndex: number, newValue: T);
    redo(): void;
    undo(): void;
    getManipulator(): IListLevelPropertyManipulator<T>;
}
export declare class ListLevelStartHistoryItem extends ListLevelPropertiesHistoryItemBase<number> {
    getManipulator(): IListLevelPropertyManipulator<number>;
}
export declare class ListLevelAlignmentHistoryItem extends ListLevelPropertiesHistoryItemBase<ListNumberAlignment> {
    getManipulator(): IListLevelPropertyManipulator<ListNumberAlignment>;
}
export declare class ListLevelConvertPreviousLevelNumberingToDecimalHistoryItem extends ListLevelPropertiesHistoryItemBase<boolean> {
    getManipulator(): IListLevelPropertyManipulator<boolean>;
}
export declare class ListLevelDisplayFormatStringHistoryItem extends ListLevelPropertiesHistoryItemBase<string> {
    getManipulator(): IListLevelPropertyManipulator<string>;
}
export declare class ListLevelFormatHistoryItem extends ListLevelPropertiesHistoryItemBase<NumberingFormat> {
    getManipulator(): IListLevelPropertyManipulator<NumberingFormat>;
}
export declare class ListLevelLegacyHistoryItem extends ListLevelPropertiesHistoryItemBase<boolean> {
    getManipulator(): IListLevelPropertyManipulator<boolean>;
}
export declare class ListLevelLegacyIndentHistoryItem extends ListLevelPropertiesHistoryItemBase<number> {
    getManipulator(): IListLevelPropertyManipulator<number>;
}
export declare class ListLevelLegacySpaceHistoryItem extends ListLevelPropertiesHistoryItemBase<number> {
    getManipulator(): IListLevelPropertyManipulator<number>;
}
export declare class ListLevelOriginalLeftIndentHistoryItem extends ListLevelPropertiesHistoryItemBase<number> {
    getManipulator(): IListLevelPropertyManipulator<number>;
}
export declare class ListLevelRelativeRestartLevelHistoryItem extends ListLevelPropertiesHistoryItemBase<number> {
    getManipulator(): IListLevelPropertyManipulator<number>;
}
export declare class ListLevelSeparatorHistoryItem extends ListLevelPropertiesHistoryItemBase<string> {
    getManipulator(): IListLevelPropertyManipulator<string>;
}
export declare class ListLevelSuppressBulletResizeHistoryItem extends ListLevelPropertiesHistoryItemBase<boolean> {
    getManipulator(): IListLevelPropertyManipulator<boolean>;
}
export declare class ListLevelSuppressRestartHistoryItem extends ListLevelPropertiesHistoryItemBase<boolean> {
    getManipulator(): IListLevelPropertyManipulator<boolean>;
}
export declare class ListLevelTemplateCodeHistoryItem extends ListLevelPropertiesHistoryItemBase<number> {
    getManipulator(): IListLevelPropertyManipulator<number>;
}
//# sourceMappingURL=list-level-properties-history-items.d.ts.map