import { Margins } from '@devexpress/utils/lib/geometry/margins';
export declare enum ViewType {
    Simple = 0,
    PrintLayout = 1
}
export declare class RenderPageVertivalInfo {
    topPageBorderWidth: number;
    bottomPageBorderWidth: number;
    topMargin: number;
    bottomMargin: number;
    get betweenPageSpacing(): number;
    init(pageElementStyle: CSSStyleDeclaration): void;
    clone(): RenderPageVertivalInfo;
    copyFrom(obj: RenderPageVertivalInfo): void;
    equals(obj: RenderPageVertivalInfo): boolean;
}
export declare class ViewSettings {
    paddings: Margins;
    viewType: ViewType;
    fixedWidth?: number;
    pageVerticalInfo: RenderPageVertivalInfo;
    showHorizontalRuler: boolean;
    private _widthOfPage;
    get isFixedWidthMode(): boolean;
    set widthOfPage(val: number);
    get widthOfPage(): number;
    get widthOfContent(): number;
    get isSimpleView(): boolean;
    get isPrintLayoutView(): boolean;
    constructor();
    copyFrom(obj: ViewSettings): void;
}
//# sourceMappingURL=views-settings.d.ts.map