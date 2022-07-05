import { ICharacterPropertyDescriptor } from '../../../../../core/model/character/character-property-descriptor';
import { StrikeoutType } from '../../../../../core/model/character/enums';
import { XmlReader } from '../../../../zip/xml-reader';
import { CharacterFormattingLeafElementDestination } from '../character-formatting-leaf-element-destination';
export declare class DoubleStrikeThroughDestination extends CharacterFormattingLeafElementDestination<StrikeoutType> {
    processElementOpen(reader: XmlReader): Promise<void>;
    protected getDescriptor(): ICharacterPropertyDescriptor<StrikeoutType>;
}
//# sourceMappingURL=double-strike-through-destination.d.ts.map