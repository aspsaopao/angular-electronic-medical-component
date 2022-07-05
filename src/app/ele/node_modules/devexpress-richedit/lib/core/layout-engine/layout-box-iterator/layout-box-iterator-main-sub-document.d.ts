import { DocumentLayout } from '../../layout/document-layout';
import { LayoutPosition } from '../../layout/layout-position';
import { SubDocument } from '../../model/sub-document';
import { LayoutPositionCreatorConflictFlags } from '../layout-position-creator';
import { LayoutBoxIteratorBase } from './layout-box-iterator-base';
export declare class LayoutBoxIteratorMainSubDocument extends LayoutBoxIteratorBase {
    constructor(subDocument: SubDocument, layout: DocumentLayout, intervalStart: number, intervalEnd: number);
    isInitialized(): boolean;
    protected getNewLayoutPosition(position: number, endRowConflictFlags: LayoutPositionCreatorConflictFlags, middleRowConflictFlags: LayoutPositionCreatorConflictFlags): LayoutPosition;
    protected advancePosition(): boolean;
    protected advancePositionBack(): boolean;
}
//# sourceMappingURL=layout-box-iterator-main-sub-document.d.ts.map