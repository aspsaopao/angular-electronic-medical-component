import { LayoutRow } from '../../../layout/main-structures/layout-row';
export declare class RowHeightState {
    maxBoxHeight: number;
    maxAscent: number;
    maxDescent: number;
    maxPictureBoxHeight: number;
    height: number;
    baseLine: number;
    spacingBefore: number;
    constructor(maxBoxHeight: number, maxAscent: number, maxDescent: number, maxPictureBoxHeight: number);
    initFromRow(row: LayoutRow): void;
    applyToRow(row: LayoutRow): void;
    getFullRowHeight(): number;
    equalHeights(obj: RowHeightState): boolean;
}
//# sourceMappingURL=row-height-state.d.ts.map