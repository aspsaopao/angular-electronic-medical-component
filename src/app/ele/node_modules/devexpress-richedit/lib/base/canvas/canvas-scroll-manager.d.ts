import { IScrollLayoutChangesListener } from '../interfaces/i-selection-layout-changes-listener';
import { ICanvasState } from '../scroll/canvas-states';
import { IRulerControl } from '../ui/ruler/ruler';
import { ViewManager } from './renderes/view-manager';
export declare class CanvasScrollManager implements IScrollLayoutChangesListener {
    private updateScrollTimeoutId;
    private waitForDblClickTimeoutId;
    private scrollMeasurer;
    private horizontalRuler;
    private viewManager;
    private get canvas();
    private get sizes();
    constructor(viewManager: ViewManager, horizontalRuler: IRulerControl);
    dispose(): void;
    get scrollTop(): number;
    set scrollTop(val: number);
    setScrollEnabled(enabled: boolean): void;
    updateScrollVisibility(): void;
    scrollToX(canvasState: ICanvasState): void;
    NotifyScrollPositionChanged(canvasState: ICanvasState): void;
    waitForDblClick(): void;
}
//# sourceMappingURL=canvas-scroll-manager.d.ts.map