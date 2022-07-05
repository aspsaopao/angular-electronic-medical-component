import { ParagraphLineSpacingType } from '../../../core/model/paragraph/paragraph-properties';
import { IParagraphPropertyDescriptor } from '../../../core/model/paragraph/paragraph-property-descriptors';
import { LineSpacingParagraphCommandBase } from './add-spacing-after-paragraph-command';
export declare abstract class SetParagraphSpacingTypeCommandBase extends LineSpacingParagraphCommandBase<ParagraphLineSpacingType, boolean> {
    getDescriptor(): IParagraphPropertyDescriptor<ParagraphLineSpacingType>;
    getValueForState(val: ParagraphLineSpacingType): boolean;
    DEPRECATEDConvertOptionsParameter(parameter: any): ParagraphLineSpacingType;
    protected abstract getSpacingType(): ParagraphLineSpacingType;
}
export declare class SetSingleParagraphSpacingCommand extends SetParagraphSpacingTypeCommandBase {
    protected getSpacingType(): ParagraphLineSpacingType;
}
export declare class SetSesquialteralParagraphSpacingCommand extends SetParagraphSpacingTypeCommandBase {
    protected getSpacingType(): ParagraphLineSpacingType;
}
export declare class SetDoubleParagraphSpacingCommand extends SetParagraphSpacingTypeCommandBase {
    protected getSpacingType(): ParagraphLineSpacingType;
}
//# sourceMappingURL=set-double-paragraph-spacing-command.d.ts.map