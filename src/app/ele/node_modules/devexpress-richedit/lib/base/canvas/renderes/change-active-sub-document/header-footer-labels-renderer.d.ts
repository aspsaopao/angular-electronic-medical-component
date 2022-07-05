import { HeaderFooterStringResources } from '../../../../core/string-resources';
import { BaseRenderer } from './base-renderer';
import { RendererManager } from './renderer';
export declare class HeaderFooterLabelsRenderer extends BaseRenderer {
    private stringResources;
    private elementsMap;
    constructor(renderer: RendererManager, stringResources: HeaderFooterStringResources);
    handlePageHide(pageIndex: number): boolean;
    handlePageRender(pageIndex: number, force: boolean): boolean;
    private getDocumentModel;
    private getInfoTexts;
    private updateElementInfo;
    private static getHeaderInfoTopPosition;
    private static getFooterInfoTopPosition;
}
//# sourceMappingURL=header-footer-labels-renderer.d.ts.map