import { CharacterFormattingScript, StrikeoutType, UnderlineType } from '../../character/enums';
import { ColorModelInfo } from '../../color/color-model-info';
import { FontInfo } from '../../fonts/font-info';
import { IListLevelPropertyWithUseManipulator } from '../../manipulators/i-properties-manipulator';
import { ModelManipulator } from '../../manipulators/model-manipulator';
import { ShadingInfo } from '../../shadings/shading-info';
import { HistoryItem } from '../base/history-item';
import { HistoryItemState } from '../states/history-item-state';
import { HistoryItemListLevelUseStateObject } from '../states/history-item-state-object';
export declare class ListLevelCharacterPropertiesHistoryItemBase<T> extends HistoryItem {
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
export declare class ListLevelFontBoldHistoryItem extends ListLevelCharacterPropertiesHistoryItemBase<boolean> {
    getManipulator(): IListLevelPropertyWithUseManipulator<boolean>;
}
export declare class ListLevelFontCapsHistoryItem extends ListLevelCharacterPropertiesHistoryItemBase<boolean> {
    getManipulator(): IListLevelPropertyWithUseManipulator<boolean>;
}
export declare class ListLevelFontSmallCapsHistoryItem extends ListLevelCharacterPropertiesHistoryItemBase<boolean> {
    getManipulator(): IListLevelPropertyWithUseManipulator<boolean>;
}
export declare class ListLevelFontUnderlineTypeHistoryItem extends ListLevelCharacterPropertiesHistoryItemBase<UnderlineType> {
    getManipulator(): IListLevelPropertyWithUseManipulator<UnderlineType>;
}
export declare class ListLevelFontTextColorHistoryItem extends ListLevelCharacterPropertiesHistoryItemBase<ColorModelInfo> {
    getManipulator(): IListLevelPropertyWithUseManipulator<ColorModelInfo>;
}
export declare class ListLevelFontShadingInfoHistoryItem extends ListLevelCharacterPropertiesHistoryItemBase<ShadingInfo> {
    getManipulator(): IListLevelPropertyWithUseManipulator<ShadingInfo>;
}
export declare class ListLevelFontHiddenHistoryItem extends ListLevelCharacterPropertiesHistoryItemBase<boolean> {
    getManipulator(): IListLevelPropertyWithUseManipulator<boolean>;
}
export declare class ListLevelFontItalicHistoryItem extends ListLevelCharacterPropertiesHistoryItemBase<boolean> {
    getManipulator(): IListLevelPropertyWithUseManipulator<boolean>;
}
export declare class ListLevelFontNameHistoryItem extends ListLevelCharacterPropertiesHistoryItemBase<FontInfo> {
    getManipulator(): IListLevelPropertyWithUseManipulator<FontInfo>;
}
export declare class ListLevelFontScriptHistoryItem extends ListLevelCharacterPropertiesHistoryItemBase<CharacterFormattingScript> {
    getManipulator(): IListLevelPropertyWithUseManipulator<CharacterFormattingScript>;
}
export declare class ListLevelFontSizeHistoryItem extends ListLevelCharacterPropertiesHistoryItemBase<number> {
    getManipulator(): IListLevelPropertyWithUseManipulator<number>;
}
export declare class ListLevelFontStrikeoutTypeHistoryItem extends ListLevelCharacterPropertiesHistoryItemBase<StrikeoutType> {
    getManipulator(): IListLevelPropertyWithUseManipulator<StrikeoutType>;
}
export declare class ListLevelFontStrikeoutWordsOnlyHistoryItem extends ListLevelCharacterPropertiesHistoryItemBase<boolean> {
    getManipulator(): IListLevelPropertyWithUseManipulator<boolean>;
}
export declare class ListLevelFontStrikeoutColorHistoryItem extends ListLevelCharacterPropertiesHistoryItemBase<ColorModelInfo> {
    getManipulator(): IListLevelPropertyWithUseManipulator<ColorModelInfo>;
}
export declare class ListLevelFontUnderlineColorHistoryItem extends ListLevelCharacterPropertiesHistoryItemBase<ColorModelInfo> {
    getManipulator(): IListLevelPropertyWithUseManipulator<ColorModelInfo>;
}
export declare class ListLevelFontUnderlineWordsOnlyHistoryItem extends ListLevelCharacterPropertiesHistoryItemBase<boolean> {
    getManipulator(): IListLevelPropertyWithUseManipulator<boolean>;
}
export declare class ListLevelFontNoProofHistoryItem extends ListLevelCharacterPropertiesHistoryItemBase<boolean> {
    getManipulator(): IListLevelPropertyWithUseManipulator<boolean>;
}
//# sourceMappingURL=list-level-character-properties-history-items.d.ts.map