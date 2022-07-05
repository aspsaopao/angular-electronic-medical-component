import { ParagraphFirstLineIndent } from '../../../../../core/model/paragraph/paragraph-properties';
import { IParagraphPropertyDescriptor } from '../../../../../core/model/paragraph/paragraph-property-descriptors';
import { XmlReader } from '../../../../zip/xml-reader';
import { ParagraphFormattingLeafElementDestination } from '../paragraph-formatting-leaf-element-destination';
export declare class ParagraphIndentsDestination extends ParagraphFormattingLeafElementDestination<ParagraphFirstLineIndent> {
    processElementOpen(reader: XmlReader): Promise<void>;
    protected getDescriptor(): IParagraphPropertyDescriptor<ParagraphFirstLineIndent>;
}
//# sourceMappingURL=paragraph-indents-destination.d.ts.map