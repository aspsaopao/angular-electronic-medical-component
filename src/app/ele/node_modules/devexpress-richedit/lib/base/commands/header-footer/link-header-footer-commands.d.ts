import { HistoryItem } from '../../../core/model/history/base/history-item';
import { HeaderFooterType } from '../../../core/model/section/enums';
import { Section } from '../../../core/model/section/section';
import { ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
import { HeaderFooterCommandBase } from './header-footer-command-base';
export declare class LinkHeaderFooterToPreviousCommand extends HeaderFooterCommandBase {
    private isHeader;
    isEnabled(): boolean;
    getValue(): any;
    executeCore(state: SimpleCommandState, _options: ICommandOptions): boolean;
    private linkToPrevious;
    private unlinkFromPrevious;
    protected performLinkSectionToPrevious(sectionIndex: number, type: HeaderFooterType, linkAction: (previousSectionIndex: number) => void): void;
    protected areSectionsLinked(section1: Section, section2: Section, type: HeaderFooterType): boolean;
    protected createChangeObjectIndexHistoryItem(sectionIndex: number, type: HeaderFooterType, newIndex: number): HistoryItem;
}
//# sourceMappingURL=link-header-footer-commands.d.ts.map