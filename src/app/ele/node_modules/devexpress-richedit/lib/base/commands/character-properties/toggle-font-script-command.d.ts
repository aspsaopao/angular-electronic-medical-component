import { ICharacterPropertyDescriptor } from '../../../core/model/character/character-property-descriptor';
import { CharacterFormattingScript } from '../../../core/model/character/enums';
import { ChangeCharacterPropertiesCommandBase } from './change-character-properties-command-base';
export declare class ChangeFontScriptCommand extends ChangeCharacterPropertiesCommandBase<CharacterFormattingScript, CharacterFormattingScript> {
    getDescriptor(): ICharacterPropertyDescriptor<CharacterFormattingScript>;
}
export declare class ToggleFontSubscriptCommand extends ChangeCharacterPropertiesCommandBase<CharacterFormattingScript, boolean> {
    getDescriptor(): ICharacterPropertyDescriptor<CharacterFormattingScript>;
    getValueForState(val: CharacterFormattingScript): boolean;
    DEPRECATEDConvertOptionsParameter(parameter: any): CharacterFormattingScript;
}
export declare class ToggleFontSuperscriptCommand extends ChangeCharacterPropertiesCommandBase<CharacterFormattingScript, boolean> {
    getDescriptor(): ICharacterPropertyDescriptor<CharacterFormattingScript>;
    getValueForState(val: CharacterFormattingScript): boolean;
    DEPRECATEDConvertOptionsParameter(parameter: any): CharacterFormattingScript;
}
//# sourceMappingURL=toggle-font-script-command.d.ts.map