import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
export declare class SetSelectionParamsBase {
    protected _intervals: FixedInterval[];
    endOfLine: boolean;
    keepX: number;
    correctIntervalDueToFields: boolean;
    correctIntervalDueToTables: boolean;
    useFieldUiChecks: boolean;
    setInterval(interval: FixedInterval): this;
    resetKeepX(): this;
    setPosition(position: number): this;
    setEndOfLine(endOfLine: boolean): this;
    setKeepX(keepX: number): this;
    setCorrectIntervalDueToFields(correctIntervalDueToFields: boolean): this;
    setCorrectIntervalDueToTables(correctIntervalDueToTables: boolean): this;
    setUseFieldUiChecks(useFieldUiChecks: boolean): this;
}
export declare class SetSelectionParams extends SetSelectionParamsBase {
    get interval(): FixedInterval;
}
export declare class SetSelectionParamsFull extends SetSelectionParamsBase {
    get intervals(): FixedInterval[];
}
//# sourceMappingURL=set-selection-params.d.ts.map