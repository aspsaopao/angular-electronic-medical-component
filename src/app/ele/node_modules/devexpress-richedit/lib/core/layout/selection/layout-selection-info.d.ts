import { LayoutPageSelectionChange } from '../../layout-formatter/changes/changes/selection/layout-page-selection-change';
import { InnerClientProperties } from '../../rich-utils/inner-client-properties';
import { DocumentLayout } from '../document-layout';
import { LayoutPageFlags } from '../main-structures/layout-page';
import { LayoutSelectionItem } from './layout-selection-items';
import { LayoutSelectionPageInfo } from './layout-selection-page-info';
export declare class LayoutSelectionInfo {
    pageInfos: LayoutSelectionPageInfo[];
    changes: LayoutPageSelectionChange[];
    private readonly innerClientProperties;
    private readonly layoutPageFlag;
    constructor(layoutPageFlag: LayoutPageFlags, innerClientProperties: InnerClientProperties);
    changesApplied(): void;
    reset(): void;
    private needAtLeastPageIndex;
    registerItem(pageIndex: number, item: LayoutSelectionItem): void;
    collectPageChanges(layout: DocumentLayout): void;
}
//# sourceMappingURL=layout-selection-info.d.ts.map