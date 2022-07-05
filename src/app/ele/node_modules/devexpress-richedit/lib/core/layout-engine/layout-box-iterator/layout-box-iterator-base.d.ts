import { DocumentLayout } from '../../layout/document-layout';
import { LayoutPosition } from '../../layout/layout-position';
import { SubDocument } from '../../model/sub-document';
import { LayoutPositionCreatorConflictFlags } from '../layout-position-creator';
export declare abstract class LayoutBoxIteratorBase {
    protected layout: DocumentLayout;
    protected subDocument: SubDocument;
    protected lastModelPosition: number;
    position: LayoutPosition;
    intervalStart: number;
    intervalEnd: number;
    protected endRowConflictFlags: LayoutPositionCreatorConflictFlags;
    protected middleRowConflictFlags: LayoutPositionCreatorConflictFlags;
    constructor(subDocument: SubDocument, layout: DocumentLayout, intervalStart: number, intervalEnd: number);
    isInitialized(): boolean;
    resetToInterval(intervalStart: number, intervalEnd: number): boolean;
    moveNext(endRowConflictFlags: LayoutPositionCreatorConflictFlags, middleRowConflictFlags: LayoutPositionCreatorConflictFlags): boolean;
    movePrev(endRowConflictFlags: LayoutPositionCreatorConflictFlags, middleRowConflictFlags: LayoutPositionCreatorConflictFlags): boolean;
    protected abstract getNewLayoutPosition(position: number, endRowConflictFlags: LayoutPositionCreatorConflictFlags, middleRowConflictFlags: LayoutPositionCreatorConflictFlags): LayoutPosition;
    private setBoundPosition;
    protected advancePosition(): boolean;
    protected advancePositionBack(): boolean;
}
//# sourceMappingURL=layout-box-iterator-base.d.ts.map