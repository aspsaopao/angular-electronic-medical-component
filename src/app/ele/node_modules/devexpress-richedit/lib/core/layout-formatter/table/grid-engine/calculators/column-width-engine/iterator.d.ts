import { ColumnInterval } from './column-interval';
export declare class ColumnIntervalWidthIterator {
    columnsInfo: ColumnInterval[];
    intervalIndex: number;
    interval: ColumnInterval;
    constructor(columnsInfo: ColumnInterval[]);
    endOfIntervals(): boolean;
    moveNext(): void;
    advance(interval: ColumnInterval): void;
}
//# sourceMappingURL=iterator.d.ts.map