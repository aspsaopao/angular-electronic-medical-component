import { Table } from '../../../../../core/model/tables/main-structures/table';
import { TableRow } from '../../../../../core/model/tables/main-structures/table-row';
import { RtfContentExporter } from '../../rtf-content-exporter';
import { RtfTableExporterStateBase } from './rtf-table-exporter-state-base';
export declare class RtfNestedTableExporterState extends RtfTableExporterStateBase {
    constructor(rtfExporter: RtfContentExporter, table: Table, nestingLevel: number);
    export(): void;
    protected writeParagraphEndMark(): void;
    protected exportRow(row: TableRow, rowIndex: number): void;
    writeNoNestedTableGroup(): void;
}
//# sourceMappingURL=rtf-nested-table-exporter-state.d.ts.map