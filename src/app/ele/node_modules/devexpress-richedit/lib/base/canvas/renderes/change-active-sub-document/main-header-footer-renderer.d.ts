import { BaseRenderer } from './base-renderer';
export declare abstract class MainHeaderFooterRenderer extends BaseRenderer {
    handlePageHide(_pageIndex: number): boolean;
    protected activateElement(pageAreaElement: HTMLElement): boolean;
    protected deactivateElement(pageAreaElement: HTMLElement): void;
}
export declare class HeaderFooterRenderer extends MainHeaderFooterRenderer {
    handlePageRender(pageIndex: number, _force: boolean): boolean;
}
export declare class MainRenderer extends MainHeaderFooterRenderer {
    handlePageRender(pageIndex: number, _force: boolean): boolean;
    private applyToMainPageAreas;
    private isActive;
}
//# sourceMappingURL=main-header-footer-renderer.d.ts.map