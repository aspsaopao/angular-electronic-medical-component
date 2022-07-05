import { LayoutPosition } from '../../core/layout/layout-position';
import { GetVertivalOffset, RelativePosition } from './model-states';
export interface ICanvasState {
    lp: LayoutPosition;
    getVerticalOffset: GetVertivalOffset;
    relativePosition: RelativePosition;
}
export declare class CanvasState implements ICanvasState {
    lp: LayoutPosition;
    getVerticalOffset: GetVertivalOffset;
    relativePosition: RelativePosition;
    constructor(lp: LayoutPosition, relativePosition: RelativePosition, getVerticalOffset: GetVertivalOffset);
}
//# sourceMappingURL=canvas-states.d.ts.map