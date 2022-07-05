import { ISectionPropertyDescriptor } from '../../../core/model/section/section-property-descriptor';
import { CommandSimpleOptions } from '../command-base';
import { IntervalCommandStateEx } from '../command-states';
import { ChangeSectionPropertiesCommandBase } from './change-section-properties-command-base';
export declare class SetLandscapePageOrientationCommand extends ChangeSectionPropertiesCommandBase<boolean, boolean> {
    protected getDescriptor(): ISectionPropertyDescriptor<boolean>;
    DEPRECATEDConvertOptionsParameter(_parameter: any): boolean;
    getStateValue(): boolean;
    protected getRelatedCommands(): Record<number, boolean>;
    executeCore(state: IntervalCommandStateEx, options: CommandSimpleOptions<boolean>): boolean;
    protected isLandscape(): boolean;
}
export declare class SetPortraitPageOrientationCommand extends SetLandscapePageOrientationCommand {
    protected isLandscape(): boolean;
}
//# sourceMappingURL=set-landscape-command.d.ts.map