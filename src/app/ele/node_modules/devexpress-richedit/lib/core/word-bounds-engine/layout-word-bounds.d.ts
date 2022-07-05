import { DocumentLayout } from '../layout/document-layout';
import { SubDocument } from '../model/sub-document';
import { ISelectionBase } from '../selection/selection-base';
import { LayoutWordBoundsGroupSeparator } from './layout-word-bounds-group-separator';
export declare enum WordGroupMask {
    NoOne = 0,
    Space = 1,
    LeftSingleQuote = 2,
    RightSingleQuote = 4,
    LeftDoubleQuote = 8,
    RightDoubleQuote = 16,
    DoubleQuote = 32,
    PunctuationMark = 64,
    DiffersFromAll = 128,
    Others = 256
}
export interface IWordBoundsIterator {
    startResultPosition: number;
    groupMask: WordGroupMask;
    isSet(): boolean;
    getNextSymbolGroup(): boolean;
    currSymbolStartPosition(): number;
}
export declare abstract class LayoutWordBounds {
    protected groupSeparator: LayoutWordBoundsGroupSeparator;
    protected iterator: IWordBoundsIterator;
    protected prevSymbolStartPos: number;
    constructor(groupSeparator: LayoutWordBoundsGroupSeparator);
    static getLayoutWordStartBound(layout: DocumentLayout, subDocument: SubDocument, selection: ISelectionBase, startPosition: number): number;
    static getLayoutWordEndBound(layout: DocumentLayout, subDocument: SubDocument, selection: ISelectionBase, startPosition: number, isJoinSpacesOnEndWord: boolean): number;
    getBound(iterator: IWordBoundsIterator): number;
    protected abstract getFinalPosition(byGroupDiffers: boolean): number;
}
export declare class LayoutEndWordBound extends LayoutWordBounds {
    constructor(isJoinSpacesOnEndWord: boolean);
    protected getFinalPosition(byGroupDiffers: boolean): number;
}
export declare class LayoutStartWordBound extends LayoutWordBounds {
    constructor();
    protected getFinalPosition(_byGroupDiffers: boolean): number;
}
//# sourceMappingURL=layout-word-bounds.d.ts.map