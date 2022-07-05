import { RichMouseEvent } from '../../event-manager';
import { DragFloatingObjectsHelper } from '../drag-floating-objects-helper';
import { MouseHandler } from './mouse-handler';
import { MouseHandlerCancellableDragStateBase } from './mouse-handler-drag-content-states';
export declare class MouseHandlerDragFloatingObjectState extends MouseHandlerCancellableDragStateBase {
    dragFloatingObjectsHelper: DragFloatingObjectsHelper;
    constructor(handler: MouseHandler, evt: RichMouseEvent);
    onMouseMove(evt: RichMouseEvent): void;
    commitDrag(evt: RichMouseEvent): void;
    onShortcut(shortcutCode: number): void;
}
//# sourceMappingURL=mouse-handler-drag-floating-object-state.d.ts.map