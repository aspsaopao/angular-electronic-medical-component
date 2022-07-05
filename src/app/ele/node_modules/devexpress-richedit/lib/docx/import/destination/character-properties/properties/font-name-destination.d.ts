import { ICharacterPropertyDescriptor } from '../../../../../core/model/character/character-property-descriptor';
import { FontInfo } from '../../../../../core/model/fonts/font-info';
import { XmlReader } from '../../../../zip/xml-reader';
import { CharacterFormattingLeafElementDestination } from '../character-formatting-leaf-element-destination';
export declare class FontNameDestination extends CharacterFormattingLeafElementDestination<FontInfo> {
    processElementOpen(reader: XmlReader): Promise<void>;
    protected getDescriptor(): ICharacterPropertyDescriptor<FontInfo>;
    protected readFontName(reader: XmlReader): string;
}
//# sourceMappingURL=font-name-destination.d.ts.map