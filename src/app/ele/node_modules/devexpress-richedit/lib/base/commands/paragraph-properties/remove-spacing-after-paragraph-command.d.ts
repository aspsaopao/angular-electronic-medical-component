import { IParagraphPropertyDescriptor } from '../../../core/model/paragraph/paragraph-property-descriptors';
import { LineSpacingParagraphCommandBase } from './add-spacing-after-paragraph-command';
export declare class RemoveSpacingAfterParagraphCommand extends LineSpacingParagraphCommandBase<number, number> {
    getDescriptor(): IParagraphPropertyDescriptor<number>;
    DEPRECATEDConvertOptionsParameter(parameter: any): number;
    isEnabled(): boolean;
}
//# sourceMappingURL=remove-spacing-after-paragraph-command.d.ts.map