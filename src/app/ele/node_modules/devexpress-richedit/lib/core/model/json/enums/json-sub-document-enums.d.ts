export declare enum JSONEnumLoadPieceTableCommandParameters {
    LoadOnOneRequest = 0,
    StartPosition = 1,
    MaxChunkLength = 2,
    Length = 3
}
export declare enum JSONCreateHeaderFooterCommandBaseProperty {
    Type = 0
}
export declare enum JSONChangeHeaderFooterIndexCommandBase {
    SectionIndex = 0,
    NewObjectIndex = 1,
    Type = 2
}
export declare enum JSONEnumLoadPieceTable {
    Bookmarks = 0,
    Fields = 1,
    Tables = 2,
    Chunks = 3,
    Paragraphs = 4,
    RangePermissions = 5
}
export declare enum JSONHeaderFooterInfoProperty {
    SubDocumentId = 0,
    Type = 1
}
export declare enum JSONBookmarkProperty {
    StartPos = 0,
    Length = 1,
    Name = 2
}
export declare enum JSONRangePermissionProperty {
    Start = 0,
    Length = 1,
    UserName = 2,
    Group = 3
}
export declare enum JSONChunkProperty {
    StartPos = 0,
    TextBuffer = 1,
    Runs = 2,
    IsLast = 3
}
export declare enum JSONPieceTableInfo {
    Type = 0,
    Info = 1,
    ParentPieceTableId = 2
}
export declare enum JSONTabInfoProperty {
    Alignment = 0,
    LeaderType = 1,
    Position = 2,
    IsDefault = 3,
    IsDeleted = 4
}
//# sourceMappingURL=json-sub-document-enums.d.ts.map