import { LayoutPoint } from '../core/layout/layout-point';
import { Offset, Point } from '@devexpress/utils/lib/geometry/point';
import { ModifierKey } from '@devexpress/utils/lib/utils/key';
import { IEventManager } from './interfaces/i-event-manager';
import { IRichEditControl } from './interfaces/i-rich-edit-core';
import { BoxVisualizerManager } from './layout-engine/visualizers/box-visualizer-manager';
import { MouseEventSource } from './mouse-handler/mouse-event-source';
import { MouseHandler } from './mouse-handler/mouse-handler/mouse-handler';
import { TouchHandler } from './mouse-handler/touch-handler/touch-handler';
export declare enum MouseButton {
    None = 0,
    Left = 1,
    Right = 2,
    Middle = 4
}
export declare class EventManager implements IEventManager {
    control: IRichEditControl;
    mouseHandler: MouseHandler;
    touchHandler: TouchHandler;
    moveLocked: boolean;
    shouldPreventContextMenuEvent: boolean;
    set mouseWheelEvent(val: boolean);
    private accumulatedText;
    private accumulatedTextInsertId;
    private accumulatedTextMaxLength;
    private lockMouseMoveTimerId;
    private onMouseUpTimerId;
    constructor(control: IRichEditControl, boxVisualizerManager: BoxVisualizerManager);
    dispose(): void;
    onShortcut(shortcutCode: number): void;
    onMouseDown(evt: RichMouseEvent): void;
    onMouseMove(evt: RichMouseEvent): void;
    onMouseUp(evt: RichMouseEvent): void;
    onTouchStart(evt: RichMouseEvent): void;
    onTouchEnd(evt: RichMouseEvent): void;
    onTouchMove(evt: RichMouseEvent): boolean;
    onDoubleTap(evt: RichMouseEvent): void;
    onGestureStart(evt: MouseEvent): void;
    onMouseDblClick(evt: RichMouseEvent): void;
    onMouseWheel(evt: RichMouseEvent): void;
    onText(text: string, isUpdated: boolean): void;
    onTextReplace(text: string, length?: number): void;
    modifyLastText(text: string, length: number): boolean;
    modifyLastInsertedSymbol(symbol: string): void;
    private updateSymbol;
    private insertFunc;
    onFocusIn(): void;
    onFocusOut(): void;
    isFocused(): boolean;
    private lockMouseMove;
}
export declare class RichMouseEvent {
    layoutPoint: LayoutPoint;
    absolutePoint: Point;
    scroll: Offset;
    modifiers: ModifierKey;
    button: MouseButton;
    middleButtonPressed: boolean;
    source: MouseEventSource;
    mouseEvent: MouseEvent;
    constructor(evt: MouseEvent, layoutPoint: LayoutPoint, source: MouseEventSource, scrollTop: number, scrollLeft: number);
    private isLeftButtonPressed;
}
//# sourceMappingURL=event-manager.d.ts.map