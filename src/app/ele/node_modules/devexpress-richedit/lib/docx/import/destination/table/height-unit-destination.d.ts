import { TableHeightUnit } from '../../../../core/model/tables/secondary-structures/table-units';
import { XmlReader } from '../../../zip/xml-reader';
import { Data } from '../../data';
import { LeafElementDestination } from '../destination';
export declare class HeightUnitDestination extends LeafElementDestination {
    heightUnit: TableHeightUnit;
    constructor(data: Data, heightUnit: TableHeightUnit);
    processElementOpen(reader: XmlReader): Promise<void>;
}
//# sourceMappingURL=height-unit-destination.d.ts.map