import { ICharacterPropertyDescriptor } from '../../../../../core/model/character/character-property-descriptor';
import { LangInfo } from '../../../../../core/model/character/lang-info';
import { XmlReader } from '../../../../zip/xml-reader';
import { CharacterFormattingLeafElementDestination } from '../character-formatting-leaf-element-destination';
export declare class LanguageDestination extends CharacterFormattingLeafElementDestination<LangInfo> {
    processElementOpen(reader: XmlReader): Promise<void>;
    protected getDescriptor(): ICharacterPropertyDescriptor<LangInfo>;
}
//# sourceMappingURL=language-destination.d.ts.map