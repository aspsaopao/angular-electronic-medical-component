import { SubDocument } from '../../../../core/model/sub-document';
import { TableCell } from '../../../../core/model/tables/main-structures/table-cell';
import { TableRow } from '../../../../core/model/tables/main-structures/table-row';
import { RtfTableCellProperties } from './properties/rtf-table-cell-properties';
import { RtfTableRow } from './rtf-table-row';
export declare class RtfTableCell {
    startPos: number;
    endPos: number;
    private static __id;
    idForParentCellMap: number;
    properties: RtfTableCellProperties;
    row: RtfTableRow;
    definedWidth: number;
    index: number;
    columnSpan: number;
    constructor(row: RtfTableRow, _right?: number);
    get isEmpty(): boolean;
    createCell(row: TableRow, subDocument: SubDocument): TableCell;
}
//# sourceMappingURL=rtf-table-cell.d.ts.map