import { SubDocument } from '../../core/model/sub-document';
import { SelectionIntervalsInfo } from '../../core/selection/selection-intervals-info';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { ICloneable, IEquatable } from '@devexpress/utils/lib/types';
export declare class SelectionState implements ICloneable<SelectionState>, IEquatable<SelectionState> {
    intervalsInfo: SelectionIntervalsInfo;
    forwardDirection: boolean;
    endOfLine: boolean;
    keepX: number;
    pageIndex: number;
    get interval(): FixedInterval;
    get anchorPostion(): number;
    get activePostion(): number;
    get reversedAnchorPostion(): number;
    constructor(intervalsInfo: SelectionIntervalsInfo, forwardDirection: boolean, endOfLine: boolean, pageIndex: number);
    setEndOfLine(endOfLine: boolean): this;
    resetKeepX(): this;
    setKeepX(keepX: number): this;
    setForwardDirection(fd: boolean): this;
    setInterval(interval: FixedInterval): this;
    setIntervals(intervals: FixedInterval[]): this;
    setPosition(pos: number): this;
    addInterval(interval: FixedInterval): this;
    extendLastInterval(end: number): this;
    setPageIndex(pageIndex: number): this;
    setSubDocument(subDocument: SubDocument): this;
    private getNormalizedLastInterval;
    static getDefault(activeSubDocument: SubDocument): SelectionState;
    clone(): SelectionState;
    equals(obj: SelectionState): boolean;
    partiallyEquals(obj: SelectionState): boolean;
}
export declare class SelectionFloatingState {
    private state;
    private linkedIntervals;
    constructor(state: SelectionState);
    finalize(): SelectionState;
}
//# sourceMappingURL=selection-state.d.ts.map