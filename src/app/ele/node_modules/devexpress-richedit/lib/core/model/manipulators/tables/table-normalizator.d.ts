import { Table } from '../../tables/main-structures/table';
import { TableCellMergingState } from '../../tables/secondary-structures/table-base-structures';
import { TableWidthUnit } from '../../tables/secondary-structures/table-units';
export declare type TableNormalizatorRowPropertySetter<T> = (table: Table, rowIndex: number, newValue: T) => void;
export declare type TableNormalizatorCellPropertySetter<T> = (table: Table, rowIndex: number, cellIndex: number, newValue: T) => void;
export declare class TableNormalizator {
    private table;
    private tableCellGridInfos;
    private tableCellInfos;
    private setGridBefore;
    private setGridAfter;
    private setWidthBefore;
    private setWidthAfter;
    private setCellSpan;
    private setVerticalMerging;
    constructor(table: Table, setGridBefore: TableNormalizatorRowPropertySetter<number>, setGridAfter: TableNormalizatorRowPropertySetter<number>, setWidthBefore: TableNormalizatorRowPropertySetter<TableWidthUnit>, setWidthAfter: TableNormalizatorRowPropertySetter<TableWidthUnit>, setCellSpan: TableNormalizatorCellPropertySetter<number>, setVerticalMerging: TableNormalizatorCellPropertySetter<TableCellMergingState>);
    normalizeAll(): this;
    transformTableToSquare(): this;
    normalizeAllHorizontalSpans(): this;
    normalizeWidthBeforeAfter(): void;
    normalizeVerticalSpans(): void;
    private static setWidthBeforeAfter;
}
//# sourceMappingURL=table-normalizator.d.ts.map