import { ISectionPropertyDescriptor } from '../../../core/model/section/section-property-descriptor';
import { CommandSimpleOptions, ICommandOptions } from '../command-base';
import { ChangeSectionPropertiesCommandBase } from './change-section-properties-command-base';
export declare class ChangeHeaderOffsetCommand extends ChangeSectionPropertiesCommandBase<number, number> {
    protected getDescriptor(): ISectionPropertyDescriptor<number>;
}
export declare class ChangeHeaderOffsetRibbonCommand extends ChangeHeaderOffsetCommand {
    DEPRECATEDConvertOptionsParameter(parameter: number): number;
    getStateValue(options?: CommandSimpleOptions<number>): number;
    isEnabled(options: ICommandOptions): boolean;
}
//# sourceMappingURL=change-header-offset-command.d.ts.map