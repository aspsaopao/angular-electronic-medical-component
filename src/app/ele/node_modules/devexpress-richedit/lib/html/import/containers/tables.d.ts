import { TableCellProperties } from '../../../core/model/tables/properties/table-cell-properties';
import { TableProperties } from '../../../core/model/tables/properties/table-properties';
import { TableRowProperties } from '../../../core/model/tables/properties/table-row-properties';
import { TableWidthUnit } from '../../../core/model/tables/secondary-structures/table-units';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { ICloneable } from '@devexpress/utils/lib/types';
export declare class TableInfo {
    width: TableWidthUnit;
    properties: TableProperties;
    rows: ImportedTableRowInfo[];
    constructor(width: TableWidthUnit, properties: TableProperties, rows: ImportedTableRowInfo[]);
    get interval(): FixedInterval;
    private normalize;
}
export declare class ImportedTableRowInfo {
    gridAfter: number;
    gridBefore: number;
    widthAfter: TableWidthUnit;
    widthBefore: TableWidthUnit;
    properties: TableRowProperties;
    cells: ImportedTableCellInfo[];
    constructor(gridBefore: number, gridAfter: number, widthBefore: TableWidthUnit, widthAfter: TableWidthUnit, properties: TableRowProperties, cells: ImportedTableCellInfo[]);
    get countLogicColumns(): number;
    getCellByColumnSpan(colSpan: number): ImportedTableCellInfo;
}
export declare class ImportedTableCellInfo implements ICloneable<ImportedTableCellInfo> {
    preferredWidth: TableWidthUnit;
    startPosition: number;
    endPosition: number;
    columnSpan: number;
    rowSpan: number;
    properties: TableCellProperties;
    firstWhenVerticallyMerged: boolean;
    constructor(preferredWidth: TableWidthUnit, startPosition: number, endPosition: number, columnSpan: number, rowSpan: number, properties: TableCellProperties, firstWhenVerticallyMerged: boolean);
    clone(): ImportedTableCellInfo;
}
//# sourceMappingURL=tables.d.ts.map