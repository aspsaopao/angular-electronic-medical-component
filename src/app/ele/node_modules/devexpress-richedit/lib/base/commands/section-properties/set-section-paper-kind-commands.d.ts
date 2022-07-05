import { PaperKind } from '../../../core/model/section/paper-kind';
import { Size } from '@devexpress/utils/lib/geometry/size';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { CommandSimpleOptions } from '../command-base';
import { IntervalCommandStateEx } from '../command-states';
import { SectionPropertiesCommandBase } from './section-properties-command-base';
export declare class SetSectionPageSizeCommand extends SectionPropertiesCommandBase<{
    size: Size;
    updateOrientation: boolean;
    paperKind: PaperKind;
}, Size> {
    executeCore(_state: IntervalCommandStateEx, options: CommandSimpleOptions<{
        size: Size;
        updateOrientation: boolean;
        paperKind: PaperKind;
    }>): boolean;
    getStateValue(_options: CommandSimpleOptions<{
        size: Size;
        updateOrientation: boolean;
    }>): Size;
    static compareSizeByTwoDimensions(a: Size, b: Size): boolean;
}
export declare abstract class SetSectionPaperKindCommand extends SetSectionPageSizeCommand {
    DEPRECATEDConvertOptionsParameter(_parameter: any): any;
    abstract getPaperKind(): PaperKind;
    getStateValue(_options: CommandSimpleOptions<{
        size: Size;
        updateOrientation: boolean;
    }>): Size;
    protected getStateCore(enabled: boolean, intervals: FixedInterval[], value: Size): IntervalCommandStateEx;
    protected getRelatedCommands(): Record<number, boolean>;
}
export declare class SetSectionLetterPaperKindCommand extends SetSectionPaperKindCommand {
    getPaperKind(): PaperKind;
}
export declare class SetSectionLegalPaperKindCommand extends SetSectionPaperKindCommand {
    getPaperKind(): PaperKind;
}
export declare class SetSectionFolioPaperKindCommand extends SetSectionPaperKindCommand {
    getPaperKind(): PaperKind;
}
export declare class SetSectionA4PaperKindCommand extends SetSectionPaperKindCommand {
    getPaperKind(): PaperKind;
}
export declare class SetSectionA5PaperKindCommand extends SetSectionPaperKindCommand {
    getPaperKind(): PaperKind;
}
export declare class SetSectionA6PaperKindCommand extends SetSectionPaperKindCommand {
    getPaperKind(): PaperKind;
}
export declare class SetSectionB5PaperKindCommand extends SetSectionPaperKindCommand {
    getPaperKind(): PaperKind;
}
export declare class SetSectionExecutivePaperKindCommand extends SetSectionPaperKindCommand {
    getPaperKind(): PaperKind;
}
//# sourceMappingURL=set-section-paper-kind-commands.d.ts.map