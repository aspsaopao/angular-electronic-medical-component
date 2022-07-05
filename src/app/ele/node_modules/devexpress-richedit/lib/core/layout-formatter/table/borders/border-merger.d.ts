import { HorizontalLineBordersInfo } from './horizontal-line-borders-info';
import { LayoutTableBorder } from './layout-table-border';
export declare class BorderMerger {
    static getFinalReducedVerticalBorders<T extends LayoutTableBorder>(vertBorders: T[][][]): T[];
    static getFinalReducedHorizontalBorders(horBorders: HorizontalLineBordersInfo[][]): LayoutTableBorder[];
}
//# sourceMappingURL=border-merger.d.ts.map