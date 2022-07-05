import { ICloneable, ISupportCopyFrom } from '@devexpress/utils/lib/types';
import { IPictureRenderer } from '../../../canvas/picture-renderer';
import { MeasureInfo } from '../../../measurer/measure-info';
import { CharacterPropertiesCache } from '../../../model/caches/hashed-caches/character-properties-cache';
import { FontInfoCache } from '../../../model/caches/hashed-caches/font-info-cache';
import { CharacterProperties } from '../../../model/character/character-properties';
import { LayoutCharacterPropertiesColorInfo } from '../../../model/character/layout-character-properties-color-info';
import { ListNumberAlignment } from '../../../model/numbering-lists/list-level-properties';
import { LayoutBox, LayoutBoxType } from './layout-box';
import { LayoutTextBox } from './layout-text-box';
export declare class LayoutNumberingListBox extends LayoutBox implements ICloneable<LayoutNumberingListBox>, ISupportCopyFrom<LayoutNumberingListBox> {
    readonly alignment: ListNumberAlignment;
    textBox: LayoutTextBox;
    separatorBox: LayoutBox;
    private getFont;
    constructor(characterProperties: CharacterProperties, colorInfo: LayoutCharacterPropertiesColorInfo, text: string, separatorChar: string, mergedCharacterPropertiesCache?: CharacterPropertiesCache, alignment?: ListNumberAlignment, fontInfoCache?: FontInfoCache);
    equals(obj: LayoutNumberingListBox): boolean;
    clone(): LayoutNumberingListBox;
    copyFrom(obj: LayoutNumberingListBox): void;
    getType(): LayoutBoxType;
    pushInfoForMeasure(info: MeasureInfo[], showHiddenSymbols: boolean): void;
    popInfoForMeasure(info: MeasureInfo[], showHiddenSymbols: boolean): void;
    isWhitespace(): boolean;
    renderGetContent(_renderer: IPictureRenderer): string;
    isLineBreak(): boolean;
}
//# sourceMappingURL=layout-numbering-list-box.d.ts.map