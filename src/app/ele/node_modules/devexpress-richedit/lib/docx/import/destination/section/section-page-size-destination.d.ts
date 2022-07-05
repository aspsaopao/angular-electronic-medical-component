import { SectionProperties } from '../../../../core/model/section/section-properties';
import { XmlReader } from '../../../zip/xml-reader';
import { LeafElementDestination } from '../destination';
export declare class SectionPageSizeDestination extends LeafElementDestination {
    protected get secProps(): SectionProperties;
    processElementOpen(reader: XmlReader): Promise<void>;
    private validatePaperKind;
}
//# sourceMappingURL=section-page-size-destination.d.ts.map