import { LayoutPoint } from '../../../core/layout/layout-point';
import { RichMouseEvent } from '../../event-manager';
import { HitTestResult } from '../../layout-engine/hit-test-manager/hit-test-result';
import { MouseHandler } from './mouse-handler';
import { MouseHandlerBeginDragHelperState } from './mouse-handler-begin-drag-helper-state';
import { MouseHandlerStateBase } from './mouse-handler-state-base';
export declare class MouseHandlerBeginContentDragHelperState extends MouseHandlerBeginDragHelperState {
    constructor(lp: LayoutPoint, handler: MouseHandler, dragState: MouseHandlerStateBase);
    resetSelectionOnMouseUp: boolean;
    onMouseUp(evt: RichMouseEvent): void;
}
export declare class MouseHandlerCancellableDragStateBase extends MouseHandlerStateBase {
    onShortcut(shortcutCode: number): void;
    calculateHitTest(evt: RichMouseEvent): HitTestResult;
    onMouseMove(evt: RichMouseEvent): void;
    onMouseWheel(evt: RichMouseEvent): void;
    onMouseUp(evt: RichMouseEvent): void;
    continueDrag(_evt: RichMouseEvent): void;
    commitDrag(_evt: RichMouseEvent): void;
}
export declare class MouseHandlerDragContentState extends MouseHandlerCancellableDragStateBase {
    private allowedToDrag;
    constructor(handler: MouseHandler);
    start(): void;
    finish(): void;
    continueDrag(evt: RichMouseEvent): void;
    commitDrag(evt: RichMouseEvent): void;
}
//# sourceMappingURL=mouse-handler-drag-content-states.d.ts.map