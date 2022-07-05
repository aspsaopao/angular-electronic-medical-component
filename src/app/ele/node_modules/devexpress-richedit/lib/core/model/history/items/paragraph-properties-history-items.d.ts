import { IIntervalPropertyWithUseValueManipulator } from '../../manipulators/i-properties-manipulator';
import { ModelManipulator } from '../../manipulators/model-manipulator';
import { MaskedParagraphProperties, ParagraphAlignment, ParagraphFirstLineIndent } from '../../paragraph/paragraph-properties';
import { ParagraphStyle, TabInfo, TabProperties } from '../../paragraph/paragraph-style';
import { ShadingInfo } from '../../shadings/shading-info';
import { SubDocument, SubDocumentInterval } from '../../sub-document';
import { HistoryItem } from '../base/history-item';
import { IntervalBasedHistoryItem } from '../base/interval-based-history-item';
import { HistoryItemIntervalState } from '../states/history-item-state';
import { HistoryItemIntervalStateObject, HistoryItemIntervalUseStateObject, HistoryItemTabStateObject } from '../states/history-item-state-object';
export declare class ParagraphUseValueHistoryItem extends IntervalBasedHistoryItem {
    oldState: HistoryItemIntervalState<HistoryItemIntervalStateObject>;
    newValue: number;
    constructor(modelManipulator: ModelManipulator, subDocInterval: SubDocumentInterval, newValue: number);
    redo(): void;
    undo(): void;
}
export declare abstract class TabHistoryItemBase extends IntervalBasedHistoryItem {
    tabInfo: TabInfo;
    oldState: HistoryItemIntervalState<HistoryItemTabStateObject>;
    constructor(modelManipulator: ModelManipulator, subDocInterval: SubDocumentInterval, tabInfo: TabInfo);
}
export declare class InsertTabToParagraphHistoryItem extends TabHistoryItemBase {
    redo(): void;
    undo(): void;
}
export declare class DeleteTabAtParagraphHistoryItem extends TabHistoryItemBase {
    redo(): void;
    undo(): void;
}
export declare class ParagraphPropertiesHistoryItemBase<T> extends IntervalBasedHistoryItem {
    oldState: HistoryItemIntervalState<HistoryItemIntervalUseStateObject>;
    newValue: T;
    newUse: boolean;
    constructor(modelManipulator: ModelManipulator, subDocInterval: SubDocumentInterval, newValue: T, newUse: boolean);
    redo(): void;
    undo(): void;
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<T>;
}
export declare class ParagraphAlignmentHistoryItem extends ParagraphPropertiesHistoryItemBase<ParagraphAlignment> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<ParagraphAlignment>;
}
export declare class ParagraphContextualSpacingHistoryItem extends ParagraphPropertiesHistoryItemBase<boolean> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<boolean>;
}
export declare class ParagraphRightToLeftHistoryItem extends ParagraphPropertiesHistoryItemBase<boolean> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<boolean>;
}
export declare class ParagraphAfterAutoSpacingHistoryItem extends ParagraphPropertiesHistoryItemBase<boolean> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<boolean>;
}
export declare class ParagraphShadingInfoIndexHistoryItem extends ParagraphPropertiesHistoryItemBase<ShadingInfo> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<ShadingInfo>;
}
export declare class ParagraphBeforeAutoSpacingHistoryItem extends ParagraphPropertiesHistoryItemBase<boolean> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<boolean>;
}
export declare class ParagraphFirstLineIndentHistoryItem extends ParagraphPropertiesHistoryItemBase<number> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<number>;
}
export declare class ParagraphFirstLineIndentTypeHistoryItem extends ParagraphPropertiesHistoryItemBase<ParagraphFirstLineIndent> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<ParagraphFirstLineIndent>;
}
export declare class ParagraphKeepLinesTogetherHistoryItem extends ParagraphPropertiesHistoryItemBase<boolean> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<boolean>;
}
export declare class ParagraphLeftIndentHistoryItem extends ParagraphPropertiesHistoryItemBase<number> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<number>;
}
export declare class ParagraphLineSpacingHistoryItem extends ParagraphPropertiesHistoryItemBase<number> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<number>;
}
export declare class ParagraphLineSpacingTypeHistoryItem extends ParagraphPropertiesHistoryItemBase<number> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<number>;
}
export declare class ParagraphOutlineLevelHistoryItem extends ParagraphPropertiesHistoryItemBase<number> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<number>;
}
export declare class ParagraphPageBreakBeforeHistoryItem extends ParagraphPropertiesHistoryItemBase<boolean> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<boolean>;
}
export declare class ParagraphRightIndentHistoryItem extends ParagraphPropertiesHistoryItemBase<number> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<number>;
}
export declare class ParagraphSpacingAfterHistoryItem extends ParagraphPropertiesHistoryItemBase<number> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<number>;
}
export declare class ParagraphSpacingBeforeHistoryItem extends ParagraphPropertiesHistoryItemBase<number> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<number>;
}
export declare class ParagraphSuppressHyphenationHistoryItem extends ParagraphPropertiesHistoryItemBase<boolean> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<boolean>;
}
export declare class ParagraphSuppressLineNumbersHistoryItem extends ParagraphPropertiesHistoryItemBase<boolean> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<boolean>;
}
export declare class ParagraphWidowOrphanControlHistoryItem extends ParagraphPropertiesHistoryItemBase<boolean> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<boolean>;
}
export declare class ParagraphDivIdHistoryItem extends ParagraphPropertiesHistoryItemBase<number> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<number>;
}
export declare class ParagraphKeepWithNextHistoryItem extends ParagraphPropertiesHistoryItemBase<boolean> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<boolean>;
}
export declare class ParagraphPropertiesHistoryItem extends HistoryItem {
    paragraphProperties: MaskedParagraphProperties;
    style: ParagraphStyle;
    numberingListIndex: number;
    listLevelIndex: number;
    tabs: TabProperties;
    paragraphIndex: number;
    oldParagraphProperties: MaskedParagraphProperties;
    oldStyle: ParagraphStyle;
    oldNumberingListIndex: number;
    oldListLevelIndex: number;
    oldTabs: TabProperties;
    subDocument: SubDocument;
    constructor(modelManipulator: ModelManipulator, subDocument: SubDocument, paragraphIndex: number, paragraphProperties: MaskedParagraphProperties, style: ParagraphStyle, numberingListIndex: number, listLevelIndex: number, tabs: TabProperties);
    redo(): void;
    undo(): void;
}
//# sourceMappingURL=paragraph-properties-history-items.d.ts.map