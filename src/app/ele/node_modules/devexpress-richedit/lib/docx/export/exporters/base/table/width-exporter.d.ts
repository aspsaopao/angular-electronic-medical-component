import { TableWidthUnit, TableWidthUnitType } from '../../../../../core/model/tables/secondary-structures/table-units';
import { BaseExporter } from '../../base';
export declare class TableWidthExporter extends BaseExporter {
    exportWidthUnitValue(tag: string, widthUnit: TableWidthUnit): void;
    forbidExportWidthUnit(widthUnit: TableWidthUnit): boolean;
    writeTableUnit(tag: string, value: number, type: TableWidthUnitType): void;
}
//# sourceMappingURL=width-exporter.d.ts.map