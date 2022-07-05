import { RtfTableCellProperties } from '../model/table/properties/rtf-table-cell-properties';
import { RtfTableProperties } from '../model/table/properties/rtf-table-properties';
import { RtfTableRowProperties } from '../model/table/properties/table-row-properties';
import { RtfTable } from '../model/table/rtf-table';
import { RtfTableReader } from './table-reader';
export declare class RtfTableState {
    table: RtfTable;
    tableProperties: RtfTableProperties;
    rowProperties: RtfTableRowProperties;
    cellPropertiesCollection: RtfTableCellProperties[];
    constructor(table: RtfTable, reader: RtfTableReader);
}
//# sourceMappingURL=rtf-table-state.d.ts.map