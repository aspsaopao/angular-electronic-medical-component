import { Table } from '../../../core/model/tables/main-structures/table';
import { TableCellProperties } from '../../../core/model/tables/properties/table-cell-properties';
import { TableProperties } from '../../../core/model/tables/properties/table-properties';
import { TableRowProperties } from '../../../core/model/tables/properties/table-row-properties';
import { Data } from '../data';
export declare class TableImporter {
    data: Data;
    get isInsideTable(): boolean;
    constructor(data: Data);
    cancelTable(table: Table): void;
    createDefaultTableProperties(): TableProperties;
    createDefaultRowProperties(): TableRowProperties;
    createDefaultCellProperties(): TableCellProperties;
}
//# sourceMappingURL=table-importer.d.ts.map