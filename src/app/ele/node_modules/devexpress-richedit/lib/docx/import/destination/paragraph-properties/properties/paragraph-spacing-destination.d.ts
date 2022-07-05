import { ParagraphLineSpacingType } from '../../../../../core/model/paragraph/paragraph-properties';
import { IParagraphPropertyDescriptor } from '../../../../../core/model/paragraph/paragraph-property-descriptors';
import { XmlReader } from '../../../../zip/xml-reader';
import { ParagraphFormattingLeafElementDestination } from '../paragraph-formatting-leaf-element-destination';
export declare class ParagraphSpacingDestination extends ParagraphFormattingLeafElementDestination<ParagraphLineSpacingType> {
    processElementOpen(reader: XmlReader): Promise<void>;
    protected getDescriptor(): IParagraphPropertyDescriptor<ParagraphLineSpacingType>;
    protected applyLineSpacingValue(lineSpacing: number, lineSpacingRule: string): void;
}
//# sourceMappingURL=paragraph-spacing-destination.d.ts.map