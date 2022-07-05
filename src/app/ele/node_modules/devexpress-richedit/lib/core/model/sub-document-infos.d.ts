import { DocumentModel } from './document-model';
import { SubDocumentInfoType } from './enums';
import { HeaderFooterType } from './section/enums';
export declare abstract class SubDocumentInfoBase {
    subDocumentId: number;
    isMain: boolean;
    isHeaderFooter: boolean;
    isFooter: boolean;
    isHeader: boolean;
    isNote: boolean;
    isFootNote: boolean;
    isEndNote: boolean;
    isTextBox: boolean;
    isComment: boolean;
    isReferenced: boolean;
    constructor(subDocumentId: number);
    getEndPosition(documentModel: DocumentModel): number;
    getSubDocument(documentModel: DocumentModel): import("./sub-document").SubDocument;
    abstract getType(): SubDocumentInfoType;
    static create(type: SubDocumentInfoType, subDocumentId: number, parentSubDocumentId: number): SubDocumentInfoBase;
    abstract clone(): SubDocumentInfoBase;
}
export declare class TextBoxSubDocumentInfoBase extends SubDocumentInfoBase {
    isMain: boolean;
    isTextBox: boolean;
    parentSubDocumentId: number;
    constructor(subDocumentId: number, parentSubDocumentId: number);
    getType(): SubDocumentInfoType;
    clone(): TextBoxSubDocumentInfoBase;
}
export declare class MainSubDocumentInfo extends SubDocumentInfoBase {
    constructor();
    getType(): SubDocumentInfoType;
    getEndPosition(documentModel: DocumentModel): number;
    clone(): MainSubDocumentInfo;
}
export declare abstract class HeaderFooterSubDocumentInfoBase extends SubDocumentInfoBase {
    headerFooterType: HeaderFooterType;
    isMain: boolean;
    isHeaderFooter: boolean;
}
export declare class HeaderSubDocumentInfo extends HeaderFooterSubDocumentInfoBase {
    getType(): SubDocumentInfoType;
    isHeader: boolean;
    clone(): HeaderSubDocumentInfo;
}
export declare class FooterSubDocumentInfo extends HeaderFooterSubDocumentInfoBase {
    getType(): SubDocumentInfoType;
    isFooter: boolean;
    clone(): FooterSubDocumentInfo;
}
//# sourceMappingURL=sub-document-infos.d.ts.map