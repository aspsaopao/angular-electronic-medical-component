import { ISectionPropertyDescriptor } from '../../../core/model/section/section-property-descriptor';
import { CommandSimpleOptions, ICommandOptions } from '../command-base';
import { ChangeSectionPropertiesCommandBase } from './change-section-properties-command-base';
export declare class ChangeFooterOffsetCommand extends ChangeSectionPropertiesCommandBase<number, number> {
    protected getDescriptor(): ISectionPropertyDescriptor<number>;
}
export declare class ChangeFooterOffsetRibbonCommand extends ChangeFooterOffsetCommand {
    DEPRECATEDConvertOptionsParameter(parameter: number): number;
    getStateValue(options?: CommandSimpleOptions<number>): number;
    isEnabled(options: ICommandOptions): boolean;
}
//# sourceMappingURL=change-footer-offset-command.d.ts.map