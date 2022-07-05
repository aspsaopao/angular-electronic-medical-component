import { RichMouseEvent } from '../event-manager';
import { IRichEditControl } from '../interfaces/i-rich-edit-core';
import { ResizeBoxVisualizer } from '../layout-engine/visualizers/resize-box-visualizer';
export declare class ResizeBoxHelper {
    private control;
    private resizeBoxVisualizer;
    private startX;
    private startY;
    private startScrollTop;
    private startScrollLeft;
    private rotation;
    lockH: boolean;
    lockV: boolean;
    sideH: boolean;
    sideV: boolean;
    private startSize;
    private size;
    private positionDelta;
    private lockAspectRatio;
    constructor(control: IRichEditControl, resizeBoxVisualizer: ResizeBoxVisualizer);
    start(evt: RichMouseEvent): void;
    move(evt: RichMouseEvent): void;
    end(evt: RichMouseEvent): void;
    private getSize;
    private getPositionDelta;
}
//# sourceMappingURL=resize-box-helper.d.ts.map