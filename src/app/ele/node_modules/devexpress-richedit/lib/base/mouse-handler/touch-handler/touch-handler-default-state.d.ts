import { RichMouseEvent } from '../../event-manager';
import { TouchHandlerStateBase } from './touch-handler-state-base';
export declare class TouchHandlerDefaultState extends TouchHandlerStateBase {
    static TOUCH_RADIUS_HANDLE: number;
    onTouchStart(evt: RichMouseEvent): void;
    onTouchMove(_evt: RichMouseEvent): boolean;
    onDoubleTap(evt: RichMouseEvent): void;
    private shouldProcessResizeBoxVisualizer;
    private beginResizeBoxTouchHandler;
    private isAreaToLeftOfText;
    private isAreaToRightOfText;
    private collapseSelection;
}
//# sourceMappingURL=touch-handler-default-state.d.ts.map