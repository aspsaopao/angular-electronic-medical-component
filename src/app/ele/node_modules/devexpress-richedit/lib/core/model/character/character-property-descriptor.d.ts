import { EqualFunc } from '@devexpress/utils/lib/types';
import { ColorModelInfo } from '../color/color-model-info';
import { FontInfo } from '../fonts/font-info';
import { CharacterPropertiesHistoryItemBase } from '../history/items/character-properties-history-items';
import { JSONCharacterFormattingProperty } from '../json/enums/json-character-enums';
import { ModelManipulator } from '../manipulators/model-manipulator';
import { ShadingInfo } from '../shadings/shading-info';
import { SubDocumentInterval } from '../sub-document';
import { CharacterProperties } from './character-properties';
import { CompositeFontInfo } from './composite-font-info';
import { CharacterFormattingScript, CharacterPropertiesMask, StrikeoutType, UnderlineType } from './enums';
import { LangInfo } from './lang-info';
export declare type CharacterPropertiesHistoryItemType<T> = new (modelManipulator: ModelManipulator, subDocInterval: SubDocumentInterval, newValue: T, newUse: boolean) => CharacterPropertiesHistoryItemBase<T>;
export interface ICharacterPropertyDescriptor<T> {
    setProp(props: CharacterProperties, newValue: T): any;
    getProp(props: CharacterProperties): T;
    maskValue(): CharacterPropertiesMask;
    getHistoryItemConstructor(): CharacterPropertiesHistoryItemType<T>;
    getJSONProperty(): JSONCharacterFormattingProperty;
    readonly binaryEquals: EqualFunc<T>;
    readonly defaultValue: T;
}
export declare class CharacterPropertiesAllCapsDescriptor implements ICharacterPropertyDescriptor<boolean> {
    setProp(props: CharacterProperties, newValue: boolean): void;
    getProp(props: CharacterProperties): boolean;
    maskValue(): CharacterPropertiesMask;
    getHistoryItemConstructor(): CharacterPropertiesHistoryItemType<boolean>;
    getJSONProperty(): JSONCharacterFormattingProperty;
    binaryEquals: EqualFunc<boolean>;
    defaultValue: boolean;
}
export declare class CharacterPropertiesSmallCapsDescriptor implements ICharacterPropertyDescriptor<boolean> {
    setProp(props: CharacterProperties, newValue: boolean): void;
    getProp(props: CharacterProperties): boolean;
    maskValue(): CharacterPropertiesMask;
    getHistoryItemConstructor(): CharacterPropertiesHistoryItemType<boolean>;
    getJSONProperty(): JSONCharacterFormattingProperty;
    binaryEquals: EqualFunc<boolean>;
    defaultValue: boolean;
}
export declare class CharacterPropertiesFontSizeDescriptor implements ICharacterPropertyDescriptor<number> {
    setProp(props: CharacterProperties, newValue: number): void;
    getProp(props: CharacterProperties): number;
    maskValue(): CharacterPropertiesMask;
    getHistoryItemConstructor(): CharacterPropertiesHistoryItemType<number>;
    getJSONProperty(): JSONCharacterFormattingProperty;
    binaryEquals: EqualFunc<number>;
    defaultValue: number;
}
export declare class CharacterPropertiesFontBoldDescriptor implements ICharacterPropertyDescriptor<boolean> {
    setProp(props: CharacterProperties, newValue: boolean): void;
    getProp(props: CharacterProperties): boolean;
    maskValue(): CharacterPropertiesMask;
    getHistoryItemConstructor(): CharacterPropertiesHistoryItemType<boolean>;
    getJSONProperty(): JSONCharacterFormattingProperty;
    binaryEquals: EqualFunc<boolean>;
    defaultValue: boolean;
}
export declare class CharacterPropertiesFontItalicDescriptor implements ICharacterPropertyDescriptor<boolean> {
    setProp(props: CharacterProperties, newValue: boolean): void;
    getProp(props: CharacterProperties): boolean;
    maskValue(): CharacterPropertiesMask;
    getHistoryItemConstructor(): CharacterPropertiesHistoryItemType<boolean>;
    getJSONProperty(): JSONCharacterFormattingProperty;
    binaryEquals: EqualFunc<boolean>;
    defaultValue: boolean;
}
export declare class CharacterPropertiesFontInfoDescriptor implements ICharacterPropertyDescriptor<FontInfo> {
    setProp(props: CharacterProperties, newValue: FontInfo): void;
    getProp(props: CharacterProperties): FontInfo;
    maskValue(): CharacterPropertiesMask;
    getHistoryItemConstructor(): CharacterPropertiesHistoryItemType<FontInfo>;
    getJSONProperty(): JSONCharacterFormattingProperty;
    binaryEquals: EqualFunc<FontInfo>;
    defaultValue: FontInfo;
}
export declare class CharacterPropertiesScriptDescriptor implements ICharacterPropertyDescriptor<CharacterFormattingScript> {
    setProp(props: CharacterProperties, newValue: CharacterFormattingScript): void;
    getProp(props: CharacterProperties): CharacterFormattingScript;
    maskValue(): CharacterPropertiesMask;
    getHistoryItemConstructor(): CharacterPropertiesHistoryItemType<CharacterFormattingScript>;
    getJSONProperty(): JSONCharacterFormattingProperty;
    binaryEquals: EqualFunc<CharacterFormattingScript>;
    defaultValue: CharacterFormattingScript;
}
export declare class CharacterPropertiesStrikeoutTypeDescriptor implements ICharacterPropertyDescriptor<StrikeoutType> {
    setProp(props: CharacterProperties, newValue: StrikeoutType): void;
    getProp(props: CharacterProperties): StrikeoutType;
    maskValue(): CharacterPropertiesMask;
    getHistoryItemConstructor(): CharacterPropertiesHistoryItemType<StrikeoutType>;
    getJSONProperty(): JSONCharacterFormattingProperty;
    binaryEquals: EqualFunc<StrikeoutType>;
    defaultValue: StrikeoutType;
}
export declare class CharacterPropertiesUnderlineTypeDescriptor implements ICharacterPropertyDescriptor<UnderlineType> {
    setProp(props: CharacterProperties, newValue: UnderlineType): void;
    getProp(props: CharacterProperties): UnderlineType;
    maskValue(): CharacterPropertiesMask;
    getHistoryItemConstructor(): CharacterPropertiesHistoryItemType<UnderlineType>;
    getJSONProperty(): JSONCharacterFormattingProperty;
    binaryEquals: EqualFunc<UnderlineType>;
    defaultValue: UnderlineType;
}
export declare class CharacterPropertiesUnderlineWordsOnlyDescriptor implements ICharacterPropertyDescriptor<boolean> {
    setProp(props: CharacterProperties, newValue: boolean): void;
    getProp(props: CharacterProperties): boolean;
    maskValue(): CharacterPropertiesMask;
    getHistoryItemConstructor(): CharacterPropertiesHistoryItemType<boolean>;
    getJSONProperty(): JSONCharacterFormattingProperty;
    binaryEquals: EqualFunc<boolean>;
    defaultValue: boolean;
}
export declare class CharacterPropertiesStrikeoutWordsOnlyDescriptor implements ICharacterPropertyDescriptor<boolean> {
    setProp(props: CharacterProperties, newValue: boolean): void;
    getProp(props: CharacterProperties): boolean;
    maskValue(): CharacterPropertiesMask;
    getHistoryItemConstructor(): CharacterPropertiesHistoryItemType<boolean>;
    getJSONProperty(): JSONCharacterFormattingProperty;
    binaryEquals: EqualFunc<boolean>;
    defaultValue: boolean;
}
export declare class CharacterPropertiesNoProofDescriptor implements ICharacterPropertyDescriptor<boolean> {
    setProp(props: CharacterProperties, newValue: boolean): void;
    getProp(props: CharacterProperties): boolean;
    maskValue(): CharacterPropertiesMask;
    getHistoryItemConstructor(): CharacterPropertiesHistoryItemType<boolean>;
    getJSONProperty(): JSONCharacterFormattingProperty;
    binaryEquals: EqualFunc<boolean>;
    defaultValue: boolean;
}
export declare class CharacterPropertiesHiddenDescriptor implements ICharacterPropertyDescriptor<boolean> {
    setProp(props: CharacterProperties, newValue: boolean): void;
    getProp(props: CharacterProperties): boolean;
    maskValue(): CharacterPropertiesMask;
    getHistoryItemConstructor(): CharacterPropertiesHistoryItemType<boolean>;
    getJSONProperty(): JSONCharacterFormattingProperty;
    binaryEquals: EqualFunc<boolean>;
    defaultValue: boolean;
}
export declare class CharacterPropertiesTextColorDescriptor implements ICharacterPropertyDescriptor<ColorModelInfo> {
    setProp(props: CharacterProperties, newValue: ColorModelInfo): void;
    getProp(props: CharacterProperties): ColorModelInfo;
    maskValue(): CharacterPropertiesMask;
    getHistoryItemConstructor(): CharacterPropertiesHistoryItemType<ColorModelInfo>;
    getJSONProperty(): JSONCharacterFormattingProperty;
    binaryEquals: EqualFunc<ColorModelInfo>;
    defaultValue: ColorModelInfo;
}
export declare class CharacterPropertiesShadingInfoColorDescriptor implements ICharacterPropertyDescriptor<ShadingInfo> {
    setProp(props: CharacterProperties, newValue: ShadingInfo): void;
    getProp(props: CharacterProperties): ShadingInfo;
    maskValue(): CharacterPropertiesMask;
    getHistoryItemConstructor(): CharacterPropertiesHistoryItemType<ShadingInfo>;
    getJSONProperty(): JSONCharacterFormattingProperty;
    binaryEquals: EqualFunc<ShadingInfo>;
    defaultValue: ShadingInfo;
}
export declare class CharacterPropertiesStrikeoutColorDescriptor implements ICharacterPropertyDescriptor<ColorModelInfo> {
    setProp(props: CharacterProperties, newValue: ColorModelInfo): void;
    getProp(props: CharacterProperties): ColorModelInfo;
    maskValue(): CharacterPropertiesMask;
    getHistoryItemConstructor(): CharacterPropertiesHistoryItemType<ColorModelInfo>;
    getJSONProperty(): JSONCharacterFormattingProperty;
    binaryEquals: EqualFunc<ColorModelInfo>;
    defaultValue: ColorModelInfo;
}
export declare class CharacterPropertiesUnderlineColorDescriptor implements ICharacterPropertyDescriptor<ColorModelInfo> {
    setProp(props: CharacterProperties, newValue: ColorModelInfo): void;
    getProp(props: CharacterProperties): ColorModelInfo;
    maskValue(): CharacterPropertiesMask;
    getHistoryItemConstructor(): CharacterPropertiesHistoryItemType<ColorModelInfo>;
    getJSONProperty(): JSONCharacterFormattingProperty;
    binaryEquals: EqualFunc<ColorModelInfo>;
    defaultValue: ColorModelInfo;
}
export declare class CharacterPropertiesHighlightColorDescriptor implements ICharacterPropertyDescriptor<ColorModelInfo> {
    setProp(props: CharacterProperties, newValue: ColorModelInfo): void;
    getProp(props: CharacterProperties): ColorModelInfo;
    maskValue(): CharacterPropertiesMask;
    getHistoryItemConstructor(): CharacterPropertiesHistoryItemType<ColorModelInfo>;
    getJSONProperty(): JSONCharacterFormattingProperty;
    binaryEquals: EqualFunc<ColorModelInfo>;
    defaultValue: ColorModelInfo;
}
export declare class CharacterPropertiesLangInfoDescriptor implements ICharacterPropertyDescriptor<LangInfo> {
    setProp(props: CharacterProperties, newValue: LangInfo): void;
    getProp(props: CharacterProperties): LangInfo;
    maskValue(): CharacterPropertiesMask;
    getHistoryItemConstructor(): CharacterPropertiesHistoryItemType<LangInfo>;
    getJSONProperty(): JSONCharacterFormattingProperty;
    binaryEquals: EqualFunc<LangInfo>;
    defaultValue: LangInfo;
}
export declare class CharacterPropertiesCompositeFontInfoDescriptor implements ICharacterPropertyDescriptor<CompositeFontInfo> {
    setProp(props: CharacterProperties, newValue: CompositeFontInfo): void;
    getProp(props: CharacterProperties): CompositeFontInfo;
    maskValue(): CharacterPropertiesMask;
    getHistoryItemConstructor(): CharacterPropertiesHistoryItemType<CompositeFontInfo>;
    getJSONProperty(): JSONCharacterFormattingProperty;
    binaryEquals: EqualFunc<CompositeFontInfo>;
    defaultValue: CompositeFontInfo;
}
export declare class CharacterPropertyDescriptor {
    static allCaps: CharacterPropertiesAllCapsDescriptor;
    static size: CharacterPropertiesFontSizeDescriptor;
    static bold: CharacterPropertiesFontBoldDescriptor;
    static italic: CharacterPropertiesFontItalicDescriptor;
    static fontInfo: CharacterPropertiesFontInfoDescriptor;
    static script: CharacterPropertiesScriptDescriptor;
    static strikeoutType: CharacterPropertiesStrikeoutTypeDescriptor;
    static underlineType: CharacterPropertiesUnderlineTypeDescriptor;
    static underlineWordsOnly: CharacterPropertiesUnderlineWordsOnlyDescriptor;
    static strikeoutWordsOnly: CharacterPropertiesStrikeoutWordsOnlyDescriptor;
    static noProof: CharacterPropertiesNoProofDescriptor;
    static hidden: CharacterPropertiesHiddenDescriptor;
    static langInfo: CharacterPropertiesLangInfoDescriptor;
    static compositeFontInfo: CharacterPropertiesCompositeFontInfoDescriptor;
    static textColor: CharacterPropertiesTextColorDescriptor;
    static shadingInfo: CharacterPropertiesShadingInfoColorDescriptor;
    static highlightColor: CharacterPropertiesHighlightColorDescriptor;
    static strikeoutColor: CharacterPropertiesStrikeoutColorDescriptor;
    static underlineColor: CharacterPropertiesUnderlineColorDescriptor;
    static smallCaps: CharacterPropertiesSmallCapsDescriptor;
    static ALL_FIELDS: ICharacterPropertyDescriptor<any>[];
    static whatNeedSetWhenCreateHyperlinkField: ICharacterPropertyDescriptor<any>[];
}
//# sourceMappingURL=character-property-descriptor.d.ts.map