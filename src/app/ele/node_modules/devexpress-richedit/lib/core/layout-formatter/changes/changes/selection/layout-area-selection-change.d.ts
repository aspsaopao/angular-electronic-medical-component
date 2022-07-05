import { LayoutSelectionItem } from '../../../../layout/selection/layout-selection-items';
import { LayoutChangeBase, LayoutChangeType } from '../layout-change-base';
export declare class LayoutAreaSelectionChange extends LayoutChangeBase {
    selection: LayoutSelectionItem;
    constructor(index: number, changeType: LayoutChangeType, selection: LayoutSelectionItem);
    reduceChanges(): this;
}
//# sourceMappingURL=layout-area-selection-change.d.ts.map