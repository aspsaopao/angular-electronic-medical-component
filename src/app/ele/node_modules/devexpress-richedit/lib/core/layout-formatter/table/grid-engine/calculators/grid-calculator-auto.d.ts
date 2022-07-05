import { ColumnIntervalAuto } from './column-interval';
import { ColumnInterval } from './column-width-engine/column-interval';
import { GridCalculator } from './grid-calculator';
export declare class GridCalculatorAuto extends GridCalculator<ColumnIntervalAuto> {
    protected makeInterval(interval: ColumnInterval): ColumnIntervalAuto;
    protected applyCellsWidth(_intervals: ColumnInterval[]): void;
    protected autofitTail(totalWidth: number, estimatedTableWidth: number): void;
    private compressProportionallyMinWidth;
    protected calcCacheCellWidths(): void;
    private applyCellContentWidth;
    private applyCellContentWidthWithoutSpan;
    private applyPreferredWidth;
    private applyCellContentWidthWithSpan;
    private enlargeColumnsMinWidthByPreferredWidth;
    private enlargeColumnsHorizontalMargins;
    private enlargeColumnsMinWidth;
    private enlargeColumnsMaxWidth;
}
//# sourceMappingURL=grid-calculator-auto.d.ts.map