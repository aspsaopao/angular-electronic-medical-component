import { IControlHeightProvider } from '../../core/canvas/i-control-height-provider';
import { LayoutPage } from '../../core/layout/main-structures/layout-page';
import { RenderPageVertivalInfo } from '../../core/view-settings/views-settings';
export declare class CanvasSizeInfo implements IControlHeightProvider {
    topSpacing: number;
    betweenPageSpacing: number;
    scrollXVisible: boolean;
    scrollYVisible: boolean;
    private visibleAreaSize;
    private scrollWidth;
    pageVerticalInfo: RenderPageVertivalInfo;
    constructor();
    isInitialized(): boolean;
    initialize(page: HTMLElement, canvas: HTMLDivElement): void;
    findPageIndexByOffsetY(pages: LayoutPage[], offsetY: number): number;
    getPageOffsetY(layoutPage: LayoutPage): number;
    setVisibleAreaSize(width: number, height: number): void;
    getVisibleAreaWidth(includeScrollBars: boolean): number;
    getVisibleAreaHeight(includeScrollBars: boolean): number;
    updateScrollVisibility(measurerWidth: number, measurerHeight: number): void;
}
//# sourceMappingURL=canvas-size-info.d.ts.map