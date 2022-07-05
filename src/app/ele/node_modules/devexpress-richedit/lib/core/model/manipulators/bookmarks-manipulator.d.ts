import { ConstInterval } from '@devexpress/utils/lib/intervals/const';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { Bookmark, BookmarkAndSubDocument, ConstBookmark } from '../bookmarks';
import { SubDocument } from '../sub-document';
import { BaseManipulator } from './base-manipulator';
export declare class BookmarksManipulator extends BaseManipulator {
    createBookmark(subDocument: SubDocument, bkmTemplate: ConstBookmark, needSort: boolean): void;
    deleteBookmark(subDocument: SubDocument, bkmTemplate: ConstBookmark, bookmarkIndex?: number): void;
    static findBookmark(subDocuments: Record<number, SubDocument>, name: string): BookmarkAndSubDocument;
    static copyBookmarksFromSubDocumentTo(fromSubDocument: SubDocument, toSubDocument: SubDocument, fromIntervals: FixedInterval[]): void;
    deleteBookmarks(subDocument: SubDocument, interval: FixedInterval): ConstBookmark[];
    insertBookmarksFromSubDocument(fromSubDocument: SubDocument, toSubDocument: SubDocument, fromInterval: ConstInterval, modelsConstOffset: number): void;
    static findBookmarkStartIndex(_pos: number, _bookmarks: Bookmark[]): number;
}
//# sourceMappingURL=bookmarks-manipulator.d.ts.map