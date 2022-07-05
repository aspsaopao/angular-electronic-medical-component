import { ColumnChange } from './column-change';
import { LayoutChangeBase, LayoutChangeType } from './layout-change-base';
export declare class PageAreaChange extends LayoutChangeBase {
    columnChanges: ColumnChange[];
    constructor(index: number, changeType?: LayoutChangeType, columnChanges?: ColumnChange[]);
    summarizeChanges(change: PageAreaChange): void;
    reduceChanges(): this;
}
//# sourceMappingURL=page-area-change.d.ts.map