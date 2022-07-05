import { TableRow } from '../../../../../core/model/tables/main-structures/table-row';
import { TableRowProperties } from '../../../../../core/model/tables/properties/table-row-properties';
import { TableRowAlignment } from '../../../../../core/model/tables/secondary-structures/table-base-structures';
import { BaseExporter } from '../../base';
export declare class TableRowPropertiesExporter extends BaseExporter {
    static convertTableRowAlignment(value: TableRowAlignment): any;
    exportTableRowProperties(row: TableRow): void;
    exportPropsForStyles(props: TableRowProperties): void;
    private exportTableRowPropertiesCore;
    private exportTableRowHeight;
}
//# sourceMappingURL=table-row-properties.d.ts.map