import { MaskedCharacterProperties } from '../../character/character-properties';
import { CompositeFontInfo } from '../../character/composite-font-info';
import { CharacterFormattingScript, StrikeoutType, UnderlineType } from '../../character/enums';
import { LangInfo } from '../../character/lang-info';
import { ColorModelInfo } from '../../color/color-model-info';
import { FontInfo } from '../../fonts/font-info';
import { IIntervalPropertyWithUseValueManipulator } from '../../manipulators/i-properties-manipulator';
import { ModelManipulator } from '../../manipulators/model-manipulator';
import { ShadingInfo } from '../../shadings/shading-info';
import { SubDocumentInterval } from '../../sub-document';
import { IntervalBasedHistoryItem } from '../base/interval-based-history-item';
import { HistoryItemIntervalState } from '../states/history-item-state';
import { HistoryItemIntervalStateObject, HistoryItemIntervalUseStateObject } from '../states/history-item-state-object';
export declare class FontUseValueHistoryItem extends IntervalBasedHistoryItem {
    oldState: HistoryItemIntervalState<HistoryItemIntervalStateObject>;
    newValue: number;
    constructor(modelManipulator: ModelManipulator, subDocInterval: SubDocumentInterval, newValue: number);
    redo(): void;
    undo(): void;
}
export declare class CharacterPropertiesHistoryItem extends IntervalBasedHistoryItem {
    newValue: MaskedCharacterProperties;
    oldState: HistoryItemIntervalState<HistoryItemIntervalStateObject>;
    constructor(modelManipulator: ModelManipulator, subDocInterval: SubDocumentInterval, newValue: MaskedCharacterProperties);
    redo(): void;
    undo(): void;
}
export declare class CharacterPropertiesHistoryItemBase<T> extends IntervalBasedHistoryItem {
    oldState: HistoryItemIntervalState<HistoryItemIntervalUseStateObject>;
    newValue: T;
    newUse: boolean;
    constructor(modelManipulator: ModelManipulator, subDocInterval: SubDocumentInterval, newValue: T, newUse: boolean);
    redo(): void;
    undo(): void;
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<T>;
}
export declare class FontBoldHistoryItem extends CharacterPropertiesHistoryItemBase<boolean> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<boolean>;
}
export declare class FontCapsHistoryItem extends CharacterPropertiesHistoryItemBase<boolean> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<boolean>;
}
export declare class FontSmallCapsHistoryItem extends CharacterPropertiesHistoryItemBase<boolean> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<boolean>;
}
export declare class FontUnderlineTypeHistoryItem extends CharacterPropertiesHistoryItemBase<UnderlineType> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<UnderlineType>;
}
export declare class FontTextColorHistoryItem extends CharacterPropertiesHistoryItemBase<ColorModelInfo> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<ColorModelInfo>;
}
export declare class FontShadingInfoHistoryItem extends CharacterPropertiesHistoryItemBase<ShadingInfo> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<ShadingInfo>;
}
export declare class FontHiddenHistoryItem extends CharacterPropertiesHistoryItemBase<boolean> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<boolean>;
}
export declare class FontItalicHistoryItem extends CharacterPropertiesHistoryItemBase<boolean> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<boolean>;
}
export declare class FontNameHistoryItem extends CharacterPropertiesHistoryItemBase<FontInfo> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<FontInfo>;
}
export declare class FontScriptHistoryItem extends CharacterPropertiesHistoryItemBase<CharacterFormattingScript> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<CharacterFormattingScript>;
}
export declare class FontSizeHistoryItem extends CharacterPropertiesHistoryItemBase<number> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<number>;
}
export declare class FontStrikeoutTypeHistoryItem extends CharacterPropertiesHistoryItemBase<StrikeoutType> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<StrikeoutType>;
}
export declare class FontStrikeoutWordsOnlyHistoryItem extends CharacterPropertiesHistoryItemBase<boolean> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<boolean>;
}
export declare class FontStrikeoutColorHistoryItem extends CharacterPropertiesHistoryItemBase<ColorModelInfo> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<ColorModelInfo>;
}
export declare class FontUnderlineColorHistoryItem extends CharacterPropertiesHistoryItemBase<ColorModelInfo> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<ColorModelInfo>;
}
export declare class FontHighlightColorHistoryItem extends CharacterPropertiesHistoryItemBase<ColorModelInfo> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<ColorModelInfo>;
}
export declare class FontUnderlineWordsOnlyHistoryItem extends CharacterPropertiesHistoryItemBase<boolean> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<boolean>;
}
export declare class FontNoProofHistoryItem extends CharacterPropertiesHistoryItemBase<boolean> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<boolean>;
}
export declare class FontLangInfoHistoryItem extends CharacterPropertiesHistoryItemBase<LangInfo> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<LangInfo>;
}
export declare class FontCompositeFontInfoHistoryItem extends CharacterPropertiesHistoryItemBase<CompositeFontInfo> {
    getPropertiesManipulator(): IIntervalPropertyWithUseValueManipulator<CompositeFontInfo>;
}
export declare class ResetCharacterPropertiesUseValuesHistoryItem extends IntervalBasedHistoryItem {
    state: HistoryItemIntervalState<HistoryItemIntervalStateObject>;
    redo(): void;
    undo(): void;
}
//# sourceMappingURL=character-properties-history-items.d.ts.map