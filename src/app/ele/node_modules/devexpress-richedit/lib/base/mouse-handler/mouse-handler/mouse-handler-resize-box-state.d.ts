import { RichMouseEvent } from '../../event-manager';
import { ResizeBoxHelper } from '../resize-box-helper';
import { MouseHandlerCancellableDragStateBase } from './mouse-handler-drag-content-states';
export declare class MouseHandlerResizeBoxState extends MouseHandlerCancellableDragStateBase {
    resizeBoxHelper: ResizeBoxHelper;
    start(): void;
    onMouseDown(evt: RichMouseEvent): void;
    onMouseMove(evt: RichMouseEvent): void;
    onMouseUp(evt: RichMouseEvent): void;
    setCursor(): void;
    finish(): void;
}
//# sourceMappingURL=mouse-handler-resize-box-state.d.ts.map