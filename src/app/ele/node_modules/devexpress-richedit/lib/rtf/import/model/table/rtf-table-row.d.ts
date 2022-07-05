import { Table } from '../../../../core/model/tables/main-structures/table';
import { TableRow } from '../../../../core/model/tables/main-structures/table-row';
import { RtfTableRowProperties } from './properties/table-row-properties';
import { RtfTable } from './rtf-table';
import { RtfTableCell } from './rtf-table-cell';
export declare class RtfTableRow {
    readonly cells: RtfTableCell[];
    offset: number;
    index: number;
    defineProperties: boolean;
    properties: RtfTableRowProperties;
    table: RtfTable;
    constructor(table: RtfTable);
    get right(): number;
    createTableRow(parentTable: Table): TableRow;
}
//# sourceMappingURL=rtf-table-row.d.ts.map