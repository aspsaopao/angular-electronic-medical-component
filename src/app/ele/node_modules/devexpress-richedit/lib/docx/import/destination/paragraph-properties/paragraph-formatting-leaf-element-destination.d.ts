import { MaskedParagraphProperties } from '../../../../core/model/paragraph/paragraph-properties';
import { IParagraphPropertyDescriptor } from '../../../../core/model/paragraph/paragraph-property-descriptors';
import { Data } from '../../data';
import { LeafElementDestination } from '../destination';
export declare abstract class ParagraphFormattingLeafElementDestination<T> extends LeafElementDestination {
    protected readonly paragraphProperties: MaskedParagraphProperties;
    constructor(data: Data, paragraphProperties: MaskedParagraphProperties);
    setProperty(newValue: T): void;
    protected abstract getDescriptor(): IParagraphPropertyDescriptor<T>;
}
//# sourceMappingURL=paragraph-formatting-leaf-element-destination.d.ts.map