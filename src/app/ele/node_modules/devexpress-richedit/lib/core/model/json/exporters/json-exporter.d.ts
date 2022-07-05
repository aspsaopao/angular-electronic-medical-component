import { DocumentModel } from '../../document-model';
import { ControlOptions } from '../../options/control';
import { SectionHeadersFooters } from '../../section/header-footer';
import { HeaderFooterSubDocumentInfoBase } from '../../sub-document-infos';
export declare class JSONExporter {
    static exportDocumentProperties(documentModel: DocumentModel): any;
    static exportModelHeaderFooter<T extends HeaderFooterSubDocumentInfoBase>(headersFooters: T[]): any[];
    static exportSections(documentModel: DocumentModel): any[];
    static exportHeaderFooter<T extends HeaderFooterSubDocumentInfoBase>(headersFooters: SectionHeadersFooters<T>): {};
    static exportOptions(controlOptions: ControlOptions): any;
}
//# sourceMappingURL=json-exporter.d.ts.map