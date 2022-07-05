import { NumberingType } from '../../core/model/numbering-lists/numbering-list';
export declare enum ListTypeApi {
    MultiLevel = 0,
    Number = 1,
    Bullet = 2
}
export declare class ListTypeApiConverter {
    private static map;
    static toCoreEnum(apiType: ListTypeApi): NumberingType;
    static toApiEnum(coreType: NumberingType): ListTypeApi;
}
export declare enum ListLevelNumberAlignmentApi {
    Left = 0,
    Center = 1,
    Right = 2
}
export declare enum ListLevelFormatApi {
    Decimal = 0,
    Hiragana = 1,
    FullWidthHiragana = 2,
    ArabicAbjad = 3,
    ArabicAlpha = 4,
    Bullet = 5,
    CardinalText = 6,
    Chicago = 7,
    ChineseCounting = 8,
    ChineseCountingThousand = 9,
    ChineseLegalSimplified = 10,
    Chosung = 11,
    DecimalEnclosedCircle = 12,
    DecimalEnclosedCircleChinese = 13,
    DecimalEnclosedFullstop = 14,
    DecimalEnclosedParentheses = 15,
    DecimalFullWidth = 16,
    DecimalFullWidth2 = 17,
    DecimalHalfWidth = 18,
    DecimalZero = 19,
    Ganada = 20,
    Hebrew1 = 21,
    Hebrew2 = 22,
    Hex = 23,
    HindiConsonants = 24,
    HindiDescriptive = 25,
    HindiNumbers = 26,
    HindiVowels = 27,
    IdeographDigital = 28,
    IdeographEnclosedCircle = 29,
    IdeographLegalTraditional = 30,
    IdeographTraditional = 31,
    IdeographZodiac = 32,
    IdeographZodiacTraditional = 33,
    Iroha = 34,
    IrohaFullWidth = 35,
    JapaneseCounting = 36,
    JapaneseDigitalTenThousand = 37,
    JapaneseLegal = 38,
    KoreanCounting = 39,
    KoreanDigital = 40,
    KoreanDigital2 = 41,
    KoreanLegal = 42,
    LowerLetter = 43,
    LowerRoman = 44,
    None = 45,
    NumberInDash = 46,
    Ordinal = 47,
    OrdinalText = 48,
    RussianLower = 49,
    RussianUpper = 50,
    TaiwaneseCounting = 51,
    TaiwaneseCountingThousand = 52,
    TaiwaneseDigital = 53,
    ThaiDescriptive = 54,
    ThaiLetters = 55,
    ThaiNumbers = 56,
    UpperLetter = 57,
    UpperRoman = 58,
    VietnameseDescriptive = 59
}
//# sourceMappingURL=enums.d.ts.map