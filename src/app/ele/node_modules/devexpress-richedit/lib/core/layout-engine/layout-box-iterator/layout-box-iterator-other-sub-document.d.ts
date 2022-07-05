import { DocumentLayout } from '../../layout/document-layout';
import { LayoutPosition } from '../../layout/layout-position';
import { SubDocument } from '../../model/sub-document';
import { LayoutPositionCreatorConflictFlags } from '../layout-position-creator';
import { LayoutBoxIteratorBase } from './layout-box-iterator-base';
export declare class LayoutBoxIteratorOtherSubDocument extends LayoutBoxIteratorBase {
    private pageIndex;
    constructor(subDocument: SubDocument, layout: DocumentLayout, intervalStart: number, intervalEnd: number, pageIndex: number);
    isInitialized(): boolean;
    protected getNewLayoutPosition(position: number, endRowConflictFlags: LayoutPositionCreatorConflictFlags, middleRowConflictFlags: LayoutPositionCreatorConflictFlags): LayoutPosition;
}
//# sourceMappingURL=layout-box-iterator-other-sub-document.d.ts.map