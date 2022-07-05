import { RichMouseEvent } from '../../event-manager';
import { DragFloatingObjectsHelper } from '../drag-floating-objects-helper';
import { TouchHandlerStateBase } from './touch-handler-state-base';
export declare class TouchHandlerDragFloatingObjectState extends TouchHandlerStateBase {
    dragFloatingObjectsHelper: DragFloatingObjectsHelper;
    onTouchStart(evt: RichMouseEvent): void;
    onTouchMove(evt: RichMouseEvent): boolean;
    onTouchEnd(evt: RichMouseEvent): void;
}
//# sourceMappingURL=touch-handler-drag-floating-object-state.d.ts.map