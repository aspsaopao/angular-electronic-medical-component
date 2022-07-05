import { ICloneable, ISupportCopyFrom } from '@devexpress/utils/lib/types';
import { IPictureRenderer } from '../../../canvas/picture-renderer';
import { MeasureInfo } from '../../../measurer/measure-info';
import { CharacterProperties } from '../../../model/character/character-properties';
import { LayoutCharacterPropertiesColorInfo } from '../../../model/character/layout-character-properties-color-info';
import { LayoutBox, LayoutBoxType, LayoutRenderCharacterProperties } from './layout-box';
export declare class LayoutLineBreakBox extends LayoutBox implements ICloneable<LayoutLineBreakBox>, ISupportCopyFrom<LayoutLineBreakBox> {
    lineBreakSymbol: string;
    equals(obj: LayoutLineBreakBox): boolean;
    static renderCharacterProperties: CharacterProperties;
    constructor(characterProperties: CharacterProperties, colorInfo: LayoutCharacterPropertiesColorInfo);
    clone(): LayoutLineBreakBox;
    copyFrom(obj: LayoutLineBreakBox): void;
    getType(): LayoutBoxType;
    pushInfoForMeasure(info: MeasureInfo[], _showHiddenSymbols: boolean): void;
    popInfoForMeasure(info: MeasureInfo[], showHiddenSymbols: boolean): void;
    renderGetContent(_renderer: IPictureRenderer): string;
    renderNoStrikeoutAndNoUnderlineIfBoxInEndRow(): boolean;
    renderGetCharacterProperties(): LayoutRenderCharacterProperties;
    isWhitespace(): boolean;
    isLineBreak(): boolean;
}
//# sourceMappingURL=layout-line-break-box.d.ts.map