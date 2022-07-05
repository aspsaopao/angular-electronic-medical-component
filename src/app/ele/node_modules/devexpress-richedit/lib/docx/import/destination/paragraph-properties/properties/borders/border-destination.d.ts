import { BorderInfo } from '../../../../../../core/model/borders/border-info';
import { XmlReader } from '../../../../../zip/xml-reader';
import { ParagraphFormattingLeafElementDestination } from '../../paragraph-formatting-leaf-element-destination';
export declare abstract class ParagraphBorderDestination extends ParagraphFormattingLeafElementDestination<BorderInfo> {
    processElementOpen(reader: XmlReader): Promise<void>;
}
//# sourceMappingURL=border-destination.d.ts.map