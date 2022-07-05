import { Margins } from '@devexpress/utils/lib/geometry/margins';
import { CommandSimpleOptions } from '../command-base';
import { IntervalCommandStateEx } from '../command-states';
import { SectionPropertiesCommandBase } from './section-properties-command-base';
export declare abstract class SetSectionPageMarginsCommandBase<StateT> extends SectionPropertiesCommandBase<Margins, StateT> {
    protected getCurrentValue(): Margins;
    executeCore(_state: IntervalCommandStateEx, options: CommandSimpleOptions<Margins>): boolean;
    private setMargin;
    protected getRelatedCommands(): Record<number, boolean>;
}
export declare class SetSectionPageMarginsCommand extends SetSectionPageMarginsCommandBase<Margins> {
    getStateValue(): Margins;
}
export declare abstract class SetPredefinedSectionPageMarginsCommand extends SetSectionPageMarginsCommandBase<boolean> {
    protected abstract getPredefinedMargins(): Margins;
    getStateValue(): boolean;
    DEPRECATEDConvertOptionsParameter(_parameter: any): Margins;
}
export declare class SetNormalSectionPageMarginsCommand extends SetPredefinedSectionPageMarginsCommand {
    protected getPredefinedMargins(): Margins;
}
export declare class SetNarrowSectionPageMarginsCommand extends SetPredefinedSectionPageMarginsCommand {
    protected getPredefinedMargins(): Margins;
}
export declare class SetModerateSectionPageMarginsCommand extends SetPredefinedSectionPageMarginsCommand {
    protected getPredefinedMargins(): Margins;
}
export declare class SetWideSectionPageMarginsCommand extends SetPredefinedSectionPageMarginsCommand {
    protected getPredefinedMargins(): Margins;
}
//# sourceMappingURL=set-predefined-section-page-margins-commands.d.ts.map