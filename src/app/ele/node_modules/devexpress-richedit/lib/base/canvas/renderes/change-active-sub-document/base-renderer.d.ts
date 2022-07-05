import { LayoutPage } from '../../../../core/layout/main-structures/layout-page';
import { SubDocumentInfoBase } from '../../../../core/model/sub-document-infos';
import { RendererManager } from './renderer';
export interface IBaseRenderer {
    init(): any;
    update(newSubDocumentInfo: SubDocumentInfoBase, newPageIndex: number): any;
    updatePage(pageIndex: number, newSubDocumentInfo: SubDocumentInfoBase, newPageIndex: number): any;
}
export declare abstract class BaseRenderer implements IBaseRenderer {
    renderer: RendererManager;
    subDocumentInfo: SubDocumentInfoBase;
    pageIndex: number;
    newSubDocumentInfo: SubDocumentInfoBase;
    newPageIndex: number;
    private handledPages;
    constructor(renderer: RendererManager);
    init(): void;
    update(newSubDocumentInfo: SubDocumentInfoBase, newPageIndex: number): void;
    updatePage(pageIndex: number, newSubDocumentInfo: SubDocumentInfoBase, newPageIndex: number): void;
    private innerUpdate;
    abstract handlePageHide(pageIndex: number): boolean;
    abstract handlePageRender(pageIndex: number, force: boolean): boolean;
    protected isHeaderFooterActive(layoutPage: LayoutPage): boolean;
}
//# sourceMappingURL=base-renderer.d.ts.map