import { RichMouseEvent } from '../../event-manager';
import { IRichEditControl } from '../../interfaces/i-rich-edit-core';
import { BoxVisualizerManager } from '../../layout-engine/visualizers/box-visualizer-manager';
import { ManipulatorHandlerBase } from '../base/manipulator-handler-base';
import { TouchHandlerStateBase } from './touch-handler-state-base';
export declare class TouchHandler extends ManipulatorHandlerBase<TouchHandlerStateBase> {
    constructor(control: IRichEditControl, boxVisualizerManager: BoxVisualizerManager);
    onTouchStart(evt: RichMouseEvent): void;
    onDoubleTap(evt: RichMouseEvent): void;
    onTouchEnd(evt: RichMouseEvent): void;
    onTouchMove(evt: RichMouseEvent): boolean;
    onGestureStart(_evt: MouseEvent): void;
}
//# sourceMappingURL=touch-handler.d.ts.map