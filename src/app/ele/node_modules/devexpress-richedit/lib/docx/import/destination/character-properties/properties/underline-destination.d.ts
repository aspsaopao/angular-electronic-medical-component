import { ICharacterPropertyDescriptor } from '../../../../../core/model/character/character-property-descriptor';
import { UnderlineType } from '../../../../../core/model/character/enums';
import { XmlReader } from '../../../../zip/xml-reader';
import { CharacterFormattingLeafElementDestination } from '../character-formatting-leaf-element-destination';
export declare class UnderlineDestination extends CharacterFormattingLeafElementDestination<UnderlineType> {
    processElementOpen(reader: XmlReader): Promise<void>;
    protected getDescriptor(): ICharacterPropertyDescriptor<UnderlineType>;
    protected importUnderlineType(reader: XmlReader): void;
    private importUnderlineColor;
}
//# sourceMappingURL=underline-destination.d.ts.map