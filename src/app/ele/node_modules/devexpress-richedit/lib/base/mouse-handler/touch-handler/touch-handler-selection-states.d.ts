import { LayoutPoint } from '../../../core/layout/layout-point';
import { RichMouseEvent } from '../../event-manager';
import { HitTestResult } from '../../layout-engine/hit-test-manager/hit-test-result';
import { TouchHandler } from './touch-handler';
import { TouchHandlerStateBase } from './touch-handler-state-base';
export declare class TouchHandlerSelectionStateBase extends TouchHandlerStateBase {
    onTouchEnd(evt: RichMouseEvent): void;
}
export declare class TouchHandlerChangeActiveSubDocument extends TouchHandlerStateBase {
    constructor(handler: TouchHandler, point: LayoutPoint);
    private shouldActivateMainArea;
    onTouchStart(evt: RichMouseEvent): void;
    onDoubleTap(evt: RichMouseEvent): void;
}
export declare class TouchHandlerSelectWordUnderCursorState extends TouchHandlerSelectionStateBase {
    constructor(handler: TouchHandler, evt: RichMouseEvent);
    onTouchStart(evt: RichMouseEvent): void;
    onTouchMove(evt: RichMouseEvent): boolean;
    selectWordUnderCursor(evt: RichMouseEvent): void;
}
export declare class TouchHandlerContinueSelectionStateBase extends TouchHandlerSelectionStateBase {
    constructor(handler: TouchHandler);
    onTouchMove(evt: RichMouseEvent): boolean;
    protected setTouchBarsVisibility(visible: boolean): void;
    onTouchEnd(evt: RichMouseEvent): void;
    extendSelection(_htr: HitTestResult): void;
}
export declare class TouchHandlerContinueSelectionState extends TouchHandlerContinueSelectionStateBase {
    private startPosition;
    onTouchMove(evt: RichMouseEvent): boolean;
    onTouchEnd(evt: RichMouseEvent): void;
    extendSelection(htr: HitTestResult): void;
    private getLayoutPosition;
}
export declare class TouchHandlerContinueSelectionOnOneSideState extends TouchHandlerContinueSelectionStateBase {
    private isDragLeftEdge;
    constructor(handler: TouchHandler, isDragLeftEdge?: boolean);
    extendSelection(htr: HitTestResult): void;
    extendLastSelectionOnOneSide(end: number, isDragLeftEdge: boolean): void;
    protected setTouchBarsVisibility(visible: boolean): void;
}
//# sourceMappingURL=touch-handler-selection-states.d.ts.map