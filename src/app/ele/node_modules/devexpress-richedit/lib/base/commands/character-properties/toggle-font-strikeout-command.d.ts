import { ICharacterPropertyDescriptor } from '../../../core/model/character/character-property-descriptor';
import { StrikeoutType } from '../../../core/model/character/enums';
import { ChangeCharacterPropertiesCommandBase } from './change-character-properties-command-base';
export declare class ToggleFontStrikeoutCommand extends ChangeCharacterPropertiesCommandBase<StrikeoutType, boolean> {
    getDescriptor(): ICharacterPropertyDescriptor<StrikeoutType>;
    DEPRECATEDConvertOptionsParameter(parameter: any): StrikeoutType;
}
//# sourceMappingURL=toggle-font-strikeout-command.d.ts.map