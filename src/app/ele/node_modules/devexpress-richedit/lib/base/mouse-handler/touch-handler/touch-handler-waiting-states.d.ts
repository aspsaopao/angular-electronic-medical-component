import { RichMouseEvent } from '../../event-manager';
import { HitTestResult } from '../../layout-engine/hit-test-manager/hit-test-result';
import { TouchHandler } from './touch-handler';
import { TouchHandlerStateBase } from './touch-handler-state-base';
export declare class TouchHandlerWaitingStateBase extends TouchHandlerStateBase {
    private timerID;
    action: () => void;
    constructor(handler: TouchHandler, interval: number, action: () => void);
    dispose(): void;
    onTouchEnd(_evt: RichMouseEvent): void;
    onTouchMove(_evt: RichMouseEvent): boolean;
    finish(): void;
    protected handleTap(evt: RichMouseEvent): void;
    protected getLayoutPosition(htr: HitTestResult): number;
    protected shouldChangeSelection(_position: number): boolean;
    protected shouldSelectPicture(htr: HitTestResult): boolean;
    protected selectImage(htr: HitTestResult): void;
    protected beginDragExistingSelection(): void;
}
export declare class TouchHandlerBeginTapProcessingState extends TouchHandlerWaitingStateBase {
    constructor(handler: TouchHandler, evt: RichMouseEvent);
    onTouchStart(evt: RichMouseEvent): void;
    onTouchEnd(evt: RichMouseEvent): void;
}
export declare class TouchHandlerBeginWaitForLongTapState extends TouchHandlerWaitingStateBase {
    constructor(handler: TouchHandler, evt: RichMouseEvent);
    protected shouldChangeSelection(position: number): boolean;
}
//# sourceMappingURL=touch-handler-waiting-states.d.ts.map