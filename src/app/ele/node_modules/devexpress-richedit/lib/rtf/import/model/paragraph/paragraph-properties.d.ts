import { TabLeaderType } from '../../../../core/layout/main-structures/layout-boxes/layout-tab-space-box';
import { BorderInfo } from '../../../../core/model/borders/border-info';
import { ColorModelInfo } from '../../../../core/model/color/color-model-info';
import { TabAlign } from '../../../../core/model/paragraph/paragraph';
import { MaskedParagraphProperties, ParagraphLineSpacingType } from '../../../../core/model/paragraph/paragraph-properties';
import { TabProperties } from '../../../../core/model/paragraph/paragraph-style';
import { ShadingPattern } from '../../../../core/model/shadings/shading-pattern';
import { ParagraphListInfo } from '../../../../core/rich-utils/properties-bundle';
import { ParagraphFrameFormattingInfo } from './paragraph-frame-formatting-info';
export declare class RtfParagraphProperties {
    coreProperties: MaskedParagraphProperties;
    paragraphListInfo: ParagraphListInfo;
    get numberingListIndex(): number;
    get listLevelIndex(): number;
    set shadingPattern(value: ShadingPattern);
    set backColor(value: ColorModelInfo);
    set foreColor(value: ColorModelInfo);
    tabs: TabProperties;
    tabAlignment: TabAlign;
    tabLeader: TabLeaderType;
    rtfLineSpacingType: number;
    rtfLineSpacingMultiplier: number;
    useLineSpacingMultiplier: boolean;
    inTableParagraph: boolean;
    nestingLevel: number;
    styleLink: number;
    nextStyle: number;
    processedBorder: BorderInfo;
    rtfTableStyleIndexForRowOrCell: number;
    paragraphFrameFormattingInfo: ParagraphFrameFormattingInfo;
    getCoreProperties(): MaskedParagraphProperties;
    applyLineSpacing(): void;
    calcLineSpacingType(): ParagraphLineSpacingType;
    calcLineSpacing(): number;
    clone(): RtfParagraphProperties;
    copyFrom(obj: RtfParagraphProperties): void;
}
//# sourceMappingURL=paragraph-properties.d.ts.map