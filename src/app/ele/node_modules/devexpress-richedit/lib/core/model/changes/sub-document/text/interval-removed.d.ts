import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { SubDocumentChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class IntervalRemovedSubDocumentChange implements SubDocumentChangeBase {
    subDocumentId: number;
    interval: FixedInterval;
    removedText: string;
    readonly type = ModelChangeType.IntervalRemoved;
    constructor(subDocumentId: number, interval: FixedInterval, removedText: string);
}
//# sourceMappingURL=interval-removed.d.ts.map