import { Section } from '../../../core/model/section/section';
import { CommandSimpleOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
import { HeaderFooterCommandBase } from './header-footer-command-base';
export declare abstract class DifferentFirstPageAndOddEvenHeaderFooterCommandBase extends HeaderFooterCommandBase {
    DEPRECATEDConvertOptionsParameter(parameter: any): boolean;
    executeCore(state: SimpleCommandState, options: CommandSimpleOptions<boolean>): boolean;
    protected abstract changeSectionProperty(section: Section, newValue: boolean): any;
}
export declare class DifferentFirstPageHeaderFooterCommand extends DifferentFirstPageAndOddEvenHeaderFooterCommandBase {
    getValue(): boolean;
    protected changeSectionProperty(section: Section, newValue: boolean): void;
}
export declare class DifferentOddEvenHeaderFooterCommand extends DifferentFirstPageAndOddEvenHeaderFooterCommandBase {
    getValue(): boolean;
    protected changeSectionProperty(_section: Section, newValue: boolean): void;
}
//# sourceMappingURL=different-first-odd-even-page-header-footer-command.d.ts.map