import { Table } from '../../../../core/model/tables/main-structures/table';
import { RtfContentExporter } from '../rtf-content-exporter';
export declare class RtfTableExporter {
    static exportTable(rtfContentExporter: RtfContentExporter, table: Table): number;
    static exportNestedTable(rtfContentExporter: RtfContentExporter, table: Table, nestingLevel: number): number;
}
//# sourceMappingURL=rtf-table-exporter.d.ts.map