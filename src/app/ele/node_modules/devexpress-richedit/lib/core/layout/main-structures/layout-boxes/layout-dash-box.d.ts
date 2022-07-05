import { ICloneable, ISupportCopyFrom } from '@devexpress/utils/lib/types';
import { IPictureRenderer } from '../../../canvas/picture-renderer';
import { MeasureInfo } from '../../../measurer/measure-info';
import { CharacterProperties } from '../../../model/character/character-properties';
import { LayoutCharacterPropertiesColorInfo } from '../../../model/character/layout-character-properties-color-info';
import { LayoutBox, LayoutBoxType } from './layout-box';
import { LayoutTextBox } from './layout-text-box';
export declare class LayoutDashBox extends LayoutBox implements ICloneable<LayoutDashBox>, ISupportCopyFrom<LayoutDashBox> {
    text: string;
    get isDashBox(): boolean;
    constructor(characterProperties: CharacterProperties, colorInfo: LayoutCharacterPropertiesColorInfo, text: string);
    equals(obj: LayoutTextBox): boolean;
    getType(): LayoutBoxType;
    clone(): LayoutDashBox;
    copyFrom(obj: LayoutDashBox): void;
    renderGetContent(_renderer: IPictureRenderer): string;
    pushInfoForMeasure(info: MeasureInfo[], _showHiddenSymbols: boolean): void;
    popInfoForMeasure(info: MeasureInfo[], _showHiddenSymbols: boolean): void;
    isVisible(): boolean;
    isVisibleForRowAlign(): boolean;
    renderIsWordBox(): boolean;
    isWhitespace(): boolean;
    isLineBreak(): boolean;
}
//# sourceMappingURL=layout-dash-box.d.ts.map