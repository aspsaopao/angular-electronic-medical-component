import { DocumentLayout } from '../../../../core/layout/document-layout';
import { LayoutPage, LayoutPageFlags } from '../../../../core/layout/main-structures/layout-page';
import { LayoutSelectionInfo } from '../../../../core/layout/selection/layout-selection-info';
import { LayoutSelectionItem } from '../../../../core/layout/selection/layout-selection-items';
import { SelectionRendererBase } from './selection-renderer-base';
export declare class RangePermissionRenderer extends SelectionRendererBase {
    protected layoutPageFlag: LayoutPageFlags;
    renderAllPageSelection(layout: DocumentLayout, pageIndex: number, force: boolean): void;
    protected renderItem(item: LayoutSelectionItem, layoutPage: LayoutPage): HTMLElement;
    closeDocument(): void;
    protected getLayoutSelectionInfo(): LayoutSelectionInfo;
    protected getContainer(pageElement: Node): Node;
}
//# sourceMappingURL=range-permission-renderer.d.ts.map