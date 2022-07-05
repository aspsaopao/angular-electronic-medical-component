import { ICharacterPropertyDescriptor } from '../../../../../core/model/character/character-property-descriptor';
import { XmlReader } from '../../../../zip/xml-reader';
import { CharacterFormattingLeafElementDestination } from '../character-formatting-leaf-element-destination';
export declare class SmallCapsDestination extends CharacterFormattingLeafElementDestination<boolean> {
    processElementOpen(reader: XmlReader): Promise<void>;
    protected getDescriptor(): ICharacterPropertyDescriptor<boolean>;
}
//# sourceMappingURL=small-caps-destination.d.ts.map