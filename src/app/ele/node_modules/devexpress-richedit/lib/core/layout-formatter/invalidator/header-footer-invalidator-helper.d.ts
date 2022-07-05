import { DocumentLayout } from '../../layout/document-layout';
import { DocumentModel } from '../../model/document-model';
import { HeaderFooterType } from '../../model/section/enums';
export declare class HeaderFooterInvalidatorHelper {
    private model;
    private layout;
    startPageIndex: number;
    endPageIndex: number;
    private initSectionIndex;
    private initPageIndex;
    private headerFooterType;
    constructor(model: DocumentModel, layout: DocumentLayout, headerFooterType: HeaderFooterType);
    private isNoPages;
    initByPageIndex(initPageIndex: number): void;
    initBySectionIndex(sectionIndex: number): void;
    private calculatePageIndexes;
    private calcStartPageIndex;
    private getSectionIndex;
    private getPageIndex;
}
//# sourceMappingURL=header-footer-invalidator-helper.d.ts.map