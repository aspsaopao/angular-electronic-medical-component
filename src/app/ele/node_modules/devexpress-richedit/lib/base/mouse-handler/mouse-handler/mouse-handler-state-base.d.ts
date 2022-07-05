import { RichMouseEvent } from '../../event-manager';
import { ManipulatorHandlerStateBase } from '../base/manipulator-handler-state-base';
import { MouseHandler } from './mouse-handler';
export declare class MouseHandlerStateBase extends ManipulatorHandlerStateBase<MouseHandler> {
    onMouseDoubleClick(_evt: RichMouseEvent): void;
    onMouseDown(_evt: RichMouseEvent): void;
    onMouseUp(_evt: RichMouseEvent): void;
    onMouseMove(_evt: RichMouseEvent): void;
    onMouseWheel(_evt: RichMouseEvent): void;
    onShortcut(_shortcutCode: number): void;
}
//# sourceMappingURL=mouse-handler-state-base.d.ts.map