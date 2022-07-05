import { CharacterStyle } from '../../../../core/model/character/character-style';
import { RtfImportData } from '../../rtf-import-data';
import { RtfBaseStyleImporter } from './base-style-importer';
export declare class RtfCharacterStyleImporter extends RtfBaseStyleImporter<CharacterStyle> {
    get styleCollection(): CharacterStyle[];
    constructor(data: RtfImportData);
    addStyle(style: CharacterStyle): CharacterStyle;
    createEmpty(): CharacterStyle;
}
//# sourceMappingURL=character-style-importer.d.ts.map