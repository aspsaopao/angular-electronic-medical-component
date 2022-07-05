import { DocumentLayout } from '../../../../core/layout/document-layout';
import { LayoutPageFlags } from '../../../../core/layout/main-structures/layout-page';
import { LayoutSelectionInfo } from '../../../../core/layout/selection/layout-selection-info';
import { SelectionRendererBase } from './selection-renderer-base';
export declare class SearchSelectionRenderer extends SelectionRendererBase {
    protected layoutPageFlag: LayoutPageFlags;
    renderAllPageSelection(layout: DocumentLayout, pageIndex: number, force: boolean): void;
    closeDocument(): void;
    protected getLayoutSelectionInfo(): LayoutSelectionInfo;
    protected getContainer(pageElement: Node): Node;
}
//# sourceMappingURL=search-selection-renderer.d.ts.map