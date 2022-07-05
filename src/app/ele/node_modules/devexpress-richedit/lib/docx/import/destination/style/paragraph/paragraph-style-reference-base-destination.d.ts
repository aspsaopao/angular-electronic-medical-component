import { ParagraphStyle } from '../../../../../core/model/paragraph/paragraph-style';
import { XmlReader } from '../../../../zip/xml-reader';
import { LeafElementDestination } from '../../destination';
export declare abstract class ParagraphStyleReferenceBaseDestination extends LeafElementDestination {
    processElementOpen(reader: XmlReader): Promise<void>;
    protected abstract assignParagraphStyle(style: ParagraphStyle): any;
}
//# sourceMappingURL=paragraph-style-reference-base-destination.d.ts.map