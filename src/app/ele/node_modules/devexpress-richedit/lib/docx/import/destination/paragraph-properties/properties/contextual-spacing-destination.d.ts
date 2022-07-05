import { IParagraphPropertyDescriptor } from '../../../../../core/model/paragraph/paragraph-property-descriptors';
import { XmlReader } from '../../../../zip/xml-reader';
import { ParagraphFormattingLeafElementDestination } from '../paragraph-formatting-leaf-element-destination';
export declare class ContextualSpacingDestination extends ParagraphFormattingLeafElementDestination<boolean> {
    processElementOpen(reader: XmlReader): Promise<void>;
    protected getDescriptor(): IParagraphPropertyDescriptor<boolean>;
}
//# sourceMappingURL=contextual-spacing-destination.d.ts.map