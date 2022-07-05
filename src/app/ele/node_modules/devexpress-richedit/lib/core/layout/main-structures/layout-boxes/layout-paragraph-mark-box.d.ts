import { ICloneable, ISupportCopyFrom } from '@devexpress/utils/lib/types';
import { IPictureRenderer } from '../../../canvas/picture-renderer';
import { MeasureInfo } from '../../../measurer/measure-info';
import { CharacterProperties } from '../../../model/character/character-properties';
import { LayoutCharacterPropertiesColorInfo } from '../../../model/character/layout-character-properties-color-info';
import { LayoutBox, LayoutBoxType } from './layout-box';
export declare class LayoutParagraphMarkBox extends LayoutBox implements ICloneable<LayoutParagraphMarkBox>, ISupportCopyFrom<LayoutParagraphMarkBox> {
    paragraphMarkSymbol: string;
    isLastParagraphInCell: boolean;
    constructor(characterProperties: CharacterProperties, colorInfo: LayoutCharacterPropertiesColorInfo, isLastParagraphInCell: boolean);
    equals(obj: LayoutParagraphMarkBox): boolean;
    clone(): LayoutParagraphMarkBox;
    copyFrom(obj: LayoutParagraphMarkBox): void;
    getType(): LayoutBoxType;
    pushInfoForMeasure(info: MeasureInfo[], _showHiddenSymbols: boolean): void;
    popInfoForMeasure(info: MeasureInfo[], showHiddenSymbols: boolean): void;
    renderGetContent(_renderer: IPictureRenderer): string;
    renderNoStrikeoutAndNoUnderlineIfBoxInEndRow(): boolean;
    isWhitespace(): boolean;
    isLineBreak(): boolean;
    private getSymbolForMesure;
    private getSymbol;
}
//# sourceMappingURL=layout-paragraph-mark-box.d.ts.map