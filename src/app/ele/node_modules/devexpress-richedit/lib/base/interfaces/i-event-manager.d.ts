import { RichMouseEvent } from '../event-manager';
export interface IEventManager {
    onMouseDown(evt: RichMouseEvent): any;
    onMouseMove(evt: RichMouseEvent): any;
    onMouseUp(evt: RichMouseEvent): any;
    onMouseDblClick(evt: RichMouseEvent): any;
    onMouseWheel(evt: RichMouseEvent): any;
    onTouchStart(evt: RichMouseEvent): any;
    onTouchEnd(evt: RichMouseEvent): any;
    onTouchMove(evt: RichMouseEvent): boolean;
    onDoubleTap(evt: RichMouseEvent): any;
    onGestureStart(evt: MouseEvent): any;
    onText(text: string, isUpdated: boolean): any;
    onTextReplace(text: string, length?: number): any;
    onShortcut(shortcutCode: number): any;
    isFocused(): boolean;
    onFocusIn(): any;
    onFocusOut(): any;
    mouseWheelEvent: boolean;
    shouldPreventContextMenuEvent: boolean;
}
//# sourceMappingURL=i-event-manager.d.ts.map