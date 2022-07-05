import { Flag } from '@devexpress/utils/lib/class/flag';
import { LayoutAnchoredObjectBox } from '../../layout/main-structures/layout-boxes/layout-anchored-object-box';
import { LayoutRow } from '../../layout/main-structures/layout-row';
import { RowFormatter } from './formatter';
export declare enum RowFormatterResultFlag {
    None = 0,
    NotEnoughChunks = 1
}
export declare enum BoxBracketsType {
    None = 0,
    Open = 1,
    Close = 2
}
export declare class RowFormatterResult {
    private rowFormatter;
    private rowBoxIndexStart;
    sectionIndex: number;
    paragraphIndex: number;
    newAnchoredObjects: LayoutAnchoredObjectBox[];
    flags: Flag;
    row: LayoutRow;
    get rowStartPos(): number;
    constructor(rowFormatter: RowFormatter, minY: number);
    startRowFormatting(deleteAnchoredObjects: boolean): void;
    finishLogicalRow(currLogicRowEndPos: number): void;
    private deleteSomeAnchorObjects;
    finishRow(): void;
    private onlyInlinePictureBox;
    private addBracketBox;
    private addBrackets;
    private getBracketBox;
    private getBracketXPosition;
}
//# sourceMappingURL=result.d.ts.map