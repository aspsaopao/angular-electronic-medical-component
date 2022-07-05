import { DocumentLayout } from '../layout/document-layout';
import { LayoutAnchoredObjectBox } from '../layout/main-structures/layout-boxes/layout-anchored-object-box';
import { LayoutPage } from '../layout/main-structures/layout-page';
export declare class LayoutAnchorObjectFinder {
    page: LayoutPage;
    obj: LayoutAnchoredObjectBox;
    constructor(layout: DocumentLayout, pos: number, subDocId: number, findOnlyOnPage?: number);
}
//# sourceMappingURL=layout-anchor-object-finder.d.ts.map