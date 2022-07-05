import { LayoutPoint } from '../../../core/layout/layout-point';
import { RichMouseEvent } from '../../event-manager';
import { MouseHandler } from './mouse-handler';
import { MouseHandlerStateBase } from './mouse-handler-state-base';
export declare class MouseHandlerBeginDragHelperState extends MouseHandlerStateBase {
    dragState: MouseHandlerStateBase;
    startPoint: LayoutPoint;
    constructor(lp: LayoutPoint, handler: MouseHandler, dragState: MouseHandlerStateBase);
    start(): void;
    finish(): void;
    cancelOnRightMouseUp(): boolean;
    onMouseWheel(evt: RichMouseEvent): void;
    onMouseMove(evt: RichMouseEvent): void;
    onMouseUp(evt: RichMouseEvent): void;
}
//# sourceMappingURL=mouse-handler-begin-drag-helper-state.d.ts.map