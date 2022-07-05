import { DocumentLayout } from '../../../../core/layout/document-layout';
import { LayoutPage, LayoutPageFlags } from '../../../../core/layout/main-structures/layout-page';
import { LayoutSelection } from '../../../../core/layout/selection/layout-selection';
import { LayoutSelectionInfo } from '../../../../core/layout/selection/layout-selection-info';
import { LayoutSelectionItem } from '../../../../core/layout/selection/layout-selection-items';
import { DocumentRendererPageCache } from '../common/document-renderer';
import { SelectionRendererBase } from './selection-renderer-base';
import { TouchSelectionCircleElementsManager } from './touch-selection-circle-elements-manager';
export declare class SelectionRenderer extends SelectionRendererBase {
    private processIdChangeCursorToBlink;
    touchSelectionCircleElementsManager: TouchSelectionCircleElementsManager;
    protected layoutPageFlag: LayoutPageFlags;
    constructor(cache: DocumentRendererPageCache[], layoutSelection: LayoutSelection);
    dispose(): void;
    applySelectionChanges(layout: DocumentLayout): void;
    renderAllPageSelection(layout: DocumentLayout, pageIndex: number, force: boolean): void;
    closeDocument(): void;
    protected renderItem(item: LayoutSelectionItem, layoutPage: LayoutPage): HTMLElement;
    protected getLayoutSelectionInfo(): LayoutSelectionInfo;
    protected getContainer(pageElement: Node): Node;
    private switchCursorToBlinkState;
}
//# sourceMappingURL=selection-renderer.d.ts.map