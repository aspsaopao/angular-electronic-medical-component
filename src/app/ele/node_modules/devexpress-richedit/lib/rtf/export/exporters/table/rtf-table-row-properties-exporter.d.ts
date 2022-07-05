import { ShadingInfo } from '../../../../core/model/shadings/shading-info';
import { TableRowAlignment } from '../../../../core/model/tables/secondary-structures/table-base-structures';
import { TableHeightUnit, TableWidthUnit } from '../../../../core/model/tables/secondary-structures/table-units';
import { RtfPropertiesExporter } from '../rtf-properties-exporter';
export declare class RtfTableRowPropertiesExporter extends RtfPropertiesExporter {
    writeLastRowMark(): void;
    writeHalfSpaceBetweenCells(val: number): void;
    writeRowAlignment(value: TableRowAlignment): void;
    writeRowHeader(header: boolean): void;
    writeRowCantSplit(cantSplit: boolean): void;
    writeRowHeight(height: TableHeightUnit): void;
    writeWidthBefore(widthBefore: TableWidthUnit): void;
    writeWidthAfter(widthAfter: TableWidthUnit): void;
    writeRowCellSpacing(cellSpacing: TableWidthUnit): void;
    writeRowShading(shadingInfo: ShadingInfo): void;
}
//# sourceMappingURL=rtf-table-row-properties-exporter.d.ts.map