import { IParagraphPropertyDescriptor } from '../../../core/model/paragraph/paragraph-property-descriptors';
import { ChangeParagraphPropertiesCommandBase } from './change-paragraph-properties-command-base';
export declare abstract class LineSpacingParagraphCommandBase<T, StateT> extends ChangeParagraphPropertiesCommandBase<T, StateT> {
    protected getRelatedCommands(): Record<number, boolean>;
}
export declare class AddSpacingAfterParagraphCommand extends LineSpacingParagraphCommandBase<number, number> {
    getDescriptor(): IParagraphPropertyDescriptor<number>;
    isEnabled(): boolean;
    DEPRECATEDConvertOptionsParameter(parameter: any): number;
}
//# sourceMappingURL=add-spacing-after-paragraph-command.d.ts.map