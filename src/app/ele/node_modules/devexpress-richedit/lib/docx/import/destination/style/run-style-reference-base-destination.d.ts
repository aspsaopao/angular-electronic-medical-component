import { CharacterStyle } from '../../../../core/model/character/character-style';
import { XmlReader } from '../../../zip/xml-reader';
import { LeafElementDestination } from '../destination';
export declare abstract class RunStyleReferenceBaseDestination extends LeafElementDestination {
    processElementOpen(reader: XmlReader): Promise<void>;
    protected abstract assignCharacterStyle(style: CharacterStyle): any;
}
//# sourceMappingURL=run-style-reference-base-destination.d.ts.map