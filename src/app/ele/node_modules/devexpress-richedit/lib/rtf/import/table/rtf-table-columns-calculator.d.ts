import { RtfTable } from '../model/table/rtf-table';
import { RtfTableRow } from '../model/table/rtf-table-row';
import { RtfTableGrid } from './table-grid';
export declare class RtfTableColumnsCalculator {
    calculate(table: RtfTable, tableIndent: number): RtfTableGrid;
    merge(source: number[], destination: number[]): RtfTableGrid;
    getRowColumns(row: RtfTableRow): RtfTableGrid;
}
//# sourceMappingURL=rtf-table-columns-calculator.d.ts.map