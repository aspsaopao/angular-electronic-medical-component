import { ICharacterPropertyDescriptor } from '../../../../../core/model/character/character-property-descriptor';
import { CharacterFormattingScript } from '../../../../../core/model/character/enums';
import { XmlReader } from '../../../../zip/xml-reader';
import { CharacterFormattingLeafElementDestination } from '../character-formatting-leaf-element-destination';
export declare class FontScriptDestination extends CharacterFormattingLeafElementDestination<CharacterFormattingScript> {
    processElementOpen(reader: XmlReader): Promise<void>;
    protected getDescriptor(): ICharacterPropertyDescriptor<CharacterFormattingScript>;
}
//# sourceMappingURL=font-script-destination.d.ts.map