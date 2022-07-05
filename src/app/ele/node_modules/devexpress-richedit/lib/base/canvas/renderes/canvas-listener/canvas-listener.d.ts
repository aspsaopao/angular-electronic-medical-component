import { PageChange } from '../../../../core/layout-formatter/changes/changes/page-change';
import { DocumentLayout } from '../../../../core/layout/document-layout';
import { DocumentRenderer } from '../common/document-renderer';
import { ViewManager } from '../view-manager';
export declare abstract class CanvasListener<T extends DocumentRenderer> {
    protected viewManager: ViewManager;
    protected get layout(): DocumentLayout;
    protected readonly renderer: T;
    constructor(viewManager: ViewManager, renderer: T);
    abstract onPagesReady(pageChanges: PageChange[]): any;
    abstract updateVisibleParts(): any;
    abstract onCanvasScroll(): any;
    closeDocument(): void;
    protected static mergeInnerPageChanges(pageChange: PageChange): void;
}
//# sourceMappingURL=canvas-listener.d.ts.map