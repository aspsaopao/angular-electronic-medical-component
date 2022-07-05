import { RichMouseEvent } from '../../event-manager';
import { ResizeBoxHelper } from '../resize-box-helper';
import { TouchHandlerStateBase } from './touch-handler-state-base';
export declare class TouchHandlerResizeBoxState extends TouchHandlerStateBase {
    resizeBoxHelper: ResizeBoxHelper;
    start(): void;
    onTouchStart(evt: RichMouseEvent): void;
    onTouchMove(evt: RichMouseEvent): boolean;
    onTouchEnd(evt: RichMouseEvent): void;
}
//# sourceMappingURL=touch-handler-resize-box-state.d.ts.map