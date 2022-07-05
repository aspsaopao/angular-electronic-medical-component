import { Table } from '../../../../../core/model/tables/main-structures/table';
import { BaseExporter } from '../../base';
export declare class TableExporter extends BaseExporter {
    get tables(): Table[];
    private tableIterator;
    private tableIndexes;
    private tableInfo;
    private initTableDeferred;
    init(): void;
    checkTable(pos: number, allowInitNextTable: boolean): void;
    getTableGrid(table: Table): number[];
    private initNewTables;
    private closeTables;
    private handleNextCell;
    private startTable;
    private startRow;
    private startCell;
    private exportTableProperties;
    private exportTableGrid;
    private allowExportTableCellProperties;
}
//# sourceMappingURL=table.d.ts.map