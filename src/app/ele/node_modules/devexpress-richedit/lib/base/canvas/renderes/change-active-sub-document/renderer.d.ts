import { DocumentLayout } from '../../../../core/layout/document-layout';
import { LayoutSelection } from '../../../../core/layout/selection/layout-selection';
import { StringResources } from '../../../../core/string-resources';
import { CanvasScrollInfo } from '../../canvas-scroll-info';
import { CanvasScrollManager } from '../../canvas-scroll-manager';
import { DocumentRendererPageCache } from '../common/document-renderer';
import { ViewManager } from '../view-manager';
export declare class RendererManager {
    private viewManager;
    get cache(): DocumentRendererPageCache[];
    get canvas(): HTMLDivElement;
    get layout(): DocumentLayout;
    get scroll(): CanvasScrollInfo;
    get canvasScrollManager(): CanvasScrollManager;
    private renderers;
    constructor(viewManager: ViewManager, stringResources: StringResources);
    init(): void;
    update(layoutSelection: LayoutSelection): void;
    updatePage(layoutSelection: LayoutSelection, whatPageIndexUpdate: number): void;
}
//# sourceMappingURL=renderer.d.ts.map