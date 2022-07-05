import { ICharacterPropertyDescriptor } from '../../../../../core/model/character/character-property-descriptor';
import { XmlReader } from '../../../../zip/xml-reader';
import { CharacterFormattingLeafElementDestination } from '../character-formatting-leaf-element-destination';
export declare class NoProofDestination extends CharacterFormattingLeafElementDestination<boolean> {
    processElementOpen(reader: XmlReader): Promise<void>;
    protected getDescriptor(): ICharacterPropertyDescriptor<boolean>;
}
//# sourceMappingURL=no-proof-destination.d.ts.map