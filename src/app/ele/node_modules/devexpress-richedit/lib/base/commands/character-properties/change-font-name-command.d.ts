import { ICharacterPropertyDescriptor } from '../../../core/model/character/character-property-descriptor';
import { FontInfo } from '../../../core/model/fonts/font-info';
import { ChangeCharacterPropertiesCommandBase } from './change-character-properties-command-base';
export declare class ChangeFontNameCommand extends ChangeCharacterPropertiesCommandBase<FontInfo, FontInfo> {
    getDescriptor(): ICharacterPropertyDescriptor<FontInfo>;
    DEPRECATEDConvertOptionsParameter(parameter: any): FontInfo;
}
//# sourceMappingURL=change-font-name-command.d.ts.map