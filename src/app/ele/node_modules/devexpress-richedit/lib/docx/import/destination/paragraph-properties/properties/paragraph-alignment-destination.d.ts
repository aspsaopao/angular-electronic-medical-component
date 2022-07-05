import { ParagraphAlignment } from '../../../../../core/model/paragraph/paragraph-properties';
import { IParagraphPropertyDescriptor } from '../../../../../core/model/paragraph/paragraph-property-descriptors';
import { XmlReader } from '../../../../zip/xml-reader';
import { ParagraphFormattingLeafElementDestination } from '../paragraph-formatting-leaf-element-destination';
export declare class ParagraphAlignmentDestination extends ParagraphFormattingLeafElementDestination<ParagraphAlignment> {
    processElementOpen(reader: XmlReader): Promise<void>;
    protected getDescriptor(): IParagraphPropertyDescriptor<ParagraphAlignment>;
}
//# sourceMappingURL=paragraph-alignment-destination.d.ts.map