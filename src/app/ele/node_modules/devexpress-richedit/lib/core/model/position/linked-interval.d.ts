import { BoundaryInterval } from '@devexpress/utils/lib/intervals/boundary';
import { ConstInterval } from '@devexpress/utils/lib/intervals/const';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { IEquatable } from '@devexpress/utils/lib/types';
import { Position } from './position';
import { PositionManager } from './position-manager';
export declare class LinkedInterval extends ConstInterval implements IEquatable<LinkedInterval> {
    _start: Position;
    _end: Position;
    get start(): number;
    get length(): number;
    get end(): number;
    get center(): number;
    constructor(manager: PositionManager, interval: ConstInterval);
    destructor(manager: PositionManager): void;
    equals(obj: LinkedInterval): boolean;
    getFixedInterval(): FixedInterval;
    getBoundaryInterval(): BoundaryInterval;
}
//# sourceMappingURL=linked-interval.d.ts.map