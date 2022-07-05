import { CharacterProperties, MaskedCharacterProperties } from '../character/character-properties';
import { CharacterStyle } from '../character/character-style';
import { CharacterPropertiesMask } from '../character/enums';
import { ParagraphStyle } from '../paragraph/paragraph-style';
import { TableCell } from '../tables/main-structures/table-cell';
import { PropertiesMergerBase } from './properties-merger-base';
export declare class CharacterPropertiesMerger extends PropertiesMergerBase<CharacterPropertiesMask, CharacterProperties, MaskedCharacterProperties> {
    constructor();
    mergeCharacterProperties(maskedCharacterProperties: MaskedCharacterProperties): void;
    mergeOnlyOwnCharacterProperties(sourceProperties: MaskedCharacterProperties, parentProperties: MaskedCharacterProperties): void;
    mergeMergedCharacterProperties(mergedCharacterProperties: CharacterProperties): void;
    mergeCharacterStyle(characterStyle: CharacterStyle): void;
    mergeParagraphStyle(paragraphStyle: ParagraphStyle): void;
    mergeTableStyles(tableCell: TableCell): void;
    getMergedProperties(): CharacterProperties;
}
//# sourceMappingURL=character-properties-merger.d.ts.map