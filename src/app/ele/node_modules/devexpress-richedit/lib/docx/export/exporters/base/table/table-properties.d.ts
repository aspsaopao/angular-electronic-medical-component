import { BorderInfo } from '../../../../../core/model/borders/border-info';
import { Table } from '../../../../../core/model/tables/main-structures/table';
import { TableProperties } from '../../../../../core/model/tables/properties/table-properties';
import { Data } from '../../../data';
import { BaseExporter } from '../../base';
export declare class TablePropertiesExporter extends BaseExporter {
    static exportTableBorderCore(data: Data, border: BorderInfo, exportAutoColor: boolean): void;
    exportTablePropertiesCore(table: Table, exportTableLayout: boolean): void;
    exportTablePropertiesForStyle(props: TableProperties): void;
    exportTablePropertiesException(props: TableProperties): void;
    private exportCoreProps;
    private shouldExportTblPropsException;
    private exportCellMargins;
    private exportCellMargin;
    private exportTableBorders;
    private shouldExportTableBorders;
    private exportTableBorder;
}
//# sourceMappingURL=table-properties.d.ts.map