import { LayoutPage } from '../../../layout/main-structures/layout-page';
import { LayoutPageArea } from '../../../layout/main-structures/layout-page-area';
import { PageChange } from '../changes/page-change';
export declare class PageChangesCollector {
    static collectHeaderFooterChanges(pageIndex: number, oldPageAreas: Record<number, LayoutPageArea>, newPageAreas: Record<number, LayoutPageArea>): PageChange;
    static collectPageChanges(layoutPages: LayoutPage[], newPage: LayoutPage): PageChange;
    private static getOnlyPictureObjects;
    private static collectColumnsChanges;
    private static collectListChanges;
    private static collectMapChanges;
    private static makeChange;
    private static isLayoutRowEquivalent;
}
//# sourceMappingURL=page-changes-collector.d.ts.map