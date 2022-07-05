import { DocumentModel } from '../../../../core/model/document-model';
import { Table } from '../../../../core/model/tables/main-structures/table';
import { TableCell } from '../../../../core/model/tables/main-structures/table-cell';
import { RtfTableProperties } from './properties/rtf-table-properties';
import { RtfTableCell } from './rtf-table-cell';
import { RtfTableRow } from './rtf-table-row';
export declare class RtfTable {
    properties: RtfTableProperties;
    readonly rows: RtfTableRow[];
    parentCell: RtfTableCell;
    indent: number;
    constructor(parentCell?: RtfTableCell);
    get nestingLevel(): number;
    protected getNestedLevel(): number;
    createTable(tblIndex: number, parentCell: TableCell, model: DocumentModel): Table;
}
//# sourceMappingURL=rtf-table.d.ts.map