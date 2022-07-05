import { MaskedCharacterProperties } from '../model/character/character-properties';
import { CharacterStyle } from '../model/character/character-style';
import { MaskedParagraphProperties } from '../model/paragraph/paragraph-properties';
import { ParagraphStyle, TabProperties } from '../model/paragraph/paragraph-style';
import { StyleBase } from '../model/style-base';
export declare class PropertiesBundle<TProperties, TStyle extends StyleBase<TStyle>> {
    props: TProperties;
    style: TStyle;
    constructor(properties: TProperties, style: TStyle);
}
export declare class ParagraphListInfo {
    numberingListIndex: number;
    listLevelIndex: number;
    constructor(numbericListIndex: number, listLevelIndex: number);
    static get default(): ParagraphListInfo;
    clone(): ParagraphListInfo;
}
export declare class MaskedCharacterPropertiesBundle extends PropertiesBundle<MaskedCharacterProperties, CharacterStyle> {
}
export declare class MaskedParagraphPropertiesBundle extends PropertiesBundle<MaskedParagraphProperties, ParagraphStyle> {
}
export declare class MaskedParagraphPropertiesBundleFull extends PropertiesBundle<MaskedParagraphProperties, ParagraphStyle> {
    listInfo: ParagraphListInfo;
    tabs: TabProperties;
    constructor(properties: MaskedParagraphProperties, style: ParagraphStyle, listInfo: ParagraphListInfo, tabs: TabProperties);
    static get notSetted(): MaskedParagraphPropertiesBundleFull;
}
//# sourceMappingURL=properties-bundle.d.ts.map