import { LayoutRow } from '../../../layout/main-structures/layout-row';
import { Paragraph } from '../../../model/paragraph/paragraph';
import { RowFormatter } from '../../row/formatter';
export declare class LastRowInfo {
    private _row;
    private _startPosition;
    private _paragraphIndex;
    private isParIndexSet;
    private paragraphs;
    constructor(paragraphs: Paragraph[]);
    reset(rowFormatter: RowFormatter): void;
    recalculateParagraphIndex(now: boolean): void;
    setRowInfo(row: LayoutRow, columnFullOffset: number, isNowRecalcParIndex: boolean): void;
    setFullRowInfo(row: LayoutRow, rowStartPos: number, parIndex: number): void;
    setFullRowInfoAndCalculateParagraph(row: LayoutRow, rowStartPos: number, calcImmediately: boolean): void;
    get row(): LayoutRow;
    get startPosition(): number;
    get paragraphIndex(): number;
    private calculateParagraphIndex;
    isNextRowFirstInParagraph(): boolean;
}
//# sourceMappingURL=last-row-info.d.ts.map