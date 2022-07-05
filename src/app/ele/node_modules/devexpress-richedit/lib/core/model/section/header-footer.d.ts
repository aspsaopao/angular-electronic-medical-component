import { ISupportCopyFrom } from '@devexpress/utils/lib/types';
import { FooterSubDocumentInfo, HeaderFooterSubDocumentInfoBase, HeaderSubDocumentInfo } from '../sub-document-infos';
import { HeaderFooterType } from './enums';
import { Section } from './section';
export declare abstract class SectionHeadersFooters<T extends HeaderFooterSubDocumentInfoBase> implements ISupportCopyFrom<SectionHeadersFooters<T>> {
    static INVALID_INDEX: number;
    section: Section;
    private indices;
    constructor(section: Section);
    getObject(type: HeaderFooterType): T;
    getObjectIndex(type: HeaderFooterType): number;
    setObjectIndex(type: HeaderFooterType, objectIndex: number): void;
    getActualObject(firstPageOfSection: boolean, isEvenPage: boolean): T;
    copyFrom(source: SectionHeadersFooters<T>): void;
    isLinkedToPrevious(type: HeaderFooterType): boolean;
    canLinkToPrevious(): boolean;
    static getActualObjectType(section: Section, firstPageOfSection: boolean, isEvenPage: boolean): HeaderFooterType;
    protected abstract getObjectsCache(): T[];
    protected abstract getContainer(section: Section): SectionHeadersFooters<T>;
    static isLinkedToPrevious(section: Section, headerFooterType: HeaderFooterType): boolean;
}
export declare class SectionHeaders extends SectionHeadersFooters<HeaderSubDocumentInfo> {
    protected getContainer(section: Section): SectionHeadersFooters<HeaderSubDocumentInfo>;
    protected getObjectsCache(): HeaderSubDocumentInfo[];
    clone(): SectionHeaders;
}
export declare class SectionFooters extends SectionHeadersFooters<FooterSubDocumentInfo> {
    protected getContainer(section: Section): SectionHeadersFooters<FooterSubDocumentInfo>;
    protected getObjectsCache(): FooterSubDocumentInfo[];
    clone(): SectionFooters;
}
//# sourceMappingURL=header-footer.d.ts.map