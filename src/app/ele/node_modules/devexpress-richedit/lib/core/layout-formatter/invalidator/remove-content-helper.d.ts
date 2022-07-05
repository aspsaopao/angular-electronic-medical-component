import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { DocumentLayout } from '../../layout/document-layout';
import { LayoutPosition } from '../../layout/layout-position';
import { PageChange } from '../changes/changes/page-change';
export declare class RemoveContentHelper {
    static deleteInterval(layout: DocumentLayout, layoutPos: LayoutPosition, deletedInterval: FixedInterval, pageChanges: PageChange[]): void;
    private static deleteElementContent;
}
//# sourceMappingURL=remove-content-helper.d.ts.map