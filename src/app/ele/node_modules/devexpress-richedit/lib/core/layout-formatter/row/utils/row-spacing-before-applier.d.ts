import { CompatibilitySettings } from '../../../model/document-model';
import { LayoutRow } from '../../../layout/main-structures/layout-row';
import { Paragraph } from '../../../model/paragraph/paragraph';
import { LastRowInfo } from '../../formatter/utils/last-row-info';
export interface IRowSpacingBeforeApplier {
    apply(row: LayoutRow, rowParagraphIndex: number): any;
}
export declare class TableRowSpacingBeforeApplier implements IRowSpacingBeforeApplier {
    private lastRow;
    private paragraphs;
    private isFirstRowInCell;
    private isFirstCellInRow;
    private isFirstRowInTable;
    constructor(lastRow: LayoutRow, paragraphs: Paragraph[], isFirstRowInCell: boolean, isFirstCellInRow: boolean, isFirstRowInTable: boolean);
    apply(row: LayoutRow, rowParagraphIndex: number): void;
}
export declare class RowSpacingBeforeApplier implements IRowSpacingBeforeApplier {
    private settings;
    private lastRowInfo;
    private isFirstRowOnColumn;
    private paragraphs;
    constructor(settings: CompatibilitySettings, lastRowInfo: LastRowInfo, paragraphs: Paragraph[], isFirstRowOnColumn: boolean);
    apply(row: LayoutRow, rowParagraphIndex: number): void;
    private calculateSpacingBefore;
    private firstRowOfSection;
    private rowConsistsOfPageBreakOnly;
    private firstRowOfParagraphStartingWithPageBreak;
}
//# sourceMappingURL=row-spacing-before-applier.d.ts.map