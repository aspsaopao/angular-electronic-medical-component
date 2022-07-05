import { ICharacterPropertyDescriptor } from '../../../core/model/character/character-property-descriptor';
import { CommandSimpleOptions } from '../command-base';
import { IntervalCommandStateEx } from '../command-states';
import { ChangeCharacterPropertiesCommandBase } from './change-character-properties-command-base';
export declare class ChangeFontSizeCommand extends ChangeCharacterPropertiesCommandBase<number, number> {
    getDescriptor(): ICharacterPropertyDescriptor<number>;
    DEPRECATEDConvertOptionsParameter(parameter: any): number;
    private isFontSizeValueCorrect;
}
export declare abstract class StepFontSizeCommand extends ChangeFontSizeCommand {
    executeCore(_state: IntervalCommandStateEx, options: CommandSimpleOptions<number>): boolean;
    protected abstract step(currValue: number): number;
}
export declare class DecreaseFontSizeCommand extends StepFontSizeCommand {
    protected step(currValue: number): number;
}
export declare class IncreaseFontSizeCommand extends StepFontSizeCommand {
    protected step(currValue: number): number;
}
//# sourceMappingURL=change-font-size-command.d.ts.map