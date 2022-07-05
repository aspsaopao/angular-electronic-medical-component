import { HeaderFooterType } from '../section/enums';
import { SectionHeadersFooters } from '../section/header-footer';
import { Section } from '../section/section';
import { FooterSubDocumentInfo, HeaderFooterSubDocumentInfoBase, HeaderSubDocumentInfo } from '../sub-document-infos';
import { BaseManipulator } from './base-manipulator';
export declare abstract class HeaderFooterManipulatorBase<T extends HeaderFooterSubDocumentInfoBase> extends BaseManipulator {
    createObject(type: HeaderFooterType): number;
    changeObjectIndex(sectionIndex: number, type: HeaderFooterType, objectIndex: number): number;
    insertHeaderFooter(sectionIndex: number, isHeader: boolean, type: HeaderFooterType): void;
    getHeaderFooterManipulator(isHeader: boolean): HeaderManipulator | FooterManipulator;
    protected abstract createObjectCore(): T;
    protected abstract getObjectsCache(): T[];
    protected abstract isHeader(): boolean;
    protected abstract getContainer(section: Section): SectionHeadersFooters<T>;
}
export declare class HeaderManipulator extends HeaderFooterManipulatorBase<HeaderSubDocumentInfo> {
    protected createObjectCore(): HeaderSubDocumentInfo;
    protected getObjectsCache(): HeaderSubDocumentInfo[];
    protected isHeader(): boolean;
    protected getContainer(section: Section): SectionHeadersFooters<HeaderSubDocumentInfo>;
}
export declare class FooterManipulator extends HeaderFooterManipulatorBase<FooterSubDocumentInfo> {
    protected createObjectCore(): FooterSubDocumentInfo;
    protected getObjectsCache(): FooterSubDocumentInfo[];
    protected isHeader(): boolean;
    protected getContainer(section: Section): SectionHeadersFooters<FooterSubDocumentInfo>;
}
//# sourceMappingURL=header-footer-manipulator.d.ts.map