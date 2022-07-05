import { Table } from '../../../../../model/tables/main-structures/table';
import { ColumnInterval } from './column-interval';
export declare class Calculator {
    static getIntervals(table: Table): ColumnInterval[];
    private static columnsInfo;
    private static mergeRowColumnIntervals;
    private static mergeIntervalsDifferentRows;
    private static mergeIntervalsDifferentRowsDifferentTypes;
    private static copyRestIntervals;
    private static processDependedIntervals;
}
//# sourceMappingURL=calculator.d.ts.map