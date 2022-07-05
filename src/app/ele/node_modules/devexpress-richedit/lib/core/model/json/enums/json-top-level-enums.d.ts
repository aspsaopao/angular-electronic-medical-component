export declare enum IsModified {
    False = 0,
    True = 1,
    SaveInProgress = 2
}
export declare enum JSONResponseError {
    NoErrors = 0,
    ModelIsChanged = 1,
    InnerException = 2,
    AuthException = 3,
    CantSaveToAlreadyOpenedFile = 4,
    CantSaveDocument = 5,
    CantOpenDocument = 6,
    CalculateDocumentVariableException = 7,
    PathTooLongException = 8,
    CantSaveToEmptyPath = 9,
    InsertContentFromServerException = 10,
    LoadPictureException = 11,
    SessionHasExpired = 12
}
export declare enum JSONCommandParametersProperty {
    CommandType = 0,
    IncId = 1,
    ServerParams = 2,
    EditIncId = 3,
    SubDocumentId = 5,
    Caches = 6,
    IsNewWorkSession = 7
}
export declare enum JSONPropertyStateBasedCommand {
    State = 0,
    Property = 1
}
export declare enum JSONInitSessionProperty {
    IsNewDocument = 0,
    SessionGuid = 1,
    FileName = 2,
    LastExecutedEditCommandId = 3,
    SubDocumentsCounter = 5,
    IsModified = 6,
    InvalidDocument = 7,
    Document = 8,
    Caches = 9,
    Options = 10,
    HistoryId = 11,
    Src = 12,
    FolderPath = 13,
    DocumentFormat = 14,
    FirstRecordIndex = 15,
    LastRecordIndex = 16,
    MergeMode = 17,
    DocumentHasSource = 18
}
export declare enum JSONResponceLevelProperty {
    ErrorCode = 0,
    CommandsResults = 1
}
export declare enum JSONCachesDataProperty {
    CharacterPropertiesCache = 0,
    ParagraphPropertiesCache = 1,
    ListLevelPropertiesCache = 2,
    TableRowPropertiesCache = 3,
    TableCellPropertiesCache = 4,
    SubDocuments = 5,
    FontInfoCache = 6,
    ColorModelInfoCache = 7,
    ShadingInfoCache = 8
}
export declare enum JSONGetRtfCommand {
    Position = 0,
    Length = 1,
    SubDocumentId = 2,
    ResultRtf = 3,
    Id = 4
}
export declare enum JSONInsertRtfCommand {
    RtfText = 0,
    Result = 1,
    Id = 2
}
//# sourceMappingURL=json-top-level-enums.d.ts.map