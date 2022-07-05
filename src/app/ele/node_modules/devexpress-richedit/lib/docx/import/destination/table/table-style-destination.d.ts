import { Table } from '../../../../core/model/tables/main-structures/table';
import { XmlReader } from '../../../zip/xml-reader';
import { Data } from '../../data';
import { LeafElementDestination } from '../destination';
export declare class TableStyleDestination extends LeafElementDestination {
    table: Table;
    constructor(data: Data, table: Table);
    processElementOpen(reader: XmlReader): Promise<void>;
}
//# sourceMappingURL=table-style-destination.d.ts.map