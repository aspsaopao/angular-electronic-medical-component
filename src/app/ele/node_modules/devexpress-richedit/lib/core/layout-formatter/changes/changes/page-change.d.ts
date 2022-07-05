import { AnchoredPictureChange, LayoutChangeBase, LayoutChangeType } from './layout-change-base';
import { PageAreaChange } from './page-area-change';
export declare class PageChange extends LayoutChangeBase {
    mainPageAreaChanges: PageAreaChange[];
    otherPageAreaChanges: PageAreaChange[];
    anchoredPictureChanges: AnchoredPictureChange[];
    constructor(index: number, changeType?: LayoutChangeType, pageAreaChanges?: PageAreaChange[], otherPageAreaChanges?: PageAreaChange[]);
    summarizeChanges(change: PageChange): void;
    emptyOrInvalid(): boolean;
    reduceChanges(): this;
}
//# sourceMappingURL=page-change.d.ts.map