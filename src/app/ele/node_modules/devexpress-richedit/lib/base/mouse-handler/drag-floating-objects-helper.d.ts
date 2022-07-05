import { RichMouseEvent } from '../event-manager';
import { IRichEditControl } from '../interfaces/i-rich-edit-core';
import { ResizeBoxVisualizer } from '../layout-engine/visualizers/resize-box-visualizer';
export declare class DragFloatingObjectsHelper {
    private control;
    private resizeBoxVisualizer;
    private startPoint;
    private startLayoutPoint;
    private startPageIndex;
    private pageIndex;
    private box;
    private boxPoint;
    private clickBoxDistance;
    constructor(control: IRichEditControl, resizeBoxVisualizer: ResizeBoxVisualizer);
    start(evt: RichMouseEvent): void;
    move(evt: RichMouseEvent): void;
    end(evt: RichMouseEvent): void;
    rollback(): void;
    private getDelta;
}
//# sourceMappingURL=drag-floating-objects-helper.d.ts.map