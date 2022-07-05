import { TableCell } from '../../../../../../core/model/tables/main-structures/table-cell';
import { XmlReader } from '../../../../../zip/xml-reader';
import { Data } from '../../../../data';
import { LeafElementDestination } from '../../../destination';
export declare class TableCellStyleDestination extends LeafElementDestination {
    cell: TableCell;
    constructor(data: Data, cell: TableCell);
    processElementOpen(reader: XmlReader): Promise<void>;
}
//# sourceMappingURL=table-cell-style-destination.d.ts.map