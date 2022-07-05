import { ICharacterPropertyDescriptor } from '../../../../../core/model/character/character-property-descriptor';
import { ShadingInfo } from '../../../../../core/model/shadings/shading-info';
import { XmlReader } from '../../../../zip/xml-reader';
import { CharacterFormattingLeafElementDestination } from '../character-formatting-leaf-element-destination';
export declare class CharacterShadingDestination extends CharacterFormattingLeafElementDestination<ShadingInfo> {
    processElementOpen(reader: XmlReader): Promise<void>;
    protected getDescriptor(): ICharacterPropertyDescriptor<ShadingInfo>;
}
//# sourceMappingURL=character-shading-destination.d.ts.map