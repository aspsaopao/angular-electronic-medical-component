import { MinMaxNumber } from '@devexpress/utils/lib/class/min-max';
import { SubDocument } from '../../../../../model/sub-document';
import { TablePosition } from '../../../../../model/tables/main-structures/table';
import { BoxIterator } from '../../../../box/box-iterator';
import { Grid } from '../../grid';
import { TablePropertiesCache } from '../table-properties-cache';
export declare class TableCellWidthCalculator {
    private pos;
    private percentBaseWidth;
    private cache;
    private grid;
    subDocument: SubDocument;
    boxIterator: BoxIterator;
    constructor(subDocument: SubDocument, boxIterator: BoxIterator, grid: Grid, cache: Record<number, TablePropertiesCache>, pos: TablePosition, percentBaseWidth: number);
    cellWidth(): MinMaxNumber;
    private getTableWidth;
    private getInnerTables;
    private cellWidthCore;
}
//# sourceMappingURL=table-cell-width-calculator.d.ts.map