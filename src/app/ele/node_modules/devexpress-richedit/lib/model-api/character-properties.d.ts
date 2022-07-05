import { ArgsCheckerParameterIndex } from '../api-utils/api-utils/parameter-checker';
import { FontInfoCache } from '../core/model/caches/hashed-caches/font-info-cache';
import { CharacterProperties } from '../core/model/character/character-properties';
import { ColorProvider } from '../core/model/color/color-provider';
export declare enum CharacterPropertiesScriptApi {
    Normal = 0,
    Subscript = 1,
    Superscript = 2
}
export interface ICharacterProperties {
    fontName?: string;
    size?: number;
    foreColor?: string;
    backColor?: string;
    highlightColor?: string;
    underline?: boolean;
    underlineColor?: string;
    bold?: boolean;
    italic?: boolean;
    strikeout?: boolean;
    underlineWordsOnly?: boolean;
    script?: CharacterPropertiesScriptApi;
    allCaps?: boolean;
    hidden?: boolean;
    smallCaps?: boolean;
}
export declare class CharacterPropertiesApi {
    fontName: string;
    size: number;
    foreColor: string;
    backColor: string;
    highlightColor: string;
    underline: boolean;
    underlineColor: string;
    bold: boolean;
    italic: boolean;
    strikeout: boolean;
    underlineWordsOnly: boolean;
    script: CharacterPropertiesScriptApi;
    allCaps: boolean;
    hidden: boolean;
    smallCaps: boolean;
}
export declare function convertToCharacterPropertiesApi(properties: CharacterProperties, colorProvider: ColorProvider): CharacterPropertiesApi;
export declare function convertFromCharacterPropertiesApi(properties: ICharacterProperties, fontInfoCache: FontInfoCache, parameterIndex: ArgsCheckerParameterIndex, setRestAsUndefined: boolean, propsCoreTemplate?: CharacterProperties): CharacterProperties;
//# sourceMappingURL=character-properties.d.ts.map