import { LayoutBoxIteratorBase } from '../../../layout-engine/layout-box-iterator/layout-box-iterator-base';
import { DocumentLayout } from '../../../layout/document-layout';
import { SubDocument } from '../../../model/sub-document';
import { ISelectionBase } from '../../../selection/selection-base';
import { IWordBoundsIterator, WordGroupMask } from '../../layout-word-bounds';
export declare abstract class LayoutWordBoundsIterator implements IWordBoundsIterator {
    protected isInitOk: boolean;
    groupMask: WordGroupMask;
    startResultPosition: number;
    protected boxIterator: LayoutBoxIteratorBase;
    protected charOffset: number;
    private isFirstCallNextSymbol;
    constructor(layout: DocumentLayout, subDocument: SubDocument, selection: ISelectionBase, startPosition: number, endPosition: number);
    isSet(): boolean;
    currSymbolStartPosition(): number;
    getNextSymbolGroup(): boolean;
    private getNextSymbol;
    protected abstract needExcessMoveBoxIterator(): boolean;
    protected abstract nextCallsSetCharOffset(): boolean;
    protected abstract setCharacterOffsetOnNextCalls(): any;
    protected abstract moveIterator(): boolean;
    private getGroupMask;
    private getTextGroupMask;
}
//# sourceMappingURL=layout-word-bounds-iterator.d.ts.map