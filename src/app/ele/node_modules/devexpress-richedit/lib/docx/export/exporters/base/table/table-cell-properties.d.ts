import { TableCell } from '../../../../../core/model/tables/main-structures/table-cell';
import { TableCellProperties } from '../../../../../core/model/tables/properties/table-cell-properties';
import { TableCellMargins } from '../../../../../core/model/tables/secondary-structures/table-base-structures';
import { Data } from '../../../data';
import { BaseExporter } from '../../base';
export declare class TableCellPropertiesExporter extends BaseExporter {
    static exportCellMargins(data: Data, tag: string, cellMargins: TableCellMargins): void;
    static shouldExportCellMargins(data: Data, cellMargins: TableCellMargins): boolean;
    exportTableCellProperties(cell: TableCell): void;
    exportTableCellPropertiesForStyle(props: TableCellProperties): void;
    private exportTableCellPropertiesCore;
    private exportCoreProperties;
    private exportTableCellBorders;
    private hasBorders;
    private exportTableCellBorder;
}
//# sourceMappingURL=table-cell-properties.d.ts.map