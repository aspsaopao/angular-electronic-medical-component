import { ICharacterPropertyDescriptor } from '../../../core/model/character/character-property-descriptor';
import { ChangeCharacterPropertiesCommandBase } from './change-character-properties-command-base';
export declare class ToggleFontItalicCommand extends ChangeCharacterPropertiesCommandBase<boolean, boolean> {
    getDescriptor(): ICharacterPropertyDescriptor<boolean>;
    DEPRECATEDConvertOptionsParameter(parameter: any): boolean;
}
//# sourceMappingURL=toggle-font-italic-command.d.ts.map