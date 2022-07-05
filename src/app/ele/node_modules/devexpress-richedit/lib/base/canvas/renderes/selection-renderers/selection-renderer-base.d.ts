import { DocumentLayout } from '../../../../core/layout/document-layout';
import { LayoutPage, LayoutPageFlags } from '../../../../core/layout/main-structures/layout-page';
import { LayoutSelection } from '../../../../core/layout/selection/layout-selection';
import { LayoutSelectionInfo } from '../../../../core/layout/selection/layout-selection-info';
import { LayoutSelectionItem } from '../../../../core/layout/selection/layout-selection-items';
import { DocumentRendererPageCache } from '../common/document-renderer';
export declare abstract class SelectionRendererBase {
    layoutSelection: LayoutSelection;
    private cache;
    protected layoutPageFlag: LayoutPageFlags;
    constructor(cache: DocumentRendererPageCache[], layoutSelection: LayoutSelection);
    closeDocument(): void;
    applySelectionChanges(layout: DocumentLayout): void;
    renderAllPageSelection(layout: DocumentLayout, pageIndex: number, force: boolean): void;
    protected renderItem(item: LayoutSelectionItem, layoutPage: LayoutPage): HTMLElement;
    protected abstract getLayoutSelectionInfo(): LayoutSelectionInfo;
    protected abstract getContainer(_pageElement: Node): Node;
}
//# sourceMappingURL=selection-renderer-base.d.ts.map