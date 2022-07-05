import { ColumnIntervalFixed } from './column-interval';
import { ColumnInterval } from './column-width-engine/column-interval';
import { GridCalculator } from './grid-calculator';
export declare class GridCalculatorFixed extends GridCalculator<ColumnIntervalFixed> {
    protected makeInterval(interval: ColumnInterval): ColumnIntervalFixed;
    protected autofitTail(totalWidth: number, estimatedTableWidth: number): void;
    protected applyCellsWidth(intervals: ColumnInterval[]): void;
}
//# sourceMappingURL=grid-calculator-fixed.d.ts.map