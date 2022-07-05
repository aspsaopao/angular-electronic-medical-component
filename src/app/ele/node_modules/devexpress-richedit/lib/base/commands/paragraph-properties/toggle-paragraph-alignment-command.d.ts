import { ParagraphAlignment } from '../../../core/model/paragraph/paragraph-properties';
import { IParagraphPropertyDescriptor } from '../../../core/model/paragraph/paragraph-property-descriptors';
import { ChangeParagraphPropertiesCommandBase } from './change-paragraph-properties-command-base';
export declare abstract class ToggleParagraphAlignmentCommand extends ChangeParagraphPropertiesCommandBase<ParagraphAlignment, boolean> {
    getDescriptor(): IParagraphPropertyDescriptor<ParagraphAlignment>;
    getValueForState(val: ParagraphAlignment): boolean;
    DEPRECATEDConvertOptionsParameter(parameter: any): ParagraphAlignment;
    protected getRelatedCommands(): Record<number, boolean>;
    protected abstract getParagraphAlignment(): ParagraphAlignment;
    protected getOppositeAlignment(): ParagraphAlignment;
}
export declare class ToggleParagraphAlignmentLeftCommand extends ToggleParagraphAlignmentCommand {
    protected getParagraphAlignment(): ParagraphAlignment;
    protected getOppositeAlignment(): ParagraphAlignment;
}
export declare class ToggleParagraphAlignmentCenterCommand extends ToggleParagraphAlignmentCommand {
    protected getParagraphAlignment(): ParagraphAlignment;
}
export declare class ToggleParagraphAlignmentRightCommand extends ToggleParagraphAlignmentCommand {
    protected getParagraphAlignment(): ParagraphAlignment;
}
export declare class ToggleParagraphAlignmentJustifyCommand extends ToggleParagraphAlignmentCommand {
    protected getParagraphAlignment(): ParagraphAlignment;
}
//# sourceMappingURL=toggle-paragraph-alignment-command.d.ts.map