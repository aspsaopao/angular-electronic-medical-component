import { ViewManager } from '../../canvas/renderes/view-manager';
import { IRichEditControl } from '../../interfaces/i-rich-edit-core';
import { AnchorVisualizer } from './anchor-visualizer';
import { AutoScrollVisualizer } from './auto-scroll-visualizer';
import { DragCaretVisualizer } from './drag-caret-visualizer';
import { FullTableSelectorVisualizer } from './full-table-selector-visualizer';
import { ResizeBoxVisualizer } from './resize-box-visualizer';
import { ResizeTableVisualizer } from './resize-table-visualizer';
export declare class BoxVisualizerManager {
    resizeBoxVisualizer: ResizeBoxVisualizer;
    dragCaretVisualizer: DragCaretVisualizer;
    resizeTableVisualizer: ResizeTableVisualizer;
    anchorVisualizer: AnchorVisualizer;
    autoScrollVisualizer: AutoScrollVisualizer;
    fullTableSelectorVisualizer: FullTableSelectorVisualizer;
    constructor(control: IRichEditControl);
    initListeners(viewManager: ViewManager): void;
    closeDocument(): void;
}
//# sourceMappingURL=box-visualizer-manager.d.ts.map