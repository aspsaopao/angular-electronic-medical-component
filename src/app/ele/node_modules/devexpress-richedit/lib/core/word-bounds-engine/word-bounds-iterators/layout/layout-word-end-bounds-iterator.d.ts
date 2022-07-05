import { DocumentLayout } from '../../../layout/document-layout';
import { SubDocument } from '../../../model/sub-document';
import { ISelectionBase } from '../../../selection/selection-base';
import { LayoutWordBoundsIterator } from './layout-word-bounds-iterator';
export declare class LayoutWordEndBoundsIterator extends LayoutWordBoundsIterator {
    constructor(layout: DocumentLayout, subDocument: SubDocument, selection: ISelectionBase, startPosition: number);
    protected moveIterator(): boolean;
    protected nextCallsSetCharOffset(): boolean;
    protected setCharacterOffsetOnNextCalls(): void;
    protected needExcessMoveBoxIterator(): boolean;
}
//# sourceMappingURL=layout-word-end-bounds-iterator.d.ts.map