import { LayoutPosition } from '../../../core/layout/layout-position';
import { RichMouseEvent } from '../../event-manager';
import { ManipulatorHandlerStateBase } from '../base/manipulator-handler-state-base';
import { TouchHandler } from './touch-handler';
export declare class TouchHandlerStateBase extends ManipulatorHandlerStateBase<TouchHandler> {
    TOUCH_SCROLL_SENSITIVITY_IN_ROWS: number;
    protected lastLayoutPosition: LayoutPosition;
    private popupMenuId;
    dispose(): void;
    onTouchStart(_evt: RichMouseEvent): void;
    onDoubleTap(_evt: RichMouseEvent): void;
    onTouchEnd(_evt: RichMouseEvent): void;
    onTouchMove(_evt: RichMouseEvent): boolean;
    captureInputFocus(_evt: RichMouseEvent): void;
    showPopupMenu(): void;
    setEditableDocumentContent(): void;
    setLastLayoutPosition(): void;
}
export declare class TouchHandlerBeginDragHelperState extends TouchHandlerStateBase {
    dragState: TouchHandlerStateBase;
    constructor(handler: TouchHandler, dragState: TouchHandlerStateBase);
    start(): void;
    finish(): void;
    onTouchMove(evt: RichMouseEvent): boolean;
    onTouchEnd(evt: RichMouseEvent): void;
}
//# sourceMappingURL=touch-handler-state-base.d.ts.map