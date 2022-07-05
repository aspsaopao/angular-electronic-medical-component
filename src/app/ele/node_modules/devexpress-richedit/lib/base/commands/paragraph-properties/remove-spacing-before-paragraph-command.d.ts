import { IParagraphPropertyDescriptor } from '../../../core/model/paragraph/paragraph-property-descriptors';
import { LineSpacingParagraphCommandBase } from './add-spacing-after-paragraph-command';
export declare class RemoveSpacingBeforeParagraphCommand extends LineSpacingParagraphCommandBase<number, number> {
    getDescriptor(): IParagraphPropertyDescriptor<number>;
    DEPRECATEDConvertOptionsParameter(parameter: any): number;
    isEnabled(): boolean;
}
//# sourceMappingURL=remove-spacing-before-paragraph-command.d.ts.map