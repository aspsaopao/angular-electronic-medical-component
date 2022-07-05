import { ICharacterPropertyDescriptor } from '../../../core/model/character/character-property-descriptor';
import { UnderlineType } from '../../../core/model/character/enums';
import { ChangeCharacterPropertiesCommandBase } from './change-character-properties-command-base';
export declare class ChangeFontUnderlineCommand extends ChangeCharacterPropertiesCommandBase<UnderlineType, boolean> {
    getDescriptor(): ICharacterPropertyDescriptor<UnderlineType>;
}
export declare class ToggleFontSingleUnderlineCommand extends ChangeFontUnderlineCommand {
    getActualValue(_parameter: any, currentValue: UnderlineType): UnderlineType;
    getValueForState(val: UnderlineType): boolean;
    DEPRECATEDConvertOptionsParameter(parameter: any): UnderlineType;
}
export declare class ToggleFontDoubleUnderlineCommand extends ChangeFontUnderlineCommand {
    getActualValue(_parameter: any, currentValue: UnderlineType): UnderlineType;
    getValueForState(val: UnderlineType): boolean;
    DEPRECATEDConvertOptionsParameter(parameter: any): UnderlineType;
}
//# sourceMappingURL=toggle-font-underline-command.d.ts.map