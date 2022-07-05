import { LayoutRow } from '../../../layout/main-structures/layout-row';
export declare class TableCellsComparer {
    private cache;
    reset(): void;
    isEquivalent(layoutRowA: LayoutRow, layoutRowB: LayoutRow): boolean;
    private isCellsEquivalent;
    private static compareCells;
    private static equalLengthAndPosition;
    private static getKey;
    private static rowsEqualIndex;
}
//# sourceMappingURL=table-cells-comparer.d.ts.map