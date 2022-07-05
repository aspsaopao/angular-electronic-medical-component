import { ConstInterval } from '@devexpress/utils/lib/intervals/const';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
export interface IInterval {
    start: number;
    length: number;
}
export declare class IntervalApi implements IInterval {
    start: number;
    length: number;
    get end(): number;
    constructor(start: number, length: number);
}
export declare function convertToIntervalApi(curr: ConstInterval): IntervalApi;
export declare function convertFromIntervalApi(curr: IntervalApi): FixedInterval;
//# sourceMappingURL=interval.d.ts.map