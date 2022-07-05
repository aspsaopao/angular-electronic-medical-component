import { IListLevelPropertyWithUseManipulator } from '../../manipulators/i-properties-manipulator';
import { ModelManipulator } from '../../manipulators/model-manipulator';
import { ParagraphAlignment, ParagraphFirstLineIndent } from '../../paragraph/paragraph-properties';
import { ShadingInfo } from '../../shadings/shading-info';
import { HistoryItem } from '../base/history-item';
import { HistoryItemState } from '../states/history-item-state';
import { HistoryItemListLevelUseStateObject } from '../states/history-item-state-object';
export declare class ListLevelParagraphPropertiesHistoryItemBase<T> extends HistoryItem {
    oldState: HistoryItemState<HistoryItemListLevelUseStateObject>;
    newValue: T;
    isAbstractList: boolean;
    listIndex: number;
    levelIndex: number;
    newUse: boolean;
    constructor(modelManipulator: ModelManipulator, isAbstractList: boolean, listIndex: number, levelIndex: number, newValue: T, newUse: boolean);
    redo(): void;
    undo(): void;
    getManipulator(): IListLevelPropertyWithUseManipulator<T>;
}
export declare class ListLevelParagraphAlignmentHistoryItem extends ListLevelParagraphPropertiesHistoryItemBase<ParagraphAlignment> {
    getManipulator(): IListLevelPropertyWithUseManipulator<ParagraphAlignment>;
}
export declare class ListLevelParagraphContextualSpacingHistoryItem extends ListLevelParagraphPropertiesHistoryItemBase<boolean> {
    getManipulator(): IListLevelPropertyWithUseManipulator<boolean>;
}
export declare class ListLevelParagraphAfterAutoSpacingHistoryItem extends ListLevelParagraphPropertiesHistoryItemBase<boolean> {
    getManipulator(): IListLevelPropertyWithUseManipulator<boolean>;
}
export declare class ListLevelParagraphShadingInfoHistoryItem extends ListLevelParagraphPropertiesHistoryItemBase<ShadingInfo> {
    getManipulator(): IListLevelPropertyWithUseManipulator<ShadingInfo>;
}
export declare class ListLevelParagraphBeforeAutoSpacingHistoryItem extends ListLevelParagraphPropertiesHistoryItemBase<boolean> {
    getManipulator(): IListLevelPropertyWithUseManipulator<boolean>;
}
export declare class ListLevelParagraphFirstLineIndentHistoryItem extends ListLevelParagraphPropertiesHistoryItemBase<number> {
    getManipulator(): IListLevelPropertyWithUseManipulator<number>;
}
export declare class ListLevelParagraphFirstLineIndentTypeHistoryItem extends ListLevelParagraphPropertiesHistoryItemBase<ParagraphFirstLineIndent> {
    getManipulator(): IListLevelPropertyWithUseManipulator<ParagraphFirstLineIndent>;
}
export declare class ListLevelParagraphKeepLinesTogetherHistoryItem extends ListLevelParagraphPropertiesHistoryItemBase<boolean> {
    getManipulator(): IListLevelPropertyWithUseManipulator<boolean>;
}
export declare class ListLevelParagraphLeftIndentHistoryItem extends ListLevelParagraphPropertiesHistoryItemBase<number> {
    getManipulator(): IListLevelPropertyWithUseManipulator<number>;
}
export declare class ListLevelParagraphLineSpacingHistoryItem extends ListLevelParagraphPropertiesHistoryItemBase<number> {
    getManipulator(): IListLevelPropertyWithUseManipulator<number>;
}
export declare class ListLevelParagraphLineSpacingTypeHistoryItem extends ListLevelParagraphPropertiesHistoryItemBase<number> {
    getManipulator(): IListLevelPropertyWithUseManipulator<number>;
}
export declare class ListLevelParagraphOutlineLevelHistoryItem extends ListLevelParagraphPropertiesHistoryItemBase<number> {
    getManipulator(): IListLevelPropertyWithUseManipulator<number>;
}
export declare class ListLevelParagraphPageBreakBeforeHistoryItem extends ListLevelParagraphPropertiesHistoryItemBase<boolean> {
    getManipulator(): IListLevelPropertyWithUseManipulator<boolean>;
}
export declare class ListLevelParagraphRightIndentHistoryItem extends ListLevelParagraphPropertiesHistoryItemBase<number> {
    getManipulator(): IListLevelPropertyWithUseManipulator<number>;
}
export declare class ListLevelParagraphSpacingAfterHistoryItem extends ListLevelParagraphPropertiesHistoryItemBase<number> {
    getManipulator(): IListLevelPropertyWithUseManipulator<number>;
}
export declare class ListLevelParagraphSpacingBeforeHistoryItem extends ListLevelParagraphPropertiesHistoryItemBase<number> {
    getManipulator(): IListLevelPropertyWithUseManipulator<number>;
}
export declare class ListLevelParagraphSuppressHyphenationHistoryItem extends ListLevelParagraphPropertiesHistoryItemBase<boolean> {
    getManipulator(): IListLevelPropertyWithUseManipulator<boolean>;
}
export declare class ListLevelParagraphSuppressLineNumbersHistoryItem extends ListLevelParagraphPropertiesHistoryItemBase<boolean> {
    getManipulator(): IListLevelPropertyWithUseManipulator<boolean>;
}
export declare class ListLevelParagraphWidowOrphanControlHistoryItem extends ListLevelParagraphPropertiesHistoryItemBase<boolean> {
    getManipulator(): IListLevelPropertyWithUseManipulator<boolean>;
}
//# sourceMappingURL=list-level-paragraph-properties-history-items.d.ts.map