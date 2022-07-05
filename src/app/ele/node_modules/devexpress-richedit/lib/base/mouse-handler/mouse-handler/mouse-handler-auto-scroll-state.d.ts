import { RichMouseEvent } from '../../event-manager';
import { MouseHandler } from './mouse-handler';
import { MouseHandlerStateBase } from './mouse-handler-state-base';
export declare class MouseHandlerAutoScrollState extends MouseHandlerStateBase {
    private scroller;
    private absStartPoint;
    constructor(handler: MouseHandler);
    onMouseDoubleClick(_evt: RichMouseEvent): void;
    onMouseDown(evt: RichMouseEvent): void;
    onMouseUp(_evt: RichMouseEvent): void;
    onMouseMove(evt: RichMouseEvent): void;
    onMouseWheel(_evt: RichMouseEvent): void;
    onShortcut(_shortcutCode: number): void;
    finish(): void;
}
//# sourceMappingURL=mouse-handler-auto-scroll-state.d.ts.map