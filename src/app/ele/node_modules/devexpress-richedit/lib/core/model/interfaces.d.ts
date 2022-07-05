import { CharacterProperties, MaskedCharacterProperties } from './character/character-properties';
import { ListLevelProperties } from './numbering-lists/list-level-properties';
import { MaskedParagraphProperties, ParagraphProperties } from './paragraph/paragraph-properties';
export interface IListLevelPropertiesContainer {
    setListLevelProperties(properties: ListLevelProperties): any;
    getListLevelProperties(): ListLevelProperties;
}
export interface IMaskedProperties<T> {
    setUseValue(mask: T, value: boolean): any;
    getUseValue(mask: T): boolean;
}
export interface IParagraphPropertiesContainer {
    setParagraphProperties(properties: MaskedParagraphProperties): any;
    onParagraphPropertiesChanged(): any;
    resetParagraphMergedProperties(): any;
    getParagraphMergedProperties(): ParagraphProperties;
    setParagraphMergedProperies(properties: ParagraphProperties): any;
    hasParagraphMergedProperies(): boolean;
}
export interface ICharacterPropertiesContainer {
    setCharacterProperties(properties: MaskedCharacterProperties): any;
    resetCharacterMergedProperties(): any;
    getCharacterMergedProperties(): CharacterProperties;
    setCharacterMergedProperies(properties: CharacterProperties): any;
    hasCharacterMergedProperies(): boolean;
    onCharacterPropertiesChanged(): any;
}
//# sourceMappingURL=interfaces.d.ts.map