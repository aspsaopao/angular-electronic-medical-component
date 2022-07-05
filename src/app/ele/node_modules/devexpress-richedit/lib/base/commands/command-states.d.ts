import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { ICommandState } from './i-command';
export declare class SimpleCommandState implements ICommandState {
    enabled: boolean;
    value: any;
    visible: boolean;
    denyUpdateValue: boolean;
    items: any[];
    checked?: boolean;
    constructor(enabled: boolean, value?: any);
}
export declare class IntervalCommandState extends SimpleCommandState {
    interval: FixedInterval;
    constructor(enabled: boolean, interval: FixedInterval, value?: any);
}
export declare class IntervalCommandStateEx extends SimpleCommandState {
    intervals: FixedInterval[];
    constructor(enabled: boolean, intervals: FixedInterval[], value?: any);
}
//# sourceMappingURL=command-states.d.ts.map