import { IParagraphPropertyDescriptor } from '../../../../../core/model/paragraph/paragraph-property-descriptors';
import { XmlReader } from '../../../../zip/xml-reader';
import { ParagraphFormattingLeafElementDestination } from '../paragraph-formatting-leaf-element-destination';
export declare class KeepLinesTogetherDestination extends ParagraphFormattingLeafElementDestination<boolean> {
    processElementOpen(reader: XmlReader): Promise<void>;
    protected getDescriptor(): IParagraphPropertyDescriptor<boolean>;
}
//# sourceMappingURL=keep-lines-together-destination.d.ts.map