import { LayoutPage } from '../../core/layout/main-structures/layout-page';
import { BoundaryInterval } from '@devexpress/utils/lib/intervals/boundary';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { IInternalApi } from '../internal-api';
import { CanvasSizeInfo } from './canvas-size-info';
export declare class CanvasScrollInfo {
    protected static VISIBLE_PAGES_RANGE: number;
    protected static VISIBLE_PAGES_RANGE_TOUCH: number;
    protected static VISIBLE_AREA_HEIGHT_MULTIPLIER: number;
    protected canvas: HTMLDivElement;
    protected sizes: CanvasSizeInfo;
    protected renderPagesOffset: number;
    lastScrollTop: number;
    lastScrollLeft: number;
    startVisiblePageIndex: number;
    endVisiblePageIndex: number;
    readonly internalApi: IInternalApi;
    constructor(canvas: HTMLDivElement, sizes: CanvasSizeInfo, internalApi: IInternalApi);
    init(canvas: HTMLDivElement, sizes: CanvasSizeInfo): void;
    getStartRenderPageIndex(): number;
    getEndRenderPageIndex(): number;
    renderPageIndexInterval(): FixedInterval;
    updatePageIndexesInfo(pages: LayoutPage[]): void;
    getVisibleInterval(): BoundaryInterval;
    private getScrollTop;
    private getVisibleHeight;
}
//# sourceMappingURL=canvas-scroll-info.d.ts.map