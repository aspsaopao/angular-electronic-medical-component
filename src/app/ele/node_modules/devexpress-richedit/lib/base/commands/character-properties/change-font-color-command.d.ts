import { ICharacterPropertyDescriptor } from '../../../core/model/character/character-property-descriptor';
import { ColorModelInfo } from '../../../core/model/color/color-model-info';
import { ChangeCharacterPropertiesCommandBase } from './change-character-properties-command-base';
export declare class ChangeFontColorCommand extends ChangeCharacterPropertiesCommandBase<ColorModelInfo, number> {
    getDescriptor(): ICharacterPropertyDescriptor<ColorModelInfo>;
    getValueForState(val: ColorModelInfo): number;
    DEPRECATEDConvertOptionsParameter(parameter: any): ColorModelInfo;
    isLockUpdateValue(): boolean;
}
//# sourceMappingURL=change-font-color-command.d.ts.map