import { FontInfoCache } from '../../core/model/caches/hashed-caches/font-info-cache';
import { RtfCharacterProperties } from '../import/model/character/character-properties';
export declare class UnicodeCharHelper {
    static highestCyrillic: number;
    static lowLatinExtendedAdditional: number;
    static highLatinExtendedAdditional: number;
    static lowGeneralPunctuation: number;
    static highGeneralPunctuation: number;
    static lowCurrencySymbols: number;
    static highCurrencySymbols: number;
    static lowLetterlikeSymbols: number;
    static highLetterlikeSymbols: number;
    static lowNumberForms: number;
    static highNumberForms: number;
    static lowMathematicalOperations: number;
    static highMathematicalOperations: number;
    static lowAnsiCharactersStart: number;
    static lowAnsiCharactersEnd: number;
    static highAnsiCharactersStart: number;
    static highAnsiCharactersEnd: number;
    static privateUseAreaStart: number;
    static privateUseAreaEnd: number;
    static setUnicodeFontName(fontInfoCache: FontInfoCache, ch: string, position: RtfCharacterProperties): void;
    static setUnicodeFontNameByCharType(fontInfoCache: FontInfoCache, charType: CharType, position: RtfCharacterProperties): void;
    static isLowAnsiCharacter(ch: string): boolean;
    static isDoubleByteChar(ch: string): boolean;
    static calculateCharType(ch: string): CharType;
}
export declare enum CharType {
    LowAnsiCharacter = 0,
    DoubleByteCharacter = 1,
    HighAnsiCharacter = 2,
    ComplexScriptCharacter = 3
}
//# sourceMappingURL=unicode-char-helper.d.ts.map