import { ICharacterPropertyDescriptor } from '../../../../../core/model/character/character-property-descriptor';
import { XmlReader } from '../../../../zip/xml-reader';
import { CharacterFormattingLeafElementDestination } from '../character-formatting-leaf-element-destination';
export declare class FontSizeDestination extends CharacterFormattingLeafElementDestination<number> {
    processElementOpen(reader: XmlReader): Promise<void>;
    protected getDescriptor(): ICharacterPropertyDescriptor<number>;
}
//# sourceMappingURL=font-size-destination.d.ts.map