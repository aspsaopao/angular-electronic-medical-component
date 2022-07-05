import { IParagraphPropertyDescriptor } from '../../../core/model/paragraph/paragraph-property-descriptors';
import { LineSpacingParagraphCommandBase } from './add-spacing-after-paragraph-command';
export declare class AddSpacingBeforeParagraphCommand extends LineSpacingParagraphCommandBase<number, number> {
    getDescriptor(): IParagraphPropertyDescriptor<number>;
    isEnabled(): boolean;
    DEPRECATEDConvertOptionsParameter(parameter: any): number;
}
//# sourceMappingURL=add-spacing-before-paragraph-command.d.ts.map