import { RichMouseEvent } from '../../event-manager';
import { MouseHandler } from './mouse-handler';
import { MouseHandlerStateBase } from './mouse-handler-state-base';
export declare class MouseHandlerParagraphSelectState extends MouseHandlerStateBase {
    static TIMEOUT: number;
    private layoutPoint;
    private startSelectedWordInterval;
    private timerId;
    constructor(handler: MouseHandler, evt: RichMouseEvent, startSelectedWordInterval: number);
    dispose(): void;
    onMouseDoubleClick(evt: RichMouseEvent): void;
    onMouseDown(evt: RichMouseEvent): void;
    onMouseUp(evt: RichMouseEvent): void;
    onMouseMove(evt: RichMouseEvent): void;
    onMouseWheel(evt: RichMouseEvent): void;
    onShortcut(shortcutCode: number): void;
    finish(): void;
}
//# sourceMappingURL=mouse-handler-paragraph-select-state.d.ts.map