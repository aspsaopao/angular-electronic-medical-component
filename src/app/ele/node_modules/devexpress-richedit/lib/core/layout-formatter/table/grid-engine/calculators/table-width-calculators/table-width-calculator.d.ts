import { MinMaxNumber } from '@devexpress/utils/lib/class/min-max';
import { SubDocument } from '../../../../../model/sub-document';
import { Table } from '../../../../../model/tables/main-structures/table';
import { BoxIterator } from '../../../../box/box-iterator';
import { TablePropertiesCache } from '../table-properties-cache';
export declare class TableWidthCalculator {
    private map;
    private table;
    private containsCellsMergedByHorizontal;
    constructor(subDocument: SubDocument, boxIterator: BoxIterator, cache: Record<number, TablePropertiesCache>, table: Table, avaliableSpacing: number);
    private register;
    tableWidth(): MinMaxNumber;
}
//# sourceMappingURL=table-width-calculator.d.ts.map