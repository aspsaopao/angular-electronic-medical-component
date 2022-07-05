import { TableBorders } from '../../../../core/model/borders/table-borders';
import { TableProperties } from '../../../../core/model/tables/properties/table-properties';
import { TableCellMargins, TableLayoutType, TableLookTypes } from '../../../../core/model/tables/secondary-structures/table-base-structures';
import { TableWidthUnit } from '../../../../core/model/tables/secondary-structures/table-units';
import { RtfPropertiesExporter } from '../rtf-properties-exporter';
export declare class RtfTablePropertiesExporter extends RtfPropertiesExporter {
    protected writeRTLRow(): void;
    writeRowLeft(left: number): void;
    writeTableBorders(borders: TableBorders): void;
    writeTableWidth(preferredWidth: TableWidthUnit): void;
    writeTableLayout(value: TableLayoutType): void;
    writeTableCellMargins(cellMargins: TableCellMargins): void;
    writeTableLook(value: TableLookTypes): void;
    writeTableIndent(tableIndent: TableWidthUnit): void;
    writeBandSizes(info: TableProperties): void;
}
//# sourceMappingURL=rtf-table-properties-exporter.d.ts.map