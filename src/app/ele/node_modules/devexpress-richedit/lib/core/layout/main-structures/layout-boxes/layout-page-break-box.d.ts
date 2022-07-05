import { ICloneable, ISupportCopyFrom } from '@devexpress/utils/lib/types';
import { IPictureRenderer } from '../../../canvas/picture-renderer';
import { MeasureInfo } from '../../../measurer/measure-info';
import { CharacterProperties } from '../../../model/character/character-properties';
import { LayoutCharacterPropertiesColorInfo } from '../../../model/character/layout-character-properties-color-info';
import { LayoutBox, LayoutBoxType, LayoutRenderCharacterProperties } from './layout-box';
export declare class LayoutPageBreakBox extends LayoutBox implements ICloneable<LayoutPageBreakBox>, ISupportCopyFrom<LayoutPageBreakBox> {
    text: string;
    static renderCharacterProperties: CharacterProperties;
    equals(obj: LayoutPageBreakBox): boolean;
    constructor(characterProperties: CharacterProperties, colorInfo: LayoutCharacterPropertiesColorInfo);
    clone(): LayoutPageBreakBox;
    copyFrom(obj: LayoutPageBreakBox): void;
    getType(): LayoutBoxType;
    pushInfoForMeasure(info: MeasureInfo[], _showHiddenSymbols: boolean): void;
    popInfoForMeasure(info: MeasureInfo[], showHiddenSymbols: boolean): void;
    renderGetContent(_renderer: IPictureRenderer): string;
    renderNoStrikeoutAndNoUnderlineIfBoxInEndRow(): boolean;
    renderGetCharacterProperties(): LayoutRenderCharacterProperties;
    isWhitespace(): boolean;
    isLineBreak(): boolean;
    getHiddenText(): string;
}
//# sourceMappingURL=layout-page-break-box.d.ts.map