export declare enum JSONAbstractNumberingListProperty {
    Deleted = 0,
    Id = 1,
    Levels = 2
}
export declare enum JSONNumberingListProperty {
    AlIndex = 0,
    Id = 1,
    Levels = 2
}
export declare enum JSONNumberingListLevelProperty {
    CharacterPropertiesIndex = 0,
    ParagraphPropertiesIndex = 1,
    ListLevelPropertiesIndex = 2,
    MAX_VALUE = 3
}
export declare enum JSONNumberingOverrideListLevelProperty {
    NewStart = 3,
    OverrideStart = 4,
    Level = 5
}
export declare enum JSONDeleteAbstractNumberingListCommandProperty {
    Index = 0
}
export declare enum JSONAddAbstractNumberingListCommandPropery {
    InnerId = 0,
    Deleted = 1,
    Levels = 2,
    ParagraphProperties = 3,
    ListLevelProperties = 4,
    CharacterProperties = 5,
    OverrideStart = 6,
    NewStart = 7,
    AbstractNumberingListIndex = 8
}
export declare enum JSONIOverrideListLevelProperty {
    NewStart = 0,
    OverrideStart = 1
}
export declare enum JSONListLevelProperty {
    Start = 0,
    Format = 1,
    ConvertPreviousLevelNumberingToDecimal = 2,
    SuppressBulletResize = 3,
    SuppressRestart = 4,
    Alignment = 5,
    DisplayFormatString = 6,
    RelativeRestartLevel = 7,
    Separator = 8,
    TemplateCode = 9,
    OriginalLeftIndent = 10,
    Legacy = 11,
    LegacySpace = 12,
    LegacyIndent = 13
}
//# sourceMappingURL=json-list-enums.d.ts.map