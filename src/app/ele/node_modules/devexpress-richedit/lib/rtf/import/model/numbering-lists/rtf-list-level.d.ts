import { MaskedCharacterProperties } from '../../../../core/model/character/character-properties';
import { ListLevelProperties } from '../../../../core/model/numbering-lists/list-level-properties';
import { MaskedParagraphProperties } from '../../../../core/model/paragraph/paragraph-properties';
export declare class RtfListLevel {
    characterProperties: MaskedCharacterProperties;
    paragraphProperties: MaskedParagraphProperties;
    listLevelProperties: ListLevelProperties;
    text: string;
    numbers: string;
    constructor();
    private initialize;
    createDisplayFormatString(): string;
    createPlaceholderIndices(): number[];
    createDisplayFormatStringCore(placeholderIndices: number[]): string;
}
//# sourceMappingURL=rtf-list-level.d.ts.map