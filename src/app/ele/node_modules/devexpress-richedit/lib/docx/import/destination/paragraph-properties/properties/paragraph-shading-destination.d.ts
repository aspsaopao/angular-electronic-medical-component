import { IParagraphPropertyDescriptor } from '../../../../../core/model/paragraph/paragraph-property-descriptors';
import { ShadingInfo } from '../../../../../core/model/shadings/shading-info';
import { XmlReader } from '../../../../zip/xml-reader';
import { ParagraphFormattingLeafElementDestination } from '../paragraph-formatting-leaf-element-destination';
export declare class ParagraphShadingDestination extends ParagraphFormattingLeafElementDestination<ShadingInfo> {
    processElementOpen(reader: XmlReader): Promise<void>;
    protected getDescriptor(): IParagraphPropertyDescriptor<ShadingInfo>;
}
//# sourceMappingURL=paragraph-shading-destination.d.ts.map