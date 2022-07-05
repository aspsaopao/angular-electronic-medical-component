import { LayoutChangeBase, LayoutChangeType, ParagraphFrameChange, RowChange, TableChange } from './layout-change-base';
export declare class ColumnChange extends LayoutChangeBase {
    rowChanges: RowChange[];
    tableChanges: TableChange[];
    paragraphFrameChanges: ParagraphFrameChange[];
    constructor(index: number, changeType?: LayoutChangeType, rowChanges?: RowChange[], tableChanges?: TableChange[], paragraphFrameChanges?: ParagraphFrameChange[]);
    summarizeChanges(change: ColumnChange): void;
    reduceChanges(): this;
}
//# sourceMappingURL=column-change.d.ts.map