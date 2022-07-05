import { DxMimeType } from '@devexpress/utils/lib/utils/mime-type';
export declare enum DocumentFormat {
    Undefined = 0,
    PlainText = 1,
    Rtf = 2,
    Html = 3,
    OpenXml = 4,
    Mht = 5,
    WordML = 6,
    OpenDocument = 7,
    ePub = 9,
    Doc = 10
}
export declare const mimeTypeIntoDocumentFormat: {
    1: DocumentFormat;
    4: DocumentFormat;
    2: DocumentFormat;
    3: DocumentFormat;
};
export declare const documentFormatIntoMimeType: {
    4: DxMimeType;
    2: DxMimeType;
    1: DxMimeType;
};
//# sourceMappingURL=document-format.d.ts.map