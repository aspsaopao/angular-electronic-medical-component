import { TableProperties } from '../../../../core/model/tables/properties/table-properties';
import { XmlReader } from '../../../zip/xml-reader';
import { TableBorderElementDestinationBase } from './table-border-element-destination-base';
export declare class TableBorderElementDestination extends TableBorderElementDestinationBase<TableProperties> {
    processElementOpen(reader: XmlReader): Promise<void>;
}
//# sourceMappingURL=table-border-element-destination.d.ts.map