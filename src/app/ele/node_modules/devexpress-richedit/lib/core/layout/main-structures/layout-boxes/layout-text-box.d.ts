import { ICloneable, ISupportCopyFrom } from '@devexpress/utils/lib/types';
import { IPictureRenderer } from '../../../canvas/picture-renderer';
import { MeasureInfo } from '../../../measurer/measure-info';
import { IMeasurer } from '../../../measurer/measurer';
import { CharacterProperties } from '../../../model/character/character-properties';
import { LayoutCharacterPropertiesColorInfo } from '../../../model/character/layout-character-properties-color-info';
import { LayoutBox, LayoutBoxType } from './layout-box';
export declare class LayoutTextBox extends LayoutBox implements ICloneable<LayoutTextBox>, ISupportCopyFrom<LayoutTextBox> {
    text: string;
    constructor(characterProperties: CharacterProperties, colorInfo: LayoutCharacterPropertiesColorInfo, text: string);
    equals(obj: LayoutTextBox): boolean;
    clone(): LayoutTextBox;
    copyFrom(obj: LayoutTextBox): void;
    getType(): LayoutBoxType;
    pushInfoForMeasure(info: MeasureInfo[], _showHiddenSymbols: boolean): void;
    popInfoForMeasure(info: MeasureInfo[], _showHiddenSymbols: boolean): void;
    isVisible(): boolean;
    isVisibleForRowAlign(): boolean;
    getLength(): number;
    getCharOffsetXInPixels(measurer: IMeasurer, charOffset: number): number;
    calculateCharOffsetByPointX(measurer: IMeasurer, pointX: number): number;
    splitByWidth(measurer: IMeasurer, maxWidth: number, leaveAtLeastOneChar: boolean): LayoutBox;
    splitBoxByPosition(measurer: IMeasurer, offsetAtStartBox: number): LayoutBox;
    getCharIndex(char: string): number;
    renderGetContent(_renderer: IPictureRenderer): string;
    renderIsWordBox(): boolean;
    isWhitespace(): boolean;
    isLineBreak(): boolean;
    private getBoxRanges;
}
//# sourceMappingURL=layout-text-box.d.ts.map