import { BoundaryInterval } from '@devexpress/utils/lib/intervals/boundary';
import { ConstInterval } from '@devexpress/utils/lib/intervals/const';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { IEquatable } from '@devexpress/utils/lib/types';
import { LinkedInterval } from './position/linked-interval';
import { PositionManager } from './position/position-manager';
import { SubDocument } from './sub-document';
export declare class BookmarkBase extends ConstInterval implements IEquatable<BookmarkBase> {
    _interval: LinkedInterval;
    get start(): number;
    get length(): number;
    get end(): number;
    get interval(): FixedInterval;
    constructor(positionManager: PositionManager, interval: ConstInterval);
    equals(obj: BookmarkBase): boolean;
    destructor(positionManager: PositionManager): void;
}
export declare class BookmarkNameValidator {
    private static prohibitedSymbolsForName;
    static isValidName(name: string, allowHiddenBookmarks: boolean): boolean;
}
export declare class Bookmark extends BookmarkBase implements IEquatable<Bookmark> {
    name: string;
    constructor(positionManager: PositionManager, interval: ConstInterval, name: string);
    static isValidName(name: string, allowHiddenBookmarks: boolean): boolean;
    isHidden(): boolean;
    isToc(): boolean;
    equals(obj: Bookmark): boolean;
    get constBookmark(): ConstBookmark;
    clone(subDocument: SubDocument): Bookmark;
}
export declare class ConstBookmark extends ConstInterval implements IEquatable<ConstBookmark> {
    get start(): number;
    get length(): number;
    get end(): number;
    interval: BoundaryInterval;
    name: string;
    constructor(interval: ConstInterval, name: string);
    equals(obj: ConstBookmark): boolean;
    createBookmark(positionManager: PositionManager): Bookmark;
    static comparer<TA extends Bookmark | ConstBookmark, TB extends Bookmark | ConstBookmark>(a: TA, b: TB): number;
}
export declare class BookmarkAndSubDocument {
    bookmark: Bookmark;
    subDocument: SubDocument;
    constructor(bookmark: Bookmark, subDocument: SubDocument);
}
//# sourceMappingURL=bookmarks.d.ts.map