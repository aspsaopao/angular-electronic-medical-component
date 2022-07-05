import { SectionColumnProperties } from '../../../../core/model/section/section-column-properties';
import { XmlReader } from '../../../zip/xml-reader';
import { Data } from '../../data';
import { LeafElementDestination } from '../destination';
export declare class ColumnDestination extends LeafElementDestination {
    columnInfos: SectionColumnProperties[];
    constructor(data: Data, columnInfos: SectionColumnProperties[]);
    processElementOpen(reader: XmlReader): Promise<void>;
}
//# sourceMappingURL=column-destination.d.ts.map