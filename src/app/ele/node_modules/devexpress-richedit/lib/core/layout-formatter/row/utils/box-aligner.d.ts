import { LayoutBox } from '../../../layout/main-structures/layout-boxes/layout-box';
import { LayoutRow } from '../../../layout/main-structures/layout-row';
import { ParagraphAlignment } from '../../../model/paragraph/paragraph-properties';
export declare class BoxAligner {
    static findLastVisibleBoxIndex(boxes: LayoutBox[], startIndex?: number, endIndex?: number): number;
    static align(row: LayoutRow, alignment: ParagraphAlignment, endXPosition: number, fromBoxIndex: number, dontJustifyLinesEndingInSoftLineBreak: boolean): void;
    private static getBoxes;
    private static alignRightCenter;
    private static alignJustify;
    private static calculateFreeSpace;
    private static firstNonSpaceBoxIndex;
}
//# sourceMappingURL=box-aligner.d.ts.map