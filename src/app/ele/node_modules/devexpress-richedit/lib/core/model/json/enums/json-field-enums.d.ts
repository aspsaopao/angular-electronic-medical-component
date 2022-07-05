export declare enum JSONFieldProperty {
    StartPos = 0,
    SeparatorPos = 1,
    EndPos = 2,
    Uri = 3,
    Anchor = 4,
    Tip = 5,
    Visited = 6,
    NoInfo = 7
}
export declare enum JSONUpdateFieldCommand {
    ActiveRecord = 0,
    Info = 1,
    SubDocumentId = 2
}
export declare enum JSONUpdateFieldCommandInfo {
    ServerUpdateFieldType = 0,
    Data = 1
}
export declare enum JSONUpdateFieldCommandDocVariableInfo {
    Parameters = 0,
    FieldName = 1
}
export declare enum JSONUpdateFieldCommandDocVariableParameters {
    PureText = 0,
    IntervalStart = 1,
    IntervalEnd = 2
}
export declare enum JSONUpdateFieldCommandResult {
    SimpleText = 0,
    DocumentLength = 1,
    DocumentModel = 2,
    ImageCorrespondence = 3,
    Caches = 4
}
export declare enum JSONServerUpdateFieldType {
    DocVariable = 1,
    MergeField = 2
}
//# sourceMappingURL=json-field-enums.d.ts.map