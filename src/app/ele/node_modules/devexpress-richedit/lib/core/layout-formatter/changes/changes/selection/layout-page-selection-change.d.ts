import { LayoutChangeBase, LayoutChangeType } from '../layout-change-base';
import { LayoutAreaSelectionChange } from './layout-area-selection-change';
export declare class LayoutPageSelectionChange extends LayoutChangeBase {
    areaChanges: LayoutAreaSelectionChange[];
    constructor(index: number, changeType: LayoutChangeType, areaChanges?: LayoutAreaSelectionChange[]);
    reduceChanges(): this;
}
//# sourceMappingURL=layout-page-selection-change.d.ts.map