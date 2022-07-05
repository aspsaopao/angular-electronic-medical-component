import { ICharacterPropertyDescriptor } from '../../../core/model/character/character-property-descriptor';
import { ColorModelInfo } from '../../../core/model/color/color-model-info';
import { ShadingInfo } from '../../../core/model/shadings/shading-info';
import { ChangeCharacterPropertiesCommandBase } from './change-character-properties-command-base';
export declare class ChangeFontHighlightColorCommand extends ChangeCharacterPropertiesCommandBase<ColorModelInfo, number> {
    getDescriptor(): ICharacterPropertyDescriptor<ColorModelInfo>;
    getValueForState(val: ColorModelInfo): number;
    isLockUpdateValue(): boolean;
    DEPRECATEDConvertOptionsParameter(parameter: any): ColorModelInfo;
}
export declare class ChangeFontShadingInfoCommand extends ChangeCharacterPropertiesCommandBase<ShadingInfo, number> {
    getDescriptor(): ICharacterPropertyDescriptor<ShadingInfo>;
    getValueForState(val: ShadingInfo): number;
    isLockUpdateValue(): boolean;
    DEPRECATEDConvertOptionsParameter(parameter: any): ShadingInfo;
}
//# sourceMappingURL=change-font-back-color-command.d.ts.map