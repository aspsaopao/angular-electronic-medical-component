import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { HistoryItemIntervalStateObject, IHistoryItemStateObject } from './history-item-state-object';
export declare class HistoryItemState<T extends IHistoryItemStateObject> {
    objects: T[];
    lastObject: T;
    constructor(...values: T[]);
    register(object: T): this;
    toJSON(withPostData?: boolean): any;
    isEmpty(): boolean;
}
export declare class HistoryItemIntervalState<T extends HistoryItemIntervalStateObject> extends HistoryItemState<T> {
    get interval(): FixedInterval;
}
//# sourceMappingURL=history-item-state.d.ts.map