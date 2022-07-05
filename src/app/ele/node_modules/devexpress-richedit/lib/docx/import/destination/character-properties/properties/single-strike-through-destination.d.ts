import { ICharacterPropertyDescriptor } from '../../../../../core/model/character/character-property-descriptor';
import { StrikeoutType } from '../../../../../core/model/character/enums';
import { XmlReader } from '../../../../zip/xml-reader';
import { CharacterFormattingLeafElementDestination } from '../character-formatting-leaf-element-destination';
export declare class SingleStrikeThroughDestination extends CharacterFormattingLeafElementDestination<StrikeoutType> {
    processElementOpen(reader: XmlReader): Promise<void>;
    protected getDescriptor(): ICharacterPropertyDescriptor<StrikeoutType>;
}
//# sourceMappingURL=single-strike-through-destination.d.ts.map