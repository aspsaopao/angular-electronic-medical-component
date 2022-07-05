import { RichMouseEvent } from '../event-manager';
import { IRichEditControl } from '../interfaces/i-rich-edit-core';
import { ResizeBoxVisualizer } from '../layout-engine/visualizers/resize-box-visualizer';
export declare class RotateBoxHelper {
    private control;
    private resizeBoxVisualizer;
    private centerPoint;
    constructor(control: IRichEditControl, resizeBoxVisualizer: ResizeBoxVisualizer);
    start(evt: RichMouseEvent): void;
    move(evt: RichMouseEvent): void;
    end(evt: RichMouseEvent): void;
    private getRotation;
}
//# sourceMappingURL=rotate-box-helper.d.ts.map