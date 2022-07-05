import { CharacterFormattingScript, StrikeoutType, UnderlineType } from '../../character/enums';
import { ColorModelInfo } from '../../color/color-model-info';
import { FontInfo } from '../../fonts/font-info';
import { ShadingInfo } from '../../shadings/shading-info';
import { BaseManipulator } from '../base-manipulator';
import { IListLevelPropertyWithUseManipulator } from '../i-properties-manipulator';
import { ModelManipulator } from '../model-manipulator';
export declare class ListLevelCharacterPropertiesManipulator extends BaseManipulator {
    fontBold: IListLevelPropertyWithUseManipulator<boolean>;
    fontItalic: IListLevelPropertyWithUseManipulator<boolean>;
    fontName: IListLevelPropertyWithUseManipulator<FontInfo>;
    fontSize: IListLevelPropertyWithUseManipulator<number>;
    fontCaps: IListLevelPropertyWithUseManipulator<boolean>;
    fontStrikeoutType: IListLevelPropertyWithUseManipulator<StrikeoutType>;
    fontStrikeoutWordsOnly: IListLevelPropertyWithUseManipulator<boolean>;
    fontUnderlineType: IListLevelPropertyWithUseManipulator<UnderlineType>;
    fontHidden: IListLevelPropertyWithUseManipulator<boolean>;
    script: IListLevelPropertyWithUseManipulator<CharacterFormattingScript>;
    fontUnderlineWordsOnly: IListLevelPropertyWithUseManipulator<boolean>;
    fontNoProof: IListLevelPropertyWithUseManipulator<boolean>;
    textColor: IListLevelPropertyWithUseManipulator<ColorModelInfo>;
    shadingInfo: IListLevelPropertyWithUseManipulator<ShadingInfo>;
    highlightColor: IListLevelPropertyWithUseManipulator<ColorModelInfo>;
    fontStrikeoutColor: IListLevelPropertyWithUseManipulator<ColorModelInfo>;
    fontUnderlineColor: IListLevelPropertyWithUseManipulator<ColorModelInfo>;
    fontSmallCaps: IListLevelPropertyWithUseManipulator<boolean>;
    constructor(manipulator: ModelManipulator);
}
//# sourceMappingURL=list-level-character-properties-manipulator.d.ts.map