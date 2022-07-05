import { RichMouseEvent } from '../../event-manager';
import { HitTestResult } from '../../layout-engine/hit-test-manager/hit-test-result';
import { TouchHandler } from './touch-handler';
import { TouchHandlerStateBase } from './touch-handler-state-base';
export declare class TouchHandlerDragContentState extends TouchHandlerStateBase {
    constructor(handler: TouchHandler);
    finish(): void;
    onTouchMove(evt: RichMouseEvent): boolean;
    onTouchEnd(evt: RichMouseEvent): void;
    continueDrag(evt: RichMouseEvent): void;
    commitDrag(evt: RichMouseEvent): void;
    calculateHitTest(evt: RichMouseEvent): HitTestResult;
}
//# sourceMappingURL=touch-handler-drag-content-states.d.ts.map