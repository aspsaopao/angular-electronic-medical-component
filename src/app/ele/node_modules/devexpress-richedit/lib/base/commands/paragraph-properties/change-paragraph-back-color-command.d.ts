import { IParagraphPropertyDescriptor } from '../../../core/model/paragraph/paragraph-property-descriptors';
import { ShadingInfo } from '../../../core/model/shadings/shading-info';
import { CommandSimpleOptions } from '../command-base';
import { IntervalCommandStateEx } from '../command-states';
import { ChangeParagraphPropertiesCommandBase } from './change-paragraph-properties-command-base';
export declare class ChangeParagraphBackColorCommand extends ChangeParagraphPropertiesCommandBase<ShadingInfo, number> {
    executeCore(_state: IntervalCommandStateEx, options: CommandSimpleOptions<ShadingInfo>): boolean;
    getDescriptor(): IParagraphPropertyDescriptor<ShadingInfo>;
    getValueForState(val: ShadingInfo): number;
    isLockUpdateValue(): boolean;
    DEPRECATEDConvertOptionsParameter(parameter: any): ShadingInfo;
}
//# sourceMappingURL=change-paragraph-back-color-command.d.ts.map