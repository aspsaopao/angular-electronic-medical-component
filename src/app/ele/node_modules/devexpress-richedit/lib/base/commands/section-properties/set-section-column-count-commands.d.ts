import { ISectionPropertyDescriptor } from '../../../core/model/section/section-property-descriptor';
import { CommandSimpleOptions, ICommandOptions } from '../command-base';
import { IntervalCommandStateEx } from '../command-states';
import { ChangeSectionPropertiesCommandBase } from './change-section-properties-command-base';
export declare abstract class SetSectionColumnCountBaseCommand<StateT> extends ChangeSectionPropertiesCommandBase<number, StateT> {
    protected getDescriptor(): ISectionPropertyDescriptor<number>;
    isEnabled(options: ICommandOptions): boolean;
    getCurrentValue(): number;
    protected getRelatedCommands(): Record<number, boolean>;
    executeCore(state: IntervalCommandStateEx, options: CommandSimpleOptions<number>): boolean;
}
export declare class SetSectionColumnCountCommand extends SetSectionColumnCountBaseCommand<number> {
}
export declare abstract class SetSectionColumnPredefinedCountCommand extends SetSectionColumnCountBaseCommand<boolean> {
    getStateValue(options: CommandSimpleOptions<number>): boolean;
}
export declare class SetSectionOneColumnCommand extends SetSectionColumnPredefinedCountCommand {
    DEPRECATEDConvertOptionsParameter(_parameter: any): any;
}
export declare class SetSectionTwoColumnsCommand extends SetSectionColumnPredefinedCountCommand {
    DEPRECATEDConvertOptionsParameter(_parameter: any): any;
}
export declare class SetSectionThreeColumnsCommand extends SetSectionColumnPredefinedCountCommand {
    DEPRECATEDConvertOptionsParameter(_parameter: any): any;
}
//# sourceMappingURL=set-section-column-count-commands.d.ts.map