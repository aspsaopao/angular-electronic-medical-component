import { TableCellProperties } from '../../../../core/model/tables/properties/table-cell-properties';
import { XmlReader } from '../../../zip/xml-reader';
import { TableBorderElementDestinationBase } from './table-border-element-destination-base';
export declare class TableCellBorderElementDestination extends TableBorderElementDestinationBase<TableCellProperties> {
    processElementOpen(reader: XmlReader): Promise<void>;
}
//# sourceMappingURL=table-cell-border-element-destination.d.ts.map