import { DocumentExporterOptions } from '../../core/formats/options';
export declare class RtfDocumentExporterOptions extends DocumentExporterOptions {
    wrapContentInGroup: boolean;
    exportTheme: boolean;
    listExportFormat: RtfNumberingListExportFormat;
    exportFinalParagraphMark: ExportFinalParagraphMark;
    compatibility: RtfDocumentExporterCompatibilityOptions;
    exportedDocumentProperties: DocumentPropertyNames;
    constructor();
}
export declare class RtfDocumentExporterCompatibilityOptions {
    duplicateObjectAsMetafile: boolean;
    backColorExportMode: RtfRunBackColorExportMode;
}
export declare enum RtfNumberingListExportFormat {
    PlainTextFormat = 0,
    RtfFormat = 1
}
export declare enum ExportFinalParagraphMark {
    Always = 0,
    Never = 1,
    SelectedOnly = 2
}
export declare enum RtfRunBackColorExportMode {
    Default = 0,
    Chcbpat = 1,
    Highlight = 2,
    Both = 3
}
export declare enum DocumentPropertyNames {
    None = 0,
    Category = 1,
    ContentStatus = 2,
    ContentType = 4,
    Created = 8,
    Creator = 16,
    Description = 32,
    Identifier = 64,
    Keywords = 128,
    Language = 256,
    LastModifiedBy = 512,
    LastPrinted = 1024,
    Modified = 2048,
    Revision = 4096,
    Subject = 8192,
    Title = 16384,
    Version = 32768,
    BuiltinProperties = 65535,
    CustomProperties = 983040,
    All = 1048575
}
//# sourceMappingURL=rtf-document-exporter-options.d.ts.map