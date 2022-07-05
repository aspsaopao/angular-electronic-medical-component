import { SectionProperties } from '../../../../core/model/section/section-properties';
import { XmlReader } from '../../../zip/xml-reader';
import { LeafElementDestination } from '../destination';
export declare class SectionMarginsDestination extends LeafElementDestination {
    protected get secProps(): SectionProperties;
    processElementOpen(reader: XmlReader): Promise<void>;
}
//# sourceMappingURL=section-margins-destination.d.ts.map