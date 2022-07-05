import { RichMouseEvent } from '../../event-manager';
import { RotateBoxHelper } from '../rotate-box-helper';
import { MouseHandlerCancellableDragStateBase } from './mouse-handler-drag-content-states';
export declare class MouseHandlerRotateBoxState extends MouseHandlerCancellableDragStateBase {
    rotateBoxHelper: RotateBoxHelper;
    onMouseDown(evt: RichMouseEvent): void;
    onMouseMove(evt: RichMouseEvent): void;
    onMouseUp(evt: RichMouseEvent): void;
}
//# sourceMappingURL=mouse-handler-rotate-box-state.d.ts.map