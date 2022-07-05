import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { PositionManager } from '../../position/position-manager';
import { SubDocument } from '../../sub-document';
import { TableProperties } from '../properties/table-properties';
import { TableRowProperties } from '../properties/table-row-properties';
import { ConditionalTableStyleFormatting } from '../secondary-structures/table-base-structures';
import { TableHeightUnit, TableWidthUnit } from '../secondary-structures/table-units';
import { Table } from './table';
import { TableCell } from './table-cell';
export declare class TableRow {
    parentTable: Table;
    cells: TableCell[];
    widthBefore: TableWidthUnit;
    widthAfter: TableWidthUnit;
    gridBefore: number;
    gridAfter: number;
    properties: TableRowProperties;
    height: TableHeightUnit;
    tablePropertiesException: TableProperties;
    get logicColumnCount(): number;
    conditionalFormatting: ConditionalTableStyleFormatting;
    constructor(parentTable: Table, properties: TableRowProperties);
    get isLastRowInTable(): boolean;
    destructor(positionManager: PositionManager): void;
    getStartPosition(): number;
    getEndPosition(): number;
    get interval(): FixedInterval;
    getCellColumnIndex(cellIndex: number): number;
    getTotalCellsInRowConsiderGrid(): number;
    clone(subDocument: SubDocument, parentTable: Table): TableRow;
}
//# sourceMappingURL=table-row.d.ts.map