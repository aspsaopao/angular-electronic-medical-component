import { Section } from '../../../core/model/section/section';
import { HeaderFooterSubDocumentInfoBase } from '../../../core/model/sub-document-infos';
import { IRichEditControl } from '../../interfaces/i-rich-edit-core';
import { CommandBase } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class HeaderFooterCommandBase extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    isEnabled(): boolean;
    protected getValue(): any;
    protected getSectionIndex(pageIndex: number): number;
    static getObjectsCache(isHeader: boolean, control: IRichEditControl): HeaderFooterSubDocumentInfoBase[];
    protected static getSectionHeadersFooters(isHeader: boolean, section: Section): any;
}
//# sourceMappingURL=header-footer-command-base.d.ts.map