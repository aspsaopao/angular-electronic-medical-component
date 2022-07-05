import { ICloneable, ISupportCopyFrom } from '@devexpress/utils/lib/types';
import { LayoutBorder } from '../../../model/borders/layout-border';
export declare class LayoutTableBorder implements ICloneable<LayoutTableBorder>, ISupportCopyFrom<LayoutTableBorder> {
    xPos: number;
    yPos: number;
    length: number;
    borderInfo: LayoutBorder;
    constructor(xPos: number, yPos: number, length: number, borderInfo: LayoutBorder);
    clone(): LayoutTableBorder;
    copyFrom(obj: LayoutTableBorder): void;
    canCombineVertical(border: LayoutTableBorder): boolean;
}
export declare class LayoutCursorHorizontalTableBorder extends LayoutTableBorder {
    layoutRowIndex: number;
    constructor(xPos: number, yPos: number, length: number, borderInfo: LayoutBorder, layoutRowIndex: number);
    clone(): LayoutCursorHorizontalTableBorder;
    copyFrom(obj: LayoutCursorHorizontalTableBorder): void;
    canCombine(border: LayoutCursorHorizontalTableBorder): boolean;
}
export declare class LayoutCursorVerticalTableBorder extends LayoutTableBorder {
    clone(): LayoutCursorVerticalTableBorder;
    copyFrom(obj: LayoutCursorVerticalTableBorder): void;
}
//# sourceMappingURL=layout-table-border.d.ts.map