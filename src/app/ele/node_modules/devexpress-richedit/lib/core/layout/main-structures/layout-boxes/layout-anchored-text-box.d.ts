import { ICloneable } from '@devexpress/utils/lib/types';
import { IPictureRenderer } from '../../../canvas/picture-renderer';
import { CharacterProperties } from '../../../model/character/character-properties';
import { LayoutCharacterPropertiesColorInfo } from '../../../model/character/layout-character-properties-color-info';
import { AnchorInfo } from '../../../model/floating-objects/anchor-info';
import { TextBoxProperties } from '../../../model/floating-objects/text-box-properties';
import { Shape } from '../../../model/shapes/shape';
import { LayoutAnchoredObjectBox } from './layout-anchored-object-box';
import { LayoutBoxType } from './layout-box';
export declare class LayoutAnchoredTextBox extends LayoutAnchoredObjectBox implements ICloneable<LayoutAnchoredTextBox> {
    readonly internalSubDocId: number;
    textBoxProperties: TextBoxProperties;
    constructor(characterProperties: CharacterProperties, colorInfo: LayoutCharacterPropertiesColorInfo, belongsToSubDocId: number, anchorInfo: AnchorInfo, shape: Shape, objectId: number, rotationInRadians: number, internalSubDocId: number, textBoxProperties: TextBoxProperties);
    getType(): LayoutBoxType;
    clone(): LayoutAnchoredTextBox;
    renderGetContent(_renderer: IPictureRenderer): string;
}
//# sourceMappingURL=layout-anchored-text-box.d.ts.map