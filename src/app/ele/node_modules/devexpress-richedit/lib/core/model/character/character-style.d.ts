import { ICloneable } from '@devexpress/utils/lib/types';
import { ParagraphStyle } from '../paragraph/paragraph-style';
import { StyleBase } from '../style-base';
import { MaskedCharacterProperties } from './character-properties';
export declare class CharacterStyle extends StyleBase<CharacterStyle> implements ICloneable<CharacterStyle> {
    static defaultParagraphCharacterStyleName: string;
    static hyperlinkStyleName: string;
    static lineNumberingStyleName: string;
    linkedStyle: ParagraphStyle;
    maskedCharacterProperties: MaskedCharacterProperties;
    constructor(styleName: string, localizedName: string, deleted: boolean, hidden: boolean, semihidden: boolean, isDefault: boolean, maskedCharacterProperties: MaskedCharacterProperties, base64EncodedImage?: string, id?: string);
    clone(): CharacterStyle;
}
//# sourceMappingURL=character-style.d.ts.map