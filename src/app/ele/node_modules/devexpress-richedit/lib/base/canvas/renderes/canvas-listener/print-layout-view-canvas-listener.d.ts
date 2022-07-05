import { PageChange } from '../../../../core/layout-formatter/changes/changes/page-change';
import { PrintLayoutRenderer } from '../common/print-layout-renderer';
import { ViewManager } from '../view-manager';
import { CanvasListener } from './canvas-listener';
export declare class PrintLayoutViewCanvasListener extends CanvasListener<PrintLayoutRenderer> {
    private handledPageIndexes;
    constructor(viewManager: ViewManager, renderer: PrintLayoutRenderer);
    onPagesReady(pageChanges: PageChange[]): void;
    private updateVisiblePages;
    private handleDeferredPagesOperations;
    private handlePageFlags;
    updateVisibleParts(): void;
    onCanvasScroll(): void;
}
//# sourceMappingURL=print-layout-view-canvas-listener.d.ts.map